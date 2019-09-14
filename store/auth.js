import { tokenExpiry, userRoles } from '~/config'
export const state = () => ({
    user: null,
    guest: false, // Only used to enter inside /checkout
    roles: userRoles || []
})

// getters
export const getters = {
    hasRole: state => (role) => {
        return state.user ? state.roles.indexOf(state.user.role) >= state.roles.indexOf(role) : false;
    }
}

// mutations
export const mutations = {
    setGuest(state, data) {
        state.guest = data
    },
    setUser(state, data) {
        state.user = data
    },
    clearUser(state) {
        state.user = null
    },
    setZip(state, zipcode) {
        state.zipcode = zipcode
        localStorage.setItem('zipcode', zipcode)
        Cookie.set("zipcode", zipcode)
    }
}

export const actions = {
    async fetch({ commit }) {
        try {
            const res = await this.$axios.$get('/users/me')
            commit('setUser', res)
            return res
        } catch (err) {
            this.$axios.setToken(false)
            commit('clearUser')
            throw err
        }
    },
    async socialLogin({ commit }, token) {
        try {
            if (token) {
                this.$axios.setToken(token, 'Bearer')
                const user = await this.$axios.$get('users/me')
                commit('setUser', user)
                this.$cookies.set('Authorization', token, { path: '/', maxAge: tokenExpiry })
                return user
            }
        } catch (err) {
            commit('setErr', err, { root: true })
        }
    },
    async login({ commit }, payload) {
        try {
            const data = await this.$axios.$post('auth/local', payload)
            if (data) {
                this.$axios.setToken(data.token, 'Bearer')
                commit('setUser', data.user)
                this.$cookies.set('Authorization', data.token, { path: '/', maxAge: tokenExpiry })
                commit('cart/setCart', data.cart, { root: true })
                return data
            }
        } catch (err) {
            commit('setErr', err, { root: true })
        }
    },
    async signup({ commit }, payload) {
        try {
            let data = await this.$axios.$post('users', payload)
            if (data) {
                commit('setUser', data.user)
                this.$axios.setToken(data.token, 'Bearer')
                this.$cookies.set('Authorization', data.token, { path: '/', maxAge: tokenExpiry })
                return data
            }
        } catch (err) {
            commit('setErr', err, { root: true })
        }
    },
    async forgotPassword({ commit }, payload) {
        try {
            return await this.$axios.$post('/users/forgot', payload)
        } catch (err) {
            commit('setErr', err, { root: true })
        }
    },
    async changePassword({ commit, rootState }, payload) {
        if (rootState.settings.demo) {
            commit('setErr', 'Demo mode: Unable to change password', { root: true })
            return
        }
        try {
            const data = await this.$axios.$put('/users/password', payload)
            commit('info', data.message, { root: true })
            // router.push('/my') // Push does not work from here. It stay at the same page without natigating. Rather it should be done from callee page
            return data
        } catch (err) {
            commit('setErr', err, { root: true })
        }
    },
    async resetPassword({ commit }, payload) {
        try {
            const data = await this.$axios.$post('/users/reset/' + payload.id, payload)
            if (data) {
                commit('info', data, { root: true })
                // router.push('/')
            }
            return data
        } catch (err) {
            commit('setErr', err, { root: true })
        }
    },
    async updateProfile({ commit, rootState }, { firstName, lastName, state, city, zip, phone, avatar, gender, dob, language }) {
        if (rootState.settings.demo) {
            commit('info', 'Demo mode: Unable to update profile info', { root: true })
            return
        }
        try {
            const data = await this.$axios.$put('/users/profile', { firstName, lastName, state, city, zip, phone, avatar, gender, dob, language })
            if (data) {
                commit('setUser', { firstName: data.firstName, lastName: data.lastName, avatar: data.avatar, dob: data.dob, gender: data.gender, language: data.language, state: data.state, city: data.city, zip: data.zip, phone: data.phone })
                commit('info', 'Profile updated.', { root: true })
                return data
            }
        } catch (err) {
            commit('setErr', err, { root: true })
        }
    },
    async  logout({ commit }) {
        commit('clearUser') // Removes user from Store
        this.$cookies.remove('Authorization')
        this.$axios.setToken(null)
        // const data = await this.$axios.post('auth/local/logout')
        // commit('cart/setCart', data, { root: true })
    }
}

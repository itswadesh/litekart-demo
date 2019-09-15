import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export const state = () => ({
  categories: [],
  settings: {},
  loading: false,
  error: {},
  isError: null // Only required to inform App.vue that an error is there hence initiate the snackbar
})
export const getters = {
  loading(state) {
    return state.loading
  }
}
export const mutations = {
  categories(state, payload) {
    state.categories = payload
  },
  settings(state, payload) {
    state.settings = payload
  },
  busy(state, payload) {
    state.loading = payload
  },
  success(state, msg) {
    this.$toast.success(msg).goAway(2000);
  },
  warning(state, msg) {
    this.$toast.warning(msg).goAway(5000);
  },
  info(state, msg) {
    this.$toast.info(msg).goAway(5000);
  },
  clearError(state) {
    state.error = {}
  },
  setGuest(state, guestId) {
    state.guestId = guestId
  },
  setErr(state, err) {
    if (err && err.response && err.response.data) {
      err = err.response.data;
    } else if (err && err.response) {
      err = err.response;
    }
    if (this.$toast) // On server it will be undefined. Hence required
      this.$toast.error(err).goAway(5000);
  }
}
export const actions = {
  async nuxtServerInit({ state, commit, dispatch }, { req }) {
    commit('setGuest', this.$cookies.get('guest')) // Required only at server
    // Categories
    try {
      let categories = await this.$axios.$get('categories/megamenu')
      commit('categories', categories.data)
    } catch (err) {
      commit('setErr', err)
    }
    // Settings
    try {
      let settings = await this.$axios.$get('settings')
      commit('settings', settings)
    } catch (err) {
      commit('setErr', err)
    }
    // Authorization
    let auth = this.$cookies.get('Authorization')
    if (auth) {
      this.$axios.setToken(auth, 'Bearer')
      try {
        await dispatch('auth/fetch')
      }
      catch (error) {
        this.$axios.setToken(null)
      }
    } else {
      this.$axios.setToken(null)
    }
    try {
      await dispatch('cart/fetch')
    } catch (e) { }
  },
  async nuxtClientInit({ commit, dispatch }, context) {
    // Settings
    try {
      let settings = await this.$axios.$get('settings')
      commit('settings', settings)
    } catch (e) {
      commit('settings', {})
      commit('setErr', e)
    }
    // Authorization
    let auth = this.$cookies.get('Authorization')
    if (auth) {
      this.$axios.setToken(auth, 'Bearer')
      try {
        await dispatch('auth/fetch')
      }
      catch (error) {
        this.$axios.setToken(null)
      }
    } else {
      this.$axios.setToken(null)
    }
  }
}
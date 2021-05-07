<template>
  <div class="w-full bg-white shadow">
    <div class="flex items-center justify-center p-5 text-xl font-bold text-center">
      <div class="mx-auto text-2xl font-bold">
       <div class="flex flex-row md:hidden">
          <i class="mt-0.5 mr-2 fa fa-arrow-left"
            @click="$router.push('/my/')"
            aria-hidden="true"></i>
          <div class=""> Profile details </div>
       </div>
       <div class="hidden text-center md:flex">Profile details </div>
      </div>
    </div>
    <div class="px-0 lg:px-10">
      <div class="w-full px-8 mb-5 text-sm text-center">
        <!-- Just 2 step(s) to go and your profile's complete -->
        <div class="w-full h-1 text-xs leading-none text-center text-white bg-green-500 rounded-lg"
        ></div>
      </div>
    </div>

    <div class="w-full">
      <ul class="w-full">
        <div class="px-0 lg:px-10 ">
          <li class="flex flex-wrap px-8 mb-5">
            <div class="w-1/12">
              <img src="/name.png" class="w-5" alt="" />
            </div>
            <div class="flex w-10/12">
              <Textbox
                v-model="profile.firstName"
                label="First Name"
                class="flex-1 mr-4 "
              />
              <Textbox
                v-model="profile.lastName"
                label="Last Name"
                class="flex-1"
              />
            </div>
            <!-- <div class="w-1/12">
                <i
                  class="fa fa-angle-right"
                  aria-hidden="true"
                ></i>
              </div> -->
          </li>
        </div>

        <div class="px-0 lg:px-10 ">
          <li class="flex flex-wrap px-8 mb-5 ">
            <div class="w-1/12 text-xl">
              <i class="fa fa-mobile" aria-hidden="true"></i>
            </div>
            <div class="w-10/12">
              <Textbox v-model="profile.phone" label="Phone" />
            </div>
            <!-- <div class="w-1/12">
                <i
                  class="fa fa-angle-right"
                  aria-hidden="true"
                ></i>
              </div> -->
          </li>
        </div>

        <div class="px-0 lg:px-10 ">
          <li class="flex flex-wrap px-8 mb-5 ">
            <div class="w-1/12">
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
            </div>
            <div class="w-10/12">
              <Textbox v-model="profile.email" label="Email" />
            </div>
            <!-- <div class="w-1/12">
                <i
                  class="fa fa-angle-right"
                  aria-hidden="true"
                ></i>
              </div> -->
          </li>
        </div>

        <div class="px-0 lg:px-10 ">
          <nuxt-link to="/my/password">
            <li class="flex flex-wrap px-8 py-5 mb-5 ">
              <div class="w-1/12">
                <i class="fa fa-key" aria-hidden="true"></i>
              </div>
              <div class="w-10/12">Password</div>
              <div class="w-1/12">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </div>
            </li>
          </nuxt-link>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Textbox from '~/components/ui/Textbox'

export default {
  fetch({ store, redirect }) {
    if (!(store.state.auth || {}).user)
      return redirect('/account/login?return=my/profile')
  },
  async asyncData({ store }) {
    let profile = {}
    let userDetails = await store.dispatch('auth/fetch')
    profile = Object.assign({}, userDetails)
    profile.dob = profile.dob || {}
    profile.state = profile.state || {}
    return { profile }
  },
  data() {
    return {
      user: null,
      showImageModal: false,
      userAvatar: null,
      states: [],
      cities: [],
      dd: null,
      mm: null,
      yyyy: null
    }
  },
  computed: {
    ...mapGetters({
      loading: 'loading'
    })
  },
  components: { Textbox },
  async mounted() {
    this.getStates(this.profile.country)
    this.getCities(this.profile.state)
  },
  methods: {
    async getCities(state) {
      this.cities = await this.$axios.$get('api/countries/cities', {
        params: { state }
      })
    },
    async getStates() {
      this.states = await this.$axios.$get('api/countries/states')
    },
    ...mapActions({
      updateProfile: 'auth/updateProfile'
    }),
    splitDate(date) {
      if (!date) return {}
      var dd = date.getDate()
      var mm = date.getMonth() + 1 //January is 0!
      var yyyy = date.getFullYear()
      if (dd < 10) {
        dd = '0' + dd
      }
      if (mm < 10) {
        mm = '0' + mm
      }
      var date = { dd, mm, yyyy }
      return date
    }
  },
  head() {
    return {
      title: 'Update your profile'
    }
  },
  layout: 'account'
}
</script>

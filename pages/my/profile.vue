<template>
  <div class="lg:w-1/2 mt-0 lg:mt-10 w-full bg-white shadow lg:ml-10 ml-0 py-5">
    <div class="text-xl text-gray-700 font-bold p-5 border-b border-gray-200 items-center px-10">
      <i
        class="fa fa-arrow-left mr-2 block lg:invisible"
        @click="$router.push('/my/')"
        aria-hidden="true"
      ></i>Profile details
    </div>
    <div class="px-0 lg:px-10">
      <div class="w-full text-sm text-center mt-5 mb-5 py-5 px-8">
        Just 2 step(s) to go and your profile's complete
        <div
          class="w-full h-1 bg-green-500 rounded-lg m-1 text-xs leading-none text-center text-white"
        ></div>
      </div>
    </div>

    <div class="w-full">
      <ul class="w-full">
        <div class="px-0 lg:px-10 hover:bg-gray-200">
          <a href="#">
            <li class="flex-wrap flex mt-5 mb-5 py-5 px-8">
              <div class="w-1/12">
                <img src="/name.png" class="w-5" />
              </div>
              <div class="w-10/12">{{profile.firstName}} {{profile.lastName}}</div>
              <div class="w-1/12">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </div>
            </li>
          </a>
        </div>

        <div class="px-0 lg:px-10 hover:bg-gray-200">
          <a href="#">
            <li class="flex-wrap flex mt-5 mb-5 hover:bg-gray-200 py-5 px-8">
              <div class="w-1/12 text-xl">
                <i class="fa fa-mobile" aria-hidden="true"></i>
              </div>
              <div class="w-10/12">{{profile.phone}}</div>
              <div class="w-1/12">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </div>
            </li>
          </a>
        </div>

        <div class="px-0 lg:px-10 hover:bg-gray-200">
          <a href="#">
            <li class="flex-wrap flex mt-5 mb-5 hover:bg-gray-200 py-5 px-8">
              <div class="w-1/12">
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
              </div>
              <div class="w-10/12">{{profile.email}}</div>
              <div class="w-1/12">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </div>
            </li>
          </a>
        </div>

        <div class="px-0 lg:px-10 hover:bg-gray-200">
          <a href="#">
            <li class="flex-wrap flex mt-5 mb-5 hover:bg-gray-200 py-5 px-8">
              <div class="w-1/12">
                <i class="fa fa-key" aria-hidden="true"></i>
              </div>
              <div class="w-10/12">Password</div>
              <div class="w-1/12">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </div>
            </li>
          </a>
        </div>
      </ul>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
export default {
  fetch({ store, redirect }) {
    if (!(store.state.auth || {}).user)
      return redirect("/login?return=my/profile");
  },
  async asyncData({ store }) {
    let profile = {};
    let userDetails = await store.dispatch("auth/fetch");
    profile = Object.assign({}, userDetails);
    profile.dob = profile.dob || {};
    profile.state = profile.state || {};
    return { profile };
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
    };
  },
  computed: {
    ...mapGetters({
      loading: "loading"
    })
  },
  async mounted() {
    this.getStates(this.profile.country);
    this.getCities(this.profile.state);
  },
  methods: {
    async getCities(state) {
      this.cities = await this.$axios.$get("countries/cities", {
        params: { state }
      });
    },
    async getStates() {
      this.states = await this.$axios.$get("countries/states");
    },
    ...mapActions({
      updateProfile: "auth/updateProfile"
    }),
    splitDate(date) {
      if (!date) return {};
      var dd = date.getDate();
      var mm = date.getMonth() + 1; //January is 0!
      var yyyy = date.getFullYear();
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      var date = { dd, mm, yyyy };
      return date;
    }
  },
  head() {
    return {
      title: "Update your profile"
    };
  },
  layout: "account"
};
</script>


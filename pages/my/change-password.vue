<template>
  <div
    class="w-full p-5 mt-0 bg-white shadow lg:w-1/2 lg:mt-10 xs:w-full lg:ml-10"
  >
    <div class="border-b border-gray-300">
      <div
        class="px-0 py-4 text-lg font-bold border-b border-gray-200 headings lg:px-8"
      >
        <i
          class="block mr-2 fa fa-arrow-left lg:invisible"
          @click="$router.push('/my/')"
          aria-hidden="true"
        ></i
        >Password
      </div>
    </div>
    <div class="w-full">
      <form
        novalidate
        autocomplete="off"
        @submit.stop.prevent="submit()"
        class="px-0 py-8 lg:px-16"
      >
        <span class="text-sm">Minimum 6 characters</span>
        <div class="w-full mt-3 mb-4 lg:w-1/2">
          <Textbox
            v-model="oldPassword"
            name="oldPassword"
            label="Current Password"
            ref="oldPassword"
            type="password"
            class="w-full"
          /><Textbox
            v-model="password"
            name="password"
            label="Password"
            ref="password"
            type="password"
            class="w-full"
          />
        </div>
        <div class="w-1/3 lg:w-1/2">
          <button
            class="w-full px-1 py-2 font-bold text-white rounded primary lg:px-4 focus:outline-none"
            type="submit"
          >
            SAVE
          </button>
        </div>
        <input />
      </form>
    </div>
  </div>
</template>

<script>
import Textbox from '~/components/ui/Textbox'

export default {
  layout: 'account',
  components: { Textbox },
  data() {
    return {
      oldPassword: '',
      password: ''
    }
  },
  methods: {
    async submit() {
      if (!this.oldPassword || this.oldPassword === '') {
        this.$store.commit('setErr', 'Current Password can not be blank')
        return
      } else if (!this.password || this.password === '') {
        this.$store.commit('setErr', 'New Password can not be blank')
        return
      }
      await this.$store.dispatch('auth/changePassword', this.password)
    }
  },
  head() {
    return {
      title: 'Change Password'
    }
  }
}
</script>

<template>
  <form novalidate autocomplete="off" @submit.stop.prevent="submit(search)">
    <div class="search_fix"></div>
    <div class="absolute">
      <i class="m-3 text-gray-500 fa fa-search" aria-hidden="true"></i>
    </div>
    <input
      type="text"
      v-model="search"
      class="w-full h-10 px-10 pr-4 my-auto text-xs border-0 rounded-b-sm shadow bg-purple-white focus:outline-none text-2"
      placeholder="Search for products,brands and more"
      name="search"
    />
  </form>
</template>

<script>
import { typingTimeout } from '~/config'
export default {
  data() {
    return {
      search: ''
    }
  },
  methods: {
    submit(q) {
      this.$router.push(`/search/${q}`)
    }
  },
  watch: {
    search: {
      immediate: false,
      handler(value, oldValue) {
        // if (value.length < 4) return;
        if (!oldValue) return // Do not trigger on page load
        clearTimeout(this.typingTimer)
        let vm = this
        this.typingTimer = setTimeout(function() {
          if (!value || value == 'undefined') value = '' // When clear button clicked
          vm.searchString = value
          vm.$router.push(`/search/${value}`)
        }, typingTimeout)
      }
    },
    '$route.query.q': {
      immediate: true,
      handler(value) {
        let pathName = null
        if (this.$route.name) pathName = this.$route.name.substr(0, 8)
        if (pathName === 'category') return
        if (!value || value == 'undefined') value = ''
        if (value == '') return
        if (this.search == '') this.search = value
      }
    }
  }
}
</script>

<style scoped>
img {
  margin-right: 1rem;
}
</style>

<template>
  <div
    class="fixed inset-0 z-50 flex flex-col w-4/5 overflow-x-hidden overflow-y-auto transition bg-white shadow-lg ml-auto lg:w-3/5"
  >
    <button
      aria-label="Open sidebar"
      @click="hideSidebar(null)"
      class="absolute top-0 right-0 inline-flex items-center justify-center w-8 h-8 rounded hover:bg-gray-100 focus:outline-none"
    >
      <svg
        class="w-5 h-5 text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
    <div class="mx-auto my-auto mt-24">
      <img src="/Sassy-Size-Chart_large.png" alt="h-full w-full mx-auto" />
    </div>
  </div>
</template>
<script>
export default {
  components: {
    // Radio,
  },
  methods: {
    hideSidebar(e) {
      this.sidebar = false
      if (e) this.$router.push(`/c/${e}`)
      this.$emit('hideSidebar', true)
    }
  }
}
</script>

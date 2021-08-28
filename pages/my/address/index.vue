<template>
  <div class="w-full h-screen bg-white shadow md:h-full">
    <div
      class="flex items-center justify-center p-5 text-xl font-bold text-center"
    >
      <div class="mx-auto text-2xl font-bold">
        <div class="flex flex-row md:hidden">
          <i
            class="mt-0.5 mr-2 fa fa-arrow-left"
            @click="$router.push('/my/')"
            aria-hidden="true"
          ></i>
          <div class="">Manage Addresses</div>
        </div>
        <div class="hidden text-center md:flex">Manage Addresses</div>
      </div>
    </div>
    <div class="px-0 lg:px-10">
      <div class="w-full px-8 mb-5 text-sm text-center">
        <!-- Just 2 step(s) to go and your profile's complete -->
        <div
          class="w-full h-1 text-xs leading-none text-center text-white bg-green-500 rounded-lg"
        ></div>
      </div>
    </div>

    <div class="w-full px-0 my-4 lg:px-20">
      <nuxt-link
        :to="`/checkout/add`"
        class="flex items-center justify-center w-full p-5 mb-5 text-center bg-white border border-gray-100 rounded shadow hover:shadow-xl"
      >
        <img src="/rounded-plus.png" alt="+" class="w-10 mr-1" />ADD NEW ADDRESS
      </nuxt-link>
      <div
        class="relative flex flex-wrap w-full px-5 py-3 mb-5 bg-white border border-gray-100 rounded shadow hover:shadow-xl"
        v-for="a in addresses"
        :key="a._id"
      >
        <nuxt-link
          :to="`/checkout/add?id=${a._id}`"
          class="absolute right-0 px-4 py-2 mr-2 text-xs text-right bg-white border border-gray-300 rounded hover:bg-gray-50"
          >Edit</nuxt-link
        >
        <!-- <span class="p-1 text-xs text-gray-700 bg-gray-200">HOME</span> -->
        <!-- <nuxt-link :to="`address/add?id=${a._id}`" class="absolute right-0 px-5 text-right" >
          <p class="w-1 h-1 m-1 bg-gray-500 rounded-full"></p>
          <p class="w-1 h-1 m-1 bg-gray-500 rounded-full"></p>
          <p class="w-1 h-1 m-1 bg-gray-500 rounded-full"></p>
        </nuxt-link> -->
        <div class="w-full text-sm">
          <div class="flex flex-row">
            <b class="capitalize">{{ a.firstName }} {{ a.lastName }}</b>
            <p class="h-4 mx-3 border-r-2 border-gray-600"></p>
            <p>{{ a.phone }}</p>
          </div>
          <div class="w-full text-sm">
            <p class="capitalize">{{ a.address }}</p>
            <p class="capitalize">{{ a.city }}</p>
            <p class="uppercase">
              {{ a.state }} - <span class="font-bold">{{ a.zip }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'account',
  data() {
    return {
      addresses: []
    }
  },
  async created() {
    const res = await this.$axios.$get('api/addresses/my')
    this.addresses = res.data
  }
}
</script>

<template>
  <div class="w-full px-2 mt-0 lg:w-2/4 lg:mt-10 lg:pr-20 xs:w-full lg:px-10 headings">
    <div class="py-6 text-2xl font-bold text-center lg:text-left">
      <i
        class="block mr-2 fa fa-arrow-left lg:invisible"
        @click="$router.push('/my/')"
        aria-hidden="true"
      ></i>Manage Addresses
    </div>
    <div class="w-full my-4">
      <nuxt-link
        :to="`address/add`"
        class="flex items-center justify-center w-full p-5 mb-5 text-center bg-white border border-gray-100 rounded shadow hover:shadow-xl"
      >
        <img
          src="/rounded-plus.png"
          alt="+"
          class="w-10 mr-1"
        >ADD NEW ADDRESS
      </nuxt-link>
      <div
        class="relative flex flex-wrap w-full px-5 py-3 mb-5 bg-white border border-gray-100 rounded shadow  hover:shadow-xl"
        v-for="a in addresses"
        :key="a._id"
      >
      <nuxt-link :to="`address/add?id=${a._id}`" class="absolute right-0 px-2 mr-2 text-xs text-right border border-gray-300 rounded">Edit</nuxt-link>
        <!-- <span class="p-1 text-xs text-gray-700 bg-gray-200">HOME</span> -->
        <!-- <nuxt-link :to="`address/add?id=${a._id}`" class="absolute right-0 px-5 text-right" >
          <p class="w-1 h-1 m-1 bg-gray-500 rounded-full"></p>
          <p class="w-1 h-1 m-1 bg-gray-500 rounded-full"></p>
          <p class="w-1 h-1 m-1 bg-gray-500 rounded-full"></p>
        </nuxt-link> -->
        <div class="w-full py-2 text-sm leading-loose">
          <p><b>{{a.firstName}} {{a.lastName}}</b></p>
          <div class="w-full py-2 text-sm leading-loose">
            <p>{{a.phone}}</p>
            <p>{{a.address}}</p>
            <p>{{a.city}}</p>
            <p>{{a.state}}- <span class="font-bold">{{a.zip}}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "account",
  data() {
    return {
      addresses: []
    };
  },
  async created() {
    const res = await this.$axios.$get("api/addresses/my");
    this.addresses = res.data;
  }
};
</script>

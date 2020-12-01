<template>
  <div class="flex flex-wrap justify-between p-2 lg:px-8 lg:pb-8">
    <div class="order-0 lg:order-0">
      <nuxt-link to="/">
        <img
          alt="Litekart"
          class="w-12 h-10"
          src="/logo.svg"
        />
      </nuxt-link>
    </div>
    <div class="flex justify-between order-2 w-full pt-3 text-xs font-bold tracking-widest text-center text-gray-700 lg:order-1 lg:w-1/3">
      <nuxt-link to="/cart">BAG</nuxt-link>
      <hr
        class="flex-1 mx-4 my-2"
        style="border-top:dashed 1px;"
      />
      <nuxt-link
        to="/checkout/address"
        class="pb-1 "
        :class="{'text-green-500 border-green-500 border-b-2':selected=='address'}"
      >ADDRESS</nuxt-link>
      <hr
        class="flex-1 mx-4 my-2"
        style="border-top:dashed 1px;"
      />
      <div :class="{'text-green-500 border-green-500 border-b-2':selected=='payment'}">PAYMENT</div>
    </div>
    <div class="flex items-center order-1 text-center lg:order-3">
      <img
        alt=""
        src="/secure.png"
        class="w-10"
      />
      <span class="text-lg text-gray-500">100% secure</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["selected"]
};
</script>

<style>
</style>
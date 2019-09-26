<template>
  <div class="flex flex-wrap justify-between p-2">
    <div class="order-0 lg:order-0">
      <nuxt-link to="/">
        <img class="w-12 h-10" src="/logo.svg" />
      </nuxt-link>
    </div>
    <div
      class="order-2 lg:order-1 w-full lg:w-1/3 tracking-widest text-center text-gray-700 font-bold pt-3 text-xs flex justify-between"
    >
      <a href class="text-green-500 border-b-2 border-green-500 pb-1">BAG</a>
      <hr class="flex-1 mx-4 my-2" style="border-top:dashed 1px;" />
      <a href>ADDRESS</a>
      <hr class="flex-1 mx-4 my-2" style="border-top:dashed 1px;" />
      <a href>PAYMENT</a>
    </div>
    <div class="order-1 lg:order-3 text-center flex items-center">
      <img src="/secure.png" class="w-10" />
      <span class="text-gray-500 text-lg">100% secure</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
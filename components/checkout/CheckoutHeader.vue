<template>
  <div class="flex flex-wrap justify-center p-2 lg:p-5">
    <div class="w-1/2 lg:w-1/3 order-0 lg:order-0">
      <nuxt-link to="/">
        <img class="w-12 h-10 ml-2 lg:ml-8" src="/logo.svg" />
      </nuxt-link>
    </div>
    <div
      class="order-2 lg:order-1 w-full lg:w-1/3 tracking-widest text-center text-gray-700 font-bold pt-3 text-xs flex justify-between p-2"
    >
      <a href class="text-green-500 border-b-2 border-green-500 pb-1">BAG</a>
      <span>- - - - - - - -</span>
      <a href>ADDRESS</a>
      <span>- - - - - - - -</span>
      <a href>PAYMENT</a>
    </div>
    <div class="order-1 lg:order-3 w-1/2 lg:w-1/3 text-center flex flex-wrap justify-center">
      <img src="/secure.png" class="w-10" />
      <span class="text-gray-500 pt-2 text-lg">100% secure</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
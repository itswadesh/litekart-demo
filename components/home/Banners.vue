<template>
  <div class="w-full flex flex-wrap mt-2">
    <nuxt-link
      class="w-full mb-2 lg:w-1/3"
      v-for="(b,ix) in $store.state.settings.banners.offers"
      :key="ix"
      :to="b.link || '/search'"
    >
      <img
        v-lazy="$store.state.settings.CDN_URL+b.img+'?tr=w-493,h-264'"
        alt="home page banners"
        class="w-full h-full lg:pr-1 p-0 object-cover object-center"
      />
    </nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
<template>
  <div class="flex flex-wrap w-full mt-2">
    <nuxt-link
      class="w-full mb-2 lg:w-1/3"
      v-for="(b, ix) in banners"
      :key="ix"
      :to="b.link || '/search'"
    >
      <img
        v-lazy="
          $store.state.settings &&
            $store.state.settings.CDN_URL + b.img + '?tr=w-493,h-264'
        "
        alt=""
        class="object-cover object-center w-full h-48 p-0 sm:h-64 lg:pr-1"
      />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: { banners: { type: Array } }
}
</script>

<style></style>

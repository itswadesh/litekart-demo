<template>
  <div class="flex h-auto p-2 bg-white border-b xs:block lg:hidden">
    <nuxt-link
      v-for="c in $store.state.categories"
      :key="c._id"
      :to="`/${c.slug}`"
      class="flex-1 circletag"
      id="nay"
    >
      <img
        :alt="c.name.toUpperCase()"
        :src="$store.state.settings.CDN_URL + c.img"
        class="object-cover h-10 text-sm rounded-full sm:h-12"
      />
      <div class="text-center text">{{ c.name.toUpperCase() }}</div>
    </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>
<style scoped>
.circletag img {
  border-radius: 50%;
}
.circletag {
  display: block;
  max-width: 100%;
  border-radius: 50%;
  text-align: center;
}
.circletag > img {
  max-width: 55%;
  margin: auto;
}
.text {
  font-size: 0.6em;
}
</style>

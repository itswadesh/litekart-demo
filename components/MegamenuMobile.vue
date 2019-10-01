<template>
  <div class="flex h-auto p-5 xs:block lg:hidden" style="overflow-x:scroll">
    <nuxt-link
      v-for="c in $store.state.categories"
      :key="c._id"
      :to="`/search?q=${c.slug}`"
      class="flex-1 bg-white circletag"
      id="nay"
    >
      <img :src="$store.state.settings.CDN_URL+c.img" class="object-cover rounded-full" />
      <div class="text text-center">{{c.name.toUpperCase()}}</div>
    </nuxt-link>
  </div>
</template>

<script>
export default {};
</script>
<style  scoped>
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

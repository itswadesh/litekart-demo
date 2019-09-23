<template>
  <div class="flex h-auto p-5 xs:block lg:hidden" style="overflow-x:scroll">
    <div
      v-for="c in $store.state.categories"
      :key="c._id"
      class="flex-1 bg-white circletag"
      id="nay"
    >
      <img :src="$store.state.settings.CDN_URL+c.img" class="object-cover h-12" />
      <div class="text text-center">{{c.name.toUpperCase()}}</div>
    </div>
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
  max-width: 50%;
  border-radius: 50%;
  text-align: center;
}
.circletag > img {
  max-width: 40%;
  margin: auto;
}
.text {
  font-size: 0.6em;
}
</style>

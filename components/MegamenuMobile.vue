<template>
  <div
    class="flex items-center h-auto p-5 xs:block lg:hidden"
    style="overflow-x:scroll"
  >
    <div
      v-for="c in $store.state.categories"
      :key="c._id"
      class="flex-1 text-gray-700 rounded-full shadow text-center px-4 py-2 m-2"
    >
      <img
        :src="$store.state.settings.CDN_URL+c.img"
        class="w-20"
      />
      <div class="xs:text-xs"> {{c.name.toUpperCase()}}</div>
    </div>
  </div>

</template>

<script>
export default {};
</script>

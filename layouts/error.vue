<template>
  <div
    class="flex flex-col items-center justify-center text-lg antialiased"
    style="min-height:71.8vh"
  >
    <h1 v-if="error.statusCode === 404">Not found</h1>
    <h1 v-else>{{ error }}</h1>
    &nbsp;
    <nuxt-link to="/" class="px-4 text-2xl rounded primary"
      >Home page</nuxt-link
    >
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>

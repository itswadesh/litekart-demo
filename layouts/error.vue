<template>
  <div class="flex flex-col justify-center items-center text-lg h-screen">
    <h1 v-if="error.statusCode === 404">Not found</h1>
    <h1 v-else>{{error}}</h1>&nbsp;
    <nuxt-link to="/" class="primary text-2xl px-4 rounded">Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["error"]
};
</script>

<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Product not found</h1>
    <h1 v-else>{{error}}</h1>&nbsp;
    <nuxt-link to="/" class="primary text-xs px-2 rounded">Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["error"]
};
</script>

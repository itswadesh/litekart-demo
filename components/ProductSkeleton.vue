<template>
  <div class="flex w-1/2 lg:w-1/4 xl:w-1/5 justify-between">
    <nuxt-link class="w-full">
      <div>
        <img class="w-full h-64 lg:p-2 bg-gray-100" alt="product image" />
        <div class="p-1 text-center text-1">
          <div class="bg-gray-100 h-2"></div>
          <div class="bg-gray-100 h-2"></div>
          <div class="bg-gray-100 h-2"></div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object
    }
  }
};
</script>

<style scoped>
img[lazy="loaded"] {
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
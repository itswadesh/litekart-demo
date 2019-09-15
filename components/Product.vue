<template>
  <div
    class="bg-white m-8 mt-5"
    v-if="product"
  >
    <div class="w-60">
      <img
        v-if="product._source.imgUrls"
        v-lazy="product._source.imgUrls[0]"
        alt=""
        class="h-64 w-40%"
      />
    </div>
    <div class="ml-1 pt-1">
      <p class="text-gray-900 font-bold">{{product._source.name | truncate(30)}}</p>
      <p class=" text-black font-thin">{{product._source.categories[0].name}}</p>
      <p class=" text-gray-600">{{product._source.variants[0].price | currency}}</p>
    </div>
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
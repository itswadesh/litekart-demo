<template>
  <nuxt-link
    :to="'/'+product._source.slug+'?id='+product._id"
    class="flex flex-wrap w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 px-1"
    v-if="product"
  >
    <div>
      <img
        style="height:250px; object-fit: cover;"
        v-if="product._source.imgUrls"
        v-lazy="product._source.imgUrls[0]"
        alt=""
      />
      <div class="text-gray-900 lg:font-bold sm:font-normal text-sm">{{product._source.name | truncate(23)}}</div>
      <div
        class="text-black font-thin text-sm"
        v-if="product._source.categories && product._source.categories[0]"
      >{{product._source.categories[0].name}}</div>
      <div class="text-gray-600">{{product._source.variants[0].price | currency}}</div>
    </div>
  </nuxt-link>
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
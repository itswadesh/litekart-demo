<template>
  <div class="lg:w-3/12 xs:w-1/2 lg:p-2 mt-3 flex flex-wrap" v-if="product">
    <div class="xs:w-1/2">
      <img
        style="max-height:12em;min-height:12em;object-fit: cover;"
        v-if="product._source.imgUrls"
        v-lazy="product._source.imgUrls[0]"
        alt
      />
      <div class="ml-1">
        <p
          class="text-gray-900 lg:font-bold sm:font-normal text-sm"
        >{{product._source.name | truncate(30)}}</p>
        <p class="text-black font-thin text-sm">{{product._source.categories[0].name}}</p>
        <p class="text-gray-600">{{product._source.variants[0].price | currency}}</p>
      </div>
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
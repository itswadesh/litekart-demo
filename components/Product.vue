<template>
  <div class="w-1/2 lg:w-1/4 xl:w-1/5">
    <!-- <button @click="del(product._id)">x</button> -->
    <!-- <button @click="activate(product._id)">_/</button> -->
    <nuxt-link
      :to="'/'+product._source.slug+'?id='+product._id"
      class="block w-full mx-4 lg:p-2"
      v-if="product"
    >
      <div>
        <img
          class="w-full h-64"
          style="object-fit: cover; max-height:316px;"
          v-if="product._source.img"
          v-lazy="$store.state.settings.CDN_URL+product._source.img[0]"
          alt=""
        />
        <div class="p-3 text-center text-1">
          <div class="text-sm text-gray-900 truncate headings">{{product._source.name}}</div>
          <!-- <div
            class="text-sm font-thin"
            v-if="product._source.categories && product._source.categories[0]"
          >{{product._source.categories[0].name}}</div> -->
          <div><span class="font-bold">{{product._source.price | currency}}</span> <del class="text-xs text-gray-600" v-if="product._source.mrp>product._source.price">{{product._source.mrp | currency}}</del> <span class="text-xs text-pink-500" v-if="product._source.mrp>product._source.price">({{Math.round(((product._source.mrp-product._source.price) *100) / product._source.mrp)}}% off)</span> </div>
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
  },
  methods: {
    async del(id) {
      try {
        await this.$axios.$delete(`api/products/${id}`);
      } catch (e) {}
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
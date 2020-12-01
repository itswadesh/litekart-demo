<template>
  <div class="w-1/2 px-3 mb-4 lg:w-1/3 xl:w-1/4">
    <!-- <button @click="del(product._id)">x</button> -->
    <!-- <button @click="activate(product._id)">_/</button> -->
    <nuxt-link
      :to="'/' + product._source.slug + '?id=' + product._id"
      class="block w-full mx-4 lg:p-2"
      v-if="product"
    >
      <div class="relative pb-5/6">
        <img
          v-if="product._source.img"
          v-lazy="$store.state.settings.CDN_URL + product._source.img[0]"
          alt=""
          class="absolute object-cover w-full h-full rounded-lg shadow-md"
        />
      </div>
      <div class="relative px-4 -mt-16">
        <div class="p-6 bg-white rounded-lg shadow-lg">
          <h4 class="mt-2 text-sm leading-tight truncate">
            {{ product._source.name }}
          </h4>
          <div class="mt-2">
            <span class="text-sm font-bold ">{{
              product._source.price | currency
            }}</span>
            <del
              class="text-xs text-gray-600"
              v-if="product._source.mrp > product._source.price"
              >{{ product._source.mrp | currency }}</del
            >
            <span
              class="text-xs text-pink-500"
              v-if="product._source.mrp > product._source.price"
              >({{
                Math.round(
                  ((product._source.mrp - product._source.price) * 100) /
                    product._source.mrp
                )
              }}% off)</span
            >
            <span class="text-sm text-gray-600"></span>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
    },
  },
  methods: {
    async del(id) {
      try {
        await this.$axios.$delete(`api/products/${id}`)
      } catch (e) {}
    },
  },
}
</script>

<style scoped>
img[lazy='loaded'] {
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

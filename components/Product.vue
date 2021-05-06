<template>
  <div class="w-full">
    <!-- <button @click="del(product._id)">x</button> -->
    <!-- <button @click="activate(product._id)">_/</button> -->
    <nuxt-link
      :to="'/' + product._source.slug + '?id=' + product._id"
      class="w-full"
      v-if="product"
    >
      <div class="relative w-full h-56 bg-white rounded-tr-2xl">
        <img
          class="object-cover w-full h-full rounded-tr-2xl"
          v-if="product._source.img"
          v-lazy="$store.state.settings.CDN_URL + product._source.img[0]"
          alt=""
        />
      </div>
      <div class="relative">
        <div class="p-3 bg-white rounded-b-lg shadow-lg sm:p-6">
          <div class="text-sm text-gray-900 truncate headings">
            {{ product._source.name }}
          </div>
          <!-- <div
            class="text-sm font-thin"
            v-if="product._source.categories && product._source.categories[0]"
          >{{product._source.categories[0].name}}</div> -->
          <div class="mt-2">
            <span class="font-bold">{{
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
      type: Object
    }
  },
  methods: {
    async del(id) {
      try {
        await this.$axios.$delete(`api/products/${id}`)
      } catch (e) {}
    }
  }
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

<template>
  <div class="w-full my-2 shadow">
    <div class="flex justify-between w-full p-3 border-b">
      <div class="flex-1 text-sm font-semibold tracking-widest text-gray-600 uppercase md:text-lg lg:text-2xl">
        Recently Viewed
        <!-- <span class="text-xs text-gray-500">23:57:50 Left</span> -->
      </div>
      <!-- <button
        class="px-2 text-xs rounded primary"
        @click="$router.push('/search')"
      >View All</button> -->
    </div>
    <carousel
      :perPageCustom="[
        [425, 2],
        [768, 3],
        [1024, 5]
      ]"
      :paginationEnabled="false"
      :navigationEnabled="true"
      navigation-next-label="<img src='/chevron-right.svg' style='transform: rotate(180deg)' alt=''>"
      navigation-prev-label="<img src='/chevron-right.svg' alt=''/>"
      class="flex flex-wrap justify-between py-4 sm:p-4 bg-green-50"
    >
      <slide v-for="(product, index) in products" :key="product._id" v-if="product" 
      class="w-64 p-0.5 mx-1 bg-white border rounded-t-3xl"
              :class="{
                    'hover:border-yellow-500': index % 6 == 0,
                    'hover:border-purple-500': index % 6 == 1,
                    'hover:border-red-500': index % 6 == 2,
                    'hover:border-green-500': index % 6 == 3,
                    'hover:border-pink-500': index % 6 == 4,
                    'hover:border-blue-500': index % 6 == 5,
                  }"
      >
        <nuxt-link :to="'/' + product.slug + '?id=' + product._id">
          <img
            class="object-contain mx-auto rounded-t-3xl"
            style="height:255px;"
            v-if="product.img"
            v-lazy="$store.state.settings.CDN_URL + product.img[0]"
            alt=""
          />
          <div 
           :class="{
                    'bg-yellow-100': index % 6 == 0,
                    'bg-purple-100': index % 6 == 1,
                    'bg-red-100': index % 6 == 2,
                    'bg-green-100': index % 6 == 3,
                    'bg-pink-100': index % 6 == 4,
                    'bg-blue-100': index % 6 == 5,
                  }"
          class="h-20 px-2 py-4">
            <div class="mb-2 text-base font-bold truncate">
              {{ product.name }}
            </div>
            <p class="text-sm font-semibold text-center text-green-700">
              Extra
              {{
                Math.round(((product.mrp - product.price) * 100) / product.mrp)
              }}% off
            </p>
          </div>
        </nuxt-link>
      </slide>
    </carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: []
    }
  },
  async created() {
    if (!process.server) {
      let recentlyViewd = localStorage.getItem('recent')
      recentlyViewd = JSON.parse(recentlyViewd)
      if (!recentlyViewd) recentlyViewd = []
      recentlyViewd.reverse()
      if (recentlyViewd && recentlyViewd.length > 0) {
        let recentProduct = await this.$axios.$post(
          'api/products/ids',
          recentlyViewd
        )
        this.products = recentProduct
      }
    }
  },
  methods: {
    go(url) {
      this.$router.push(url)
    },
    clearRecentItems() {
      localStorage.setItem('recent', [])
      this.$emit('clearRecentItems')
    }
  }
}
</script>

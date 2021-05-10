<template>
  <div class="flex flex-wrap w-full mt-2">
    <div class="w-full shadow">
      <div class="flex justify-between w-full p-3 border-b h-14">
        <div class="flex items-center w-1/2">
          <h3 class="text-sm font-semibold tracking-widest text-gray-600 uppercase md:text-lg lg:text-2xl">{{ title }}</h3>
        </div>
        <button
          class="right-0 px-2 py-1 text-xs rounded primary"
          @click="$router.push(slug)"
        >
          View All
        </button>
      </div>
      <div v-if="loading">
        <ProductSkeleton class="w-full" />
      </div>
      <carousel
        :perPageCustom="[
          [425, 2],
          [768, 3],
          [1024, 5]
        ]"
        :paginationEnabled="false"
        :navigationEnabled="true"
        navigation-next-label="<img src='/chevron-right.svg' alt='' style='transform: rotate(180deg)'>"
        navigation-prev-label="<img src='/chevron-right.svg' alt=''/>"
        class="flex flex-wrap justify-between py-4 sm:p-4 bg-purple-50"
      >
        <slide v-for="(product, index) in products" :key="product._id" 
          :class="{
          'hover:border-yellow-500':index % 6==0,
          'hover:border-purple-500':index % 6==1,
          'hover:border-red-500':index % 6==2,
          'hover:border-green-500':index % 6==3,
          'hover:border-pink-500':index % 6==4,
          'hover:border-blue-500':index % 6==5,
        }"
        class="w-64 mx-1 bg-white p-0.5 border rounded-lg ">
          <nuxt-link :to="'/' + product._source.slug + '?id=' + product._id">
            <div class="flex justify-center">
              <img
                style="height:255px;"
                class="object-cover pt-0.5 rounded-t-lg"
                v-if="product._source.img"
                v-lazy="$store.state.settings.CDN_URL + product._source.img[0]"
                alt=""
              />
              <i
                class="absolute top-0 right-0 w-6 h-6 p-1 mr-2 text-gray-400 fill-current fa fa-heart"
                aria-hidden="true"
              ></i>
            </div>
            <div 
             :class="{
                    'text-yellow-500': index % 6 == 0,
                    'text-purple-500': index % 6 == 1,
                    'text-red-500': index % 6 == 2,
                    'text-green-500': index % 6 == 3,
                    'text-pink-500': index % 6 == 4,
                    'text-blue-500': index % 6 == 5,
                  }"
            class="h-16 px-2 py-2 rounded-b-lg">
              <div class="mb-2 text-sm font-bold truncate">
                {{ product._source.name }}
              </div>
              <p class="text-xs text-center text-green-700">
                Extra
                {{
                  Math.round(
                    ((product._source.mrp - product._source.price) * 100) /
                      product._source.mrp
                  )
                }}% off
              </p>
            </div>
          </nuxt-link>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import ProductSkeleton from '~/components/ProductSkeleton'
export default {
  props: {
    title: String,
    slug: String
  },
  data() {
    return {
      products: [],
      loading: false
    }
  },
  async created() {
    try {
      this.loading = true
      const res = await this.$axios.$get(
        `api/products/es?categories=${this.slug}`
      )
      this.products = res.data
    } catch (e) {
    } finally {
      this.loading = false
    }
  },
  components: { ProductSkeleton }
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

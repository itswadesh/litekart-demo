<template>
  <div class="flex flex-wrap w-full mt-2">
    <div class="w-full shadow">
      <div class="flex justify-between w-full p-3 border-b h-14">
        <div class="relative float-left w-4/5 my-auto text-sm font-semibold tracking-widest text-gray-600 uppercase text-md md:w-1/2 md:text-lg lg:text-2xl">
          <span> Sale </span>
          <span class="text-xs text-gray-500 you"
            >( Items on huge discount )</span
          >
        </div>
        <button
          class="right-0 px-2 py-1 text-xs rounded primary"
          @click="$router.push('/search')"
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
        class="flex flex-wrap justify-between p-4"
      >
        <slide v-for="product in products" :key="product._id">
          <nuxt-link :to="'/' + product.slug + '?id=' + product._id">
            <div class="relative">
              <img
                style="height:255px;object-fit: cover;"
                v-if="product.img"
                v-lazy="$store.state.settings.CDN_URL + product.img[0]"
                alt=""
              />
              <i
                class="absolute top-0 right-0 w-6 h-6 p-1 mr-2 text-white text-gray-400 fill-current fa fa-heart"
                aria-hidden="true"
              ></i>
            </div>
            <div class="px-2 py-4">
              <div class="mb-2 text-xs font-bold">
                {{ product.name | truncate(40) }}
              </div>
              <p class="text-xs text-center text-green-700">
                Extra
                {{
                  Math.round(
                    ((product.mrp - product.price) * 100) / product.mrp
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
  data() {
    return {
      products: [],
      loading: false
    }
  },
  components: { ProductSkeleton },
  async created() {
    try {
      this.loading = true
      const res = await this.$axios.$get('api/products/sale')
      this.products = res.data
    } catch (e) {
    } finally {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.border-b {
  border-bottom: 1px solid lightgray;
}
.you {
  margin-top: 1.5em;
}
</style>

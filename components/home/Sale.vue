<template>
  <div class="flex flex-wrap w-full mt-2">
    <div class="w-full shadow">
      <div class="flex justify-between w-full p-3 border-b h-14">
         <div class="relative flex flex-col float-left w-4/5 my-auto text-sm font-semibold tracking-widest text-gray-600 uppercase md:w-1/2 sm:flex-row sm:text-lg lg:text-2xl">
          <span> Sale </span>
          <span class="text-xs text-gray-500 sm:pt-0.5 sm:mt-2">
            ( items on huge discount )
          </span>
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
        class="flex flex-wrap justify-between py-4 sm:p-4"
      >
        <slide v-for="(product, index) in products" :key="product._id" 
        :class="{
                'border-yellow-300 border hover:border-yellow-700':index % 6==0,
                'border-purple-300 border hover:border-purple-700':index % 6==1,
                'border-red-300 border hover:border-red-700':index % 6==2,
                'border-green-300 border hover:border-green-700':index % 6==3,
                'border-pink-300 border hover:border-pink-700':index % 6==4,
                'border-blue-300 border hover:border-blue-700':index % 6==5,
              }"
         class="w-64 mx-1">
          <nuxt-link :to="'/' + product.slug + '?id=' + product._id">
            <div class="relative">
              <img
                class="object-contain pt-0.5 mx-auto"
                style="height:255px;"
                v-if="product.img"
                v-lazy="$store.state.settings.CDN_URL + product.img[0]"
                alt=""
              />
              <i
                class="absolute top-0 right-0 w-6 h-6 p-1 mt-1 mr-2 text-gray-400 fill-current fa fa-heart"
                aria-hidden="true"
              ></i>
            </div>
            <div class="h-20 px-2 py-4 m-0.5 bg-gray-100">
              <div class="mb-2 text-base font-bold truncate">
                {{ product.name }}
              </div>
              <p class="text-xs text-center text-green-700 ">
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

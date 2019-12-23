<template>
  <div class="w-full flex flex-wrap mt-2">
    <div class="w-full shadow">
      <div class="w-full p-3 border-b h-14 flex justify-between">
        <p class="w-1/2 float-left relative headings">
          You may also Like
          <span class="text-gray-500 text-xs absolute inset-x-0 you">Based on Your Interest</span>
        </p>
        <button
          class="primary text-xs right-0 py-1 px-2 rounded"
          @click="$router.push('/search')"
        >View All</button>
      </div>
      <div v-if="loading">
        <ProductSkeleton class="w-full" />
      </div>
      <carousel
        :perPageCustom="[[425, 2], [768, 3], [1024, 5]]"
        :paginationEnabled="false"
        :navigationEnabled="true"
        navigation-next-label="<img src='/chevron-right.svg' style='transform: rotate(180deg)'>"
        navigation-prev-label="<img src='/chevron-right.svg'/>"
        class="flex flex-wrap justify-between p-4"
      >
        <slide
          v-for="product in products"
          :key="product._id"
        >
          <nuxt-link :to="'/'+product.slug+'?id='+product._id">
            <div class="relative">
              <img
                style="height:255px;object-fit: cover;"
                v-if="product.imgUrls"
                v-lazy="product.imgUrls[0]"
                alt="you also like"
              />
              <i
                class="fa fa-heart h-6 w-6 text-white fill-current absolute top-0 right-0 p-1 mr-2 text-gray-400"
                aria-hidden="true"
              ></i>
            </div>
            <div class="px-2 py-4">
              <div class="font-bold text-xs mb-2">{{product.name | truncate(40)}}</div>
              <p class="text-green-700 text-xs text-center">Extra {{Math.round(((product.mrp-product.price) *100) / product.mrp)}}% off</p>
            </div>
          </nuxt-link>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import ProductSkeleton from "~/components/ProductSkeleton";

export default {
  data() {
    return {
      products: []
    };
  },
  components: { ProductSkeleton },
  async created() {
    try {
      this.loading = true;
      const res = await this.$axios.$get("api/products/featured");
      this.products = res.data;
    } catch (e) {
    } finally {
      this.loading = false;
    }
  }
};
</script>

<style scoped>
.border-b {
  border-bottom: 1px solid lightgray;
}
.you {
  margin-top: 1.5em;
}
</style>
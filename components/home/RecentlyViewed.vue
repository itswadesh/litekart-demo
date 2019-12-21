<template>
  <div class="w-full shadow my-2">
    <div class="w-full p-3 border-b flex justify-between">
      <div class="flex-1 headings">
        Recently Viewed
        <!-- <span class="text-gray-500 text-xs">23:57:50 Left</span> -->
      </div>
      <button
        class="primary text-xs px-2 rounded"
        @click="$router.push('/search')"
      >View All</button>
    </div>
    <carousel
      :perPageCustom="[[425, 2], [768, 3], [1024, 5]]"
      :paginationEnabled="false"
      :navigationEnabled="true"
      navigation-next-label="<img src='/chevron-right.svg' style='transform: rotate(180deg)' alt='right'>"
      navigation-prev-label="<img src='/chevron-right.svg' alt='right'/>"
      class="mx-2"
    >
      <slide
        v-for="product in products"
        :key="product._id"
        v-if="product"
      >
        <nuxt-link :to="'/'+product.slug+'?id='+product._id">
          <img
            style="height:255px;object-fit: cover;"
            v-if="product.imgUrls"
            v-lazy="product.imgUrls[0]"
            alt="todays deals"
          />
          <div class>
            <div class="font-bold text-xs mb-2">{{product.name | truncate(45)}}</div>
            <p class="text-green-700 text-xs text-center">Extra 5% off</p>
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
    };
  },
  async created() {
    if (!process.server) {
      let recentlyViewd = localStorage.getItem("recent");
      recentlyViewd = JSON.parse(recentlyViewd);
      if (!recentlyViewd) recentlyViewd = [];
      recentlyViewd.reverse();
      if (recentlyViewd && recentlyViewd.length > 0) {
        let recentProduct = await this.$axios.$post(
          "api/products/ids",
          recentlyViewd
        );
        this.products = recentProduct;
      }
    }
  },
  methods: {
    go(url) {
      this.$router.push(url);
    },
    clearRecentItems() {
      localStorage.setItem("recent", []);
      this.$emit("clearRecentItems");
    }
  }
};
</script>
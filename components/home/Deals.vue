<template>
  <div class="w-full shadow my-2">
    <div class="w-full p-3 border-b flex justify-between">
      <div class="flex-1">
        Deals Of the Day
        <span class="text-gray-500 text-xs">23:57:57 Left</span>
      </div>
      <button class="primary text-xs px-2">View All</button>
    </div>
    <carousel
      :perPageCustom="[[425, 2], [768, 3], [1024, 5]]"
      :paginationEnabled="false"
      :navigationEnabled="true"
      navigation-next-label="<img src='/chevron-right.svg' style='transform: rotate(180deg)'>"
      navigation-prev-label="<img src='/chevron-right.svg'/>"
      class="mx-2"
    >
      <slide v-for="product in products" :key="product._id">
        <nuxt-link :to="'/'+product.slug+'?id='+product._id">
          <img
            style="height:255px;object-fit: cover;"
            v-if="product.imgUrls"
            v-lazy="product.imgUrls[0]"
            alt
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
import { Carousel, Slide } from "vue-carousel";

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
          "products/ids",
          recentlyViewd
        );
        this.products = recentProduct;
      }
    }
  },
  components: { Carousel, Slide },
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
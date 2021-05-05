<template>
  <div class="w-full my-2 shadow">
    <div class="flex justify-between w-full p-3 border-b">
      <div class="flex-1 headings">
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
        [1024, 5],
      ]"
      :paginationEnabled="false"
      :navigationEnabled="true"
      navigation-next-label="<img src='/chevron-right.svg' style='transform: rotate(180deg)' alt=''>"
      navigation-prev-label="<img src='/chevron-right.svg' alt=''/>"
      class="mx-2"
    >
      <slide v-for="product in products" :key="product._id" v-if="product">
        <nuxt-link :to="'/' + product.slug + '?id=' + product._id">
          <img
            style="height:255px;object-fit: cover;"
            v-if="product.img"
            v-lazy="$store.state.settings.CDN_URL + product.img[0]"
            alt=""
          />
          <div class>
            <div class="mb-2 text-xs font-bold">
              {{ product.name | truncate(45) }}
            </div>
            <p class="text-xs text-center text-green-700">
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
      products: [],
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
    },
  },
};
</script>

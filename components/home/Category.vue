<template>
  <div class="flex flex-wrap w-full mt-2">
    <div class="w-full shadow">
      <div class="flex justify-between w-full p-3 border-b h-14">
        <div class="flex items-center w-1/2">
          <h3 class="text-xl font-bold">{{ title }}</h3>
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
          [1024, 5],
        ]"
        :paginationEnabled="false"
        :navigationEnabled="true"
        navigation-next-label="<img src='/chevron-right.svg' alt='' style='transform: rotate(180deg)'>"
        navigation-prev-label="<img src='/chevron-right.svg' alt=''/>"
        class="flex flex-wrap justify-between p-4"
      >
        <slide v-for="product in products" :key="product._id" class="w-64">
          <nuxt-link :to="'/' + product._source.slug + '?id=' + product._id">
            <div class="flex justify-center">
              <img
                style="height:255px;"
                class="object-cover"
                v-if="product._source.img"
                v-lazy="$store.state.settings.CDN_URL + product._source.img[0]"
                alt=""
              />
              <i
                class="absolute top-0 right-0 w-6 h-6 p-1 mr-2 text-white text-gray-400 fill-current fa fa-heart"
                aria-hidden="true"
              ></i>
            </div>
            <div class="px-2 py-4">
              <div class="mb-2 text-xs font-bold truncate">
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
import ProductSkeleton from "~/components/ProductSkeleton";
export default {
  props: {
    title: String,
    slug: String,
  },
  data() {
    return {
      products: [],
      loading: false,
    };
  },
  async created() {
    try {
      this.loading = true;
      const res = await this.$axios.$get(
        `api/products/es?categories=${this.slug}`
      );
      this.products = res.data;
    } catch (e) {
    } finally {
      this.loading = false;
    }
  },
  components: { ProductSkeleton },
};
</script>

<style scoped>
img[lazy="loaded"] {
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

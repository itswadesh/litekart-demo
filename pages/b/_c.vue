<template>
  <div>
    <section class="count">
      <div class="container">
        <div
          v-if="loading"
          class="center"
        ><img
            src="/loading.svg"
            alt="loading ..."
          /></div>
        <p
          class="center"
          v-if="count && !loading"
        >{{count}} styles found</p>
      </div>
    </section>

    <section
      v-if="products.length===0 && !loading"
      class="products"
    >
      <div class="container">
        No product not found for brand {{$route.params.c}}
      </div>
    </section>

    <section
      v-else
      class="products"
    >
      <div class="container">
        <product-card-fashion
          v-for="p in products"
          :key="p._id"
          :product="p"
        ></product-card-fashion>
      </div>
      <div
        class="container"
        v-if="loading"
      >
        <!-- Skeleton not required as the products will be loaded from server side -->
        <!-- Skeleton required when the filter is applied -->
        <product-card-skeleton
          v-for="(p,ix) in skeletonCount"
          :key="ix+'-1'"
        ></product-card-skeleton>
      </div>
    </section>
  </div>
</template>
<script>
const ProductCardFashion = () => import("~/components/ProductCardFashion"),
  ProductCardSkeleton = () => import("~/components/ProductCardSkeleton");
export default {
  layout:"bottomNavigationWithFooter",
  props: ["products", "loading", "count"],
  components: { ProductCardFashion, ProductCardSkeleton },
  data() {
    return {
      skeletonCount: 12
    };
  }
};
</script>

<template>
  <div>
    <section class="count">
      <div class="container">
        <!-- <div
          v-if="loading"
          class="center"
        ><img
            src="/loading.svg"
            alt="loading ..."
          /></div> -->
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
        {{$route.params.c}} product not found
      </div>
    </section>

    <section
      v-else
      class="products"
    >
      <div class="container">
        <product
          v-for="p in products"
          :key="p._id"
          :product="p"
        ></product>
      </div>
      <div
        class="container"
        v-if="loading"
      >
        <!-- Skeleton not required as the products will be loaded from server side -->
        <!-- Skeleton required when the filter is applied -->
        <product-skeleton
          v-for="(p,ix) in skeletonCount"
          :key="ix+'-1'"
        ></product-skeleton>
      </div>
    </section>
  </div>
</template>
<script>
const Product = () => import("~/components/Product"),
  ProductSkeleton = () => import("~/components/ProductSkeleton");
export default {
  layout:"bottomNavigationWithFooter",
  props: ["products", "loading", "count"],
  components: { Product, ProductSkeleton },
  data() {
    return {
      skeletonCount: 8
    };
  }
};
</script>

<template>
  <div>
    <div>
      <Header />
    </div>
    <div class="flex">
      <LeftSideBar
        class="flex-none max-w-xs hidden md:block"
        :facets="facets"
        :fl="fl"
      />
      <div>
        <HeaderBody
          :count="productCount"
          :fl="fl"
          @removed="facetRemoved"
        />
        <div class="flex flex-wrap shadow-inner">
          <div
            class="items-center"
            v-if="loading"
          >
            <img
              src="/loading.svg"
              alt="loading ..."
            />
          </div>
          <Product
            v-else
            v-for="p in products"
            :key="p._id"
            :product="p"
          />
        </div>
        <Pagination />
      </div>
    </div>
    <!-- <RightSideBar /> -->
    <Footer />
  </div>
</template>
<script>
import Pagination from "~/components/Pagination";
import Product from "~/components/Product";
import Footer from "~/components/Footer";
import LeftSideBar from "~/components/LeftSideBar";
import Header from "~/components/Header";
import HeaderBody from "~/components/HeaderBody";
import Logo from "~/components/Logo";
import Button from "~/components/Button";
import Loading from "~/components/Loading";
export default {
  name: "ProductListing",
  data() {
    return {
      fl: {
        brands: [],
        price: [],
        categories: [],
        colors: [],
        sizes: [],
        price: [1, 100],
        sort: null,
        features: { Type: [], Fit: [], Fabric: [], Neck: [], Color: [] },
        sorts: [
          { name: "Relevance", val: null },
          { name: "Whats New", val: "-createdAt" },
          { name: "Price low to high", val: "variants.price" },
          { name: "Price high to low", val: "-variants.price" }
        ]
      },
      products: [],
      facets: [],
      category: {},
      productCount: 0,
      loading: false
    };
  },
  created() {
    // let query = { ...this.$route.query };
    // this.fl = query;
  },
  components: {
    Logo,
    Button,
    Header,
    HeaderBody,
    Footer,
    LeftSideBar,
    Pagination,
    Product,
    Loading
  },
  methods: {
    facetRemoved(f) {
      this.fl = f;
    },
    async getData() {
      try {
        this.loading = true;
        const products = await this.$axios.$get("products/es", {
          params: { ...this.$route.query }
        });
        this.productCount = products.count;
        this.products = products.data;
        this.facets = products.facets;
        // const lastClick = this.$route.query.lastClick;
        // if (
        //   lastClick == "categories" ||
        //   lastClick == "brands" ||
        //   lastClick == "sizes"
        // ) {
        //   delete this.facets[lastClick];
        // }
      } catch (e) {
      } finally {
        this.loading = false;
      }
    }
  },
  watch: {
    "$route.query": {
      immediate: true,
      handler(value, oldValue) {
        let query = { ...this.$route.query };
        Object.keys(query).map(function(k, i) {
          if (
            query[k] &&
            !Array.isArray(query[k]) &&
            query[k] != null &&
            query[k] != ""
          )
            query[k] = query[k].split(",");
        });
        if (query.q && query.q[0]) query.q = query.q[0];
        this.fl = query;
        this.getData();
      }
    }
  }
};
</script>
<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.chat-notification {
  display: flex;
  max-width: 24rem;
  margin: 0 auto;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.chat-notification-logo-wrapper {
  flex-shrink: 0;
}
.chat-notification-logo {
  height: 3rem;
  width: 3rem;
}
.chat-notification-content {
  margin-left: 1.5rem;
  padding-top: 0.25rem;
}
.chat-notification-title {
  color: #1a202c;
  font-size: 1.25rem;
  line-height: 1.25;
}
.chat-notification-message {
  color: #718096;
  font-size: 1rem;
  line-height: 1.5;
}
</style>

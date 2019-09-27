<template>
  <div>
    <MobileFilters
      class="flex-none max-w-xs"
      :facets="facets"
      :fl="fl"
      v-if="showMobileFilter"
      @hide="showMobileFilter=false"
    />
    <div
      v-else
      class="flex"
    >
      <LeftSideBar
        class="flex-none max-w-xs hidden md:block"
        :facets="facets"
        :fl="fl"
      />
      <div class="w-full">
        <HeaderBody
          :count="productCount"
          :fl="fl"
          @removed="facetRemoved"
          @showFilters="showMobileFilter=true"
        />
        <NoProduct v-if="products.length==0 && !loading" />
        <div v-else>
          <!-- <Skeleton v-if="loading" /> -->
          <!-- <img
                src="/loading.svg"
                alt="loading ..."
              /> -->
          <div
            v-if="products && products.length>0"
            class="flex flex-wrap"
          >
            <Product
              v-for="p in products"
              :key="p._id"
              :product="p"
            />
          </div>
          <div class="pagination_box">
            <v-pagination
              v-if="noOfPages>1"
              v-model="currentPage"
              @change="changePage(currentPage)"
              :page-count="noOfPages"
              :disabled="loading"
              :classes="bootstrapPaginationClasses"
              :labels="paginationAnchorTexts"
            ></v-pagination>
          </div>
        </div>
        <!-- <Pagination
          :count=""
          :current="parseInt($route.query.page)"
          @changed="changePage"
        />-->
      </div>
    </div>
    <!-- <RightSideBar /> -->
  </div>
</template>
<script>
import Pagination from "~/components/Pagination";
import Skeleton from "~/components/Skeleton";
import Product from "~/components/Product";
import LeftSideBar from "~/components/LeftSideBar";
import MobileFilters from "~/components/MobileFilters";
import HeaderBody from "~/components/HeaderBody";
import Logo from "~/components/Logo";
import NoProduct from "~/components/NoProduct";
import { constructURL } from "~/lib/";
import vPagination from "vue-plain-pagination";
import { BackToTopDark, Loading } from "~/components/ui";
export default {
  name: "ProductListing",
  data() {
    return {
      showMobileFilter: false,
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
      currentPage: 1,
      loading: false,
      bootstrapPaginationClasses: {
        ul: "pagination",
        li: "page-item",
        liActive: "active",
        liDisable: "disabled",
        button: "page-link"
      },
      paginationAnchorTexts: {
        first: "&laquo;",
        prev: "&lsaquo;",
        next: "&rsaquo;",
        last: "&raquo;"
      }
    };
  },
  created() {
    this.currentPage = parseInt(this.$route.query.page);
    // let query = { ...this.$route.query };
    // this.fl = query;
  },
  components: {
    Logo,
    HeaderBody,
    LeftSideBar,
    MobileFilters,
    Pagination,
    Product,
    Loading,
    vPagination,
    NoProduct,
    Skeleton,
    BackToTopDark
  },
  computed: {
    noOfPages() {
      return Math.ceil(this.productCount / this.products.length);
    }
  },
  methods: {
    changePage(p) {
      let fl = { ...this.fl };
      delete fl.page;
      delete fl.categories;
      const url = constructURL("/", fl);
      let page = parseInt(p || 1);
      this.$router.push(`${url}page=${page}`);
    },
    facetRemoved(f) {
      this.fl = f;
    },
    async getData() {
      try {
        this.loading = true;
        const products = await this.$axios.$get("/products/es", {
          params: { ...this.$route.query }
        });
        this.productCount = products.count;
        this.products = products.data;
        this.facets = products.facets.all_aggs;
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
        // if (query.q && query.q[0]) query.q = query.q[0];
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

.pagination {
  list-style-type: none !important;
  display: flex !important;
  padding-left: 0 !important;
  list-style: none !important;
  border-radius: 0.25rem !important;
}
.page-link {
  position: relative !important;
  display: block !important;
  padding: 0.5rem 0.75rem !important;
  margin-left: -1px !important;
  line-height: 1.25 !important;
  color: #007bff !important;
  background-color: #fff !important;
  border: 1px solid #dee2e6 !important;
}
.page-item.disabled .page-link {
  color: #6c757d !important;
  pointer-events: none !important;
  cursor: auto !important;
  background-color: #fff !important;
  border-color: #dee2e6 !important;
  height: 34px !important;
}
.page-item:first-child .page-link {
  margin-left: 0 !important;
  border-top-left-radius: 0.25rem !important;
  border-bottom-left-radius: 0.25rem !important;
}
.page-item.active .page-link {
  z-index: 1 !important;
  color: #fff !important;
  background-color: #007bff !important;
  border-color: #007bff !important;
}
</style>

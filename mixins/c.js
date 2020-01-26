import { currency, sorts } from "~/config";
import Pagination from "~/components/Pagination";
import ProductSkeleton from "~/components/ProductSkeleton";
import ProductNew from "~/components/ProductNew";
import DesktopFilters from "~/components/DesktopFilters";
import MobileFilters from "~/components/MobileFilters";
import HeaderBody from "~/components/HeaderBody";
import Logo from "~/components/Logo";
import NoProduct from "~/components/NoProduct";
import { constructURL } from "~/lib/";
import vPagination from "vue-plain-pagination";
import { BackToTopDark, Loading } from "~/components/ui";
export default {
  components: {
    Logo,
    HeaderBody,
    DesktopFilters,
    MobileFilters,
    Pagination,
    ProductNew,
    Loading,
    vPagination,
    NoProduct,
    ProductSkeleton,
    BackToTopDark
  },
  data() {
    return {
      showMobileFilter: false,
      fl: {
        brands: [],
        price: [],
        categories: [],
        colors: [],
        sizes: [],
        price: [],
        sort: null,
        features: { Type: [], Fit: [], Fabric: [], Neck: [], Color: [] },
      },
      meta: {
        skip: 0,
        limit: 40,
        sort: null, // null will honour the search result weight
        search: "",
        end: false
      },
      products: [],
      facets: [],
      category: {},
      productCount: 0,
      currentPage: 1,
      loading: false
    };
  },
  computed: {
    noOfPages() {
      return Math.ceil(this.productCount / this.$store.state.settings.pageSize);
    }
  },
  mounted() {
    this.currentPage = parseInt(this.$route.query.page);
  },
  watch: {
    "$route.query": {
      immediate: false,
      handler(value, oldValue) {
        let q = this.$route.params.q;
        let query = { ...this.$route.query };
        let qry = { ...this.$route.query }; // Prevent query sync
        // Remove extra q & page param => Add page param only on page change & refresh
        delete query.page
        delete query.q
        Object.keys(query).map(function (k, i) {
          if (
            query[k] &&
            !Array.isArray(query[k]) &&
            query[k] != null &&
            query[k] != ""
          )
            query[k] = query[k].split(",");
        });
        this.fl = query; // For selected filters
        if (q) qry.q = q;
        this.getData(qry);
      }
    }
  },
  methods: {
    changePage(p) {
      const search = this.$route.params.q;
      let query = this.$route.query;
      query.page = p;
      query._ = new Date().getTime();
      this.scrollToTop();
      const url = constructURL("/", query);
      const cslug = this.$route.path.substr(1);
      this.$router.push(`/${cslug}${url}page=${p}`);
    },
    scrollToTop() {
      if (process.client) {
        window.scroll({
          behavior: "smooth",
          left: 0,
          top: 0
        });
      }
    },
    changed(e) {
      this.fl[e.model] = e.checked.join(',');
      const c = this.$route.path.slice(1)
      let fl = Object.assign({}, this.fl);
      delete fl.page
      delete fl.categories
      const url = this.constructURL("/", c, fl);
      this.$router.push(`${url}page=1`);
    },
    constructURL(url, category, fl) {
      if (category) url += category + "?";
      Object.keys(fl).forEach(e => {
        if (fl[e] && fl[e] !== "undefined" && fl[e].length > 0)
          url += `${e}=${fl[e]}&`;
      });
      return url;
    },
    go(slug) {
      this.$router.push("/" + slug);
    },
    facetRemoved(f) {
      this.fl = f;
    },
    filterRemoved(filter, name, data, multiple) {
      let list = this.$route.query[name].split(",");
      list.splice(list.indexOf(filter), 1);
      let mappedList = list.map(b => {
        return b;
      });
      this.fl[name] = mappedList;
      this.changed({ model: name, checked: mappedList });
    },
    clearAllFilters() {
      this.fl = {};
    },
    async mergeToWishlist(products, wishlist) {
      try {
        if (wishlist.length > 0) {
          products.map(p => {
            for (const w of wishlist) {
              if (
                p._id == w.product._id &&
                p.variants[0]._id == w.variant._id
              ) {
                p.wished = true;
              }
            }
          });
        }
      } catch (e) { }
    },
    loadMore() {
      this.changePage()
    },
    sortNow() {
      this.flush(); // To allow http get request
      this.getData();
    },
    flush() {
      this.meta.end = false;
      this.meta.skip = 0;
      this.meta.limit = this.$store.state.settings.pageSize;
      this.products = []; // Reset query parameters
    },
    async getWishlist() {
      let user = (this.$store.state.auth || {}).user || null;
      if (user) {
        try {
          let auth = this.$cookies.get("Authorization");
          this.$axios.setToken(auth, "Bearer");
          this.wishlist = await this.$axios.$get("api/wishlists/my");
        } catch (e) { }
      } else {
      }
    },
    async saveLastVisit() {
      if (!process.server) {
        const lastVisit =
          this.$router &&
          this.$router.currentRoute &&
          this.$router.currentRoute.fullPath;
        localStorage.setItem("lastVisit", lastVisit);
      }
    }
  },
}

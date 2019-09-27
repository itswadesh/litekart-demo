<template>
  <div>
    <Breadcrumb :product="product" />
    <div class="flex flex-wrap justify-start">
      <ProductImage :product="product" />
      <ProductDetails
        :product="product"
        :selectedVariant="selectedVariant"
      />
      <!-- <ProductDetailsFlipkart :product="product" /> -->
    </div>
  </div>
</template>

  <script>
import { HOST, TITLE, DESCRIPTION, KEYWORDS, sharingLogo } from "~/config";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import { Carousel, Slide } from "vue-carousel";
import ProductImage from "~/components/details/ProductImage";
import Breadcrumb from "~/components/details/Breadcrumb";
import ProductDetails from "~/components/details/ProductDetails";
import ProductDetailsFlipkart from "~/components/details/ProductDetailsFlipkart";
export default {
  async validate({ query, $axios }) {
    try {
      let product = await $axios.$get("products/" + query.id);
      return !!product;
    } catch (e) {
      return false;
    }
  },
  components: {
    ProductImage,
    Breadcrumb,
    ProductDetails,
    ProductDetailsFlipkart
  },
  mounted() {
    if (this.product) {
      this.scrollTo();
    }
  },
  async asyncData({ params, query, $axios }) {
    let product = {},
      selectedVariant = null,
      err = null;
    try {
      product = await $axios.$get(`products/${query.id}`);
      if (!product || product == "null") product = {};
      else {
        for (let v of product && product.variants) {
          if (v.stock > 0) {
            selectedVariant = v;
            break;
          }
        }
      }
    } catch (e) {
      product = {};
      selectedVariant = null;
      if (e && e.response && e.response.data) {
        err = e.response.data;
      } else if (e && e.response) {
        err = e.response;
      } else {
        err = e;
      }
      console.log("err...", `${err}`);
    }

    const structuredData = {
      "@context": "http://schema.org/",
      "@type": "Product",
      name: product && product.name,
      description: product && product.description,
      sku: product && product.sku,
      image: HOST + (product && product.imgUrls && product.imgUrls[0])
    };
    return { product, selectedVariant, err, structuredData };
  },
  data() {
    return {
      similarProducts: [],
      RecentlyViewedProducts: [],
      YouMightAlsoLikeProducts: [],
      carouselShow: false,
      loading: false
    };
  },
  methods: {
    ...mapMutations(["setErr"]),
    scrollTo() {
      window.scroll({
        behavior: "smooth",
        left: 0,
        top: 0
      });
    },
    go(url) {
      this.$router.push(url);
    },
    // async getReviews() {
    //   if (!this.product || !this.product._id) return;
    //   try {
    //     this.loading = true;
    //     let r = await this.$axios.$get("reviews/product/" + this.product._id);
    //     this.loading = false;
    //     this.publishRatings(r);
    //     this.reviews = r;
    //   } catch (err) {
    //     this.loading = false;
    //     this.error(err);
    //   }
    // },
    publishRatings(r) {
      let vm = this;
      let reviewCount = 0;
      let rating = {
        r5: 0,
        r4: 0,
        r3: 0,
        r2: 0,
        r1: 0,
        count: 0,
        total: 0,
        avg: 0
      };
      r.forEach(function(i) {
        if (i.message) reviewCount++;
        if (i.rating) rating.count++;
        if (i.rating) rating.total = rating.total + i.rating;
        if (i.rating == 5) rating.r5++;
        if (i.rating == 4) rating.r4++;
        if (i.rating == 3) rating.r3++;
        if (i.rating == 2) rating.r2++;
        if (i.rating == 1) rating.r1++;
      }, this);
      this.reviewCount = reviewCount;
      if (rating.count === 0) rating.avg = 0;
      else rating.avg = Math.round((rating.total / rating.count) * 10) / 10;
      this.rating = rating;
    },
    error(err) {
      this.setError(err.err);
    },
    clearRecentItems() {
      this.RecentlyViewedProducts = [];
    }
  },
  async created() {
    if (
      !this.product ||
      !this.product.categories ||
      !this.product.categories[0]
    )
      return;
    if (!process.server) {
      if (this.product) {
        let recentlyViewd = localStorage.getItem("recent");
        const currentId = this.product._id;
        if (recentlyViewd) {
          recentlyViewd = JSON.parse(recentlyViewd);
          if (!recentlyViewd) recentlyViewd = [];
          recentlyViewd.reverse();
          if (!recentlyViewd.includes(currentId)) {
            // if (recentlyViewd.length > 10) {
            //   recentlyViewd = [];
            // }
            recentlyViewd.push(currentId);
            localStorage.setItem("recent", JSON.stringify(recentlyViewd));
          }
        } else {
          let productId = [];
          productId.push(currentId);
          localStorage.setItem("recent", JSON.stringify(productId));
        }

        if (recentlyViewd && recentlyViewd.length > 0) {
          let recentProduct = await this.$axios.$post(
            "products/ids",
            recentlyViewd
          );
          this.RecentlyViewedProducts = recentProduct;
        }
      } else {
        // console.log("NO LOCALSTORAGE");
      }
    }
  },
  head() {
    const host = process.server
      ? this.$ssrContext.req.headers.host
      : window.location.host;
    return {
      title:
        (this.product && this.product.metaTitle) ||
        (this.product && this.product.name) ||
        TITLE,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            (this.product && this.product.metaDescription) ||
            (this.product && this.product.description) ||
            DESCRIPTION
        },
        {
          hid: "keywords",
          name: "Keywords",
          property: "keywords",
          content:
            (this.product && this.product.metaKeywords) ||
            (this.product && this.product.keywords) ||
            KEYWORDS
        },

        // OpenGraph data
        {
          hid: "og:title",
          name: "og_title",
          property: "og:title",
          content:
            (this.product && this.product.metaTitle) ||
            (this.product && this.product.name) ||
            TITLE
        },
        {
          hid: "og:description",
          name: "Description",
          property: "og:description",
          content:
            (this.product && this.product.metaDescription) ||
            (this.product && this.product.description) ||
            DESCRIPTION
        },
        {
          name: "og_url",
          property: "og:url",
          content: host + "/" + this.product.slug + "?id=" + this.product._id
        },
        {
          name: "og_image",
          property: "og:image",
          content:
            (this.product &&
              this.product.imgA &&
              this.product.imgA[0] &&
              this.product.imgA[0].large) ||
            sharingLogo
        },
        {
          property: "og:image:width",
          content: "600"
        },
        {
          property: "og:image:height",
          content: "600"
        },
        // Twitter
        {
          name: "twitter:title",
          content:
            (this.product && this.product.metaTitle) ||
            (this.product && this.product.name) ||
            TITLE
        },
        {
          name: "twitter:description",
          content:
            (this.product && this.product.metaDescription) ||
            (this.product && this.product.description) ||
            DESCRIPTION
        },
        {
          name: "twitter:image:src",
          content:
            (this.product &&
              this.product.imgA &&
              this.product.imgA[0] &&
              this.product.imgA[0].large) ||
            sharingLogo
        },
        // Google / Schema.org markup:
        {
          hid: "product_name",
          itemprop: "name",
          content: (this.product && this.product.name) || TITLE
        },
        {
          hid: "product_description",
          itemprop: "description",
          content:
            (this.product && this.product.metaDescription) ||
            (this.product && this.product.description) ||
            DESCRIPTION
        },
        {
          hid: "product_image",
          itemprop: "image",
          content:
            (this.product &&
              this.product.imgA &&
              this.product.imgA[0] &&
              this.product.imgA[0].large) ||
            sharingLogo
        },
        {
          hid: "product_price",
          name: "product_price",
          property: "product:price",
          content:
            this.product &&
            this.product.variants &&
            this.product.variants[0] &&
            this.product.variants[0].price
        }
      ]
    };
  }
};
</script>


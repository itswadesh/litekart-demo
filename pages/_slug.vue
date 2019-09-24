<template>
  <div>
    <Header />
    <Breadcrumb :product="product" />
    <div class="flex flex-wrap justify-start">
      <ProductImage :product="product" />
      <ProductDetails :product="product" />
      <!-- <ProductDetailsFlipkart :product="product" /> -->
    </div>
  </div>
</template>

  <script>
const Header = () => import("~/components/Header");
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
    Header,
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
  computed: {
    ...mapGetters({
      checkCart: "cart/checkCart"
    }),
    calculateOffPercent() {
      let percent =
        ((this.product.variants[0].mrp - this.product.variants[0].price) *
          100) /
        this.product.variants[0].mrp;
      return Math.round(percent);
    },
    calculatePrice() {
      let price = 0;
      if (this.product.variants[0].price < this.product.variants[0].mrp) {
        price = this.product.variants[0].price;
      } else {
        price = this.product.variants[0].mrp;
      }
      return price;
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
      shake: false,
      currentImage: null,
      similarProducts: [],
      RecentlyViewedProducts: [],
      YouMightAlsoLikeProducts: [],
      carouselShow: false,
      loading: false,
      productDescription: false,
      plusIcon: true,
      minusIcon: false,
      selectedImgIndex: 0,
      sizepopup: false,
      // slider_1: true,
      slider_2: true,
      groupProducts: [],
      userSelectedVariant: null,
      slider_options: {
        items: 9,
        gutter: 10,
        loop: false,
        swipeAngle: 50,
        controls: true,
        nav: false,
        mouseDrag: true,
        responsive: {
          50: {
            items: 1
          },
          550: {
            items: 2
          },
          700: {
            items: 3
          },
          900: {
            items: 4
          },
          1150: {
            items: 5
          }
        }
      }
    };
  },
  methods: {
    ...mapMutations(["setErr"]),
    ...mapActions({ addToCart: "cart/addToCart" }),
    selectedColor() {},
    toast() {
      this.$toast
        .show(
          `
      <div class="flex">
        <img class="w-12 h-12 object-cover" src="${this.currentImage}"/>
        <div>
          <div>${this.product.name.substr(0, 20) + "..."}</div>
          <div class="text-gray-600 text-xs">Added to your cart</div>
          <div class="text-pink-600">View cart</div>
        </div>
      </div>
      `,
          {
            containerClass: "sw-toast-container",
            theme: "outline",
            position: "top-right",
            singleton: false
          }
        )
        .goAway(1000);
    },
    scrollTo() {
      window.scroll({
        behavior: "smooth",
        left: 0,
        top: 0
      });
    },
    addToBag(obj) {
      // if (!this.userSelectedVariant) {
      //   this.setErr("Please select a size");
      //   this.shake = true;
      //   setTimeout(() => {
      //     this.shake = false;
      //   }, 3000);
      //   return;
      // } else {
      this.addToCart(obj);
      if (this.$store.state.settings.analytics.fbPixels_status === "enabled") {
        this.$fb.track("AddToCart", {
          content_type: "product",
          content_ids: this.product._id,
          content_name: this.product.name,
          currency: "INR",
          value: this.calculatePrice
        });
      }
      this.toast();
      // }
    },
    showAsCurrentImage(image) {
      this.currentImage = image;
    },
    showDescription() {
      this.productDescription = true;
      this.plusIcon = false;
      this.minusIcon = true;
    },
    hideDescription() {
      this.productDescription = false;
      this.plusIcon = true;
      this.minusIcon = false;
    },
    changeVariant(v) {
      this.selectedVariant = v;
    },
    slider_1_options() {
      return Object.assign({}, this.slider_options, {
        container: this.$refs.slider_1,
        nextButton: this.$refs.slider_1_next_btn,
        prevButton: this.$refs.slider_1_prev_btn
      });
    },
    slider_2_options() {
      return Object.assign({}, this.slider_options, {
        container: this.$refs.slider_2,
        nextButton: this.$refs.slider_2_next_btn,
        prevButton: this.$refs.slider_2_prev_btn
      });
    },
    handler() {},
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
    selectVariant(s) {
      this.selectedVariant = s;
      this.userSelectedVariant = s;
      this.selectedImgIndex = 0;
    },
    selectImg(ix) {
      this.selectedImgIndex = ix;
    },
    afterImageLoaded(component) {},
    error(err) {
      this.setError(err.err);
    },
    clearRecentItems() {
      this.RecentlyViewedProducts = [];
    }
  },
  async created() {
    if (this.product.group && this.product.group.trim()) {
      this.groupProducts = await this.$axios.get(
        "products/groupItems/" + this.product.group
      );
    }

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
          recentlyViewd.reverse();
          if (!recentlyViewd.includes(currentId)) {
            if (recentlyViewd.length > 10) {
              recentlyViewd = [];
            }
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


<style scoped>
.zoom {
  transition: transform 0.7s;
}
.zoom:hover {
  transform: scale(1.035);
}
</style>
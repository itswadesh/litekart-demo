<template>
  <div>
    <Header />
    <div class="flex flex-wrap justify-start p-2">
      <div class="w-full md:w-6/12 lg:w-5/12 flex justify-start flex-wrap">
        <div class="flex md:flex-col hidden md:block md:order-1">
          <img
            v-for="(i,ix) in product.imgUrls"
            :key="ix"
            class="w-24 cursor-pointer"
            v-lazy="i"
            alt
            @click="showAsCurrentImage(i)"
          />
        </div>
        <div class="flex-1 xs:order-1 md:order-2">
          <img
            class="hidden md:inline-block w-full border border-gray-400"
            v-lazy="`${currentImage}`"
          />
          <carousel
            class="md:hidden"
            :perPage="1"
            :paginationEnabled="false"
          >
            <slide
              class="inline-block w-full border border-gray-400"
              v-for="i in product.imgUrls"
              :key="i"
            >
              <img
                class="inline-block w-full border border-gray-400"
                v-lazy="`${i}`"
              />
            </slide>
          </carousel>
          <div class="w-full flex">
            <button
              :disabled="!selectedVariant.price || selectedVariant.stock==0 || $store.state.loading"
              v-if="!checkCart({pid:product._id, vid:selectedVariant._id})"
              @click="addToBag({pid:product._id, vid:selectedVariant._id,qty:1})"
              class="bg-orange-500 flex-1 my-3 p-3 md:p-5 mr-2 text-center font-bold text-white focus:outline-none text-xs lg:text-lg"
            >
              <i
                class="fa fa-shopping-cart mr-2"
                aria-hidden="true"
              ></i> ADD TO CART
            </button>
            <button class="bg-yellow-600 flex-1 my-3 p-3 md:p-5 text-center font-bold text-white focus:outline-none text-xs lg:text-lg">
              <i
                class="fa fa-bolt mr-2"
                aria-hidden="true"
              ></i>BUY NOW
            </button>
          </div>
        </div>
      </div>
      <div class="w-full md:w-6/12 lg:w-7/12 p-2">
        <div class="w-full flex flex-wrap">
          <p class="w-9/12 left-0 text-left text-xs text-gray-500">
            Home
            <i
              class="fa fa-angle-right"
              aria-hidden="true"
            ></i>
            Wearable Smart Watch
            <i
              class="fa fa-angle-right"
              aria-hidden="true"
            ></i> Smart Bands
            <i
              class="fa fa-angle-right"
              aria-hidden="true"
            ></i>
            {{product.name}}
          </p>
          <p class="w-3/12 text-right right-0 pr-3">
            <i
              class="fa fa-share pr-2 text-gray-500"
              aria-hidden="true"
            ></i>Share
          </p>
        </div>
        <div class="w-full">
          <p class="xs:w-full lg:w-9/12 left-0 text-left text-lg text-black">{{product.name}}</p>
          <p class="mt-2">
            <a
              href
              class="w-9/12 left-0 text-left text-lg text-black mt-2"
            >
              <span class="text-white text-xs p-1 bg-green-700 rounded">
                4.1
                <i
                  class="fa fa-star"
                  aria-hidden="true"
                ></i>
              </span>
              <span class="text-gray-500 text-sm p-1">214 Ratings & 22 Reviews</span>
            </a>
          </p>
          <p class="w-9/12 left-0 text-left text-2xl font-bold text-black mt-2">{{product.variants[0].price | currency}}</p>
          <ul class="mt-2 text-sm">
            <li class="mt-3">
              <i
                class="mr-2 fa fa-calendar-check-o text-green-500"
                aria-hidden="true"
              ></i>No cost EMI ₹750/month. Standard EMI also available
              <a
                href
                class="text-blue-500 font-semibold"
              >
                View Plans
                <i
                  class="fa fa-angle-right"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
            <li class="mt-3">
              <i
                class="mr-2 fa fa-tag text-green-500"
                aria-hidden="true"
              ></i>
              <b>Bank Offer</b> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card
              <a
                href
                class="text-blue-500 font-semibold"
              >T & C</a>
            </li>
            <li class="mt-3">
              <i
                class="mr-2 fa fa-tag text-green-500"
                aria-hidden="true"
              ></i>
              <b>Bank Offer</b> 5% Cashback* on HDFC Bank Debit Cards
              <a
                href
                class="text-blue-500 font-semibold"
              >T & C</a>
            </li>
            <li class="mt-3">
              <i
                class="mr-2 fa fa-tag text-green-500"
                aria-hidden="true"
              ></i>
              <b>Bank Offer</b> Extra 5% off* with Axis Bank Buzz Credit Card
              <a
                href
                class="text-blue-500 font-semibold"
              >T & C</a>
            </li>
          </ul>
        </div>
        <div class="w-full flex flex-wrap mt-3">
          <p class="w-20 pt-2 text-left text-sm text-gray-500">Delivery</p>
          <div class="lg:w-1/3 xs:w-full text-left left-0 relative">
            <i
              aria-hidden="true"
              class="fa fa-map-marker absolute mt-3"
            ></i>
            <input
              type="search"
              placeholder="Enter Delivery Pincode"
              class="p-2 pl-5 w-full focus:outline-none text-sm border-blue-600 border-b"
            />
            <button class="absolute text-sm mt-2 text-blue-500 font-bold focus:outline-none hover:text-gray-600 cursor-pointer">Check</button>
            <br />
            <p class="w-full text-justify mt-2 text-sm text-red-500">Not a valid pincode</p>
          </div>
        </div>

        <div class="w-full flex flex-wrap mt-3">
          <p class="w-20 pt-2 text-left text-sm text-gray-500">Color</p>
          <div class="xs:w-full lg:w-1/3 flex flex-wrap justify-start">
            <img
              class="w-14 h-12 cursor-pointer"
              src="/small-product.png"
            />
            <img
              class="w-14 h-12 cursor-pointer"
              src="/small-product.png"
            />
            <img
              class="w-14 h-12 cursor-pointer"
              src="/small-product.png"
            />
          </div>
        </div>

        <div class="w-full mt-3 flex flex-wrap">
          <div class="xs:w-full lg:w-1/2 flex flex-wrap">
            <div class="w-20">
              <p class="pt-2 text-left text-sm text-gray-500">Highlights</p>
            </div>
            <div class="w-48">
              <ul class="mt-2 text-sm">
                <li class="mt-3">Activity Tracking, Sleep Tracking, Calories Burnt, Automatic Exercise Recognition</li>
                <li class="mt-3">15 Goal Based Exercise Modes Like - Running, Biking, Yoga etc</li>
                <li class="mt-3">24/7 Heart Rate Tracking</li>
                <li class="mt-3">Swim-proof Water Resistant Upto 50 m</li>
              </ul>
            </div>
          </div>
          <div class="xs:w-full lg:w-1/2 flex flex-wrap">
            <div class="w-20">
              <p class="pt-2 text-left text-sm text-gray-500">Services</p>
            </div>
            <div class="w-48">
              <ul class="mt-2 text-sm">
                <li class="mt-3">
                  <i
                    class="mr-2 fa fa-shield"
                    aria-hidden="true"
                  ></i> 1 Year Warranty Provided by the Manufacturer from Date of Purchase
                </li>
                <li class="mt-3">
                  <i
                    class="mr-2 fa fa-exchange"
                    aria-hidden="true"
                  ></i>24/7 Heart Rate Tracking
                </li>
                <li class="mt-3">
                  <i
                    class="mr-2 fa fa-inr"
                    aria-hidden="true"
                  ></i> 24/7 Heart Rate Tracking
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="w-full flex flex-wrap mt-3 mb-10 text-justify">
          <p class="w-20 pt-2 text-left text-sm text-gray-500">Seller</p>
          <div class="w-1/3 mt-3">
            <a
              href
              class="text-blue-500"
            >RetailNet</a>
            <span class="text-white text-xs p-1 text-center bg-blue-500 rounded-l-lg rounded-r-lg">
              4.1
              <i
                class="fa fa-star"
                aria-hidden="true"
              ></i>
            </span>
          </div>
        </div>

        <div class="w-full flex flex-wrap mt-3 mb-10">
          <p class="w-20 pt-2 text-left text-sm text-gray-500">Description</p>
          <div class="xs:w-full lg:w-4/5 text-justify mt-3">
            <p>Meet the Fitbit Inspire HR, your new partner who will guide you towards a healthier lifestyle. From tracking your heart rate and sleep quality to the number of calories you burn and the steps you take, the Inspire HR is designed to get you up and moving.</p>
          </div>
        </div>
        <!-- Product description -->
        <div>
          <div class="w-full flex flex-wrap mt-3 border p-5">
            <p class="text-2xl">Product Description</p>
            <p class="text-sm">Meet the Fitbit Inspire HR, your new partner who will guide you towards a healthier lifestyle. From tracking your heart rate and sleep quality to the number of calories you burn and the steps you take, the Inspire HR is designed to get you up and moving.</p>
          </div>
          <div class="w-full border-b border-l border-r p-5">
            <p class="text-sm">Meet the Fitbit Inspire HR, your new partner who will guide you towards a healthier lifestyle. From tracking your heart rate and sleep quality to the number of calories you burn and the steps you take, the Inspire HR is designed to get you up and moving.</p>
          </div>
          <div class="w-full border-b border-l border-r p-5">
            <p class="text-md text-blue-500">
              <a href>View all features</a>
            </p>
          </div>
        </div>

        <!-- Specification -->
        <div>
          <div class="w-full flex flex-wrap mt-3 border p-5">
            <p class="text-2xl">Specifications</p>
          </div>
          <div class="w-full border-b border-l border-r p-5">
            <p class="text-lg">General</p>
            <table>
              <tr>
                <td class="text-gray-500 w-48">Model Number</td>
                <td>FB413BKBK</td>
              </tr>
              <tr>
                <td class="text-gray-500 w-48">Model Number</td>
                <td>FB413BKBK</td>
              </tr>
              <tr>
                <td class="text-gray-500 w-48">Model Number</td>
                <td>FB413BKBK</td>
              </tr>
              <tr>
                <td class="text-gray-500 w-48">Model Number</td>
                <td>FB413BKBK</td>
              </tr>
              <tr>
                <td class="text-gray-500 w-48">Model Number</td>
                <td>FB413BKBK</td>
              </tr>
            </table>
          </div>
          <div class="w-full border-b border-l border-r p-5">
            <p class="text-md text-blue-500">
              <a href>Read More</a>
            </p>
          </div>
        </div>
        <!-- Product Review -->
        <div>
          <div class="w-full flex flex-wrap mt-3 border p-5">
            <p class="xs:text-xl lg:text-2xl w-1/2">Ratings & Reviews</p>
            <p class="text-sm w-1/2 text-right">
              <button class="bg-white border px-4 py-2 shadow font-normal">Rate Product</button>
            </p>
            <div class="text-sm w-full flex flex-wrap">
              <div class>
                <span class="text-black text-4xl text-center">4.1</span>
                <i
                  class="fa fa-star"
                  aria-hidden="true"
                ></i>
                <br />
                <span class="text-gray-500 text-xs p-1">
                  214 Ratings
                  <br />& 22 Reviews
                </span>
              </div>
              <div class="flex-1">
                <div class="w-full bg-grey-light">
                  <div class="flex flex-wrap">
                    <span>
                      5
                      <i
                        class="fa fa-star w-1/5"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <div class="w-4/5 h-2 bg-green-500 rounded-lg m-1 text-xs leading-none text-center text-white"></div>
                  </div>

                  <div class="flex flex-wrap">
                    <span>
                      4
                      <i
                        class="fa fa-star w-1/5"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <div class="w-4/5 h-2 bg-green-500 rounded-lg m-1 text-xs leading-none text-center text-white"></div>
                  </div>

                  <div class="flex flex-wrap">
                    <span>
                      3
                      <i
                        class="fa fa-star w-1/12"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <div class="w-4/5 h-2 bg-green-500 rounded-lg m-1 text-xs leading-none text-center text-white"></div>
                  </div>

                  <div class="flex flex-wrap">
                    <span>
                      2
                      <i
                        class="fa fa-star w-1/5"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <div class="w-4/5 h-2 bg-green-500 rounded-lg m-1 text-xs leading-none text-center text-white"></div>
                  </div>

                  <div class="flex flex-wrap">
                    <span>
                      1
                      <i
                        class="fa fa-star w-1/5"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <div class="w-4/5 h-2 bg-green-500 rounded-lg m-1 text-xs leading-none text-center text-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full border-b border-l border-r p-5 flex flex-wrap">
            <span class="text-white text-xs p-1 bg-green-700 rounded">
              4.1
              <i
                class="fa fa-star"
                aria-hidden="true"
              ></i>
            </span>
            <p class="text-lg font-bold ml-3">Must Buy</p>
            <div class="w-full text-xs pt-2">Quick Delivery by Flipkart. Many feature Activity Tracker at a reasonable Price Tag with an equally good App.</div>
            <div class="w-9/12 text-xs text-gray-500 pt-2">
              <span class="font-bold">B K Nanda</span>
              <i
                class="fa fa-certificate"
                aria-hidden="true"
              ></i>
              Certified Buyer, Jamshedpur
              5 months ago
            </div>
            <div class="w-3/12 text-xs text-gray-500 pt-2 text-sm">
              <p>
                18
                <i
                  class="fa fa-thumbs-o-up mr-6"
                  aria-hidden="true"
                ></i>
                19
                <i
                  class="fa fa-thumbs-o-down mr-6"
                  aria-hidden="true"
                ></i>
                <i
                  class="fa fa-angle-down"
                  aria-hidden="true"
                ></i>
              </p>
            </div>
          </div>
          <div class="w-full border-b border-l border-r p-5">
            <p class="text-md text-blue-500">
              <a href>All 22 reviews</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  <script>
const Header = () => import("~/components/Header");
import { HOST, TITLE, DESCRIPTION, KEYWORDS, sharingLogo } from "~/config";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import { Carousel, Slide } from "vue-carousel";

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
    Carousel,
    Slide
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
  watch: {
    // images(newVal) {
    //   this.currentImage = newVal[0];
    // }
  },
  methods: {
    ...mapMutations(["setErr"]),
    ...mapActions({ addToCart: "cart/addToCart" }),
    selectedColor() {
      alert("ere");
    },
    toast() {
      this.$toast
        .show(
          `
      <div class="toast-card h-64">
        <img class="img w-24 h-48 object-cover" src="${this.currentImage}"/>
        <div class="detail">
          <div class="name">${this.product.name}</div>
          <div class="mute">Added to your cart</div>
          <div class="link">View cart</div>
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
        .goAway(500);
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
    this.currentImage = this.product.imgUrls && this.product.imgUrls[0];
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
      // script: [
      //   {
      //     innerHTML: JSON.stringify(this.structuredData),
      //     type: "application/ld+json"
      //   }
      // ]
    };
  }
};
</script>


<style>
</style>
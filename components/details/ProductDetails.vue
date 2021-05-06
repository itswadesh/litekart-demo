<template>
  <div class="w-full">
    <div class="mb-3 lg:mb-0">
      
      <div class="w-full h-full px-3 pb-4 border-b border-gray-200">
        <div class="text-2xl font-semibold">{{product.brandName}}</div>
        <div class="text-xl">{{product.name}}</div>
      </div>
      
      <div
        class="px-3 py-3 font-semibold tracking-wider sizeSelector"
        v-if="selectedVariant"
      >
        <!-- <div v-if="!selectedVariant._id">
        <span class="mr-2 text-2xl">{{product.price | currency}}</span>
        <span class="mr-2 text-lg font-hairline line-through">{{product.mrp | currency}}</span>
        </div>-->
        <span class="mr-2 text-2xl">{{selectedVariant.price | currency}}</span>
        <span
          class="mr-2 text-lg font-hairline line-through"
          v-if="selectedVariant.mrp > selectedVariant.price"
        >{{selectedVariant.mrp | currency}}</span>
        <span
          class="text-xl text-orange-500"
          v-if="calculateOffPercent>0"
        >({{calculateOffPercent}}% OFF)</span>
        <p class="text-sm font-hairline">Additional tax shall apply, charged at checkout</p>
      </div>
    </div>
    <div>
      <div class="items-center p-3 px-3 my-3 text-sm bg-gray-100 lg:my-0">
        <div class="flex items-center">
          <span class="mr-4"> SELECT SIZE</span>
          <img
            class="h-3 ml-6 mr-2 -mt-1"
            alt=""
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOCIgaGVpZ2h0PSIxMiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMyODc0RjAiIHN0cm9rZS13aWR0aD0iMS4zIj48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0zNy4zNS42NUguNjV2MTAuN2gzNi43Vi42NXoiLz48cGF0aCBmaWxsPSIjODc4Nzg3IiBkPSJNNi42NSA4LjY1aDF2Mi43aC0xem00LTNIMTFsLS4zNS0uMzVWNWwtLjE1LjE1LS4xNS0uMTV2LjNsLS4zNS4zNWguMzV2NS43SDEwbC4zNS4zNXYuM2wuMTUtLjE1LjE1LjE1di0uM2wuMzUtLjM1aC0uMzV2LTUuN3ptNSAzSDE2bC0uMzUtLjM1VjhsLS4xNS4xNS0uMTUtLjE1di4zbC0uMzUuMzVoLjM1djIuN0gxNWwuMzUuMzV2LjNsLjE1LS4xNS4xNS4xNXYtLjNsLjM1LS4zNWgtLjM1di0yLjd6bTQtM2gxdjUuN2gtMXptNCAzaDF2Mi43aC0xem05IDBoMXYyLjdoLTF6bS00LTNoMXY1LjdoLTF6Ii8+PC9nPjwvc3ZnPg=="
          />
          <div class="flex items-center text-primary">
            <span class="">SIZE CHART</span>
            <i class="block ml-2 -mt-1 fa fa-angle-right"></i>
          </div>
        </div>
        <div
          class="relative flex flex-wrap px-3 py-4"
          :class="{'shake-animation': shake}"
        >
        <div v-for="v in product.variants" :key="v._id">
          <button
           
            @click="selectVariant(v)"
            :class="{'bg-gray-700 text-white': v.size==(userSelectedVariant && userSelectedVariant.size)}"
            v-if="v.stock>0"
            class="w-12 h-12 m-1 border border-gray-400 rounded-full focus:outline:none hover:border-black hover:font-bold"
          >
            <div class="text-xs">{{v.size}}</div>
            <div
              v-if="v.stock<5"
              class="absolute w-12 text-xs font-semibold text-white bg-orange-500 rounded"
            >{{v.stock}} left</div>
          </button>
          <button
            v-else
            class="w-12 h-12 m-1 text-white bg-gray-700 border border-gray-400 rounded-full focus:outline:none"
          >
            <div class="text-xs">{{v.size}}</div>
            <div
              class="absolute w-12 text-xs font-semibold text-white bg-orange-500 rounded"
            >No stock</div>
          </button>
        </div>
        </div>
      </div>

      <div
        class="flex px-3 py-4"
        v-if="groupProducts.data && groupProducts.data.length>0"
      >
        <nuxt-link
          v-for="p in groupProducts.data"
          :key="p._id"
          :to="'/'+p.slug+'?id='+p._id"
          class="w-12 h-12 p-1 mr-3 border border-gray-100 rounded-full tooltip hover:border-green-300"
          :class="{'border-red-500': product.color.name=== (p.color && p.color.name)}"
        >
          <img
            v-lazy="p.img && $store.state.settings.CDN_URL+p.img[0]"
            :alt="p.color && p.color.name"
            class="w-12 h-10 rounded-full"
          />
          <span
            class="tooltiptext"
            v-if="p.color"
          >{{p.color.name}}</span>
        </nuxt-link>
      </div>
      <div class="fixed bottom-0 z-10 flex w-full p-2 bg-white lg:relative lg:px-3">
        <button
          :disabled="!selectedVariant || !selectedVariant.price || selectedVariant.stock==0 || $store.state.loading"
          @click="addToBag({pid:product._id, vid:selectedVariant._id,qty:1})"
          class="w-7/12 px-6 py-2 mr-2 text-sm font-bold text-white rounded lg:w-1/3 primary lg:text-lg"
        >
          <i
            class="hidden mr-2 fa fa-shopping-bag lg:block"
            aria-hidden="true"
          ></i> ADD TO BAG
        </button>
        <button
          @click="toggleWishlist"
          v-if="wished"
          class="w-5/12 px-6 py-2 text-sm font-bold text-green-500 border rounded lg:w-1/3 border-grey-300 lg:text-lg"
        >
          <i
            class="hidden mr-2 fa fa-check lg:block"
            aria-hidden="true"
          ></i> WISHED
        </button>
        <button
          @click="toggleWishlist"
          v-else
          class="w-5/12 px-6 py-2 text-sm font-bold text-black border rounded lg:w-1/3 border-grey-300 lg:text-lg"
        >
          <i
            class="hidden mr-2 fa fa-bookmark lg:block"
            aria-hidden="true"
          ></i> WISHLIST
        </button>
      </div>
      <!-- <div class="px-3 py-8 my-3 border-b border-gray-300 lg:my-0"> -->
      <!-- <p class="text-lg font-bold">
          BEST OFFERS
          <i
            class="ml-2 text-gray-600 fa fa-tag"
            aria-hidden="true"
          ></i>
        </p>
        <span class="text-gray-500">This product is already at its best price</span> -->
      <!-- <div> -->
      <!-- <button class="relative w-full px-3 py-2 my-2 text-left border rounded lg:w-3/5 hover:border-gray-500">
            <div class="font-bold">10% instant discount on Federal Bank Cards</div>
            <div class="text-sm font-hairline text-gray-500">This product is already at its best price</div>
            <span class="absolute top-0 right-0 invisible mt-2 mr-3 hover:block">
              view
              <i
                class="ml-2 fa fa-angle-right"
                aria-hidden="true"
              ></i>
            </span>
          </button> -->

      <!-- <button class="relative w-full px-3 py-2 my-2 text-left border rounded lg:w-3/5 hover:border-gray-500">
            <div class="font-bold">10 super cashback on MobiWiki</div>
            <div class="text-sm font-hairline text-gray-500">Max super cashback of Rs.250. TCA</div>
            <span class="absolute top-0 right-0 invisible mt-2 mr-3 hover:block">
              view
              <i
                class="ml-2 fa fa-angle-right"
                aria-hidden="true"
              ></i>
            </span>
          </button>

          <button class="relative w-full px-3 py-2 my-2 text-left border rounded lg:w-3/5 hover:border-gray-500">
            <div class="font-bold">Flat 200 cashback on Airtel Payments Bank</div>
            <div class="text-sm font-hairline text-gray-500">Min spend 2,000;for first time transaction. TCA</div>
            <span class="absolute top-0 right-0 invisible mt-2 mr-3 hover:block">
              view
              <i
                class="ml-2 fa fa-angle-right"
                aria-hidden="true"
              ></i>
            </span>
          </button>

          <button class="relative w-full px-3 py-2 my-2 text-left border rounded lg:w-3/5 hover:border-gray-500">
            <div class="font-bold">EMI option available</div>
            <div class="text-sm font-hairline text-gray-500">EMI starting from Rs.26/month</div>
            <span class="absolute top-0 right-0 invisible mt-2 mr-3 hover:block">
              view
              <i
                class="ml-2 fa fa-angle-right"
                aria-hidden="true"
              ></i>
            </span>
          </button> -->
      <!-- </div>
      </div> -->
      <div
        class="px-3 py-8 my-3 bg-gray-100 border-b border-gray-300 lg:my-0"
        v-if="product.details"
      >
        <p class="text-lg font-bold">
          PRODUCT DETAILS
          <i
            class="ml-2 text-gray-600 fa fa-list-alt"
            aria-hidden="true"
          ></i>
        </p>
        <span class="text-gray-500">{{product.detail}}</span>
        <!-- <p class="text-lg font-bold">Size & Fit</p>
        <span class=">he model (height 5'8") is wearing a size S</span>

        <p class="text-lg font-bold">Material & Care</p>
        <span class=">
          Polyester
          <br />Machine-wash
        </span> -->
      </div>
      <div class="px-3 py-3">
        <p class="text-lg font-bold">Specifications</p>
        <div class="flex w-full py-1">
          <div
            class="w-1/2 mr-4 border-b border-gray-400"
            v-for="f in product.features"
            :key="f._id"
          >
            <p class="text-xs text-gray-500">{{f.key}}</p>
            <span class="text-sm">{{f.val}}</span>
          </div>
        </div>
        <!-- <span class="font-bold text-primary">See More</span> -->
      </div>
      <!-- <div class="p-3 my-3 bg-white lg:my-0">
        <p class="text-lg font-bold">
          DELIVERY OPTIONS
          <i
            class="ml-2 text-gray-600 fa fa-truck"
            aria-hidden="true"
          ></i>
        </p>
        <div class="leading-loose text-gray-600">
          <div class="relative flex flex-wrap justify-between w-full pb-2 lg:w-1/3 hr-line">
            <input
              type="search"
              class="w-full p-2 bg-gray-200 border rounded"
              placeholder="PinCode"
            />
            <button class="absolute right-0 pr-2 mt-2 text-sm font-bold cursor-pointer text-primary hover:text-gray-600">Check</button>
          </div>
          <span class="text-xs text-gray-500">Please enter PIN code to check Availability</span>
          <ul class="text-sm font-hairline">
            <li>Tax: Applicable tax on the basis of exact location & discount will be charged at the time of checkout</li>
            <li>100% Original Products</li>
            <li>Free Delivery on order above Rs. 1199</li>
            <li>Cash on delivery might be available</li>
            <li>Easy 30 days returns and exchanges</li>
            <li>Try & Buy might be available</li>
          </ul>

          <p>
            Product Code:
            <span class="font-bold text-black">1923967</span>
          </p>

          <p>
            Sold by:
            <a
              href="#"
              class="font-bold text-black"
            >SERA GROUP</a>
          </p>

          <p class="text-sm font-semibold text-black">Manufacturer/Packer/Importer Details</p>
          <span class="text-xs">Sera Group, 1st Floor, Gehlot Farms, Sector-47, Gurgaon</span>

          <p class="text-sm font-semibold text-black">Country of origin</p>
          <span class="text-xs">India</span>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

import Button from "~/components/ui/Button";

export default {
  components: { Button },
  props: {
    product: { type: Object },
    selectedVariant: { type: Object }
  },
  data() {
    return {
      wished: false,
      loading: false,
      userSelectedVariant: null,
      shake: false,
      groupProducts: [],
      sizepopup: false,
      productDescription: false
    };
  },
  computed: {
    ...mapGetters({
      checkCart: "cart/checkCart"
    }),
    user() {
      return (this.$store.state.auth || {}).user || null;
    },
    calculateOffPercent() {
      if (!this.product || !this.product.variants[0]) return 0;
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
  async created() {
    try {
      // Check if this product at wishlist
      this.loading = true;
      const w = await this.$axios.$get(
        "api/wishlists/product/" +
          this.product._id +
          "/" +
          this.selectedVariant._id
      );
      this.loading = false;
      this.wished = w.data.length > 0 ? true : false;
      // Find other available colors (grouped products)
      if (this.product.group && this.product.group.trim()) {
        this.groupProducts = await this.$axios.get(
          "api/products/groupItems/" + this.product.group
        );
      }
    } catch (e) {
      this.loading = false;
    }
  },
  methods: {
    ...mapMutations(["setErr"]),
    ...mapActions({ addToCart: "cart/addToCart" }),
    toggleWishlist() {
      if (!this.userSelectedVariant) {
        this.setErr("Please select a size");
        if (process.client) {
          const el = this.$el.getElementsByClassName("sizeSelector")[0];
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
        this.shake = true;
        setTimeout(() => {
          this.shake = false;
        }, 3000);
        return;
      } else if (!this.user) {
        this.pushToLogin();
        return;
      }
      this.save();
    },
    async save() {
      let sourceCatgID;
      if (this.product.categories && this.product.categories[0])
        sourceCatgID = this.product.categories[0]._id;
      this.loading = true;
      let p = { product: this.product, variant: this.userSelectedVariant };
      try {
        let data = await this.$axios.$post("api/wishlists", p);
        if (data.msg !== "deleted") {
          this.wished = true;
          this.$store.commit("success", "Added to your wishlist"); // Should be at end because it returns false
        } else {
          this.wished = false;
          // Could not do commit('setErr') because it throws back error
          this.$store.commit("setErr", "Removed from wishlist");
          // this.$store.commit("setErr", "Removed from wishlist"); // Should be at end because it returns false
        }
        this.loading = false;
      } catch (err) {
        if (err.response) {
          if (err.response.status == 401) {
            this.pushToLogin();
          }
        }
        this.loading = false;
        // this.err(err);
      }
    },
    pushToLogin() {
      const query = this.$route.query;
      let route = this.$route.path;
      route = route.substr(1);
      if (!query || !query.id)
        this.$router.push(`/account/login?return=${route}`);
      else
        this.$router.push(
          `/account/login?return=${route}?id=${query.id}&wish=true`
        );
      // &vid=${this.variant._id}
    },
    toast() {
      this.$toast
        .show(
          `
      <div class="flex flex-row w-full">
        <img class="object-cover w-12 h-12" src="${this.product.img &&
          this.$store.state.settings.CDN_URL + this.product.img[0]}" alt="" />
        <div class="items-center w-full toasted-text">
          <div class="w-full">${this.product.name.substr(0, 40) + "..."}</div>
          <div class="text-xs text-gray-600">Added to your cart</div>
        </div>
      </div>
      `,
          {
            containerClass: "sw-toast-container",
            theme: "outline",
            position: "top-right",
            singleton: false,
            action : {
                text : 'View Cart',
                onClick : (e, toastObject) => {
                  this.$router.push('/cart')
                    toastObject.goAway(0);
                }
            },
          }
        )
        .goAway(500000);
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

    addToBag(obj) {
      if (!this.userSelectedVariant) {
        this.setErr("Please select a size");
        if (process.client) {
          const el = this.$el.getElementsByClassName("sizeSelector")[0];
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
        this.shake = true;
        setTimeout(() => {
          this.shake = false;
        }, 3000);
        return;
      } else {
        this.addToCart(obj);
        this.toast();
      }
    },
    selectVariant(s) {
      // this.selectedVariant = s;
      this.userSelectedVariant = s;
      this.$emit("variantChanged", s);
      this.selectedImgIndex = 0;
    },
    error(err) {
      this.setError(err.err);
    },
    clearRecentItems() {
      this.RecentlyViewedProducts = [];
    }
  }
};
</script>

<style scoped>
/** Hover Tooltip Css ***/
.tooltip {
  position: relative;
  display: inline-block;
}
.tooltip .tooltiptext {
  visibility: hidden;
  width: 82px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 3px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-bottom: 7px;
  margin-left: -38px;
}
.tooltip:hover .tooltiptext {
  visibility: visible;
}
.tooltip .tooltiptext {
  opacity: 0;
  transition: opacity 0.5s;
}
.tooltip:hover .tooltiptext {
  opacity: 1;
}
.tooltip .tooltiptext::after {
  content: " ";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
}
/** End Hover Tooltip Css ***/

.shake-animation {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  border: 1px solid red;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
<template>
  <div class="w-full md:w-6/12 lg:w-7/12 leading-relaxed bg-gray-100">
    <div class="bg-white mb-3 lg:mb-0">
      <div class="pb-4 border-b border-gray-200 px-3">
        <p class="text-2xl headings font-semibold">{{product.brandName}}</p>
        <p>{{product.name}}</p>
      </div>
      <div class="px-3 headings font-semibold py-3 tracking-wider" v-if="selectedVariant">
        <!-- <div v-if="!selectedVariant._id">
        <span class="text-2xl mr-2">{{product.price | currency}}</span>
        <span class="font-hairline line-through text-lg mr-2">{{product.mrp | currency}}</span>
        </div>-->
        <span class="text-2xl mr-2">{{selectedVariant.price | currency}}</span>
        <span
          class="font-hairline line-through text-lg mr-2"
          v-if="selectedVariant.mrp > selectedVariant.price"
        >{{selectedVariant.mrp | currency}}</span>
        <span
          class="text-orange-500 text-xl"
          v-if="calculateOffPercent>0"
        >({{calculateOffPercent}}% OFF)</span>
        <p class="text-sm font-hairline">Additional tax shall apply, charged at checkout</p>
      </div>
    </div>
    <div>
      <div class="items-center text-sm lg:text-lg px-3 bg-white my-3 p-3 lg:my-0">
        <div class="flex">
          <span class="heading w-1/2 lg:w-32">SELECT SIZE</span>
          <div class="text-primary">
            <div class="flex items-center">
              <img
                class="mr-2 h-4"
                alt="size chart icon"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOCIgaGVpZ2h0PSIxMiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMyODc0RjAiIHN0cm9rZS13aWR0aD0iMS4zIj48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0zNy4zNS42NUguNjV2MTAuN2gzNi43Vi42NXoiLz48cGF0aCBmaWxsPSIjODc4Nzg3IiBkPSJNNi42NSA4LjY1aDF2Mi43aC0xem00LTNIMTFsLS4zNS0uMzVWNWwtLjE1LjE1LS4xNS0uMTV2LjNsLS4zNS4zNWguMzV2NS43SDEwbC4zNS4zNXYuM2wuMTUtLjE1LjE1LjE1di0uM2wuMzUtLjM1aC0uMzV2LTUuN3ptNSAzSDE2bC0uMzUtLjM1VjhsLS4xNS4xNS0uMTUtLjE1di4zbC0uMzUuMzVoLjM1djIuN0gxNWwuMzUuMzV2LjNsLjE1LS4xNS4xNS4xNXYtLjNsLjM1LS4zNWgtLjM1di0yLjd6bTQtM2gxdjUuN2gtMXptNCAzaDF2Mi43aC0xem05IDBoMXYyLjdoLTF6bS00LTNoMXY1LjdoLTF6Ii8+PC9nPjwvc3ZnPg=="
              />SIZE CHART
              <i class="fa fa-angle-right ml-3" style="margin-top:-1px;"></i>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap py-4 relative px-3" :class="{'shake-animation': shake}">
          <button
            v-for="v in product.variants"
            :key="v._id"
            @click="selectVariant(v)"
            :class="{'bg-gray-700 text-white': v.size==(userSelectedVariant && userSelectedVariant.size)}"
            v-if="v.stock>0"
            class="focus:outline:none m-1 rounded-full bg-white border border-gray-400 w-12 h-12 hover:border-black hover:font-bold"
          >
            <p class="text-xs">{{v.size}}</p>
            <div
              v-if="v.stock<5"
              class="text-xs font-semibold absolute w-12 bg-orange-500 text-white rounded"
            >{{v.stock}} left</div>
          </button>
        </div>
      </div>

      <div class="flex py-4 px-3" v-if="groupProducts.data && groupProducts.data.length>0">
        <nuxt-link
          v-for="p in groupProducts.data"
          :key="p._id"
          :to="'/'+p.slug+'?id='+p._id"
          class="mr-3 rounded-full w-12 h-12 tooltip border border-gray-100 hover:border-green-300 p-1"
          :class="{'border-red-500': product.color.name=== (p.color && p.color.name)}"
        >
          <img
            v-lazy="p.imgUrls && p.imgUrls[0]"
            :alt="p.color && p.color.name"
            class="rounded-full w-12 h-10"
          />
          <span class="tooltiptext" v-if="p.color">{{p.color.name}}</span>
        </nuxt-link>
      </div>
      <div class="flex fixed bottom-0 lg:relative bg-white lg:px-3 p-2 w-full z-10">
        <button
          :disabled="!selectedVariant.price || selectedVariant.stock==0 || $store.state.loading"
          @click="addToBag({pid:product._id, vid:selectedVariant._id,qty:1})"
          class="w-7/12 lg:w-1/3 mr-2 primary text-white py-2 px-6 rounded font-bold text-sm lg:text-lg"
        >
          <i class="fa fa-shopping-bag mr-2 hidden lg:block" aria-hidden="true"></i> ADD TO BAG
        </button>
        <button
          class="w-5/12 lg:w-1/3 bg-white border border-grey-300 text-black py-2 px-6 rounded font-bold text-sm lg:text-lg"
        >
          <i class="fa fa-bookmark mr-2 hidden lg:block" aria-hidden="true"></i> WISHLIST
        </button>
      </div>
      <div class="py-8 border-b border-gray-300 px-3 bg-white my-3 lg:my-0">
        <p class="font-bold text-lg">
          BEST OFFERS
          <i class="fa fa-tag ml-2 text-gray-600" aria-hidden="true"></i>
        </p>
        <span class="text-gray-500">This product is already at its best price</span>
        <div>
          <button
            class="w-full my-2 lg:w-3/5 relative text-left px-3 py-2 rounded border hover:border-gray-500"
          >
            <div class="font-bold">10% instant discount on Federal Bank Cards</div>
            <div
              class="font-hairline text-gray-500 text-sm"
            >This product is already at its best price</div>
            <span class="absolute right-0 top-0 mt-2 mr-3 hover:block invisible">
              view
              <i class="fa fa-angle-right ml-2" aria-hidden="true"></i>
            </span>
          </button>

          <button
            class="w-full my-2 lg:w-3/5 relative text-left px-3 py-2 rounded border hover:border-gray-500"
          >
            <div class="font-bold">10 super cashback on MobiWiki</div>
            <div class="font-hairline text-gray-500 text-sm">Max super cashback of Rs.250. TCA</div>
            <span class="absolute right-0 top-0 mt-2 mr-3 hover:block invisible">
              view
              <i class="fa fa-angle-right ml-2" aria-hidden="true"></i>
            </span>
          </button>

          <button
            class="w-full my-2 lg:w-3/5 relative text-left px-3 py-2 rounded border hover:border-gray-500"
          >
            <div class="font-bold">Flat 200 cashback on Airtel Payments Bank</div>
            <div
              class="font-hairline text-gray-500 text-sm"
            >Min spend 2,000;for first time transaction. TCA</div>
            <span class="absolute right-0 top-0 mt-2 mr-3 hover:block invisible">
              view
              <i class="fa fa-angle-right ml-2" aria-hidden="true"></i>
            </span>
          </button>

          <button
            class="w-full my-2 lg:w-3/5 relative text-left px-3 py-2 rounded border hover:border-gray-500"
          >
            <div class="font-bold">EMI option available</div>
            <div class="font-hairline text-gray-500 text-sm">EMI starting from Rs.26/month</div>
            <span class="absolute right-0 top-0 mt-2 mr-3 hover:block invisible">
              view
              <i class="fa fa-angle-right ml-2" aria-hidden="true"></i>
            </span>
          </button>
        </div>
      </div>
      <div class="py-8 border-b border-gray-300 px-3 bg-white my-3 lg:my-0">
        <p class="font-bold text-lg">
          PRODUCT DETAILS
          <i class="fa fa-list-alt ml-2 text-gray-600" aria-hidden="true"></i>
        </p>
        <span
          class="text-gray-500"
        >Black printed woven fit and flare dress, has a tie-up neck, three-quarter sleeves, flared hem</span>
        <p class="font-bold text-lg">Size & Fit</p>
        <span class="headings">he model (height 5'8") is wearing a size S</span>

        <p class="font-bold text-lg">Material & Care</p>
        <span class="headings">
          Polyester
          <br />Machine-wash
        </span>

        <p class="font-bold text-lg">Specifications</p>
        <div>
          <div class="w-full flex py-1">
            <div class="w-1/2 border-b border-gray-400 mr-4">
              <p class="text-xs text-gray-500">Shape</p>
              <span class="headings text-sm">Fit and Flare</span>
            </div>
            <div class="w-1/2 border-b border-gray-400 mr-4">
              <p class="text-xs text-gray-500">Neck</p>
              <span class="headings text-sm">Tie-Up Neck</span>
            </div>
          </div>
          <div class="w-full flex py-4">
            <div class="w-1/2 border-b border-gray-400 mr-4">
              <p class="text-xs text-gray-500">Shape</p>
              <span class="headings text-sm">Fit and Flare</span>
            </div>
            <div class="w-1/2 border-b border-gray-400 mr-4">
              <p class="text-xs text-gray-500">Neck</p>
              <span class="headings text-sm">Tie-Up Neck</span>
            </div>
          </div>
          <div class="w-full flex py-4">
            <div class="w-1/2 border-b border-gray-400 mr-4">
              <p class="text-xs text-gray-500">Shape</p>
              <span class="headings text-sm">Fit and Flare</span>
            </div>
            <div class="w-1/2 border-b border-gray-400 mr-4">
              <p class="text-xs text-gray-500">Neck</p>
              <span class="headings text-sm">Tie-Up Neck</span>
            </div>
          </div>
          <div class="w-full flex py-4">
            <div class="w-1/2 border-b border-gray-400 mr-4">
              <p class="text-xs text-gray-500">Shape</p>
              <span class="headings text-sm">Fit and Flare</span>
            </div>
            <div class="w-1/2 border-b border-gray-400 mr-4">
              <p class="text-xs text-gray-500">Neck</p>
              <span class="headings text-sm">Tie-Up Neck</span>
            </div>
          </div>
          <span class="font-bold text-primary">See More</span>
        </div>
      </div>
      <div class="p-3 bg-white lg:my-0 my-3">
        <p class="font-bold text-lg">
          DELIVERY OPTIONS
          <i class="fa fa-truck ml-2 text-gray-600" aria-hidden="true"></i>
        </p>
        <div class="text-gray-600 leading-loose">
          <div class="w-full lg:w-1/3 flex flex-wrap hr-line justify-between pb-2 relative">
            <input
              type="search"
              class="bg-gray-200 border p-2 w-full rounded"
              placeholder="PinCode"
            />
            <button
              class="absolute right-0 text-sm mt-2 font-bold text-primary pr-2 hover:text-gray-600 cursor-pointer"
            >Check</button>
          </div>
          <span class="text-gray-500 text-xs">Please enter PIN code to check Availability</span>
          <ul class="text-sm font-hairline headings">
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
            <a href="#" class="font-bold text-black">SERA GROUP</a>
          </p>

          <p class="font-semibold text-sm text-black">Manufacturer/Packer/Importer Details</p>
          <span class="text-xs">Sera Group, 1st Floor, Gehlot Farms, Sector-47, Gurgaon</span>

          <p class="font-semibold text-sm text-black">Country of origin</p>
          <span class="text-xs">India</span>
        </div>
      </div>
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
  async created() {
    if (this.product.group && this.product.group.trim()) {
      this.groupProducts = await this.$axios.get(
        "products/groupItems/" + this.product.group
      );
    }
  },
  methods: {
    ...mapMutations(["setErr"]),
    ...mapActions({ addToCart: "cart/addToCart" }),
    toast() {
      this.$toast
        .show(
          `
      <div class="flex w-full">
        <img class="w-12 h-12 object-cover" src="${this.product.imgUrls &&
          this.product.imgUrls[0]}" alt='{{product.name}}' />
        <div class="toasted-text items-center">
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
        // .goAway(500000000000000);
        .goAway(1000);
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
        this.shake = true;
        setTimeout(() => {
          this.shake = false;
        }, 3000);
        return;
      } else {
        this.addToCart(obj);
        if (
          this.$store.state.settings.analytics.fbPixels_status === "enabled"
        ) {
          this.$fb.track("AddToCart", {
            content_type: "product",
            content_ids: this.product._id,
            content_name: this.product.name,
            currency: "INR",
            value: this.calculatePrice
          });
        }
        this.toast();
      }
    },
    selectVariant(s) {
      this.selectedVariant = s;
      this.userSelectedVariant = s;
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
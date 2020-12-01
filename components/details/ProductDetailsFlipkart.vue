<template>
  <div class="w-full p-2 md:w-6/12 lg:w-7/12 md:pl-6">
    <div class="w-full">
      <p class="left-0 text-lg text-left text-black xs:w-full lg:w-9/12">{{product.name}}</p>
      <p class="mt-2">
        <a
          href
          class="left-0 w-9/12 mt-2 text-lg text-left text-black"
        >
          <span class="p-1 text-xs text-white bg-green-700 rounded">
            4.1
            <i
              class="fa fa-star"
              aria-hidden="true"
            ></i>
          </span>
          <span class="p-1 text-sm text-gray-500">214 Ratings & 22 Reviews</span>
        </a>
      </p>
      <p class="left-0 w-9/12 mt-2 text-2xl font-bold text-left text-black">{{product.variants[0].price | currency}}</p>
      <ul class="mt-2 text-sm">
        <li class="mt-3">
          <i
            class="mr-2 text-green-500 fa fa-calendar-check-o"
            aria-hidden="true"
          ></i>No cost EMI ₹750/month. Standard EMI also available
          <a
            href
            class="font-semibold text-blue-500"
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
            class="mr-2 text-green-500 fa fa-tag"
            aria-hidden="true"
          ></i>
          <b>Bank Offer</b> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card
          <a
            href
            class="font-semibold text-blue-500"
          >T & C</a>
        </li>
        <li class="mt-3">
          <i
            class="mr-2 text-green-500 fa fa-tag"
            aria-hidden="true"
          ></i>
          <b>Bank Offer</b> 5% Cashback* on HDFC Bank Debit Cards
          <a
            href
            class="font-semibold text-blue-500"
          >T & C</a>
        </li>
        <li class="mt-3">
          <i
            class="mr-2 text-green-500 fa fa-tag"
            aria-hidden="true"
          ></i>
          <b>Bank Offer</b> Extra 5% off* with Axis Bank Buzz Credit Card
          <a
            href
            class="font-semibold text-blue-500"
          >T & C</a>
        </li>
      </ul>
    </div>
    <div class="flex flex-wrap w-full mt-3">
      <p class="w-20 pt-2 text-sm text-left text-gray-500">Delivery</p>
      <div class="relative left-0 text-left lg:w-1/3 xs:w-full">
        <i
          aria-hidden="true"
          class="absolute mt-3 fa fa-map-marker"
        ></i>
        <input
          type="search"
          placeholder="Enter Delivery Pincode"
          class="w-full p-2 pl-5 text-sm border-b border-blue-600 focus:outline-none"
        />
        <button class="absolute mt-2 text-sm font-bold text-blue-500 cursor-pointer focus:outline-none hover:text-gray-600">Check</button>
        <br />
        <p class="w-full mt-2 text-sm text-justify text-red-500">Not a valid pincode</p>
      </div>
    </div>

    <div class="flex flex-wrap w-full mt-3">
      <p class="w-20 pt-2 text-sm text-left text-gray-500">Color</p>
      <div class="flex flex-wrap justify-start xs:w-full lg:w-1/3">
        <img
          class="h-12 cursor-pointer w-14"
          src="/small-product.png"
          alt=""
        />
        <img
          class="h-12 cursor-pointer w-14"
          src="/small-product.png"
          alt=""
        />
        <img
          class="h-12 cursor-pointer w-14"
          src="/small-product.png"
          alt=""
        />
      </div>
    </div>

    <div class="flex flex-wrap w-full mt-3">
      <div class="flex flex-wrap xs:w-full lg:w-1/2">
        <div class="w-20">
          <p class="pt-2 text-sm text-left text-gray-500">Highlights</p>
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
      <div class="flex flex-wrap xs:w-full lg:w-1/2">
        <div class="w-20">
          <p class="pt-2 text-sm text-left text-gray-500">Services</p>
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

    <div class="flex flex-wrap w-full mt-3 mb-10 text-justify">
      <p class="w-20 pt-2 text-sm text-left text-gray-500">Seller</p>
      <div class="w-1/3 mt-3">
        <a
          href
          class="text-blue-500"
        >RetailNet</a>
        <span class="p-1 text-xs text-center text-white bg-blue-500 rounded-l-lg rounded-r-lg">
          4.1
          <i
            class="fa fa-star"
            aria-hidden="true"
          ></i>
        </span>
      </div>
    </div>

    <div class="flex flex-wrap w-full mt-3 mb-10">
      <p class="w-20 pt-2 text-sm text-left text-gray-500">Description</p>
      <div class="mt-3 text-justify xs:w-full lg:w-4/5">
        <p>Meet the Fitbit Inspire HR, your new partner who will guide you towards a healthier lifestyle. From tracking your heart rate and sleep quality to the number of calories you burn and the steps you take, the Inspire HR is designed to get you up and moving.</p>
      </div>
    </div>
    <!-- Product description -->
    <div>
      <div class="flex flex-wrap w-full p-5 mt-3 border">
        <p class="text-2xl">Product Description</p>
        <p class="text-sm">Meet the Fitbit Inspire HR, your new partner who will guide you towards a healthier lifestyle. From tracking your heart rate and sleep quality to the number of calories you burn and the steps you take, the Inspire HR is designed to get you up and moving.</p>
      </div>
      <div class="w-full p-5 border-b border-l border-r">
        <p class="text-sm">Meet the Fitbit Inspire HR, your new partner who will guide you towards a healthier lifestyle. From tracking your heart rate and sleep quality to the number of calories you burn and the steps you take, the Inspire HR is designed to get you up and moving.</p>
      </div>
      <div class="w-full p-5 border-b border-l border-r">
        <p class="text-blue-500 text-md">
          <a href>View all features</a>
        </p>
      </div>
    </div>

    <!-- Specification -->
    <div>
      <div class="flex flex-wrap w-full p-5 mt-3 border">
        <p class="text-2xl">Specifications</p>
      </div>
      <div class="w-full p-5 border-b border-l border-r">
        <p class="text-lg">General</p>
        <table>
          <tr>
            <td class="w-48 text-gray-500">Model Number</td>
            <td>FB413BKBK</td>
          </tr>
          <tr>
            <td class="w-48 text-gray-500">Model Number</td>
            <td>FB413BKBK</td>
          </tr>
          <tr>
            <td class="w-48 text-gray-500">Model Number</td>
            <td>FB413BKBK</td>
          </tr>
          <tr>
            <td class="w-48 text-gray-500">Model Number</td>
            <td>FB413BKBK</td>
          </tr>
          <tr>
            <td class="w-48 text-gray-500">Model Number</td>
            <td>FB413BKBK</td>
          </tr>
        </table>
      </div>
      <div class="w-full p-5 border-b border-l border-r">
        <p class="text-blue-500 text-md">
          <a href>Read More</a>
        </p>
      </div>
    </div>
    <!-- Product Review -->
    <div>
      <div class="flex flex-wrap w-full p-5 mt-3 border">
        <p class="w-1/2 xs:text-xl lg:text-2xl">Ratings & Reviews</p>
        <p class="w-1/2 text-sm text-right">
          <button class="px-4 py-2 font-normal bg-white border shadow">Rate Product</button>
        </p>
        <div class="flex flex-wrap w-full text-sm">
          <div class>
            <span class="text-4xl text-center text-black">4.1</span>
            <i
              class="fa fa-star"
              aria-hidden="true"
            ></i>
            <br />
            <span class="p-1 text-xs text-gray-500">
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
                    class="w-1/5 fa fa-star"
                    aria-hidden="true"
                  ></i>
                </span>
                <div class="w-4/5 h-2 m-1 text-xs leading-none text-center text-white bg-green-500 rounded-lg"></div>
              </div>

              <div class="flex flex-wrap">
                <span>
                  4
                  <i
                    class="w-1/5 fa fa-star"
                    aria-hidden="true"
                  ></i>
                </span>
                <div class="w-4/5 h-2 m-1 text-xs leading-none text-center text-white bg-green-500 rounded-lg"></div>
              </div>

              <div class="flex flex-wrap">
                <span>
                  3
                  <i
                    class="w-1/12 fa fa-star"
                    aria-hidden="true"
                  ></i>
                </span>
                <div class="w-4/5 h-2 m-1 text-xs leading-none text-center text-white bg-green-500 rounded-lg"></div>
              </div>

              <div class="flex flex-wrap">
                <span>
                  2
                  <i
                    class="w-1/5 fa fa-star"
                    aria-hidden="true"
                  ></i>
                </span>
                <div class="w-4/5 h-2 m-1 text-xs leading-none text-center text-white bg-green-500 rounded-lg"></div>
              </div>

              <div class="flex flex-wrap">
                <span>
                  1
                  <i
                    class="w-1/5 fa fa-star"
                    aria-hidden="true"
                  ></i>
                </span>
                <div class="w-4/5 h-2 m-1 text-xs leading-none text-center text-white bg-green-500 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap w-full p-5 border-b border-l border-r">
        <span class="p-1 text-xs text-white bg-green-700 rounded">
          4.1
          <i
            class="fa fa-star"
            aria-hidden="true"
          ></i>
        </span>
        <p class="ml-3 text-lg font-bold">Must Buy</p>
        <div class="w-full pt-2 text-xs">Quick Delivery by Flipkart. Many feature Activity Tracker at a reasonable Price Tag with an equally good App.</div>
        <div class="w-9/12 pt-2 text-xs text-gray-500">
          <span class="font-bold">B K Nanda</span>
          <i
            class="fa fa-certificate"
            aria-hidden="true"
          ></i>
          Certified Buyer, Jamshedpur
          5 months ago
        </div>
        <div class="w-3/12 pt-2 text-xs text-sm text-gray-500">
          <p>
            18
            <i
              class="mr-6 fa fa-thumbs-o-up"
              aria-hidden="true"
            ></i>
            19
            <i
              class="mr-6 fa fa-thumbs-o-down"
              aria-hidden="true"
            ></i>
            <i
              class="fa fa-angle-down"
              aria-hidden="true"
            ></i>
          </p>
        </div>
      </div>
      <div class="w-full p-5 border-b border-l border-r">
        <p class="text-blue-500 text-md">
          <a href>All 22 reviews</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  props: {
    product: { type: Object }
  },
  computed: {
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
  methods: {
    ...mapMutations(["setErr"]),
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
  }
};
</script>

<style>
</style>
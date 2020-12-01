<template>
  <div class="flex justify-between pt-5 pb-5 border-b border-gray-300">
    <div class="w-1/2 lg:w-1/3">
      <div>
        <img
          class="w-64 lg:rounded xs:rounded-b-none"
          v-lazy="$store.state.settings.CDN_URL+item.product.img[0]"
          alt=""
        />
        <!-- <div class="p-2 text-black bg-gray-300 rounded rounded-t-none lg:hidden xs:visible">Arrives 19 Sep</div> -->
      </div>
    </div>
    <div class="right-0 lg:w-4/5 xs:9/12">
      <div class="pl-4 font-hairline">
        <p class="mb-2 text-black">
          <nuxt-link :to="`/${item.product.slug}?id=${item.product._id}`">{{item.product.name | truncate(30)}}</nuxt-link>
        </p>
        <div class="flex">
          <p class="mb-2 text-gray-500">
            <span>Size:</span>
            {{item.variant.size}}
          </p>
          <span class="inline-block w-2 h-2 m-2 bg-gray-300 rounded-full"></span>
          <span
            style="color: rgb(237, 113, 0);"
            v-if="item.variant.stock<5"
          >{{item.variant.stock}} left</span>
        </div>
        <p class="relative mb-2">
          <span class="mb-2 text-2xl font-bold text-black">{{item.variant.price | currency}}</span>
          <span
            class="ml-2 text-xs text-gray-400 line-through lg:text-sm"
            v-if="calculateOffPercent(item.variant.mrp, item.variant.price)>0"
          >{{item.variant.mrp | currency}}</span>
          <span
            class="ml-2 text-xs text-green-400 lg:text-sm"
            v-if="calculateOffPercent(item.variant.mrp, item.variant.price)>0"
          >{{calculateOffPercent(item.variant.mrp, item.variant.price)}}% off</span>
        </p>
        <div class="justify-between text-sm">
          <div class="flex flex-wrap">
            <div class="w-full my-2 lg:w-3/5">
              <CartButtons
                :product="{_id:item.product._id}"
                :variant="{_id:item.variant._id}"
              />
            </div>
            <div class="w-full my-2 text-right lg:w-2/5">
              <div class="flex text-xs">
                <button
                  class="p-1 mr-1 rounded focus:outline-none primary"
                  @click="saveForLater(item)"
                >MOVE TO WISHLIST</button>
                <button
                  class="px-3 py-2 ml-3 rounded muted"
                  @click="checkAndAddToCart({pid: item.product._id, vid: item.variant._id, qty: -10000})"
                  :disabled="loading"
                >
                  <img
                    src="/loading.svg"
                    class="w-3 h-3 rotateOutDownLeft"
                    v-if="loading"
                    alt=""
                  />
                  <i
                    class="fa fa-trash"
                    v-else
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
const CartButtons = () => import("./CartButtons");

export default {
  props: {
    item: { type: Object }
  },
  data() {
    return {
      loading: false
    };
  },
  components: { CartButtons },
  methods: {
    ...mapActions({
      addToCart: "cart/addToCart"
    }),
    async saveForLater(item) {
      this.checkAndAddToCart({
        pid: item.product._id,
        vid: item.variant._id,
        qty: -100000
      });
      if (!(this.$store.state.auth || {}).user) {
        this.$router.push("/account/login?return=checkout");
        return;
      } else {
        this.saveToWishlist(item);
      }
    },
    async saveToWishlist(item) {
      this.loading = true;
      try {
        let data = await this.$axios.$post("api/wishlists/add", item);
        this.$store.commit("success", "Added to your wishlist");
        this.loading = false;
      } catch (err) {
        this.loading = false;
        this.$store.commit("setErr", err, { root: true });
      }
    },
    async checkAndAddToCart(item) {
      try {
        this.loading = true;
        await this.addToCart(item);
        this.loading = false;
      } catch (e) {
        console.log("err...", e.toString());
      }
    },
    calculateOffPercent(mrp, price) {
      let percent = ((mrp - price) * 100) / mrp;
      return Math.round(percent);
    }
  }
};
</script>

<style>
</style>
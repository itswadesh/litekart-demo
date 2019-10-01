<template>
  <div class="flex justify-between pt-5 pb-5 border-b border-gray-300">
    <div class="w-1/2 lg:w-1/3">
      <div>
        <img
          class="lg:rounded xs:rounded-b-none w-64"
          v-lazy="item.product.img"
          alt
        />
        <!-- <div class="lg:hidden xs:visible text-black p-2 bg-gray-300 rounded rounded-t-none">Arrives 19 Sep</div> -->
      </div>
    </div>
    <div class="lg:w-4/5 right-0 xs:9/12">
      <div class="pl-4 font-hairline">
        <p class="text-black mb-2">
          <nuxt-link :to="`/${item.product.slug}?id=${item.product._id}`">{{item.product.name | truncate(30)}}</nuxt-link>
        </p>
        <div class="flex">
          <p class="text-gray-500 mb-2">
            <span>Size:</span>
            {{item.variant.size}}
          </p>
          <span class="inline-block rounded-full bg-gray-300 h-2 w-2 m-2"></span>
          <span
            style="color: rgb(237, 113, 0);"
            v-if="item.variant.stock<5"
          >{{item.variant.stock}} left</span>
        </div>
        <p class="relative mb-2">
          <span class="text-black font-bold mb-2 text-2xl">{{item.variant.price | currency}}</span>
          <span
            class="text-gray-400 line-through ml-2 text-xs lg:text-sm"
            v-if="calculateOffPercent(item.variant.mrp, item.variant.price)>0"
          >{{item.variant.mrp | currency}}</span>
          <span
            class="ml-2 text-green-400 text-xs lg:text-sm"
            v-if="calculateOffPercent(item.variant.mrp, item.variant.price)>0"
          >{{calculateOffPercent(item.variant.mrp, item.variant.price)}}% off</span>
        </p>
        <div class="justify-between text-sm">
          <div class="flex flex-wrap">
            <div class="w-full lg:w-3/5 my-2">
              <CartButtons
                :product="{_id:item.product._id}"
                :variant="{_id:item.variant._id}"
              />
            </div>
            <div class="w-full lg:w-2/5 text-right my-2">
              <div class="flex text-xs">
                <button class="mr-1 focus:outline-none">MOVE TO WISHLIST</button>
                <button
                  class="ml-3 text-gray-600 bg-gray-200 rounded py-2 px-3"
                  @click="checkAndAddToCart({pid: item.product._id, vid: item.variant._id, qty: -10000})"
                  :disabled="loading"
                >
                  <img
                    src="/loading.svg"
                    v-if="loading"
                    alt="..."
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
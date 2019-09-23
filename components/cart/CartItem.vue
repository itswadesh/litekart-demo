<template>
  <div class="flex hr-line justify-between pt-5 pb-5">
    <div class="lg:w-1/5 left-0 xs:w-3/12">
      <div>
        <img
          class="lg:rounded xs:rounded-b-none"
          v-lazy="$store.state.settings.CDN_URL+item.product.img"
        />
        <div class="lg:hidden xs:visible text-black p-2 bg-gray-300 rounded rounded-t-none">Arrives 19 Sep</div>
      </div>
    </div>
    <div class="lg:w-4/5 right-0 xs:9/12">
      <div class="pl-4 font-hairline">
        <p class="text-black mb-2">
          <nuxt-link :to="`/${item.product.slug}?id=${item.product._id}`">{{item.product.name | truncate(30)}}</nuxt-link>... Arrives 19 Sep By Prince & Princes
        </p>
        <p class="text-gray-500 mb-2">
          <span>Size:</span>{{item.variant.size}}
        </p>
        <p class="relative mb-2">
          <span class="text-sm top-0 mt-1 absolute">₹</span>
          <span class="text-black font-bold mb-2 text-2xl ml-2">{{item.variant.price | currency}}</span>
          <span class="text-gray-300 line-through ml-2">{{item.variant.mrp | currency}}</span>
          <span class="ml-2 text-green-400">15% off</span>
        </p>
        <div class="flex justify-between">
          <div class="w-1/2 left-0">
            <cart-buttons
              :product="{_id:item.product._id}"
              :variant="{_id:item.variant._id}"
            />
            <!-- <div class="inline-block relative w-24">
              
              <select class="text-sm font-bold text-gray-500 p-2 border-gray-300 cursor-pointer cursor-pointer block appearance-none w-full bg-gray-200 rounded border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 leading-tight focus:outline-none focus:none">
                <option class="bg-white">Qty 1</option>
                <option class="bg-white text-black">2</option>
                <option class="bg-white text-black">3</option>
                <option class="bg-white text-black">4</option>
                <option class="bg-white text-black">5</option>
                <option class="bg-white text-black">6</option>
                <option class="bg-white text-black">7</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <i class="fa fa-caret-down px-1" />
              </div>
            </div> -->
          </div>
          <div class="w-1/2 right-0">
            <div class="right-0 text-right">
              <button
                class="text-gray-600 font-medium text-lg right-0 bg-gray-200 rounded px-3 py-1"
                @click="checkAndAddToCart({pid: item.product._id, vid: item.variant._id, qty: -10000})"
                :disabled="adding"
              >
                <i class="fa fa-trash"></i>
              </button>
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
      adding: false
    };
  },
  components: { CartButtons },
  methods: {
    ...mapActions({
      addToCart: "cart/addToCart"
    }),
    async checkAndAddToCart(item) {
      try {
        this.adding = true;
        await this.addToCart(item);
        this.adding = false;
      } catch (e) {
        console.log("err...", e.toString());
      }
    }
  }
};
</script>

<style>
</style>
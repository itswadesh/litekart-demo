<template>
  <div class="lg:w-1/4 mt-10 lg:pr-20 xs:w-full px-3">
    <div class="w-full flex flex-wrap hr-line justify-between pb-2 relative">
      <input
        type="search"
        class="bg-gray-200 border p-2 w-full rounded"
        placeholder="Promo Code"
      />
      <button class="absolute right-0 text-sm mt-2 text-gray-500 pr-2 focus:outline-none hover:text-gray-600 cursor-pointer">APPLY</button>
    </div>
    <div class="4/5 right-0 pb-3 bb">
      <div>
        <p class="text-black mt-4 font-normal text-xl">Price Summary</p>
        <span class="text-gray-400 text-xs">Includes GST and all government taxes</span>
        <div class="flex justify-between mt-1">
          <div class="w-1/2 text-sm text-left">Total item price</div>
          <div class="ml-2 w-1/2 text-black-400 text-right">{{cart.subtotal| currency}}</div>
        </div>
        <div class="flex justify-between mt-1">
          <div class="w-1/2 text-sm text-left">Item discount</div>
          <div class="ml-2 w-1/2 text-black-400 text-right">{{cart.discount | currency}}</div>
        </div>
        <div
          class="flex justify-between mt-1"
          v-if="$store.state.settings && $store.state.settings.shipping"
        >
          <div class="w-1/2 text-sm text-left">Shipping fee</div>
          <div
            class="ml-2 w-1/2 text-black-400 text-right"
            v-if="$store.state.settings.shipping.charge>0"
          >{{$store.state.settings.shipping.charge| currency}}</div>
          <div
            class="ml-2 w-1/2 text-black-400 text-right"
            v-else
          >FREE</div>
        </div>
        <div class="mt-1">
          <p class="text-xs text-gray-400">
            Free shipping on orders of ₹999 or
            more. For first purchase,
            <a
              href
              class="underline"
            >See Offer</a>
          </p>
        </div>
      </div>
    </div>
    <div class="4/5 right-0 pb-3">
      <div class="flex justify-between mt-2">
        <div class="w-1/2 text-lg font-bold text-left">Total</div>
        <div class="ml-2 w-1/2 font-bold text-black-400 text-right">{{cart.total | currency}}</div>
      </div>
      <button
        @click="$router.push('/checkout')"
        class="w-full mt-3 p-3 bg-pink-500 hover:bg-pink-600 text-white tet-2xl font-bold rounded"
      >Proceed To Checkout</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: { type: Object }
  }
};
</script>

<style>
</style>
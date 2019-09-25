<template>
  <div class="lg:w-1/4 mt-10 lg:pr-10 xs:w-full px-3">
    <!-- <div class="w-full flex flex-wrap border-b border-dotted pb-3 justify-between pb-2 relative">
      <div class="text-sm w-full text-gray-500">OPTIONS</div>
      <div class="text-sm text-black mt-3">Coupons</div>
      <button class="absolute right-0 text-blue-600 rounded p-1 cursor-pointer border px-2 mt-6 text-sm border-blue-500">APPLY</button>
    </div>
    <div class="w-full flex flex-wrap border-b border-dotted pb-3 justify-between pb-2 relative">
      <div class="text-sm w-full text-gray-500 pt-3 pb-3">
        <a href="#">Gift Wrapfor</a>₹25
      </div>
      <div class="text-xs text-black mt-1">Cash / Card on Delivery Not Available</div>
    </div> -->
    <div class="4/5 right-0 pb-3 bb text-sm text-gray-500 leading-relaxed">
      <div>
        <p class="text-gray-500 mt-4 font-semibold text-xs">Price Details</p>
        <div class="flex justify-between mt-1">
          <div class="w-1/2 text-sm text-left">Bag Total</div>
          <div class="ml-2 w-1/2 text-black-400 text-right">{{cart.subtotal| currency}}</div>
        </div>
        <div
          class="flex justify-between mt-1"
          v-if="cart.discount>0"
        >
          <div class="w-1/2 text-sm text-left">Bag Discount</div>
          <div class="ml-2 w-1/2 text-black-400 text-right">{{cart.discount | currency}}</div>
        </div>
        <!-- <div class="flex justify-between mt-1">
          <div class="w-1/2 text-sm text-left">Tax</div>
          <div class="ml-2 w-1/2 text-black-400 text-right">-₹577</div>
        </div>
        <div class="flex justify-between mt-1">
          <div class="w-1/2 text-sm text-left">Coupon Discount</div>
          <div class="ml-2 w-1/2 text-blue-600 text-right">
            <a href="#">Apply Coupon</a>
          </div>
        </div> -->
        <div class="flex justify-between mt-1">
          <div class="w-1/2 text-sm text-left">Order Total</div>
          <div class="ml-2 w-1/2 text-black-400 text-right">{{cart.subtotal - cart.discount | currency}}</div>
        </div>
        <div class="flex justify-between mt-1">
          <div class="w-1/2 text-sm text-left">Delivery Charges</div>
          <div
            v-if="$store.state.settings && $store.state.settings.shipping && $store.state.settings.shipping.charge>0"
            class="ml-2 w-1/2 text-black-400 text-right"
          >{{$store.state.settings.shipping.charge| currency}}</div>
          <div
            v-else
            class="ml-2 w-1/2 text-black-400 text-right"
          >FREE</div>
        </div>
      </div>
    </div>
    <div class="4/5 right-0 pb-3">
      <div class="flex justify-between mt-2">
        <div class="w-1/2 text-lg font-bold text-left">Total</div>
        <div class="ml-2 w-1/2 font-bold text-black-400 text-right">{{cart.total | currency}}</div>
      </div>
      <button class="tracking-widest w-full mt-3 p-3 bg-red-600 text-white text-sm font-semibold rounded">PLACE ORDER</button>
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
<template>
  <div class="px-3 mx-auto mt-10 lg:w-1/4 xs:w-full">
    <div class="relative flex flex-row justify-between w-full pb-2 hr-line">
      <input
        type="search"
        class="w-full p-2 bg-gray-200 border rounded focus:outline-none"
        placeholder="Promo Code"
      />
      <button
        class="absolute right-0 pr-2 mt-3 text-sm text-gray-500 cursor-pointer focus:outline-none hover:text-gray-600"
      >
        APPLY
      </button>
    </div>
    <div class="right-0 border-b border-dotted 4/5 lg:mb-0">
      <div>
        <p class="mt-4 text-xl font-normal text-black">Price Summary</p>
        <span class="text-xs text-gray-400"
          >Includes GST and all government taxes</span
        >
        <div class="flex justify-between mt-1">
          <div class="w-1/2 text-sm text-left">Total item price</div>
          <div class="w-1/2 ml-2 text-right text-black-400">
            {{ cart.subtotal | currency }}
          </div>
        </div>
        <div class="flex justify-between mt-1">
          <div class="w-1/2 text-sm text-left">Item discount</div>
          <div class="w-1/2 ml-2 text-right text-black-400">
            {{ cart.discount | currency }}
          </div>
        </div>
        <div
          class="flex justify-between mt-1"
          v-if="$store.state.settings && $store.state.settings.shipping"
        >
          <div class="w-1/2 text-sm text-left">Shipping fee</div>
          <div
            class="w-1/2 ml-2 text-right text-black-400"
            v-if="$store.state.settings.shipping.charge > 0"
          >
            {{ $store.state.settings.shipping.charge | currency }}
          </div>
          <div class="w-1/2 ml-2 text-right text-black-400" v-else>FREE</div>
        </div>
        <div class="mt-1">
          <p class="pb-2 text-xs text-gray-400">
            Free shipping on orders of ₹999 or more. For first purchase,
            <a href class="underline">See Offer</a>
          </p>
        </div>
      </div>
      <div class="p-2 my-2 text-xs text-gray-500 bg-red-100 rounded">
        <div class="flex items-center">
          <img src="/shield.png" class="w-12 pr-2" alt="" />
          <div class="ml-1 justify">
            Genuine products. 15 day returns. 100% secure payments.
            <span class="text-black">Know More</span>
          </div>
        </div>
      </div>
    </div>
    <div
      class="fixed bottom-0 right-0 w-full px-2 py-4 bg-white shadow lg:relative lg:px-0 lg:py-0 lg:shadow-none"
    >
      <div class="flex justify-between mt-2">
        <div class="w-1/2 text-lg font-bold text-left">Total</div>
        <div class="w-1/2 ml-2 font-bold text-right text-black-400">
          {{ cart.total | currency }}
        </div>
      </div>

      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: { type: Object },
  },
};
</script>

<style></style>

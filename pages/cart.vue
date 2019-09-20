<template>
  <div>
    <Header />
    <EmptyCart v-if="!cart || !cart.qty || cart.qty==0" />
    <div
      class="flex flex-wrap justify-between"
      v-else
    >
      <div class="lg:w-16 xs:w-0"></div>
      <div class="xs:w-full lg:w-2/4 mt-10 px-2">
        <div class="w-full flex flex-wrap hr-line justify-between pb-2">
          <p class="font-semibold text-3xl text-black">
            Cart
            <span class="ml-2 mr-1 font-hairline text-gray-500 text-xl">.</span>
            <span class="text-gray-500 text-xl font-hairline">item</span>
          </p>
          <!-- <button class="text-gray-600 font-medium text-sm right-0 hover:bg-gray-200 rounded px-2">
                   Enter pincode for delivery<i class="fa fa-caret-down px-2" />
          </button>-->
          <div class="text-gray-600 right-0 rounded relative">
            <input
              type="search"
              class="text-lg border-none p-2 w-full rounded focus:outline-none"
              placeholder="Enter Pin Code"
            />
            <button class="absolute right-0 text-sm mt-2 text-gray-500 pr-2 focus:outline-none hover:text-gray-600">
              <i
                class="fa fa-angle-down"
                aria-hidden="true"
              ></i>
            </button>
          </div>
        </div>
        <CartItem
          v-for="(item,ix) in cart.items"
          :key="ix"
          :item="item"
        />
        <CartBanners />
      </div>
      <CartSummary />
      <div class="w-8"></div>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header";
import EmptyCart from "~/components/EmptyCart";
import CartSummary from "~/components/CartSummary";
import CartBanners from "~/components/CartBanners";
import CartItem from "~/components/CartItem";
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    user() {
      return (this.$store.state.auth || {}).user || null;
    },
    cart() {
      return this.$store.state.cart || {};
    },
    ...mapGetters({
      checkCart: "cart/checkCart",
      showCart: "cart/showCart"
    })
  },
  components: { Header, EmptyCart, CartSummary, CartBanners, CartItem }
};
</script>

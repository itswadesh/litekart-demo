<template>
  <div>
    <EmptyCart v-if="!cart || !cart.qty || cart.qty==0" />
    <div class="flex flex-wrap justify-between" v-else>
      <div class="lg:w-16 xs:w-0"></div>
      <div class="w-full lg:w-2/4 px-2">
        <div class="w-full hr-line justify-between pb-2">
          <!-- <Offers /> -->
          <div class="hidden lg:block font-bold headings w-full text-lg bg-white mt-10">
            <div class="flex flex-wrap">
              <div class="text-left w-1/2">My Shopping Bag ({{cart.qty}} Items)</div>
              <div class="text-right w-1/2">Total {{cart.total | currency}}</div>
            </div>
          </div>

          <div class="block lg:hidden w-full p-3 bg-white mt-3 flex flex-wrap">
            <div class="text-left headings text-3xl w-20 border-r border-gray-200 font-bold">Cart</div>
            <span class="text-sm mx-4 text-gray-500">
              {{cart.qty}} items
              <br />
              Total {{cart.total | currency}}
            </span>
          </div>

          <!-- <p class="font-semibold text-3xl text-black">
            Cart
            <span class="ml-2 mr-1 font-hairline text-gray-500 text-xl">.</span>
            <span class="text-gray-500 text-xl font-hairline">item</span>
          </p>-->
          <!-- <button class="text-gray-600 font-medium text-sm right-0 hover:bg-gray-200 rounded px-2">
                   Enter pincode for delivery<i class="fa fa-caret-down px-2" />
          </button>-->
          <!-- <div class="text-gray-600 right-0 rounded relative">
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
          </div>-->
        </div>
        <!-- <CartItem v-for="(item,ix) in cart.items" :key="ix" :item="item" /> -->
        <CartItemSkeleton />
        <!-- <div class="hidden lg:block">
          <nuxt-link to="wishlist" class="w-full shadow flex flex-wrap p-4 mt-6 mb-6">
            <i class="fa fa-bookmark-o mt-1 mr-2" aria-hidden="true"></i> Add More From Wishlist
            <i class="fa fa-angle-right mt-1 ml-2" aria-hidden="true"></i>
          </nuxt-link>
        </div>-->
        <CartBanners />
      </div>
      <CartSummary :cart="cart">
        <Button @click="$router.push('/checkout/address')" color="primary">PLACE ORDER</Button>
      </CartSummary>
      <div class="w-8"></div>
    </div>
  </div>
</template>

<script>
import EmptyCart from "~/components/cart/EmptyCart";
import CartSummary from "~/components/cart/CartSummary";
import CartBanners from "~/components/cart/CartBanners";
import CartItemSkeleton from "~/components/cart/CartItemSkeleton";
import Button from "~/components/ui/Button";
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
  components: { EmptyCart, CartSummary, CartBanners, CartItemSkeleton, Button }
};
</script>

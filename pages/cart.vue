<template>
  <div>
    <EmptyCart v-if="!cart || !cart.qty || cart.qty == 0" />
    <div class="flex flex-wrap justify-between" v-else>
      <div class="lg:w-16 xs:w-0"></div>
      <div class="w-full px-2 lg:w-2/4">
        <div class="w-full pb-2 hr-line">
          <!-- <Offers /> -->
          <div class="hidden w-full mt-10 text-lg font-bold lg:block headings">
            <div class="flex flex-wrap">
              <div class="w-1/2 text-left">
                My Shopping Bag ({{ cart.qty }} Items)
              </div>
              <div class="w-1/2 text-right">
                Total {{ cart.total | currency }}
              </div>
            </div>
          </div>

          <div class="flex flex-wrap  w-full p-3 mt-3 lg:hidden">
            <div
              class="w-20 text-3xl font-bold text-left border-r border-gray-200 headings"
            >
              Cart
            </div>
            <span class="mx-4 text-sm text-gray-500">
              {{ cart.qty }} items
              <br />
              Total {{ cart.total | currency }}
            </span>
          </div>
        </div>
        <CartItem v-for="(item, ix) in cart.items" :key="ix" :item="item" />
        <!-- <CartItemSkeleton /> -->
        <div class="hidden lg:block">
          <nuxt-link
            to="wishlist"
            class="flex flex-wrap justify-between w-full p-4 mt-6 mb-6 shadow"
          >
            <div>
              <i class="mt-1 mr-2 fa fa-bookmark-o" aria-hidden="true"></i> Add
              More From Wishlist
            </div>
            <i class="mt-1 ml-2 fa fa-angle-right" aria-hidden="true"></i>
          </nuxt-link>
        </div>
        <CartBanners />
      </div>
      <CartSummary :cart="cart" class="">
        <Button @click="$router.push('/checkout/address')" color="primary"
          >SELECT ADDRESS</Button
        >
      </CartSummary>
      <div class="w-8"></div>
    </div>
  </div>
</template>

<script>
import EmptyCart from '~/components/cart/EmptyCart'
import CartSummary from '~/components/cart/CartSummary'
import CartBanners from '~/components/cart/CartBanners'
import CartItemSkeleton from '~/components/cart/CartItemSkeleton'
import CartItem from '~/components/cart/CartItem'
import Button from '~/components/ui/Button'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    user() {
      return (this.$store.state.auth || {}).user || null
    },
    cart() {
      return this.$store.state.cart || {}
    },
    ...mapGetters({
      showCart: 'cart/showCart'
    })
  },
  components: { EmptyCart, CartSummary, CartBanners, CartItem, Button }
}
</script>

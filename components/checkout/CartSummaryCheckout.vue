<template>
  <div class="w-full mt-10">
    <div class="right-0 pb-3 mb-6 text-sm leading-relaxed text-gray-500 4/5 bb">
      <div>
        <p class="mt-4 text-xs font-semibold text-gray-500">Price Details</p>
        <div class="flex justify-between mt-1">
          <div class="text-sm text-left">Bag Total</div>
          <div class="ml-2 text-right text-black-400">
            {{ cart.subtotal | currency }}
          </div>
        </div>
        <div class="flex justify-between mt-1" v-if="cart.discount > 0">
          <div class="text-sm text-left">Bag Discount</div>
          <div class="ml-2 text-right text-black-400">
            {{ cart.discount | currency }}
          </div>
        </div>

        <div class="flex justify-between mt-1">
          <div class="text-sm text-left">Order Total</div>
          <div class="ml-2 text-right text-black-400">
            {{ (cart.subtotal - cart.discount) | currency }}
          </div>
        </div>
        <div class="flex justify-between mt-1">
          <div class="text-sm text-left">Delivery Charges</div>
          <div
            v-if="
              $store.state.settings &&
                $store.state.settings.shipping &&
                $store.state.settings.shipping.charge > 0
            "
            class="ml-2 text-right text-black-400"
          >
            {{ $store.state.settings.shipping.charge | currency }}
          </div>
          <div v-else class="ml-2 text-right text-black-400">FREE</div>
        </div>
      </div>
    </div>
    <div
      class="fixed bottom-0 left-0 w-full px-4 pb-2 bg-white lg:relative lg:pr-0"
    >
      <div class="flex justify-between mt-2">
        <div class="text-lg font-bold text-left">Total</div>
        <div class="font-bold text-right text-black">
          {{ cart.total | currency }}
        </div>
      </div>
      <Button @click="proceed" color="primary">CONTINUE</Button>
    </div>
  </div>
</template>

<script>
import Button from "~/components/ui/Button";
export default {
  props: {
    selectedAddress: { type: String },
  },
  computed: {
    cart() {
      return this.$store.state.cart || {};
    },
  },
  components: {
    Button,
  },
  methods: {
    proceed() {
      if (!this.selectedAddress) {
        this.$router.push(`/checkout/add`);
        return;
      }
      this.$router.push(
        `/checkout/payment-mobile?address=${this.selectedAddress}`
      );
    },
  },
};
</script>

<style></style>

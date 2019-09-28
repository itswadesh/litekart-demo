<template>
  <div>
    <CheckoutHeader />
    <div class="p-2 flex flex-wrap justify-between lg:mx-10 items-start">
      <div class="flex flex-wrap justify-start pb-4">
        <AddressCard class="mb-2 lg:mr-2" />
        <AddressCard class="mb-2" />
      </div>
      <div class="w-full lg:w-auto">
        <div class="flex justify-start border rounded p-2 text-sm border-green-300 bg-green-100">
          <Radio />
          <div class="ml-2">
            <div class="font-bold text-black">Standard Delivery</div>
            <div class="text-gray-500">Get it by 02nd oct | Delivery Charge 149</div>
          </div>
        </div>
        <CartSummaryCheckout />
      </div>
    </div>
  </div>
</template>

<script>
import AddressCard from "~/components/AddressCard";
import CartSummaryCheckout from "~/components/checkout/CartSummaryCheckout";
import Radio from "~/components/ui/Radio";
const CheckoutHeader = () => import("~/components/checkout/CheckoutHeader");
export default {
  components: {
    CheckoutHeader,
    Radio,
    AddressCard,
    CartSummaryCheckout
  },
  methods: {
    go(url) {
      this.$router.push(url);
    }
  },
  layout: "none"
};
</script>

<style scoped>
</style>
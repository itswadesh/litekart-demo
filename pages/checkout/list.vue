<template>
  <div class="bg-gray-300">
    <CheckoutHeader />
    <div class="text-sm font-hairline text-gray-600 p-5">CHOOSE DELIVERY ADDRESS</div>
  </div>
</template>

<script>
const CheckoutHeader = () => import("~/components/checkout/CheckoutHeader");
export default {
  components: {
    CheckoutHeader
  }
};
</script>

<style scoped>
</style>
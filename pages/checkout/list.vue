<template>
  <div>
    <CheckoutHeader />
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
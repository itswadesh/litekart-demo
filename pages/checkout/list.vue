<template>
  <div>
    <CheckoutHeader />
    <div class="bg-gray-100">
      <div class="text-sm font-hairline text-gray-600 p-5">CHOOSE DELIVERY ADDRESS</div>
      <div class="m-2">
        <div class="shadow bg-white p-2 rounded flex justify-between">
          <div>check</div>
          <div>Kintali Naveesh</div>
          <div class="text-right">OFFICE</div>
        </div>
      </div>
    </div>
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
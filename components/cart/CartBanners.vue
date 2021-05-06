<template>
  <div class="hidden lg:block">
    <div class="flex justify-between w-full mt-6 mb-6">
      <div class="p-3 my-1 bg-gray-200 rounded">
        <i class="text-gray-500 fa fa-truck"></i>
        <p class="text-lg font-normal text-gray-500">Free Shipping*</p>
        <p class="text-xs text-gray-500">On orders of ₹500 and above.Details</p>
      </div>
      <div class="p-3 m-1 bg-gray-200 rounded">
        <i class="text-gray-500 fa fa-undo"></i>
        <p class="text-lg font-normal text-gray-500">Easy returns</p>
        <p class="text-xs text-gray-500">
          Send items back for free within 15 days
        </p>
      </div>
      <div class="p-3 my-1 bg-gray-200 rounded">
        <i class="text-gray-500 fa fa-shield"></i>
        <p class="text-lg font-normal text-gray-500">Secure shopping</p>
        <p class="text-xs text-gray-500">
          Your payment details are fully encrypted
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.hr-line {
  border-bottom: 1px solid lightgray;
}
.fa-truck {
  transform: scaleX(-1);
}
.bb {
  border-bottom: 1px dashed lightgray;
}
.fa-truck,
.fa-undo,
.fa-shield {
  font-size: 2rem;
}
</style>

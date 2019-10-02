<template>
  <div class="lg:w-2/4 mt-0 lg:mt-10 lg:pr-20 xs:w-full lg:px-10 px-2">
    <div class="text-2xl text-black font-bold p-6 text-center lg:text-left">Orders</div>
    <div class="bg-white shadow rounded flex flex-wrap py-3 px-10 justify-between">
      <div class="p-3">
        <div class="flex items-center">
          <i class="fa fa-truck text-green-500 mr-2"></i>
          <div class="text-black text-sm font-semibold">Arrives by Sep 12</div>
        </div>
        <div class="text-gray-500 text-xs pl-6">1 item</div>
      </div>
      <div class="p-3 shadow">
        <img src="cart-product.jpg" class="w-12 h-12" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "account"
};
</script>

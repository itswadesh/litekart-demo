<template>
  <div class="lg:w-2/4 mt-10 lg:pr-20 xs:w-full px-10">
    <div class="text-2xl text-black font-bold p-10">Orders</div>
    <div class="bg-white shadow rounded flex flex-wrap py-3 px-12">
      <i class="fa fa-truck text-green-500 mt-3"></i>
      <div class="p-3">
        <p class="text-black text-sm font-semibold">Arrives by Sep 12</p>
        <p class="text-gray-500 text-xs">1 item</p>
      </div>
      <div class="p-3 ml-32 shadow">
        <img
          src="cart-product.jpg"
          class="w-12 h-12"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "account"
};
</script>

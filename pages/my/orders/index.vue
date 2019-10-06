<template>
  <div class="lg:w-2/4 mt-0 lg:mt-10 lg:pr-20 xs:w-full lg:px-10 px-2 headings">
    <div class="text-2xl font-bold p-6 text-center lg:text-left">Orders</div>
    <div class="bg-white shadow rounded flex flex-wrap py-3 px-8 justify-between hover:shadow-xl">
      <div class="flex items-center">
        <div>
          <img src="/return.svg" class="rounded-full p-2 bg-blue-500 mr-2" />
        </div>
        <div>
          <div class="text-sm font-semibold">Arrives by Sep 12</div>
          <div class="text-gray-500 text-xs">1 item</div>
        </div>
      </div>
      <div class="p-3 shadow">
        <img src="/cart-product.jpg" class="w-12 h-12" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "account"
};
</script>

<template>
  <div>
    <div class="flex flex-wrap justify-start">
      <div class="lg:w-1/4 xs:w-0"></div>
      <div class="xs:w-full lg:w-1/3 mt-10 px-2">
        <div class="text-gray-700 font-bold text-xl mb-2">All done</div>
        <div>
          <img
            src="/order-success.png"
            class="mb-2 h-56 object-cover"
          />
        </div>
        <div class="font-hairline text-sm">
          Your Order number is
          <span class="font-semibold">091714264468</span>
        </div>
        <div class="flex justify-between pt-5 pb-5">
          <div class="lg:w-1/5 left-0 xs:w-3/12">
            <div>
              <img
                class="lg:rounded xs:rounded-b-none"
                src="/cart-product.jpg"
              />
            </div>
          </div>
          <div class="lg:w-4/5 right-0 text-sm xs:9/12">
            <div class="pl-4 font-hairline">
              <p class="text-black">
                <a href="#">Stylish Green Floral Print Mid Thigh L</a>... Arrives 19 Sep By Prince & Princes
              </p>
              <p class="text-gray-500">
                <span>Size:</span>3-4 years
              </p>
              <p class="relative mb-2">
                <span class="text-sm top-0 mt-1 absolute">₹</span>
                <span class="text-black font-bold mb-2 text-lg ml-2">889</span>
                <span class="text-gray-300 line-through ml-2">₹1049</span>
              </p>
              <div class="flex justify-between">
                <div class="w-1/2 left-0">
                  <div class="inline-block relative w-16">
                    <div class="text-xs font-hairline text-black p-1 text-center block appearance-none w-full bg-gray-200 rounded">Qty 1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:w-1/4 mt-10 lg:pr-20 xs:w-full p-10">
        <div class="w-full flex flex-wrap justify-between pb-2 relative">
          <img
            src="/order-success-side.png"
            class="w-64 h-56 object-cover rounded"
          />
        </div>
        <div class="4/5 right-0 pb-3 bb">
          <div>
            <p class="text-black mt-4 font-normal text-sm">Price Summary</p>
          </div>
        </div>
        <div class="4/5 right-0 pb-10 pt-2 border-b border-gray-300">
          <div class="flex justify-between mt-2 text-sm">
            <div class="w-1/2 font-bold text-left">Total</div>
            <div class="ml-2 w-1/2 font-bold text-black-400 text-right">₹532</div>
          </div>
          <div class="flex justify-between mt-2 text-xs">
            <div class="w-10/12 text-left">Pay by cash on delivery</div>
            <div class="ml-2 text-black-400 text-right">₹532</div>
          </div>
        </div>
        <div>
          <div class="py-3 font-semibold text-gray-700">Shipping address</div>
          <div class="text-sm">
            <span class="font-bold text-gray-700">Swadesh Bahera</span>
            <br />+91 8895092508
            <div class="pt-2">
              Y-276, HAL Township
              <br />Sunabeda-2
              <br />Koraput-763002
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
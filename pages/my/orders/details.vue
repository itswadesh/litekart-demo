<template>
  <div>
    <div class="flex flex-wrap justify-between bg-gray-100 shadow">
      <div class="text-center text-sm text-black bg-white w-full py-2">
        <p class="font-semibold">Order 091714264468</p>
        <Span class="flex flex-wrap justify-center">
          Placed on Sep 17, 2019
          <li class="list-disc ml-2">₹689 for 1 item</li>
        </Span>
      </div>
      <div class="lg:w-16 xs:w-0"></div>
      <div class="xs:w-full lg:w-2/4 mt-5 p-2">
        <div class="w-full flex flex-wrap mb-5 mt-5">
          <div class="text-sm w-1/2">
            <span class="text-black font-hairline">SHIPMENT 1 OF 1</span>
            <br />
            <span class="text-gray-600">Arrives by Sep 21</span>
          </div>
          <div class="text-sm w-1/2">
            <span class="text-black font-hairline">SHIPMENT 1 OF 1</span>
            <br />
            <span class="text-gray-600">Arrives by Sep 21</span>
          </div>
        </div>
        <p
          class="bg-green-500 text-white text-center p-1 rounded"
        >Please pay ₹689 to the delivery agent</p>
        <div class="flex flex-wrap justify-between bg-white shadow p-5">
          <div class="w-1/5">
            <img class="w-20 h-20" src="/cart-product.jpg" />
          </div>
          <div class="w-4/5 flex flex-wrap justify-center h-20">
            <div class="text-black mb-2 w-1/2">
              <p class="font-semibold">Fashion Kids</p>
              <span class="text-sm">Stylish Green Floral Print Mid Thigh</span>
            </div>
            <div class="mb-2 w-1/4 pl-2 text-sm">
              <span class="font-semibold text-md">Size:</span>3-4 years
              <span>Qty: 1</span>
            </div>
            <div class="relative mb-2 w-1/4 text-right">
              <span class="text-sm top-0 mt-1 absolute">₹</span>
              <span class="text-black font-bold mb-2 text-lg ml-2">889</span>
              <br />
              <span class="text-xs line-through ml-2">₹1049</span>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:w-1/4 mt-10 lg:pr-20 w-full px-3 mb-8">
        <div
          class="w-full flex flex-wrap justify-between pb-2 relative text-xs font-semibold tracking-widest"
        >SHIPPING ADDRESS</div>
        <div
          class="shadow bg-white p-2 rounded border-b border-gray-200 text-gray-800 text-sm font-hairline"
        >
          <span>Kohn Wick</span>
          <br />
          <span>+91 00000000000</span>
        </div>
        <div class="shadow bg-white p-2 text-gray-700 text-xs font-hairline">
          <span>Vellore 632 014</span>
        </div>

        <p class="text-black mt-4 font-normal text-xs font-semibold tracking-widest">PAYMENT SUMMERY</p>
        <div class="4/5 right-0 pb-3 leading-loose shadow bg-white mt-2 rounded p-2">
          <div class="border-b border-gray-300">
            <div class="flex justify-between mt-1">
              <div class="w-1/2 text-sm text-left">Total item price</div>
              <div class="ml-2 w-1/2 text-black-400 text-right">₹1,009</div>
            </div>
            <div class="flex justify-between mt-1">
              <div class="w-1/2 text-sm text-left">Item discount</div>
              <div class="ml-2 w-1/2 text-black-400 text-right">-₹577</div>
            </div>
            <div class="flex justify-between mt-1">
              <div class="w-1/2 text-sm text-left">Shipping fee</div>
              <div class="ml-2 w-1/2 text-black-400 text-right">₹100</div>
            </div>
            <div class="flex justify-between mt-2">
              <div class="w-1/2 text-lg font-bold text-left">Total</div>
              <div class="ml-2 w-1/2 font-bold text-black-400 text-right">₹532</div>
            </div>
          </div>
          <div class="my-2 text-gray-700 text-sm font-semibold">
            <span class="text-semibold text-sm">PAYMENT MODE</span>
            <br />
            <div class="flex text-xs justify-between mt-1">
              <div class="w-1/2 text-left">Cash on delivery</div>
              <div class="ml-2 w-1/2 text-black-400 text-right">₹577</div>
            </div>
            <button
              class="text-center px-16 ml-2 mt-2 py-1 bg-gray-400 rounded-full focus:outline-none"
            >₹689 due</button>
          </div>
        </div>
        <div
          class="mt-3 text-center rounded shadow bg-white p-2 border-b border-gray-200 text-gray-700 text-sm"
        >
          <img src="help.png" class="py-5 px-12" />
          <span>Need help with this order?</span>
          <br />
          <a href="#" class="text-pink-500">Visit our help center</a>
        </div>
      </div>
      <div class="w-8"></div>
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
<template>
  <div>
    <div class="flex flex-wrap justify-between shadow" style="background:#f5f5f5;">
      <div class="text-center text-sm text-black bg-white w-full py-2">
        <p class="font-semibold tracking-widest">Order 091714264468</p>
        <Span class="flex flex-wrap justify-center">
          Placed on Sep 17, 2019
          <li class="list-disc ml-2">₹689 for 1 item</li>
        </Span>
      </div>
      <div class="lg:w-16 xs:w-0"></div>
      <div class="xs:w-full lg:w-2/4 mt-5 p-2">
        <div class="w-full flex flex-wrap mb-5 mt-5 text-sm">
          <div class="w-1/2">
            <span class="text-gray-700">Shipment 1 of 1</span>
            <br />
            <span class="text-gray-600">Arrives by Sep 21</span>
          </div>
          <div class="w-1/2">
            <span class="text-gray-700">Total</span>
            <br />
            <span class="text-gray-600">800 for 1 item</span>
          </div>
        </div>
        <p
          class="bg-green-500 text-white text-center p-1 rounded"
        >Please pay ₹689 to the delivery agent</p>
        <div class="flex justify-between py-1 border-b border-gray-300 bg-white rounded mt-2">
          <div>
            <img class="lg:rounded xs:rounded-b-none w-32" src="/cart-product.jpg" />
          </div>
          <div class="lg:w-4/5 right-0 xs:9/12">
            <div class="pl-4 font-hairline">
              <p class="text-black mb-2">Stylish Green Floral Print Mid Thigh</p>
              <div class="flex">
                <p class="text-gray-500 mb-2">
                  <span>Size:</span>
                  3-4 years
                </p>
                <span class="inline-block rounded-full bg-gray-300 h-2 w-2 m-2"></span>
              </div>
              <p class="relative mb-2">
                <span class="text-black font-bold mb-2 text-2xl">889</span>
              </p>
              <div class="justify-between text-sm">
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-3/5 my-2"></div>
                  <div class="w-full lg:w-2/5 text-right my-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:w-1/4 mt-10 lg:pr-20 w-full px-3 mb-8">
        <div
          class="w-full flex flex-wrap justify-between pb-2 relative text-sm font-semibold tracking-widest"
        >SHIPPING ADDRESS</div>
        <div class="shadow bg-white p-2 rounded leading-loose text-sm text-gray-700">
          <div>Kohn Wick</div>
          <div>99998 17722</div>
          <div>Vellore 632 014</div>
        </div>

        <p class="text-black mt-4 font-normal text-sm font-semibold tracking-widest">PAYMENT SUMMERY</p>
        <div class="text-sm right-0 pb-3 leading-loose shadow bg-white mt-2 rounded p-2">
          <div class="border-b border-gray-300 text-gray-700">
            <div class="flex justify-between mt-1">
              <div>Total item price</div>
              <div>₹1,009</div>
            </div>
            <div class="flex justify-between mt-1">
              <div>Item discount</div>
              <div>-₹577</div>
            </div>
            <div class="flex justify-between mt-1">
              <div>Shipping fee</div>
              <div>₹100</div>
            </div>
            <div class="flex justify-between mt-2 font-bold">
              <div>Total</div>
              <div>₹532</div>
            </div>
          </div>
          <div class="my-2 text-gray-700 text-sm font-semibold text-black-400">
            <span class="text-semibold text-xs">PAYMENT MODE</span>
            <br />
            <div class="flex text-xs justify-between mt-1">
              <div>Cash on delivery</div>
              <div>₹577</div>
            </div>
            <div class="flex justify-center">
              <button
                class="text-center px-16 ml-2 mt-2 py-1 bg-gray-300 rounded-full focus:outline-none"
              >₹689 due</button>
            </div>
          </div>
        </div>
        <div
          class="flex-no-wrap justify-center mt-3 text-center rounded shadow bg-white p-2 border-b border-gray-200 text-gray-700 text-sm"
        >
          <div>
            <img src="/help.png" class="m-auto" />
          </div>
          <div>Need help with this order?</div>
          <br />
          <div>
            <a href="#" class="text-pink-500">Visit our help center</a>
          </div>
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
<template>
  <div>
    <div class="flex flex-wrap justify-center p-5">
      <div class="w-1/3">
        <nuxt-link to="/">
          <img class="w-12 h-10 ml-8" src="/logo.png" />
        </nuxt-link>
      </div>
      <div class="w-1/3 tracking-widest text-center text-gray-700 font-bold pt-3 text-xs">
        <a href class="text-green-500 border-b-2 border-green-500 pb-1">BAG</a>
        <span>- - - - - - - -</span>
        <a href>ADDRESS</a>
        <span>- - - - - - - -</span>
        <a href>PAYMENT</a>
      </div>
      <div class="w-1/3 text-center flex flex-wrap justify-center">
        <img src="/secure.png" class="w-10" />
        <span class="text-gray-500 pt-2 text-lg">100% secure</span>
      </div>
    </div>
    <div class="flex flex-wrap justify-between">
      <div class="lg:w-16 xs:w-0"></div>
      <div class="xs:w-full lg:w-2/4 mt-10 px-2">
        <div class="w-full p-2 bg-white shadow rounded border-l-4 border-green-500 text-sm">
          <div class="font-semibold text-green-500 p-2">Offers</div>
          <ul class="font-hairline text-gray-500 pl-5">
            <li
              class="list-disc"
            >Rs 300 instant Cashback with PayPal on a minimum spend of Rs 1000. TCA</li>
          </ul>
          <a href="#" class="text-blue-700 p-5 font-semibold">
            Show More
            <i class="fa fa-angle-down" aria-hidden="true"></i>
          </a>
        </div>
        <div class="w-full p-3 bg-white shadow rounded border border-gray-300 text-sm mt-3">
          <div class="font-hairline text-gray-500">
            <i class="fa fa-truck" aria-hidden="true"></i> Shop for
            <span class="font-bold text-orange-500">₹444</span> more to get
            <span class="font-bold">Free Delivery</span>
          </div>
        </div>
        <div class="font-bold text-gray-700 w-full p-3 text-lg bg-white mt-3 flex flex-wrap">
          <div class="text-left w-1/2">My Shopping Bag (1 Items)</div>
          <div class="text-right w-1/2">Total ₹904</div>
        </div>
        <div class="flex hr-line justify-between shadow rounded">
          <div class="lg:w-1/5 left-0 xs:w-3/12 h-32">
            <div>
              <img class="h-40 object-cover" src="/cart-product.jpg" />
              <div
                class="lg:hidden xs:visible text-black p-2 bg-gray-300 rounded rounded-t-none"
              >Arrives 19 Sep</div>
            </div>
          </div>
          <div class="lg:w-4/5 right-0 xs:9/12">
            <div class="pl-4 font-hairline">
              <div class="w-full flex flex-wrap p-2">
                <div class="w-3/4">
                  <a href="#" class="text-black text-lg">Stylish Green Floral Print Mid Thigh L</a>
                  <div class="text-xs font-hairline text-gray-700">Sold By:WandWagon</div>
                </div>
                <div class="w-1/4 text-right">
                  <div class="text-black mb-2 text-sm font-bold">₹904</div>
                  <div class="text-gray-500 mb-2 text-xs">
                    <span class="line-through">₹904</span>
                    <span class>|</span>
                    <span class="text-orange-500 font-hairline">40% OFF</span>
                  </div>
                </div>
              </div>
              <div class>
                <div class="w-full text-hairline p-2">
                  <div class="inline-block relative w-16">
                    <select
                      class="text-sm py-2 cursor-pointer cursor-pointer block appearance-none leading-tight focus:outline-none focus:none text-gray-700"
                    >
                      <option class="bg-white">Size: s</option>
                      <option class="bg-white text-black">M</option>
                      <option class="bg-white text-black">L</option>
                      <option class="bg-white text-black">XL</option>
                    </select>
                    <div
                      class="pointer-events-none absolute inset-y-0 right-0 items-center flex text-gray-700"
                    >
                      <i class="ml-2 fa fa-caret-down" />
                    </div>
                  </div>

                  <div class="inline-block relative w-16">
                    <select
                      class="text-sm px-2 py-2 cursor-pointer cursor-pointer block appearance-none leading-tight focus:outline-none focus:none text-gray-700"
                    >
                      <option class="bg-white">Qty: 1</option>
                      <option class="bg-white text-black">2</option>
                      <option class="bg-white text-black">3</option>
                      <option class="bg-white text-black">4</option>
                      <option class="bg-white text-black">5</option>
                      <option class="bg-white text-black">6</option>
                      <option class="bg-white text-black">7</option>
                    </select>
                    <div
                      class="pointer-events-none absolute inset-y-0 right-0 items-center flex text-gray-700"
                    >
                      <i class="ml-2 fa fa-caret-down" />
                    </div>
                  </div>
                </div>
                <div class="w-full p-2 border-t border-gray-300 text-gray-500">
                  <button class="p-4 border-r border-gray-300 focus:outline-none">REMOVE</button>
                  <button class="p-4 focus:outline-none">MOVE TO WISHLIST</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden lg:block">
          <a href="#" class="w-full shadow flex flex-wrap p-4 mt-6 mb-6">
            <i class="fa fa-bookmark-o mt-1 mr-2" aria-hidden="true"></i> Add More From Wishlist
            <i class="fa fa-angle-right mt-1 ml-2" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div class="border-r border-gray-300"></div>
      <div class="lg:w-1/4 mt-10 lg:pr-10 xs:w-full px-3">
        <div
          class="w-full flex flex-wrap border-b border-dotted pb-3 justify-between pb-2 relative"
        >
          <div class="text-sm w-full text-gray-500">OPTIONS</div>
          <div class="text-sm text-black mt-3">Coupons</div>
          <button
            class="absolute right-0 text-blue-600 rounded p-1 cursor-pointer border px-2 mt-6 text-sm border-blue-500"
          >APPLY</button>
        </div>
        <div
          class="w-full flex flex-wrap border-b border-dotted pb-3 justify-between pb-2 relative"
        >
          <div class="text-sm w-full text-gray-500 pt-3 pb-3">
            <a href="#">Gift Wrapfor</a>₹25
            <!-- <Checkbox
              :count="b.doc_count"
              :value="b.key"
              v-model="fl.brands"
              @change="changed({model:'brands',checked:fl.brands})"
            >{{b.key}}</Checkbox>-->
          </div>
          <div class="text-xs text-black mt-1">Cash / Card on Delivery Not Available</div>
        </div>
        <div class="4/5 right-0 pb-3 bb text-sm text-gray-500 leading-relaxed">
          <div>
            <p class="text-gray-500 mt-4 font-semibold text-xs">Price Details</p>
            <div class="flex justify-between mt-1">
              <div class="w-1/2 text-sm text-left">Bag Total</div>
              <div class="ml-2 w-1/2 text-black-400 text-right">₹1,009</div>
            </div>
            <div class="flex justify-between mt-1">
              <div class="w-1/2 text-sm text-left">Bag Discount</div>
              <div class="ml-2 w-1/2 text-black-400 text-right">₹1,009</div>
            </div>
            <div class="flex justify-between mt-1">
              <div class="w-1/2 text-sm text-left">Tax</div>
              <div class="ml-2 w-1/2 text-black-400 text-right">-₹577</div>
            </div>
            <div class="flex justify-between mt-1">
              <div class="w-1/2 text-sm text-left">Coupon Discount</div>
              <div class="ml-2 w-1/2 text-blue-600 text-right">
                <a href="#">Apply Coupon</a>
              </div>
            </div>
            <div class="flex justify-between mt-1">
              <div class="w-1/2 text-sm text-left">Order Total</div>
              <div class="ml-2 w-1/2 text-black-400 text-right">₹100</div>
            </div>
            <div class="flex justify-between mt-1">
              <div class="w-1/2 text-sm text-left">Delivery CHarges</div>
              <div class="ml-2 w-1/2 text-black-400 text-right">₹100</div>
            </div>
          </div>
        </div>
        <div class="4/5 right-0 pb-3">
          <div class="flex justify-between mt-2">
            <div class="w-1/2 text-lg font-bold text-left">Total</div>
            <div class="ml-2 w-1/2 font-bold text-black-400 text-right">₹532</div>
          </div>
          <button
            class="tracking-widest w-full mt-3 p-3 bg-red-600 text-white text-sm font-semibold rounded"
          >PLACE ORDER</button>
        </div>
      </div>
      <div class="w-8"></div>
    </div>
    <div class="w-full flex flex-wrap border-t border-gray-300 mb-2 p-3">
      <div class="w-3/4 right-0">
        <img src="/payment-cards.png" class="w-3/5 ml-40" />
      </div>
      <div class="w-1/4 text-sm text-center text-gray-700 font-bold">Need Help? Contact Us</div>
    </div>
  </div>
</template>

<script>
import Checkbox from "~/components/Checkbox";
export default {
  components: { Checkbox }
};
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
  font-size: 1.5rem;
}
</style>
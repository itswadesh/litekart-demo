<template>
  <div>
    <div class="flex flex-wrap justify-between">
      <div class="w-full p-2 font-semibold text-lg">
        My Wishlist
        <span class="font-hairline">1 item</span>
      </div>
    </div>
    <div class="flex flex-wrap justify-between">
      <div class="flex w-1/2 lg:w-1/4 xl:w-1/5 justify-between">
        <a href="#">
          <div class="shadow relative m-3">
            <img
              class="h-48 w-full object-cover"
              src="/cart-product.jpg"
              alt=""
            />
            <img
              src="/close-img.png"
              alt="close button"
              class="absolute w-4 top-0 right-0 mt-2 mr-2"
            />
            <div class="px-2 leading-loose">
              <p class="text-sm font-hairline text-black">Fitbit Inspire HR</p>
              <div class="text-gray-500 text-xs">
                <span class="text-2xl font-bold text-black">₹8,999</span>
                <span class="line-through">₹904</span>
                <span class>|</span>
                <span class="text-green-500 font-hairline">40% OFF</span>
              </div>
            </div>
            <div
              class="border-t border-gray-300 text-center"
              @click="addToBag({pid:product._id, vid:variant._id,qty:1})"
            >
              <button class="text-sm font-bold text-black text-red-500 py-4">MOVE TO BAG</button>
            </div>
          </div>
        </a>
      </div>

      <div class="flex w-1/2 lg:w-1/4 xl:w-1/5 justify-between">
        <a href="#">
          <div class="shadow relative m-3">
            <img
              class="h-48 w-full object-cover"
              src="/cart-product.jpg"
              alt=""
            />
            <img
              src="/close-img.png"
              alt="close button"
              class="absolute w-4 top-0 right-0 mt-2 mr-2"
            />
            <div class="px-2 leading-loose">
              <p class="text-sm font-hairline text-black">Fitbit Inspire HR</p>
              <div class="text-gray-500 text-xs">
                <span class="text-2xl font-bold text-black">₹8,999</span>
                <span class="line-through">₹904</span>
                <span class>|</span>
                <span class="text-green-500 font-hairline">40% OFF</span>
              </div>
            </div>
            <div
              class="border-t border-gray-300 text-center"
              @click="addToBag({pid:product._id, vid:variant._id,qty:1})"
            >
              <button class="text-sm font-bold text-black text-red-500 py-4">MOVE TO BAG</button>
            </div>
          </div>
        </a>
      </div>

      <div class="flex w-1/2 lg:w-1/4 xl:w-1/5 justify-between">
        <a href="#">
          <div class="shadow relative m-3">
            <img
              class="h-48 w-full object-cover"
              src="/cart-product.jpg"
              alt=""
            />
            <img
              src="/close-img.png"
              alt="close button"
              class="absolute w-4 top-0 right-0 mt-2 mr-2"
            />
            <div class="px-2 leading-loose">
              <p class="text-sm font-hairline text-black">Fitbit Inspire HR</p>
              <div class="text-gray-500 text-xs">
                <span class="text-2xl font-bold text-black">₹8,999</span>
                <span class="line-through">₹904</span>
                <span class>|</span>
                <span class="text-green-500 font-hairline">40% OFF</span>
              </div>
            </div>
            <div
              class="border-t border-gray-300 text-center"
              @click="addToBag({pid:product._id, vid:variant._id,qty:1})"
            >
              <button class="text-sm font-bold text-black text-red-500 py-4">MOVE TO BAG</button>
            </div>
          </div>
        </a>
      </div>
      <div class="flex w-1/2 lg:w-1/4 xl:w-1/5 justify-between">
        <a href="#">
          <div class="shadow relative m-3">
            <img
              class="h-48 w-full object-cover"
              src="/cart-product.jpg"
              alt=""
            />
            <img
              src="/close-img.png"
              alt="close button"
              class="absolute w-4 top-0 right-0 mt-2 mr-2"
            />
            <div class="px-2 leading-loose">
              <p class="text-sm font-hairline text-black">Fitbit Inspire HR</p>
              <div class="text-gray-500 text-xs">
                <span class="text-2xl font-bold text-black">₹8,999</span>
                <span class="line-through">₹904</span>
                <span class>|</span>
                <span class="text-green-500 font-hairline">40% OFF</span>
              </div>
            </div>
            <div
              class="border-t border-gray-300 text-center"
              @click="addToBag({pid:product._id, vid:variant._id,qty:1})"
            >
              <button class="text-sm font-bold text-black text-red-500 py-4">MOVE TO BAG</button>
            </div>
          </div>
        </a>
      </div>

      <div class="flex w-1/2 lg:w-1/4 xl:w-1/5 justify-between">
        <a href="#">
          <div class="shadow relative m-3">
            <img
              class="h-48 w-full object-cover"
              src="/cart-product.jpg"
              alt=""
            />
            <img
              src="/close-img.png"
              alt="close button"
              class="absolute w-4 top-0 right-0 mt-2 mr-2"
            />
            <div class="px-2 leading-loose">
              <p class="text-sm font-hairline text-black">Fitbit Inspire HR</p>
              <div class="text-gray-500 text-xs">
                <span class="text-2xl font-bold text-black">₹8,999</span>
                <span class="line-through">₹904</span>
                <span class>|</span>
                <span class="text-green-500 font-hairline">40% OFF</span>
              </div>
            </div>
            <div
              class="border-t border-gray-300 text-center"
              @click="addToBag({pid:product._id, vid:variant._id,qty:1})"
            >
              <button class="text-sm font-bold text-black text-red-500 py-4">MOVE TO BAG</button>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
<template>
  <div>
    <div class="flex flex-wrap justify-between">
      <div class="w-full p-2 text-lg font-semibold">
        My Wishlist
        <span class="font-hairline">1 item</span>
      </div>
    </div>
    <div class="flex flex-wrap justify-between">
      <div class="flex justify-between w-1/2 lg:w-1/4 xl:w-1/5">
        <a href="#">
          <div class="relative m-3 shadow">
            <img
              class="object-cover w-full h-48"
              src="/cart-product.jpg"
              alt=""
            />
            <img
              src="/close-img.png"
              alt="x"
              class="absolute top-0 right-0 w-4 mt-2 mr-2"
            />
            <div class="px-2 leading-loose">
              <p class="text-sm font-hairline text-black">Fitbit Inspire HR</p>
              <div class="text-xs text-gray-500">
                <span class="text-2xl font-bold text-black">₹8,999</span>
                <span class="line-through">₹904</span>
                <span class>|</span>
                <span class="font-hairline text-green-500">40% OFF</span>
              </div>
            </div>
            <div
              class="text-center border-t border-gray-300"
              @click="addToBag({pid:product._id, vid:variant._id,qty:1})"
            >
              <button class="py-4 text-sm font-bold text-black text-red-500">MOVE TO BAG</button>
            </div>
          </div>
        </a>
      </div>

      <div class="flex justify-between w-1/2 lg:w-1/4 xl:w-1/5">
        <a href="#">
          <div class="relative m-3 shadow">
            <img
              class="object-cover w-full h-48"
              src="/cart-product.jpg"
              alt=""
            />
            <img
              src="/close-img.png"
              alt="x"
              class="absolute top-0 right-0 w-4 mt-2 mr-2"
            />
            <div class="px-2 leading-loose">
              <p class="text-sm font-hairline text-black">Fitbit Inspire HR</p>
              <div class="text-xs text-gray-500">
                <span class="text-2xl font-bold text-black">₹8,999</span>
                <span class="line-through">₹904</span>
                <span class>|</span>
                <span class="font-hairline text-green-500">40% OFF</span>
              </div>
            </div>
            <div
              class="text-center border-t border-gray-300"
              @click="addToBag({pid:product._id, vid:variant._id,qty:1})"
            >
              <button class="py-4 text-sm font-bold text-black text-red-500">MOVE TO BAG</button>
            </div>
          </div>
        </a>
      </div>

      <div class="flex justify-between w-1/2 lg:w-1/4 xl:w-1/5">
        <a href="#">
          <div class="relative m-3 shadow">
            <img
              class="object-cover w-full h-48"
              src="/cart-product.jpg"
              alt=""
            />
            <img
              src="/close-img.png"
              alt="x"
              class="absolute top-0 right-0 w-4 mt-2 mr-2"
            />
            <div class="px-2 leading-loose">
              <p class="text-sm font-hairline text-black">Fitbit Inspire HR</p>
              <div class="text-xs text-gray-500">
                <span class="text-2xl font-bold text-black">₹8,999</span>
                <span class="line-through">₹904</span>
                <span class>|</span>
                <span class="font-hairline text-green-500">40% OFF</span>
              </div>
            </div>
            <div
              class="text-center border-t border-gray-300"
              @click="addToBag({pid:product._id, vid:variant._id,qty:1})"
            >
              <button class="py-4 text-sm font-bold text-black text-red-500">MOVE TO BAG</button>
            </div>
          </div>
        </a>
      </div>
      <div class="flex justify-between w-1/2 lg:w-1/4 xl:w-1/5">
        <a href="#">
          <div class="relative m-3 shadow">
            <img
              class="object-cover w-full h-48"
              src="/cart-product.jpg"
              alt=""
            />
            <img
              src="/close-img.png"
              alt="x"
              class="absolute top-0 right-0 w-4 mt-2 mr-2"
            />
            <div class="px-2 leading-loose">
              <p class="text-sm font-hairline text-black">Fitbit Inspire HR</p>
              <div class="text-xs text-gray-500">
                <span class="text-2xl font-bold text-black">₹8,999</span>
                <span class="line-through">₹904</span>
                <span class>|</span>
                <span class="font-hairline text-green-500">40% OFF</span>
              </div>
            </div>
            <div
              class="text-center border-t border-gray-300"
              @click="addToBag({pid:product._id, vid:variant._id,qty:1})"
            >
              <button class="py-4 text-sm font-bold text-black text-red-500">MOVE TO BAG</button>
            </div>
          </div>
        </a>
      </div>

      <div class="flex justify-between w-1/2 lg:w-1/4 xl:w-1/5">
        <a href="#">
          <div class="relative m-3 shadow">
            <img
              class="object-cover w-full h-48"
              src="/cart-product.jpg"
              alt=""
            />
            <img
              src="/close-img.png"
              alt="x"
              class="absolute top-0 right-0 w-4 mt-2 mr-2"
            />
            <div class="px-2 leading-loose">
              <p class="text-sm font-hairline text-black">Fitbit Inspire HR</p>
              <div class="text-xs text-gray-500">
                <span class="text-2xl font-bold text-black">₹8,999</span>
                <span class="line-through">₹904</span>
                <span class>|</span>
                <span class="font-hairline text-green-500">40% OFF</span>
              </div>
            </div>
            <div
              class="text-center border-t border-gray-300"
              @click="addToBag({pid:product._id, vid:variant._id,qty:1})"
            >
              <button class="py-4 text-sm font-bold text-black text-red-500">MOVE TO BAG</button>
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
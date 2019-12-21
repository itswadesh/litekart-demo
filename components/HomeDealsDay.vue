<template>
  <carousel>
    <div class="w-full flex flex-wrap">
      <div class="w-3/4 shadow">
        <div class="w-full p-3 border-b">
          <p class="w-1/2 float-left">
            Deals Of the Day
            <!-- <span class="ml-2 text-gray-500 text-xs">23:57:59 Left</span> -->
          </p>
          <button class="primary text-xs px-2 rounded">View All</button>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full ml-1">
            <img
              src="/cardimage.webp"
              class="h-32 w-32 mt-2 object-cover"
              alt="todays deals"
            />
            <div class="px-2 py-4">
              <div class="font-bold text-xs mb-2">Laptop Accessories</div>
              <p class="text-green-700 text-xs text-center">Extra 5% off</p>
            </div>
          </div>
          <div class="w-32 ml-1">
            <img
              src="/cardimage.webp"
              class="px-2 h-32 w-32 mt-2"
              alt="todays deals"
            />
            <div class="px-2 py-4">
              <div class="font-bold text-xs mb-2">Laptop Accessories</div>
              <p class="text-green-700 text-xs text-center">Extra 5% off</p>
            </div>
          </div>
          <div class="w-32 ml-1">
            <img
              src="/cardimage.webp"
              class="px-2 h-32 w-32 mt-2"
              alt="todays deals"
            />
            <div class="px-2 py-4">
              <div class="font-bold text-xs mb-2">Laptop Accessories</div>
              <p class="text-green-700 text-xs text-center">Extra 5% off</p>
            </div>
          </div>
          <div class="w-32 ml-1">
            <img
              src="/cardimage.webp"
              class="px-2 h-32 w-32 mt-2"
              alt="todays deals"
            />
            <div class="px-2 py-4">
              <div class="font-bold text-xs mb-2">Laptop Accessories</div>
              <p class="text-green-700 text-xs text-center">Extra 5% off</p>
            </div>
          </div>
          <div class="w-32 ml-1">
            <img
              src="/cardimage.webp"
              class="px-2 h-32 w-32 mt-2"
              alt="todays deals"
            />
            <div class="px-2 py-4">
              <div class="font-bold text-xs mb-2">Laptop Accessories</div>
              <p class="text-green-700 text-xs text-center">Extra 5% off</p>
            </div>
          </div>
          <div class="w-32 ml-1">
            <img
              src="/cardimage.webp"
              class="px-2 h-32 w-32 mt-2"
              alt="todays deals"
            />
            <div class="px-2 py-4">
              <div class="font-bold text-xs mb-2">Laptop Accessories</div>
              <p class="text-green-700 text-xs text-center">Extra 5% off</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/4 shadow">
        <div class="h-64">
          <img
            src="/cardimage.webp"
            class="px-2 w-full h-64 mt-2"
            alt="todays deals"
          />
        </div>
      </div>
    </div>
  </carousel>
</template>

<script>
export default {};
</script>

<style scoped>
.border-b {
  border-bottom: 1px solid lightgray;
}
</style>
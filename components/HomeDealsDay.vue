<template>
  <carousel>
    <div class="flex flex-wrap w-full">
      <div class="w-3/4 shadow">
        <div class="w-full p-3 border-b">
          <p class="float-left w-1/2">
            Deals Of the Day
            <!-- <span class="ml-2 text-xs text-gray-500">23:57:59 Left</span> -->
          </p>
          <button class="px-2 text-xs rounded primary">View All</button>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full ml-1">
            <img
              src="/cardimage.webp"
              class="object-cover w-32 h-32 mt-2"
              alt=""
            />
            <div class="px-2 py-4">
              <div class="mb-2 text-xs font-bold">Laptop Accessories</div>
              <p class="text-xs text-center text-green-700">Extra 5% off</p>
            </div>
          </div>
          <div class="w-32 ml-1">
            <img src="/cardimage.webp" class="w-32 h-32 px-2 mt-2" alt="" />
            <div class="px-2 py-4">
              <div class="mb-2 text-xs font-bold">Laptop Accessories</div>
              <p class="text-xs text-center text-green-700">Extra 5% off</p>
            </div>
          </div>
          <div class="w-32 ml-1">
            <img src="/cardimage.webp" class="w-32 h-32 px-2 mt-2" alt="" />
            <div class="px-2 py-4">
              <div class="mb-2 text-xs font-bold">Laptop Accessories</div>
              <p class="text-xs text-center text-green-700">Extra 5% off</p>
            </div>
          </div>
          <div class="w-32 ml-1">
            <img src="/cardimage.webp" class="w-32 h-32 px-2 mt-2" alt="" />
            <div class="px-2 py-4">
              <div class="mb-2 text-xs font-bold">Laptop Accessories</div>
              <p class="text-xs text-center text-green-700">Extra 5% off</p>
            </div>
          </div>
          <div class="w-32 ml-1">
            <img src="/cardimage.webp" class="w-32 h-32 px-2 mt-2" alt="" />
            <div class="px-2 py-4">
              <div class="mb-2 text-xs font-bold">Laptop Accessories</div>
              <p class="text-xs text-center text-green-700">Extra 5% off</p>
            </div>
          </div>
          <div class="w-32 ml-1">
            <img src="/cardimage.webp" class="w-32 h-32 px-2 mt-2" alt="" />
            <div class="px-2 py-4">
              <div class="mb-2 text-xs font-bold">Laptop Accessories</div>
              <p class="text-xs text-center text-green-700">Extra 5% off</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/4 shadow">
        <div class="h-64">
          <img src="/cardimage.webp" class="w-full h-64 px-2 mt-2" alt="" />
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

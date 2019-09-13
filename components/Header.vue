<template>
  <header>
    <div>
      <!-- NAVBAR COMPONENT -->
      <nav class="flex items-center justify-between flex-wrap bg-white-800 shadow p-5">
        <div class="flex items-center flex-shrink-0 text-orange mr-6 order-1">
          <img
            class="w-12 h-10 ml-8"
            src="/logo.png"
          >

          <!-- <div class="w-full justify-between flex-grow sm:flex sm:items-center sm:w-auto"> -->
          <div class="hidden lg:block flex flex-none text-sm py-4 xs:justify-between items-center text-gray order-2">
            <a
              href="#"
              class="mr-8"
            >
              MEN
            </a>
            <a
              href="#"
              class="mr-8"
            >
              WOMEN
            </a>
            <a
              href="#"
              class="mr-8"
            >
              KIDS
            </a>
            <a
              href="#"
              class="mr-8 "
            >
              HOME & LIVING
            </a>
            <a
              href="#"
              class="mx-2"
            >
              DISCOVER
            </a>
          </div>
        </div>
        <div
          class="mr-8 border-gray-300 relative order-4 sm:order-3"
          style="flex:1"
        >
          <div class="absolute">
            <i
              class="fa fa-search ml-2 mt-3 text-gray-500"
              aria-hidden="true"
            ></i>
          </div>
          <input
            type="search"
            class="w-full px-10 bg-purple-white pr-4 shadow rounded border-0  h-10"
            placeholder="Search for products,brands and more"
          >
        </div>

        <div class="flex items-center flex-shrink-0 py-4 order-3 sm:order-4">
          <div>
            <img
              class="w-5 h-4 ml-2"
              src="/avatar.png"
            >
            <a
              href="#"
              class="mr-6 inline-text-gray text-xs font-bold"
            >Profile</a>
          </div>
          <div>
            <img
              class="w-5 h-4  ml-3 center"
              src="/bookmark.png"
            >
            <a
              href="#"
              class="mr-6 text-xs inline-text-gray font-bold"
            >Whistlist</a>
          </div>
          <div class="relative">
            <img
              class="w-5 h-4"
              src="/bag.png"
            >
            <a
              href="#"
              class="flex mr-6 text-xs inline-text-gray font-bold"
            >Bag
              <span class="text-white font-bold desktop-badge rounded-full 
                px-1 absolute ">1</span>
            </a>
          </div>
        </div>
        <!-- </div> -->
      </nav>
    </div>
  </header>
</template>
<style scoped>
.desktop-badge {
  height: 16px;
  background: #ff3f6c;
  left: 13px;
  top: -6px;
}
</style>
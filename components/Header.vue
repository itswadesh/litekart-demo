<template>
  <header>
    <div>
      <!-- NAVBAR COMPONENT -->
      <nav class="flex items-center justify-between flex-wrap bg-white-800 shadow p-5">
        <div class="flex items-center flex-shrink-0 text-orange mr-6">
          <img
            class="w-12 h-10 ml-5"
            src="/logo.png"
          >
        </div>

        <div class="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
          <div class="text-sm sm:flex-grow">
            <a
              href="#"
              class="block mt-2 ml-6 sm:inline-block sm:mt-0 lightgray font-semibold"
            >
              MEN
            </a>
            <a
              href="#"
              class="block mt-2 ml-6 sm:inline-block sm:mt-0 lightgray font-semibold"
            >
              WOMEN
            </a>
            <a
              href="#"
              class="block mt-2 ml-6 sm:inline-block sm:mt-0 lightgray font-semibold"
            >
              KIDS
            </a>
            <a
              href="#"
              class="block mt-2 ml-6 sm:inline-block sm:mt-0 lightgray font-semibold"
            >
              HOME & LIVING
            </a>
            <a
              href="#"
              class="block mt-2 ml-6 sm:inline-block sm:mt-0 lightgray font-semibold"
            >
              DISCOVER
            </a>
          </div>
          
          
        <div class="relative mr-8 w-1/3">
          <input type="search" class="w-full bg-purple-white pr-4 shadow rounded border-0 p-3 h-10" placeholder="Search by name...">
        </div>
        <div>
            <img
              class="w-5 h-4 ml-3"
              src="/avatar.png"
            >
            <a
              href="#"
              class="mr-10 inline-lightgray font-light"
            >Profile</a>
          </div>
          <div>
            <img
              class="w-5 h-4  ml-3 center"
              src="/bookmark.png"
            >
            <a
              href="#"
              class="mr-10 inline-lightgray font-light"
            >Whistlist</a>
          </div>
          <div>
            <img
              class="w-5 h-4  center"
              src="/bag.png"
            >
            <a
              href="#"
              class="mr-10 inline-lightgray font-light"
            >Bag <span class="numberCircle text-white font-bold rounded-full text-xs h-4 absolute pl-1 pr-1 pt-0 pb-1 text-center whitespace-no-wrap">1</span></a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
<style scoped>
.numberCircle {
  background: #ff3f6c;
  top:10px;
  right:60px;
}
</style>
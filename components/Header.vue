<template>
  <header>
    <div>
      <!-- NAVBAR COMPONENT -->
      <nav class="flex items-center justify-between flex-wrap bg-white-800 shadow p-5">
        <div class="flex items-center flex-shrink-0 text-orange mr-6">
          <img
            class="w-12 h-10 ml-8"
            src="/logo.png"
          >
        </div>

        <div class="w-full justify-between flex-grow sm:flex sm:items-center sm:w-auto">
          <div class="flex flex-none text-sm py-4 xs:justify-between items-center text-gray ">
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

          <div class="mr-8 w-full">
            <input
              type="search"
              class="w-full bg-purple-white pr-4 shadow rounded border-0 p-3 h-10"
              placeholder="Search by name..."
            >
          </div>
          <div class="flex items-center">
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
                <span class="text-white font-bold desktop-badge rounded-full text-xs 
                h-4 pl-1 pr-1 pt-0 pb-1 absolute text-center whitespace-no-wrap">1</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
<style scoped>
.desktop-badge {
  height: 18px;
  background: #ff3f6c;
  left: 13px;
  top: -2px;
}
</style>
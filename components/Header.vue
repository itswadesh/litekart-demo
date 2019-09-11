<template>
  <header>
    <div>
      <!-- NAVBAR COMPONENT -->
      <nav class="flex items-center justify-between flex-wrap bg-white-800 shadow p-3">
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
              class="block mt-2 sm:inline-block sm:mt-0 text-grey-300 font-semibold mr-4"
            >
              MEN
            </a>
            <a
              href="#"
              class="block mt-2 sm:inline-block sm:mt-0 text-grey-300 font-semibold mr-4"
            >
              WOMEN
            </a>
            <a
              href="#"
              class="block mt-2 sm:inline-block sm:mt-0 text-grey-300 font-semibold"
            >
              KIDS
            </a>
            <a
              href="#"
              class="block mt-2 ml-4 sm:inline-block sm:mt-0 text-grey-300 font-semibold"
            >
              HOME & LIVING
            </a>
            <a
              href="#"
              class="block mt-2 ml-4 sm:inline-block sm:mt-0 text-grey-300 font-semibold"
            >
              DISCOVER
            </a>
          </div>
          <div class="input-search">
            <!-- <img class="w-5 h-5 mr-10" src="/search.png"> -->
            <input
              class="full-width mr-20 rounded input-bg border-2 px-1 py-1"
              type="text"
              placeholder="Search for brands,products or more"
            >
          </div>
          <div>
            <img
              class="w-5 h-4   ml-3"
              src="/avatar.png"
            >
            <a
              href="#"
              class="mr-10 inline-block text-sm font-semibold"
            >Profile</a>
          </div>
          <div>
            <img
              class="w-5 h-4  ml-3 center"
              src="/bookmark.png"
            >
            <a
              href="#"
              class="mr-10 inline-block text-sm font-semibold"
            >Whistlist</a>
          </div>
          <div>
            <img
              class="w-5 h-4  center"
              src="/bag.png"
            >
            <a
              href="#"
              class="mr-10 inline-block text-sm font-semibold"
            >Bag <span class="numberCircle">1</span></a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
<style scoped>
.numberCircle {
  white-space: nowrap;
  text-align: center;
  line-height: 18px;
  padding: 0 6px;
  height: 18px;
  background: #ff3f6c;
  position: absolute;
  border-radius: 50%;
  font-family: Arial, sans-serif;
  font-size: 12px;
  color: #fff;
  top: 0;
  font-weight: bold;
  right: 47px;
}
.input-search {
  padding-right: 100px;
}
.input-search > img {
  position: absolute;
  margin-top: 10px;
  margin-left: 10px;
}
input {
  width: 100%;
}
</style>
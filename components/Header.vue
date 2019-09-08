<template>
  <header>
    <div>
       <!-- NAVBAR COMPONENT -->
    <nav class="flex items-center justify-between flex-wrap bg-white-800 shadow-2xl p-6">
      <div class="flex items-center flex-shrink-0 text-orange mr-6">
        <img class="w-10 h-10" src="/favicon.ico">
      </div>

      <div class="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
        <div class="text-sm sm:flex-grow">
          <a href="#"  class="block mt-2 sm:inline-block sm:mt-0 text-grey-300 font-bold-200 mr-4">
            MEN
          </a>
          <a  href="#"  class="block mt-2 sm:inline-block sm:mt-0 text-grey-300 font-bold-200 mr-4">
           WOMEN
          </a>
          <a href="#" class="block mt-2 sm:inline-block sm:mt-0 text-grey-300 font-bold-200">
            KIDS
          </a>
           <a href="#" class="block mt-2 ml-4 sm:inline-block sm:mt-0 text-grey-300 font-bold-200">
            HOME & LIVING
          </a>
          <a href="#" class="block mt-2 ml-4 sm:inline-block sm:mt-0 text-grey-300 font-bold-200">
            DISCOVER
          </a>
        </div>
        <div class="input-search">
            <!-- <img class="w-5 h-5 mr-10" src="/search.png"> -->
           <input class="full-width mr-20 rounded bg-gray-200 border-2 px-1 py-1" type="text" placeholder="Search for brands,products or more">
        </div>
        <div>
           <img class="w-6 h-5  ml-2" src="/avatar.png">
          <a href="#" class="mr-10 inline-block text-sm font-semibold"
            >Profile</a
          >
        </div>
        <div>
           <img class="w-6 h-5 ml-2 center" src="/bookmark.png">
          <a href="#" class="mr-10 inline-block text-sm font-semibold"
            >Whistlist</a
          >
        </div>
        <div>
           <img class="w-6 h-5  center" src="/bag.png">
          <a href="#" class="mr-10 inline-block text-sm font-semibold"
            >Bag</a
          >
        </div>
      </div>
    </nav>
  </div>
  </header>
</template>
<style scoped>
.input-search{
    padding-right: 100px;
}
.input-search > img{
    position: absolute;
    margin-top:10px;
    margin-left: 10px;
}
input{
    width:100%;
}
</style>
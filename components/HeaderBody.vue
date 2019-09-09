<template>
    <div>
        <p class="py-2 px-5 text-sm ">Home / Clothing / Dresses / <span class="font-semibold">Clothing Dresses</span></p>
        <p class="py-2 px-5 text-sm "><span class="font-semibold">Clothing Dresses</span>- 31391 items</p>

        <div class="flex flex-wrap">
            <div class="w-1/4  flex-none p-2">
                <p class="font-semibold py-2 px-3">FILTERS</p>
            </div>
            <div class="w-3/4  flex-none p-2">
              <div class="text-sm sm:flex-grow float-left">
              <a href="#"  class="block  text-gray-600 m-4 sm:inline-block  sm:mt-0">
                Bundles<img class="w-2 h-2 arrowcls" src="/down-arrow.png">
              </a>
              <a  href="#"  class="block  text-gray-600 m-4 sm:inline-block  sm:mt-0">
              Fabric <img class="w-2 h-2 arrowcls" src="/down-arrow.png">
              </a>
              <a href="#" class="block  text-gray-600 m-4 sm:inline-block  sm:mt-0">
                Fabric Type <img class="w-2 h-2 arrowcls" src="/down-arrow.png">
              </a>
              <a href="#" class="block  text-gray-600 m-4 sm:inline-block  sm:mt-0 ">
                Length <img class="w-2 h-2 arrowcls" src="/down-arrow.png">
              </a>
              <a href="#" class="block  text-gray-600 m-4 sm:inline-block  sm:mt-0 ">
                Neck <img class="w-2 h-2 arrowcls" src="/down-arrow.png">
              </a>
              <a href="#" class="block  text-gray-600 m-4 sm:inline-block  sm:mt-0 ">
                Ocassion <img class="w-2 h-2 arrowcls" src="/down-arrow.png">
              </a>
              <a href="#" class="block  text-gray-600 m-4 sm:inline-block  sm:mt-0 ">
                Pattern <img class="w-2 h-2 arrowcls" src="/down-arrow.png">
              </a>
              <a href="#" class="block  text-black font-semibold m-4 sm:inline-block  sm:mt-0 ">
                +8 more
              </a>

              <select class="py-2 px-2 bg-white-400">
                <option>Sort by:Recommended</option>
                <option>What's New</option>
                <option>Popularity</option>
                <option>Better Discount</option>
                <option>Price: High to Low</option>
                <option>Price: Low to High</option>
                <option>Faster Delivery</option>
              </select>
              
            </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
select{
  border:1px solid lightgray !important;
}
.txtxlr{
  color:#282c3f;
}
.hoveraffect{
  background-color: aquamarine;
  border-radius: 50px;
  padding-left: 1em;
  padding-right: 1em;
}
.arrowcls{
    float: right;
    margin-top: 0.6em;
    margin-left: 0.2em;
}
</style>
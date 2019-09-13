<template>
  <div>
    <p class="py-2 px-5 text-sm ">Home / Clothing / Dresses / <span class="font-semibold">Clothing Dresses</span></p>
    <p class="py-2 px-5 text-sm "><span class="font-semibold">Clothing Dresses</span>- 31391 items</p>

    <div class="flex flex-wrap">
      <div class="text-sm sm:flex-grow float-left px-5 w-full">
        <a
          href="#"
          class="block inline-block rounded-full p-1 mr-8 bg-gray-200 text-black"
        >
          Bundles<i class="fa fa-caret-down px-1" />
        </a>
        <a
          href="#"
          class="block inline-block rounded-full  p-1 mr-8 bg-gray-200 text-black"
        >
          Fabric <i class="fa fa-caret-down px-1" />
        </a>
        <a
          href="#"
          class="block inline-block rounded-full  p-1 mr-8 bg-gray-200 text-black "
        >
          Length<i class="fa fa-caret-down px-1" />
        </a>
        <a
          href="#"
          class="block inline-block rounded-full  p-1 mr-8 bg-gray-200 text-black "
        >
          Neck<i class="fa fa-caret-down px-1" />
        </a>
        <a
          href="#"
          class="block inline-block rounded-full  p-1 mr-8 bg-gray-200 text-black "
        >
          Ocassion<i class="fa fa-caret-down px-1" />
        </a>
        <a
          href="#"
          class="block inline-block rounded-full  p-1 mr-8 bg-gray-200 text-black "
        >
          Pattern<i class="fa fa-caret-down px-1" />
        </a>
        <a
          href="#"
          class="block  text-black m-4 sm:inline-block  sm:mt-0 "
        >
          +8 more
        </a>
        <div class="inline-block relative w-64">
          <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline">
            <option>Sort by:Recommended</option>
            <option>What's New</option>
            <option>Popularity</option>
            <option>Better Discount</option>
            <option>Price: High to Low</option>
            <option>Price: Low to High</option>
            <option>Faster Delivery</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <i class="fa fa-caret-down px-1" />
          </div>
        </div>

      </div>
      <div>
        <a
          href="#"
          class="block"
        >
          <span class="text-gray-600 m-4 p-2 border border-gray-300 hover:border-gray-500 capitalize rounded-full">Bundles
            <i
              class="fa fa-times px-1"
              aria-hidden="true"
            ></i>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
select {
  border: 1px solid lightgray !important;
}
.txtxlr {
  color: #282c3f;
}
.hoveraffect {
  background-color: aquamarine;
  border-radius: 50px;
  padding-left: 1em;
  padding-right: 1em;
}
.arrowcls {
  float: right;
  margin-top: 0.6em;
  margin-left: 0.2em;
}
</style>
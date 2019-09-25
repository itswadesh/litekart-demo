<template>
  <div>
    <div class="shadow py-4 bb w-full">
      <div class="text-gray-700 text-center">
        <img
          class="containerr"
          src="/empty-listing.png"
        />
      </div>
      <div class="text-gray-500 text-center font-normal">We are unable to find items matching</div>
      <div class="text-black text-center">{{$route.query.q}}</div>
    </div>
    <div class="w-full flex text-center shadow-md">
      <MegamenuMobile />
      <!-- <div class="w-1/3">
        <img
          class="containerr p-2"
          src="/circle-filter-imgs.png"
        />Baby 0-2y
      </div>
      <div class="w-1/3">
        <img
          class="containerr p-2"
          src="/circle-filter-imgs.png"
        />Girls 2y+
      </div>
      <div class="w-1/3">
        <img
          class="containerr p-2"
          src="/circle-filter-imgs.png"
        />Boys 2y+
      </div> -->
    </div>
  </div>
</template>

<script>
import MegamenuMobile from "~/components/MegamenuMobile";
export default {
  components: { MegamenuMobile }
};
</script>

<style>
</style>
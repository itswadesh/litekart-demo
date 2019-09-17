<template>
  <div>
    <Header />
    <div class="flex items-center h-auto p-5 xs:block lg:hidden" style="overflow-x:scroll">
      <div class="flex-1 text-gray-700 rounded-full shadow text-center px-4 py-2 m-2">
        <img src="/circle-filter-imgs-1.png" class="w-20" />
        <div class="xs:text-xs">BABIES</div>
      </div>
      <div class="flex-1 text-gray-700 rounded-full shadow text-center px-4 py-2 m-2">
        <img src="/circle-filter-imgs-1.png" class="w-20" />
        <div class="xs:text-xs">BABIES</div>
      </div>
      <div class="flex-1 text-gray-700 rounded-full shadow text-center px-4 py-2 m-2">
        <img src="/circle-filter-imgs-1.png" class="w-20" />
        <div class="xs:text-xs">BABIES</div>
      </div>
      <div class="flex-1 text-gray-700 rounded-full shadow text-center px-4 py-2 m-2">
        <img src="/circle-filter-imgs-1.png" class="w-20" />
        <div class="xs:text-xs">BABIES</div>
      </div>
      <div class="flex-1 text-gray-700 rounded-full shadow text-center px-4 py-2 m-2">
        <img src="/circle-filter-imgs-1.png" class="w-20" />
        <div class="xs:text-xs">BABIES</div>
      </div>
      <div class="flex-1 text-gray-700 rounded-full shadow text-center px-4 py-2 m-2">
        <img src="/circle-filter-imgs-1.png" class="w-20" />
        <div class="xs:text-xs">BABIES</div>
      </div>
      <div class="flex-1 text-gray-700 rounded-full shadow text-center px-4 py-2 m-2">
        <img src="/circle-filter-imgs-1.png" class="w-20" />
        <div class="xs:text-xs">BABIES</div>
      </div>
      <div class="flex-1 text-gray-700 rounded-full shadow text-center px-4 py-2 m-2">
        <img src="/circle-filter-imgs-1.png" class="w-20" />
        <div class="xs:text-xs">BABIES</div>
      </div>
      <div class="flex-1 text-gray-700 rounded-full shadow text-center px-4 py-2 m-2">
        <img src="/circle-filter-imgs-1.png" class="w-20" />
        <div class="xs:text-xs">BABIES</div>
      </div>
      <div class="flex-1 text-gray-700 rounded-full shadow text-center px-4 py-2 m-2">
        <img src="/circle-filter-imgs-1.png" class="w-20" />
        <div class="xs:text-xs">BABIES</div>
      </div>
      <div class="flex-1 text-gray-700 rounded-full shadow text-center px-4 py-2 m-2">
        <img src="/circle-filter-imgs-1.png" class="w-20" />
        <div class="xs:text-xs">BABIES</div>
      </div>
      <div class="flex-1 text-gray-700 rounded-full shadow text-center px-4 py-2 m-2">
        <img src="/circle-filter-imgs-1.png" class="w-20" />
        <div class="xs:text-xs">BABIES</div>
      </div>
      <div class="flex-1 text-gray-700 rounded-full shadow text-center px-4 py-2 m-2">
        <img src="/circle-filter-imgs-1.png" class="w-20" />
        <div class="xs:text-xs">BABIES</div>
      </div>
    </div>

    <div class="px-2">
      <Carousel />
      <Deals />
      <Banners />
      <YouMayLike />
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header";
import Carousel from "~/components/Carousel";
import Deals from "~/components/Deals";
import Banners from "~/components/Banners";
import YouMayLike from "~/components/YouMayLike";
export default {
  components: { Header, Carousel, Deals, Banners, YouMayLike }
};

// $(document).ready(function() {
//   $("#owl-demo").owlCarousel({
//     autoPlay: 3000, //Set AutoPlay to 3 seconds

//     items: 4,
//     itemsDesktop: [1199, 3],
//     itemsDesktopSmall: [979, 3]
//   });
// });
</script>

<style scoped>
</style>
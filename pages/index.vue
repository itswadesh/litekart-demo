<template>
  <div>
    <Header />
    <div id="owl-demo" class="flex text-center">
      <div class="m-2 rounded shadow xs:w-16 lg:auto">
        <img src="/owl-carousel.png" class="rounded-t" />
        <div class="xs:text-xs">BABIES</div>
      </div>
      <div class="m-2 rounded shadow xs:w-16 lg:auto">
        <img src="/owl-carousel.png" class="rounded-t" />
        <div class="xs:text-xs">OLD</div>
      </div>
      <div class="m-2 rounded shadow xs:w-16 lg:auto">
        <img src="/owl-carousel.png" class="rounded-t" />
        <div class="xs:text-xs">LADIES</div>
      </div>
      <div class="m-2 rounded shadow xs:w-16 lg:auto">
        <img src="/owl-carousel.png" class="rounded-t" />
        <div class="xs:text-xs">MEN</div>
      </div>
      <div class="m-2 rounded shadow xs:w-16 lg:auto">
        <img src="/owl-carousel.png" class="rounded-t" />
        <div class="xs:text-xs">WOMEN</div>
      </div>
      <div class="m-2 rounded shadow xs:w-16 lg:auto">
        <img src="/owl-carousel.png" class="rounded-t" />
        <div class="xs:text-xs">SHOES</div>
      </div>
      <div class="m-2 rounded shadow xs:w-16 lg:auto">
        <img src="/owl-carousel.png" class="rounded-t" />
        <div class="xs:text-xs">GIRLS</div>
      </div>
      <div class="m-2 rounded shadow xs:w-16 lg:auto">
        <img src="/owl-carousel.png" class="rounded-t" />
        <div class="xs:text-xs">BOYS</div>
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
#owl-demo img {
  min-width: 80px;
}
</style>
<template>
  <div>
    <Header />
    <MegamenuMobile />
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
import MegamenuMobile from "~/components/MegamenuMobile";

export default {
  components: { Header, MegamenuMobile, Carousel, Deals, Banners, YouMayLike }
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
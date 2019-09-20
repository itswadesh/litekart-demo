<template>
  <div>
    <Header />
    <MegamenuMobile />
    <div class="px-2 home">
      <Carousel>
        <image-card
          class="ar-carousel__slide"
          v-for="(image, index) in heroImages"
          :key="index"
          :src="image"
        />
      </Carousel>
      <Deals />
      <Banners />
      <YouMayLike />
    </div>
    <BackToTopDark />
  </div>
</template>

<script>
import Header from "~/components/Header";
// import Carousel from "~/components/Carousel";
import Deals from "~/components/Deals";
import Banners from "~/components/Banners";
import YouMayLike from "~/components/YouMayLike";
import MegamenuMobile from "~/components/MegamenuMobile";
import { Carousel, ImageCard, BackToTopDark } from "~/components/ui";
export default {
  data() {
    return {
      heroImages: [
        "https://rukminim1.flixcart.com/flap/3376/560/image/df56a7.jpg?q=50",
        "https://rukminim1.flixcart.com/flap/3376/560/image/72eb77e04d532677.jpg?q=50",
        "https://rukminim1.flixcart.com/flap/3376/560/image/3c1078d1497131f8.jpg?q=50"
      ],
      posters: [
        "https://rukminim1.flixcart.com/flap/960/960/image/8bd84964d3c898be.jpg?q=50",
        "https://rukminim1.flixcart.com/flap/1312/704/image/c1c409445a7e5db5.jpg?q=70",
        "https://rukminim1.flixcart.com/flap/1312/704/image/c89a6c.jpg?q=70"
      ],
      categories: [
        "women-dresses-skirts",
        "men-shirts",
        "men-formal-shoes",
        "men-eye-wear"
      ]
    };
  },
  components: {
    Header,
    MegamenuMobile,
    Carousel,
    Deals,
    Banners,
    YouMayLike,
    Carousel,
    ImageCard,
    BackToTopDark
  }
};
</script>


<style lang="sass" scoped>
.home
  width: 100%
  height: auto
  min-height: calc(100vh - 100px)
  background-color: config('colors.grey-lighter')

  &-wrapper
    width: 98%
    margin: 0 auto
  .product-carousel
    width: 100%
    height: 250px
    margin: 20px 0
    border-radius: 3px
    @apply mx-auto relative bg-white
    margin-bottom: 70px
    &__header
      padding: 24px
      @apply flex flex-row flex-no-wrap bg-white justify-between
    &__carousel
      width: 100%
      padding: 0 24px
      height: auto
</style>
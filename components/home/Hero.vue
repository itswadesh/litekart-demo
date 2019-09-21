<template>
  <carousel
    :perPage="1"
    :autoplay="true"
    :autoplayTimeout="5000"
    :paginationEnabled="true"
    :navigationEnabled="true"
    navigation-next-label="<img src='/chevron-right.svg' style='transform: rotate(180deg)'>"
    navigation-prev-label="<img src='/chevron-right.svg'/>"
  >
    <slide
      v-for="(image, index) in heroImages"
      :key="index"
    >
      <nuxt-link :to="image.link">
        <img
          v-lazy="$store.state.settings.CDN_URL+image.img"
          alt=""
        />
      </nuxt-link>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  data() {
    return {
      heroImages: []
    };
  },
  components: { Carousel, Slide },
  async created() {
    // const settings = await this.$axios.$get("/settings");
    this.heroImages =
      this.$store.state.settings &&
      this.$store.state.settings.banners &&
      this.$store.state.settings.banners.slider;
  }
};
</script>

<style>
@media (max-width: 600px) {
  .VueCarousel-navigation {
    display: none;
  }
}
@media (min-width: 600px) {
  .VueCarousel-pagination {
    display: none;
  }
}
.VueCarousel-pagination {
  position: absolute;
  bottom: -10px;
}
.VueCarousel-navigation button {
  width: 47px;
  height: 104px;
  background-color: hsla(0, 0%, 100%, 0.98) !important;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.11);
}
.VueCarousel-navigation button.VueCarousel-navigation-prev {
  left: 30px !important;
}
.VueCarousel-navigation button.VueCarousel-navigation-next {
  right: 30px !important;
}
.VueCarousel-navigation button.VueCarousel-navigation--disabled {
  display: none;
}
.VueCarousel-navigation button.VueCarousel-navigation-prev img {
  margin-left: 10px;
}
.VueCarousel-navigation button.VueCarousel-navigation-next img {
  margin-left: 5px;
}
/* // &-wrapper
  //   width: 98%
  //   margin: 0 auto
  // .product-carousel
  //   width: 100%
  //   height: 250px
  //   margin: 20px 0
  //   border-radius: 3px
  //   @apply mx-auto relative bg-white
  //   margin-bottom: 70px
  //   &__header
  //     padding: 24px
  //     @apply flex flex-row flex-no-wrap bg-white justify-between
  //   &__carousel
  //     width: 100%
  //     padding: 0 24px
  //     height: auto */
</style>
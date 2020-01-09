<template>
  <carousel
    :perPage="1"
    :autoplay="true"
    :autoplayTimeout="5000"
    :paginationEnabled="true"
    :navigationEnabled="true"
    navigation-next-label="<img src='/chevron-right.svg' style='transform: rotate(180deg)' alt='right icon'>"
    navigation-prev-label="<img src='/chevron-right.svg' alt='right icon'/>"
  >
    <slide
      v-for="(image, index) in heroImages"
      :key="index"
    >
      <nuxt-link :to="image.link">
        <img
          v-lazy="$store.state.settings.CDN_URL+image.img+'?tr=w-1920,h-360'"
          alt="categories"
          class="h-48 lg:h-auto object-cover"
        />
      </nuxt-link>
    </slide>
  </carousel>
</template>

<script>
export default {
  data() {
    return {
      heroImages: []
    };
  },
  async created() {
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
  left: 27px !important;
}
.VueCarousel-navigation button.VueCarousel-navigation-next {
  right: 47px !important;
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
</style>
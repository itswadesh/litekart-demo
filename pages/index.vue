<template>
  <div>
    <MegamenuMobile />
    <div class="px-2 home">
      <Hero />
      <Deals />
      <div>
        <nuxt-link
          :to="$store.state.settings.banners.hero.link || '/search'"
          class="lg:w-1/4 shadow xs:w-full"
        >
          <img
            v-lazy="$store.state.settings.CDN_URL+$store.state.settings.banners.hero.img"
            alt=""
            class="w-full h-full object-cover object-center"
          />
        </nuxt-link>
      </div>
      <!-- <DealsSkeleton /> -->
      <Banners />
      <!-- <BannersSkeleton /> -->
      <!-- <YouMayLikeSkeleton /> -->
      <YouMayLike />
    </div>
  </div>
</template>

<script>
import Hero from "~/components/home/Hero";
import Deals from "~/components/home/Deals";
import Banners from "~/components/home/Banners";
import YouMayLike from "~/components/home/YouMayLike";
import MegamenuMobile from "~/components/MegamenuMobile";
// skeletons
import YouMayLikeSkeleton from "~/components/home/YouMayLikeSkeleton";
import BannersSkeleton from "~/components/home/BannersSkeleton";
import DealsSkeleton from "~/components/home/DealsSkeleton";
export default {
  components: {
    Hero,
    MegamenuMobile,
    Deals,
    Banners,
    YouMayLike,
    //Skeletons
    YouMayLikeSkeleton,
    BannersSkeleton,
    DealsSkeleton
  }
};
</script>

<style>
.home {
  width: 100%;
  height: auto;
  min-height: calc(100vh - 100px);
  background-color: config("colors.grey-lighter");
}
</style>
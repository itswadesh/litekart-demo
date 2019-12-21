<template>
  <div>
    <MegamenuMobile />
    <div class="px-2 home text-1">
      <Hero />
      <RecentlyViewed />
      <Heros />
      <Sale />
      <!-- <Deals v-if="1==1" />
      <DealsSkeleton v-else /> -->
      <Banners :banners="$store.state.settings && $store.state.settings.banners && $store.state.settings.banners.offers" />
      <YouMayLike />
      <!-- <BannersSkeleton /> -->
    </div>
  </div>
</template>

<script>
import Hero from "~/components/home/Hero";
import Heros from "~/components/home/Heros";
import Deals from "~/components/home/Deals";
import Sale from "~/components/home/Sale";
import RecentlyViewed from "~/components/home/RecentlyViewed";
import Banners from "~/components/home/Banners";
import YouMayLike from "~/components/home/YouMayLike";
import MegamenuMobile from "~/components/MegamenuMobile";
// skeletons
import BannersSkeleton from "~/components/home/BannersSkeleton";
import DealsSkeleton from "~/components/home/DealsSkeleton";
export default {
  components: {
    Hero,
    Heros,
    MegamenuMobile,
    Deals,
    Sale,
    Banners,
    YouMayLike,
    RecentlyViewed,
    //Skeletons
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
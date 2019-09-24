<template>
  <div>
    <Header />
    <MegamenuMobile />
    <div class="px-2 home">
      <Hero />
      <Deals />
      <!-- <DealsSkeleton /> -->
      <Banners />
      <!-- <BannersSkeleton /> -->
      <!-- <YouMayLikeSkeleton /> -->
      <YouMayLike />
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header";
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
    Header,
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
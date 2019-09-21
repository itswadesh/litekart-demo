<template>
  <div>
    <Header />
    <MegamenuMobile />
    <div class="px-2 home">
      <Hero />
      <Deals />
      <Banners />
      <YouMayLike />
    </div>
    <BackToTopDark />
  </div>
</template>

<script>
import Header from "~/components/Header";
import Hero from "~/components/home/Hero";
import Deals from "~/components/home/Deals";
import Banners from "~/components/home/Banners";
import YouMayLike from "~/components/home/YouMayLike";
import MegamenuMobile from "~/components/MegamenuMobile";
import { BackToTopDark } from "~/components/ui";

export default {
  components: {
    Header,
    Hero,
    MegamenuMobile,
    Deals,
    Banners,
    YouMayLike,
    BackToTopDark
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
<template>
  <div>
    <Header />
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
</script>

<style scoped>

</style>
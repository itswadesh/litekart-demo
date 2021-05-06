<template>
  <div>
    <MegamenuMobile />
    <div class="px-2 home text-1">
      <Hero class="mt-2" />
      <Banners
        :banners="
          $store.state.settings &&
            $store.state.settings.banners &&
            $store.state.settings.banners.offers
        "
      />
      <Category slug="women" title="Fresh in Women" />
      <Category slug="men" title="Fresh in Men" />
      <Sale />
      <Category slug="men-jeans" title="Men Jeans" />
      <Category slug="women-jeans" title="Women Jeans" />
      <Category slug="activewear" title="Sports Wear" />
      <YouMayLike />
      <Category slug="women-lingerie" title="Lingerie" />
      <Category slug="coats" title="Coats & Blazers" />
      <!-- <Category slug="kurtis" title="Kurtis"/> -->
      <WhatsNew />
      <Category slug="women-winter-wear" title="Winter Collection" />
      <Category slug="plus-sizes" title="Plus Size Collection" />
      <RecentlyViewed />
      <!-- <Heros /> -->
      <!-- <Deals v-if="1==1" />
      <DealsSkeleton v-else /> -->
      <!-- <BannersSkeleton /> -->
    </div>
  </div>
</template>

<script>
import Hero from '~/components/home/Hero'
import Heros from '~/components/home/Heros'
import Deals from '~/components/home/Deals'
import Sale from '~/components/home/Sale'
import RecentlyViewed from '~/components/home/RecentlyViewed'
import Banners from '~/components/home/Banners'
import YouMayLike from '~/components/home/YouMayLike'
import WhatsNew from '~/components/home/WhatsNew'
import MegamenuMobile from '~/components/MegamenuMobile'
// skeletons
import BannersSkeleton from '~/components/home/BannersSkeleton'
import DealsSkeleton from '~/components/home/DealsSkeleton'
import Category from '~/components/home/Category'
export default {
  components: {
    Hero,
    Heros,
    MegamenuMobile,
    Deals,
    Sale,
    Banners,
    YouMayLike,
    WhatsNew,
    RecentlyViewed,
    //Skeletons
    BannersSkeleton,
    DealsSkeleton,
    Category
  }
}
</script>

<style>
.home {
  width: 100%;
  height: auto;
  min-height: calc(100vh - 100px);
  background-color: config('colors.grey-lighter');
}
</style>

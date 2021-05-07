<template>
  <div>
    <MegamenuMobile />
    <div class="px-2 home text-1">
      <div class="p-3 mt-2 text-sm font-semibold text-gray-600 uppercase bg-white sm:hidden">
        Welcome to litekart
      </div>
      <Banners
       class="sm:hidden"
        :banners="
          $store.state.settings &&
            $store.state.settings.banners &&
            $store.state.settings.banners.offers
        "
      />
       <div class="flex flex-row justify-center p-3 mb-2 text-sm font-semibold text-center text-gray-600 capitalize bg-white sm:hidden">
        <p class="my-auto"> Free Shipping For You till midnight </p>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 ml-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      </div>
      <Hero class="mt-2" />
      <Banners
       class="hidden sm:flex"
        :banners="
          $store.state.settings &&
            $store.state.settings.banners &&
            $store.state.settings.banners.offers
        "
      />
      <Category slug="women" title="Fresh in Women" class="bg-white" />
      <Category slug="men" title="Fresh in Men" class="bg-white" />
      <Sale class="bg-white" />
      <Category slug="men-jeans" title="Men Jeans" class="bg-white" />
      <Category slug="women-jeans" title="Women Jeans" class="bg-white" />
      <Category slug="activewear" title="Sports Wear" class="bg-white" />
      <YouMayLike class="bg-white" />
      <Category slug="women-lingerie" title="Lingerie" class="bg-white" />
      <Category slug="coats" title="Coats & Blazers" class="bg-white" />
      <!-- <Category slug="kurtis" title="Kurtis"/> -->
      <WhatsNew class="bg-white" />
      <Category slug="women-winter-wear" title="Winter Collection" class="bg-white" />
      <Category slug="plus-sizes" title="Plus Size Collection" class="bg-white" />
      <RecentlyViewed class="bg-white" />
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

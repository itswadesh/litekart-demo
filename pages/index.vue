<template>
  <div>
    <MegamenuMobile />
    <div class="sm:px-2 home text-1">
      
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
       class="mt-2"
        :banners="
          $store.state.settings &&
            $store.state.settings.banners &&
            $store.state.settings.banners.offers
        "
      />
       <div class="p-3 mt-2 text-sm font-semibold text-gray-600 uppercase bg-white sm:hidden">
        Beauty and personnal care
       <Hero class="mt-2 sm:hidden" />
       </div>
      <Category slug="women" title="Fresh in Women" class="bg-white" />
      
      <div class="p-2 mt-2 bg-white sm:hidden">
        <div class="p-3 text-sm font-semibold text-gray-600 uppercase">
            400 off on top style
        </div>
        <div class="grid grid-cols-2 gap-3 ">
          <img src="/img/mobile_home/lan-deng-quddu_dZKkQ-unsplash.jpg" alt="" class="object-cover w-full h-40 col-span-1">
          <img src="/img/mobile_home/keagan-henman-Won79_9oUEk-unsplash.jpg" alt="" class="object-cover w-full h-40 col-span-1 ">
          <img src="/img/mobile_home/junko-nakase-Q-72wa9-7Dg-unsplash.jpg" alt="" class="object-cover w-full h-40 col-span-1">
          <img src="/img/mobile_home/hassan-ouajbir-ir9mB-4E1VI-unsplash.jpg" alt="" class="object-cover w-full h-40 col-span-1">
        </div>
      </div>
      
      <Category slug="men" title="Fresh in Men" class="bg-white" />
      <Sale class="bg-white" />
      <Category slug="men-jeans" title="Men Jeans" class="bg-white" />
      <Category slug="women-jeans" title="Women Jeans" class="bg-white" />
      
      <div class="pb-2 mt-2 bg-white sm:hidden">
        <div class="p-3 text-sm font-semibold text-gray-600 uppercase">
            Essential Store
        </div>
        <div class="grid grid-cols-3 gap-2 p-1 px-2">
          <div class="h-32 border border-black rounded">
            <img src="/img/mobile_home/kelly-sikkema-3FHp2yOPDxU-unsplash.jpg" alt="" class="object-cover w-full h-24 col-span-1 rounded-t">
            <p class="pt-1.5 text-xs font-semibold tracking-wider text-center capitalize">Sanitizers</p>
          </div>
          <div class="h-32 border border-red-400 rounded">
            <img src="/img/mobile_home/charles-deluvio-pG67Tg7jGAw-unsplash.jpg" alt="" class="object-cover w-full h-24 col-span-1 rounded-t">
            <p class="pt-1.5 text-xs font-semibold tracking-wider text-center">Masks & PPE</p>
          </div>
          <div class="h-32 border border-blue-400 rounded">
            <img src="/img/mobile_home/mika-baumeister-WHPiIbMMgWY-unsplash.jpg" alt="" class="object-cover w-full h-24 col-span-1 rounded-t">
            <p class="pt-1.5 text-xs font-semibold tracking-wider text-center capitalize">Personnal Care</p>
          </div>
        </div>
      </div>

      <div class="pb-2 mt-2 bg-white sm:hidden">
        <div class="p-3 text-sm font-semibold text-gray-600 uppercase">
            Summer care
        </div>
       <div class="" >
          <div class="flex flex-row">
            <div class="w-1/2 h-56 mx-2 border">
              <img src="/img/mobile_home/kori-nori-3YrtBEpMh60-unsplash.jpg" alt="" class="object-cover w-full h-36">
              <div class="flex flex-col h-auto ">
                <span class="pt-1.5 text-sm font-semibold tracking-wider text-center capitalize">Sunscreens</span>
                <span class="text-base font-semibold text-center">Starting At 179 Rs</span>
                <span class="pt-1 text-xs text-center uppercase "> + Shop now</span>
              </div>
            </div>
            <div class="w-1/2 h-56 mx-2 border">
              <img src="/img/mobile_home/charisse-kenion-uIJSFejHvf8-unsplash.jpg" alt="" class="object-cover w-full h-36">
              <div class="flex flex-col h-auto ">
                <span class="pt-1.5 text-sm font-semibold tracking-wider text-center capitalize">Body Wash</span>
                <span class="text-base font-semibold text-center">Starting At 399 Rs</span>
                <span class="pt-1 text-xs text-center uppercase "> + Shop now</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div class="mt-2 bg-yellow-500 sm:hidden ">
        <img src="/img/mobile_home/fahad-waseem-AdjyrNhFVPI-unsplash.jpg" alt="" class="w-full h-56 p-1 rounded-lg filter brightness-50">
        <span class="absolute w-full -mt-24 text-xl text-center text-white">Bras & Briefs</span>
        <span class="absolute w-full -mt-16 text-3xl text-center text-white">Under 699 + 10% Off</span>
      </div>
      
       <div class="p-3 py-5 mt-2 text-sm text-gray-600 uppercase bg-white">
         <p class="font-semibold tracking-wider"> categories to bag </p>
        <MobileCategories class="mt-2" />
       </div>
  
      <Category slug="activewear" title="Sports Wear" class="relative bg-white" />
      <YouMayLike class="bg-white" />
      
      <div class="p-2 mt-2 bg-white sm:hidden">
        <div class="p-3 text-sm font-semibold text-gray-600 uppercase">
            New style for every occasions
        </div>
        <div class="grid grid-cols-3 gap-1">
          <div class="relative w-full col-span-1">
            <img src="/img/occasion/pedram-normohamadian-_q4zr9i_IAs-unsplash.jpg" alt="" class="object-cover w-full h-44 filter brightness-50">
            <span class="absolute w-full text-sm tracking-wider text-center text-white uppercase bottom-2">+ Every Day</span>
          </div>
          <div class="relative w-full col-span-1">
            <img src="/img/occasion/tholaal-mohamed-Q7fDfQB_nSc-unsplash.jpg" alt="" class="object-cover w-full h-44 filter brightness-50">
            <span class="absolute w-full text-sm tracking-wider text-center text-white uppercase bottom-2">+ Vacation</span>
          </div>
          <div class="relative w-full col-span-1">
            <img src="/img/occasion/amy-hirschi-K0c8ko3e6AA-unsplash.jpg" alt="" class="object-cover w-full h-44 filter brightness-50">
            <span class="absolute w-full mx-auto text-sm tracking-wider text-center text-white uppercase bottom-2">+ Work</span>
          </div>
          <div class="relative w-full col-span-1">
            <img src="/img/occasion/kumpan-electric-4KRsNO9QxwM-unsplash.jpg" alt="" class="object-cover w-full h-44 filter brightness-50">
            <span class="absolute w-full text-sm tracking-wider text-center text-white uppercase bottom-2">+ Bruch</span>
          </div>
          <div class="relative w-full col-span-1">
            <img src="/img/occasion/bui-thanh-tam-Cnyqk0vTC3A-unsplash.jpg" alt="" class="object-cover w-full h-44 filter brightness-50">
            <span class="absolute w-full text-sm tracking-wider text-center text-white uppercase bottom-2">+ summer</span>
          </div>
          <div class="relative w-full col-span-1">
            <img src="/img/occasion/muhammad-murtaza-ghani-nUjfEYmJYl0-unsplash.jpg" alt="" class="object-cover w-full h-44 filter brightness-50">
            <span class="absolute w-full text-sm tracking-wider text-center text-white uppercase bottom-2">+ festive</span>
          </div>
          <div class="relative w-full col-span-1">
            <img src="/img/occasion/alex-shaw-__AThUMXbUw-unsplash.jpg" alt="" class="object-cover w-full h-44 filter brightness-50">
            <span class="absolute w-full text-sm tracking-wider text-center text-white uppercase bottom-2">+ louging</span>
          </div>
          <div class="relative w-full col-span-1">
            <img src="/img/occasion/tobias-nii-kwatei-quartey-2-kfBa27AyU-unsplash.jpg" alt="" class="object-cover w-full h-44 filter brightness-50">
            <span class="absolute w-full text-sm tracking-wider text-center text-white uppercase bottom-2">+ workout</span>
          </div>
          <div class="relative w-full col-span-1">
            <img src="/img/occasion/frederick-medina-3WLfe7fCix4-unsplash.jpg" alt="" class="object-cover w-full h-44 filter brightness-50">
            <span class="absolute w-full text-sm tracking-wider text-center text-white uppercase bottom-2">+ party</span>
          </div>
        </div>
      </div>
      
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
import MobileCategories from '~/components/home/MobileCategories'
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
    MobileCategories,
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

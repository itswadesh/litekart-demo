<template>
  <div>
    <MegamenuMobile />
    <div class="sm:px-2 home text-1">
      
      <div class="p-3 mt-2 text-sm font-semibold text-gray-600 uppercase bg-white sm:hidden ">
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
       <div class="flex flex-row justify-center p-3 mb-2 text-sm font-semibold text-center text-gray-600 capitalize bg-white sm:hidden ">
        <p class="my-auto"> Free Shipping For You till midnight </p>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 ml-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      </div>
      <Hero class="mt-2" />
      <!-- <Banners
       class="mt-2"
        :banners="
          $store.state.settings &&
            $store.state.settings.banners &&
            $store.state.settings.banners.offers
        "
      /> -->
       <div class="p-3 mt-2 text-gray-600 uppercase bg-white border shadow">
        <span class="text-sm font-semibold tracking-widest md:text-lg lg:text-2xl"> Beauty and personnal care </span>
        <Hero class="mt-2 " />
       </div>
      <Category slug="women" title="Fresh in Women" class="bg-white" />
      
      <div class="p-2 mt-2 bg-white border shadow">
        <div class="p-3 text-sm font-semibold tracking-widest text-gray-600 uppercase md:text-lg lg:text-2xl">
            Top style
        </div>
        <div class="grid grid-cols-2 gap-2 sm:gap-3 ">
          <a href="https://demo.litekart.in/men-shirts?page=1">  
            <img v-lazy="'/img/mobile_home/lan-deng-quddu_dZKkQ-unsplash.jpg'" alt="" class="object-cover w-full h-40 col-span-1 border-2 rounded-lg md:h-56 lg:h-64 hover:border-red-500 sm:h-48">
          </a>
          <a href="https://demo.litekart.in/men-t-shirts?page=1">
            <img v-lazy="'/img/mobile_home/keagan-henman-Won79_9oUEk-unsplash.jpg'" alt="" class="object-cover w-full h-40 col-span-1 border-2 rounded-lg md:h-56 lg:h-64 sm:h-48 hover:border-red-500">
          </a>
          <a href="https://demo.litekart.in/suiting?page=1">
            <img v-lazy="'/img/mobile_home/junko-nakase-Q-72wa9-7Dg-unsplash.jpg'" alt="" class="object-cover w-full h-40 col-span-1 border-2 rounded-lg md:h-56 lg:h-64 sm:h-48 hover:border-red-500">
          </a>
          <a href="https://demo.litekart.in/men-jackets?page=1">
            <img v-lazy="'/img/mobile_home/hassan-ouajbir-ir9mB-4E1VI-unsplash.jpg'" alt="" class="object-cover w-full h-40 col-span-1 border-2 rounded-lg md:h-56 lg:h-64 sm:h-48 hover:border-red-500">
          </a>
        </div>
      </div>
      
      <div class="pb-2 mt-2 bg-white border shadow">
        <div class="p-3 text-sm font-semibold tracking-widest text-gray-600 uppercase md:text-lg lg:text-2xl">
            Essential Store
        </div>
        <div class="grid grid-cols-3 gap-2 p-1 px-2">
          <div class="h-32 border border-black rounded hover:border-2 sm:h-44 md:h-56 lg:h-64">
            <img v-lazy="'/img/mobile_home/kelly-sikkema-3FHp2yOPDxU-unsplash.jpg'" alt="" class="object-cover w-full h-24 col-span-1 rounded-t sm:h-36 md:h-44 lg:h-56">
            <p class="my-auto pt-1.5 text-xs md:text-medium font-semibold tracking-wider text-center sm:pt-0.5 md:pt-2 sm:text-lg lg:pt-0">Sanitizers</p>
          </div>
          <div class="h-32 border border-red-400 rounded hover:border-2 sm:h-44 md:h-56 lg:h-64">
            <img v-lazy="'/img/mobile_home/charles-deluvio-pG67Tg7jGAw-unsplash.jpg'" alt="" class="object-cover w-full h-24 col-span-1 rounded-t sm:h-36 md:h-44 lg:h-56">
            <p class="my-auto pt-1.5 text-xs font-semibold md:text-medium tracking-wider text-center sm:pt-0.5 md:pt-2 sm:text-lg lg:pt-0">Masks & PPE</p>
          </div>
          <div class="h-32 border border-blue-400 rounded hover:border-2 sm:h-44 md:h-56 lg:h-64">
            <img v-lazy="'/img/mobile_home/mika-baumeister-WHPiIbMMgWY-unsplash.jpg'" alt="" class="object-cover w-full h-24 col-span-1 rounded-t sm:h-36 md:h-44 lg:h-56">
            <p class="my-auto pt-1.5 text-xs font-semibold md:text-medium tracking-wider text-center sm:pt-0.5 md:pt-2 sm:text-lg lg:pt-0">Personnal Care</p>
          </div>
        </div>
      </div>
      <WhatsNew class="bg-white" />
      <div class="pb-2 mt-2 bg-white border shadow">
        <div class="p-3 text-sm font-semibold tracking-widest text-gray-600 uppercase md:text-lg lg:text-2xl">
            Summer care
        </div>
       <div class="px-2">
          <div class="grid grid-cols-2 gap-2 lg:grid-cols-4">
            <a href="https://demo.litekart.in/women-makeup?page=1">
            <div class="w-full h-56 border border-blue-400 hover:border-blue-700 md:h-72">
              <img v-lazy="'/img/mobile_home/kori-nori-3YrtBEpMh60-unsplash.jpg'" alt="" class="object-cover w-full h-36 md:h-52">
              <div class="flex flex-col h-auto ">
                <span class="pt-1.5 text-sm font-semibold tracking-wider text-center capitalize">Sunscreens</span>
                <span class="text-base font-semibold text-center">Starting At ₹179</span>
                <span class="pt-1 text-xs text-center uppercase "> + Shop now</span>
              </div>
            </div>
            </a>
            <a href="https://demo.litekart.in/women-skin-care?page=1">
            <div class="w-full h-56 border border-gray-400 hover:border-gray-700 md:h-72">
              <img v-lazy="'/img/mobile_home/charisse-kenion-uIJSFejHvf8-unsplash.jpg'" alt="" class="object-cover w-full h-36 md:h-52">
              <div class="flex flex-col h-auto ">
                <span class="pt-1.5 text-sm font-semibold tracking-wider text-center capitalize">Body Wash</span>
                <span class="text-base font-semibold text-center">Starting At ₹399</span>
                <span class="pt-1 text-xs text-center uppercase "> + Shop now</span>
              </div>
            </div>
            </a>
            <a href="https://demo.litekart.in/women-bath-body?page=1">
            <div class="w-full h-56 border border-gray-300 hover:border-gray-600 md:h-72">
              <img v-lazy="'/img/mobile_home/charisse-kenion-qJhMIBceIic-unsplash.jpg'" alt="" class="object-cover w-full h-36 md:h-52">
              <div class="flex flex-col h-auto ">
                <span class="pt-1.5 text-sm font-semibold tracking-wider text-center capitalize">Face Wash</span>
                <span class="text-base font-semibold text-center">Starting At ₹99</span>
                <span class="pt-1 text-xs text-center uppercase "> + Shop now</span>
              </div>
            </div>
            </a>
            <a href="https://demo.litekart.in/women-bath-body?page=1">
            <div class="w-full h-56 border border-yellow-400 hover:border-yellow-600 md:h-72">
              <img v-lazy="'/img/mobile_home/deepal-tamang-2ThEcWkaZ34-unsplash.jpg'" alt="" class="object-cover w-full h-36 md:h-52">
              <div class="flex flex-col h-auto ">
                <span class="pt-1.5 text-sm font-semibold tracking-wider text-center capitalize">Body loation</span>
                <span class="text-base font-semibold text-center">Starting At ₹99</span>
                <span class="pt-1 text-xs text-center uppercase "> + Shop now</span>
              </div>
            </div>
            </a>
            
          </div>
        </div>
      </div>

      <a href="https://demo.litekart.in/women-bras-panties?page=1" class="mt-2 bg-yellow-500 sm:hidden">
        <img v-lazy="'/img/mobile_home/fahad-waseem-AdjyrNhFVPI-unsplash.jpg'" alt="" class="w-full h-56 p-1 rounded-lg filter brightness-50">
        <span class="absolute w-full -mt-24 text-xl text-center text-white">Bras & Briefs</span>
        <span class="absolute w-full -mt-16 text-3xl text-center text-white">Under 699 + 10% Off</span>
      </a>
      
       <div class="p-3 py-5 mt-2 text-gray-600 uppercase bg-white border shadow">
         <p class="pb-3 text-sm font-semibold tracking-wider md:text-lg lg:text-2xl"> categories to bag </p>
         <MobileCategories class="mt-2" />
       </div>
      
      <Sale class="bg-white" />
      
      <div class="p-2 mt-2 bg-white border shadow">
        <div class="p-3 text-sm font-semibold tracking-widest text-gray-600 uppercase md:text-lg lg:text-2xl">
            New style for every occasions
        </div>
        <div class="grid grid-cols-3 gap-1">
          <a href="https://demo.litekart.in/men-shirts?page=1" class="relative w-full col-span-1">
            <img v-lazy="'/img/occasion/pedram-normohamadian-_q4zr9i_IAs-unsplash.jpg'" alt="" class="object-cover w-full cursor-pointer h-44 filter hover:brightness-75 brightness-50">
            <span class="absolute w-full text-sm tracking-wider text-center text-white uppercase bottom-2">+ Every Day</span>
          </a>
          <a href="https://demo.litekart.in/women-t-shirts-tanktops?page=1" class="relative w-full col-span-1">
            <img v-lazy="'/img/occasion/tholaal-mohamed-Q7fDfQB_nSc-unsplash.jpg'" alt="" class="object-cover w-full cursor-pointer h-44 filter brightness-50 hover:brightness-75">
            <span class="absolute w-full text-sm tracking-wider text-center text-white uppercase bottom-2">+ Vacation</span>
          </a>
          <a href="https://demo.litekart.in/suiting?page=1" class="relative w-full col-span-1">
            <img v-lazy="'/img/occasion/amy-hirschi-K0c8ko3e6AA-unsplash.jpg'" alt="" class="object-cover w-full cursor-pointer h-44 filter brightness-50 hover:brightness-75">
            <span class="absolute w-full mx-auto text-sm tracking-wider text-center text-white uppercase bottom-2">+ Work</span>
          </a>
          <a href="https://demo.litekart.in/sleep-lounge?page=1" class="relative w-full col-span-1">
            <img v-lazy="'/img/occasion/kumpan-electric-4KRsNO9QxwM-unsplash.jpg'" alt="" class="object-cover w-full cursor-pointer h-44 filter brightness-50 hover:brightness-75">
            <span class="absolute w-full text-sm tracking-wider text-center text-white uppercase bottom-2">+ Bruch</span>
          </a>
          <a href="https://demo.litekart.in/sets?page=1" class="relative w-full col-span-1">
            <img v-lazy="'/img/occasion/bui-thanh-tam-Cnyqk0vTC3A-unsplash.jpg'" alt="" class="object-cover w-full cursor-pointer h-44 filter brightness-50 hover:brightness-75">
            <span class="absolute w-full text-sm tracking-wider text-center text-white uppercase bottom-2">+ summer</span>
          </a>
          <a href="https://demo.litekart.in/men-traditional-clothing?page=1" class="relative w-full col-span-1">
            <img v-lazy="'/img/occasion/muhammad-murtaza-ghani-nUjfEYmJYl0-unsplash.jpg'" alt="" class="object-cover w-full cursor-pointer h-44 filter brightness-50 hover:brightness-75">
            <span class="absolute w-full text-sm tracking-wider text-center text-white uppercase bottom-2">+ festive</span>
          </a>
          <a href="https://demo.litekart.in/women-loungewear?page=1" class="relative w-full col-span-1">
            <img v-lazy="'/img/occasion/alex-shaw-__AThUMXbUw-unsplash.jpg'" alt="" class="object-cover w-full cursor-pointer h-44 filter brightness-50 hover:brightness-75">
            <span class="absolute w-full text-sm tracking-wider text-center text-white uppercase bottom-2">+ louging</span>
          </a>
          <a href="https://demo.litekart.in/activewear?page=1" class="relative w-full col-span-1">
            <img v-lazy="'/img/occasion/tobias-nii-kwatei-quartey-2-kfBa27AyU-unsplash.jpg'" alt="" class="object-cover w-full cursor-pointer h-44 filter hover:brightness-75 brightness-50">
            <span class="absolute w-full text-sm tracking-wider text-center text-white uppercase bottom-2">+ workout</span>
          </a>
          <a href="https://demo.litekart.in/boots?page=1" class="relative w-full col-span-1">
            <img v-lazy="'/img/occasion/frederick-medina-3WLfe7fCix4-unsplash.jpg'" alt="" class="object-cover w-full cursor-pointer h-44 filter brightness-50 hover:brightness-75">
            <span class="absolute w-full text-sm tracking-wider text-center text-white uppercase bottom-2">+ party</span>
          </a>
        </div>
      </div>
      
      <Category slug="men" title="Fresh in Men" class="bg-white" />
      <Category slug="men-jeans" title="Men Jeans" class="bg-white" />
      <Category slug="women-jeans" title="Women Jeans" class="bg-white" />
      <Category slug="activewear" title="Sports Wear" class="relative bg-white" />
      <YouMayLike class="bg-white" />
      <Category slug="women-lingerie" title="Lingerie" class="bg-white" />
      <Category slug="coats" title="Coats & Blazers" class="bg-white" />
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

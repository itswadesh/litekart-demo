<template>
  <div class="flex flex-col h-auto bg-white">
    <!-- <BagSkelton v-if="loading" /> -->
    <!-- v-if="categories" -->
    <div class="grid grid-cols-3 gap-2 md:gap-4 md:grid-cols-4 lg:grid-cols-6">
      <div
        v-for="(c, index) in categories" :key="c.index"
        class="mx-auto"
       >
       <div class="text-black capitalize md:text-gray-600"
        :class="{
                'hover:text-yellow-500':index % 9==0,
                'hover:text-purple-500':index % 9==1,
                'hover:text-red-500':index % 9==2,
                'hover:text-green-500':index % 9==3,
                'hover:text-pink-500':index % 9==4,
                'hover:text-blue-500':index % 9==5,
                'hover:text-green-700':index % 9==6,
                'hover:text-pink-700':index % 9==7,
                'hover:text-blue-700':index % 9==8,
              }"
       >
        <!-- <nuxt-link :to="localePath(`/c/${c.slug}`)"> -->
          <img
            v-lazy="c.img"
            alt="categories"
               :class="{
                'hover:border-yellow-500':index % 9==0,
                'hover:border-purple-500':index % 9==1,
                'hover:border-red-500':index % 9==2,
                'hover:border-green-500':index % 9==3,
                'hover:border-pink-500':index % 9==4,
                'hover:border-blue-500':index % 9==5,
                'hover:border-green-700':index % 9==6,
                'hover:border-pink-700':index % 9==7,
                'hover:border-blue-700':index % 9==8,
              }"
            class="object-cover w-24 h-24 mx-auto border-2 rounded-full cursor-pointer border-secondary-500 hover:shadow-xl md:w-32 md:h-32"
          />
          <span
            class="flex justify-center mx-auto mt-4 text-sm font-semibold text-center md:font-bold sm:font-normal sm:text-base md:text-lg"
          >
            {{ c.name }}
          </span>
        </div>
        <!-- </nuxt-link> -->
      </div>
    </div>
  </div>
</template>

<script>
import BagSkelton from '~/components/BagSkelton'
export default {
    components:{BagSkelton},
    data(){
        return{
            categories:[
                {img:'/img/categories/shayna-douglas-_DHamQiT_os-unsplash.jpg', name:'Womens Jacket'},
                {img:'/img/categories/cardimage.webp', name:'Kurta Set'},
                {img:'/img/categories/betls.jpg', name:'Belts & Walltes'},
                {img:'/img/categories/skg-photography-RkAGFGVpXaY-unsplash.jpg', name:'Dresses'},
                {img:'/img/categories/trackpants-1518210964.jpg', name:'Mens Trackpant'},
                {img:'/img/categories/sabrinna-ringquist-9poB8SBFveA-unsplash.jpg', name:'Jwellery'},
                {img:'/img/categories/lee-campbell-GI6L2pkiZgQ-unsplash.jpg', name:'Headpones'},
                {img:'/img/categories/jade-scarlato-R5gcTwsme68-unsplash.jpg', name:'Mens Casual Shoes'},
                {img:'/img/categories/creaslim-0QDEj5dnUMk-unsplash.jpg', name:'Mens Jeans'},
                {img:'/img/categories/danijela-prijovic-U8oa-BABTH0-unsplash.jpg', name:'Lingerie'},
                {img:'/img/categories/content-pixie-ZB4eQcNqVUs-unsplash.jpg', name:'Hand Bags'},
                {img:'/img/categories/kazuend-ejlRp5ktpfY-unsplash.jpg', name:'Infant Essentials'},
            ]

        }
    }
}
</script>
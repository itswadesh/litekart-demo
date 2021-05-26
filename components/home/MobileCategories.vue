<template>
  <div class="flex flex-col h-auto bg-white">
    <!-- <BagSkelton v-if="loading" /> -->
    <!-- v-if="categories" -->
    <!-- class="grid grid-cols-3 gap-2 md:gap-4 md:grid-cols-4 lg:grid-cols-6" -->
    <div >
      <!-- <div
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
      </div> -->
      <div class="grid grid-cols-3 gap-2 text-black capitalize md:text-gray-600 md:gap-4 md:grid-cols-4 lg:grid-cols-6">
        <a href="https://demo.litekart.in/kimonos-summer-jackets?page=1" class="hover:text-yellow-500">
          <img 
          src="/img/categories/shayna-douglas-_DHamQiT_os-unsplash.jpg" alt="" 
          class="object-cover w-24 h-24 mx-auto border-2 rounded-full cursor-pointer hover:border-yellow-500 border-secondary-500 hover:shadow-xl md:w-32 md:h-32">
          <span class="flex justify-center mx-auto mt-4 text-sm font-semibold text-center md:font-bold sm:font-normal sm:text-base md:text-lg">
              Womens Jacket
          </span>
        </a>
         <a href="https://demo.litekart.in/women-kurtas-shalwar-kameez?page=1" class="hover:text-pink-500">
          <img 
          src="/img/categories/cardimage.webp" alt="" 
          class="object-cover w-24 h-24 mx-auto border-2 rounded-full cursor-pointer hover:border-pink-500 border-secondary-500 hover:shadow-xl md:w-32 md:h-32">
          <span class="flex justify-center mx-auto mt-4 text-sm font-semibold text-center md:font-bold sm:font-normal sm:text-base md:text-lg">
              Kurta Set
          </span>
        </a>
         <a href="https://demo.litekart.in/men-wallets?page=1" class="hover:text-red-500">
          <img 
          src="/img/categories/betls.jpg" alt="" 
          class="object-cover w-24 h-24 mx-auto border-2 rounded-full cursor-pointer hover:border-red-500 border-secondary-500 hover:shadow-xl md:w-32 md:h-32">
          <span class="flex justify-center mx-auto mt-4 text-sm font-semibold text-center md:font-bold sm:font-normal sm:text-base md:text-lg">
              Belts & Walltes
          </span>
        </a>
         <a href="https://demo.litekart.in/women-loungewear?page=1" class="hover:text-purple-500">
          <img 
          src="/img/categories/skg-photography-RkAGFGVpXaY-unsplash.jpg" alt="" 
          class="object-cover w-24 h-24 mx-auto border-2 rounded-full cursor-pointer hover:border-purple-500 border-secondary-500 hover:shadow-xl md:w-32 md:h-32">
          <span class="flex justify-center mx-auto mt-4 text-sm font-semibold text-center md:font-bold sm:font-normal sm:text-base md:text-lg">
              Dresses
          </span>
        </a>
         <a href="https://demo.litekart.in/men-pants?page=1" class="hover:text-blue-500">
          <img 
          src="/img/categories/shayna-douglas-_DHamQiT_os-unsplash.jpg" alt="" 
          class="object-cover w-24 h-24 mx-auto border-2 rounded-full cursor-pointer hover:border-blue-500 border-secondary-500 hover:shadow-xl md:w-32 md:h-32">
          <span class="flex justify-center mx-auto mt-4 text-sm font-semibold text-center md:font-bold sm:font-normal sm:text-base md:text-lg">
              Mens Trackpant
          </span>
        </a>
         <a href="https://demo.litekart.in/women-jewelry?page=1" class="hover:text-yellow-700">
          <img 
          src="/img/categories/sabrinna-ringquist-9poB8SBFveA-unsplash.jpg" alt="" 
          class="object-cover w-24 h-24 mx-auto border-2 rounded-full cursor-pointer hover:border-yellow-700 border-secondary-500 hover:shadow-xl md:w-32 md:h-32">
          <span class="flex justify-center mx-auto mt-4 text-sm font-semibold text-center md:font-bold sm:font-normal sm:text-base md:text-lg">
              Jwellery
          </span>
        </a>
         <a href="/" class="hover:text-pink-300">
          <img 
          src="/img/categories/lee-campbell-GI6L2pkiZgQ-unsplash.jpg" alt="" 
          class="object-cover w-24 h-24 mx-auto border-2 rounded-full cursor-pointer hover:border-pink-300 border-secondary-500 hover:shadow-xl md:w-32 md:h-32">
          <span class="flex justify-center mx-auto mt-4 text-sm font-semibold text-center md:font-bold sm:font-normal sm:text-base md:text-lg">
              Headpones
          </span>
        </a>
         <a href="https://demo.litekart.in/men-casual-shoes?page=1" class="hover:text-red-800">
          <img 
          src="/img/categories/jade-scarlato-R5gcTwsme68-unsplash.jpg" alt="" 
          class="object-cover w-24 h-24 mx-auto border-2 rounded-full cursor-pointer hover:border-red-800 border-secondary-500 hover:shadow-xl md:w-32 md:h-32">
          <span class="flex justify-center mx-auto mt-4 text-sm font-semibold text-center md:font-bold sm:font-normal sm:text-base md:text-lg">
              Mens Casual Shoes
          </span>
        </a>
         <a href="https://demo.litekart.in/men-jeans?page=1" class="hover:text-purple-400">
          <img 
          src="/img/categories/creaslim-0QDEj5dnUMk-unsplash.jpg" alt="" 
          class="object-cover w-24 h-24 mx-auto border-2 rounded-full cursor-pointer hover:border-purple-400 border-secondary-500 hover:shadow-xl md:w-32 md:h-32">
          <span class="flex justify-center mx-auto mt-4 text-sm font-semibold text-center md:font-bold sm:font-normal sm:text-base md:text-lg">
              Mens Jeans
          </span>
        </a>
         <a href="https://demo.litekart.in/women-lingerie?page=1" class="hover:text-blue-400">
          <img 
          src="/img/categories/danijela-prijovic-U8oa-BABTH0-unsplash.jpg" alt="" 
          class="object-cover w-24 h-24 mx-auto border-2 rounded-full cursor-pointer hover:border-blue-400 border-secondary-500 hover:shadow-xl md:w-32 md:h-32">
          <span class="flex justify-center mx-auto mt-4 text-sm font-semibold text-center md:font-bold sm:font-normal sm:text-base md:text-lg">
              Lingerie
          </span>
        </a>
         <a href="https://demo.litekart.in/women-bags?page=1" class="hover:text-green-500">
          <img 
          src="/img/categories/content-pixie-ZB4eQcNqVUs-unsplash.jpg" alt="" 
          class="object-cover w-24 h-24 mx-auto border-2 rounded-full cursor-pointer hover:border-green-500 border-secondary-500 hover:shadow-xl md:w-32 md:h-32">
          <span class="flex justify-center mx-auto mt-4 text-sm font-semibold text-center md:font-bold sm:font-normal sm:text-base md:text-lg">
              Hand Bags
          </span>
        </a>
         <a href="https://demo.litekart.in/girls-dresses?page=1" class="hover:text-green-700">
          <img 
          src="/img/categories/kazuend-ejlRp5ktpfY-unsplash.jpg" alt="" 
          class="object-cover w-24 h-24 mx-auto border-2 rounded-full cursor-pointer hover:border-green-700 border-secondary-500 hover:shadow-xl md:w-32 md:h-32">
          <span class="flex justify-center mx-auto mt-4 text-sm font-semibold text-center md:font-bold sm:font-normal sm:text-base md:text-lg">
              Infant Essentials
          </span>
        </a>
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
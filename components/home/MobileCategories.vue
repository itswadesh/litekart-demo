<template>
  <div class="flex flex-col h-auto bg-white">
    <!-- <BagSkelton v-if="loading" /> -->
    <!-- v-if="categories" -->
    <div class="grid grid-cols-3 gap-2 p-1 md:grid-cols-4 lg:grid-cols-6 lg:px-28 md:p-8 md:px-24">
      <div
        v-for="(c, ix) in categories" :key="c.ix"
        class="mx-auto mt-6"
       >
        <!-- <nuxt-link :to="localePath(`/c/${c.slug}`)"> -->
          <img
            v-lazy="c.img"
            alt="categories"
            class="object-cover w-24 h-24 mx-auto border-2 rounded-full border-secondary-500 hover:shadow-xl md:w-32 md:h-32"
          />
          <span
            class="flex justify-center mx-auto mt-4 text-sm font-semibold text-center text-black capitalize sm:font-normal sm:text-base"
          >
            {{ c.name }}
          </span>
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
            ]

        }
    }
}
</script>
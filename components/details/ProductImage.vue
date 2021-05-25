<template>
<div>
  <div class="flex flex-wrap justify-start w-full px-2 xl:hidden">
    <div class="hidden overflow-y-auto md:flex-col md:block md:order-1 h-96">
      <img
        v-for="(i, ix) in product.img"
        :key="ix"
        class="object-contain w-24 h-24 mb-1 mr-1 cursor-pointer"
        v-lazy="$store.state.settings.CDN_URL + i"
        alt=""
        @mouseover="showAsCurrentImage(i)"
      />
    </div>
    <div class="flex-1 overflow-hidden xs:order-1 md:order-2 h-96 w-96">
      <img
        class="hidden object-scale-down w-full h-full ml-1 lg:object-cover md:inline-block zoom"
        v-lazy="$store.state.settings.CDN_URL + currentImage"
        alt=""
      />
      <!-- Triggers the virtual dom not matching issue -->
      <carousel class="md:hidden" :perPage="1" :paginationEnabled="false">
        <slide
          class="inline-block w-full md:hidden"
          v-for="(i, ix) in product.img"
          :key="ix"
        >
          <img
            class="inline-block w-full"
            v-lazy="$store.state.settings.CDN_URL + i"
            alt=""
          />
        </slide>
      </carousel>
      <!-- <div class="flex w-full p-2">
        <button
          v-if="!checkCart({pid:product._id, vid:selectedVariant._id})"
          :disabled="!selectedVariant.price || selectedVariant.stock==0 || $store.state.loading"
          @click="addToBag({pid:product._id, vid:selectedVariant._id,qty:1})"
          class="flex-1 p-3 my-3 mr-2 text-xs font-bold text-center text-white bg-orange-500 md:p-5 focus:outline-none lg:text-lg"
        >
          <i
            class="mr-2 fa fa-shopping-cart"
            aria-hidden="true"
          ></i> ADD TO CART
        </button>
        <button class="flex-1 p-3 my-3 text-xs font-bold text-center text-white bg-yellow-600 md:p-5 focus:outline-none lg:text-lg">
          <i
            class="mr-2 fa fa-bolt"
            aria-hidden="true"
          ></i>BUY NOW
        </button>
      </div>-->
    </div>
  </div>
  <div class="hidden w-full grid-cols-2 gap-3 px-5 xl:grid ">
    <div v-for="(i, ix) in product.img" :key="ix"  class="w-full h-full col-span-1 my-auto shadow">
      <img
        @click="$photoswipe.open(0, [{ src: $store.state.settings.CDN_URL + i, w: 800, h: 800 }])"
        class="object-contain w-full h-full overflow-hidden cursor-pointer zoom zoom-in"
        v-lazy="$store.state.settings.CDN_URL + i"
        alt=""
      />
    </div>
  </div>
</div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  props: {
    product: { type: Object }
  },
  data() {
    return {
      currentImage: null,
      carouselShow: false,
      slider_options: {
        items: 9,
        gutter: 10,
        loop: false,
        swipeAngle: 50,
        controls: true,
        nav: false,
        mouseDrag: true,
        responsive: {
          50: {
            items: 1
          },
          550: {
            items: 2
          },
          700: {
            items: 3
          },
          900: {
            items: 4
          },
          1150: {
            items: 5
          }
        }
      }
    }
  },
  created() {
    this.currentImage = this.product.img && this.product.img[0]
  },
  computed: {
    ...mapGetters({
      checkCart: 'cart/checkCart'
    })
  },
  methods: {
    showAsCurrentImage(image) {
      this.currentImage = image
    }
    //  selectImg(ix) {
    //       this.selectedImgIndex = ix;
    //     },
  }
}
</script>

<style scoped>
.zoom-in {
  cursor: zoom-in;
}
.h-96 {
  height: 27.4rem;
}
.zoom {
  transition: transform 0.7s;
}
.zoom:hover {
  transform: scale(1.035);
}
</style>

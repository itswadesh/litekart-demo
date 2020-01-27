<template>
  <div class="w-full md:w-6/12 lg:w-5/12 flex justify-start flex-wrap px-2">
    <div class="flex md:flex-col hidden md:block md:order-1">
      <img
        v-for="(i,ix) in product.img"
        :key="ix"
        class="w-24 cursor-pointer"
        v-lazy="$store.state.settings.CDN_URL+i"
        alt=""
        @click="showAsCurrentImage(i)"
      />
    </div>
    <div class="flex-1 xs:order-1 md:order-2 overflow-hidden">
      <img
        class="hidden md:inline-block w-full zoom"
        v-lazy="$store.state.settings.CDN_URL+currentImage"
        alt=""
      />
      <!-- Triggers the virtual dom not matching issue -->
      <carousel
        class="md:hidden"
        :perPage="1"
        :paginationEnabled="false"
      >
        <slide
          class="md:hidden inline-block w-full"
          v-for="(i,ix) in product.img"
          :key="ix"
        >
          <img
            class="inline-block w-full"
            v-lazy="$store.state.settings.CDN_URL+i"
            alt=""
          />
        </slide>
      </carousel>
      <!-- <div class="w-full flex p-2">
        <button
          v-if="!checkCart({pid:product._id, vid:selectedVariant._id})"
          :disabled="!selectedVariant.price || selectedVariant.stock==0 || $store.state.loading"
          @click="addToBag({pid:product._id, vid:selectedVariant._id,qty:1})"
          class="bg-orange-500 flex-1 my-3 p-3 md:p-5 mr-2 text-center font-bold text-white focus:outline-none text-xs lg:text-lg"
        >
          <i
            class="fa fa-shopping-cart mr-2"
            aria-hidden="true"
          ></i> ADD TO CART
        </button>
        <button class="bg-yellow-600 flex-1 my-3 p-3 md:p-5 text-center font-bold text-white focus:outline-none text-xs lg:text-lg">
          <i
            class="fa fa-bolt mr-2"
            aria-hidden="true"
          ></i>BUY NOW
        </button>
      </div>-->
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
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
    };
  },
  created() {
    this.currentImage = this.product.img && this.product.img[0];
  },
  computed: {
    ...mapGetters({
      checkCart: "cart/checkCart"
    })
  },
  methods: {
    showAsCurrentImage(image) {
      this.currentImage = image;
    }
    //  selectImg(ix) {
    //       this.selectedImgIndex = ix;
    //     },
  }
};
</script>

<style scoped>
.zoom {
  transition: transform 0.7s;
}
.zoom:hover {
  transform: scale(1.035);
}
</style>
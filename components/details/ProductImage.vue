<template>
  <div class="w-full md:w-6/12 lg:w-5/12 flex justify-start flex-wrap">
    <div class="flex md:flex-col hidden md:block md:order-1">
      <img
        v-for="(i,ix) in product.imgUrls"
        :key="ix"
        class="w-24 cursor-pointer"
        v-lazy="i"
        alt
        @click="showAsCurrentImage(i)"
      />
    </div>
    <div class="flex-1 xs:order-1 md:order-2 overflow-hidden">
      <img
        class="hidden md:inline-block w-full zoom"
        v-lazy="`${currentImage}`"
      />
      <carousel
        class="md:hidden"
        :perPage="1"
        :paginationEnabled="false"
      >
        <slide
          class="md:hidden inline-block w-full"
          v-for="i in product.imgUrls"
          :key="i"
        >
          <img
            class="inline-block w-full"
            v-lazy="`${i}`"
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
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import { Carousel, Slide } from "vue-carousel";
export default {
  props: {
    product: { type: Object }
  },
  data() {
    return {
      currentImage: null,
      carouselShow: false
    };
  },
  created() {
    this.currentImage = this.product.imgUrls && this.product.imgUrls[0];
  },
  computed: {
    ...mapGetters({
      checkCart: "cart/checkCart"
    })
  },
  components: { Carousel, Slide },
  methods: {
    ...mapActions({ addToCart: "cart/addToCart" }),
    showAsCurrentImage(image) {
      this.currentImage = image;
    },
    toast() {
      this.$toast
        .show(
          `
      <div class="flex">
        <img class="w-12 h-12 object-cover" src="${this.currentImage}"/>
        <div>
          <div>${this.product.name.substr(0, 20) + "..."}</div>
          <div class="text-gray-600 text-xs">Added to your cart</div>
          <div class="text-pink-600">View cart</div>
        </div>
      </div>
      `,
          {
            containerClass: "sw-toast-container",
            theme: "outline",
            position: "top-right",
            singleton: false
          }
        )
        .goAway(1000);
    },

    addToBag(obj) {
      // if (!this.userSelectedVariant) {
      //   this.setErr("Please select a size");
      //   this.shake = true;
      //   setTimeout(() => {
      //     this.shake = false;
      //   }, 3000);
      //   return;
      // } else {
      this.addToCart(obj);
      if (this.$store.state.settings.analytics.fbPixels_status === "enabled") {
        this.$fb.track("AddToCart", {
          content_type: "product",
          content_ids: this.product._id,
          content_name: this.product.name,
          currency: "INR",
          value: this.calculatePrice
        });
      }
      this.toast();
      // }
    }
  }
};
</script>

<style>
</style>
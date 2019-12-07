<template>
  <div>
    <div class="flex flex-wrap justify-between">
      <div class="w-full p-2 font-semibold text-lg">
        My Wishlist
        <span class="font-hairline">1 item</span>
      </div>
    </div>
    <div class="flex flex-wrap justify-between">
      <a
        href="#"
        class="flex w-1/2 lg:w-1/4 xl:w-1/5 justify-between"
      >
        <div class="shadow m-3 relative">
          <img
            class="h-48 w-full object-cover"
            src="/cart-product.jpg"
            alt="product image"
          />
          <img
            src="/close-img.png"
            alt="close icon"
            class="absolute w-4 top-0 right-0 mt-2 mr-2"
          />
          <div class="px-2 leading-loose">
            <p class="text-sm font-hairline text-black">Fitbit Inspire HR</p>
            <div class="text-gray-500 mb-2 text-xs">
              <span class="text-2xl font-bold text-black mt-2">₹8,999</span>
              <span class="line-through">₹904</span>
              <span class>|</span>
              <span class="text-green-500 font-hairline">40% OFF</span>
            </div>
          </div>
          <div
            class="border-t border-gray-300 text-center"
            @click="addToBag({pid:product._id, vid:variant._id,qty:1})"
          >
            <button class="text-sm font-bold text-primary py-4">MOVE TO BAG</button>
          </div>
        </div>
      </a>

      <a
        href="#"
        class="flex w-1/2 lg:w-1/4 xl:w-1/5 justify-between"
      >
        <div class="shadow m-3 relative">
          <img
            class="h-48 w-full object-cover"
            src="/cart-product.jpg"
            alt="product image"
          />
          <img
            src="/close-img.png"
            alt="close icon"
            class="absolute w-4 top-0 right-0 mt-2 mr-2"
          />
          <div class="px-2 leading-loose">
            <p class="text-sm font-hairline text-black">Fitbit Inspire HR</p>
            <div class="text-gray-500 mb-2 text-xs">
              <span class="text-2xl font-bold text-black mt-2">₹8,999</span>
              <span class="line-through">₹904</span>
              <span class>|</span>
              <span class="text-green-500 font-hairline">40% OFF</span>
            </div>
          </div>
          <div class="border-t border-gray-300 text-center">
            <button class="text-sm font-bold text-primary py-4">MOVE TO BAG</button>
          </div>
        </div>
      </a>

      <a
        href="#"
        class="flex w-1/2 lg:w-1/4 xl:w-1/5 justify-between"
      >
        <div class="shadow m-3 relative">
          <img
            class="h-48 w-full object-cover"
            src="/cart-product.jpg"
            alt="product image"
          />
          <img
            src="/close-img.png"
            alt="close icon"
            class="absolute w-4 top-0 right-0 mt-2 mr-2"
          />
          <div class="px-2 leading-loose">
            <p class="text-sm font-hairline text-black">Fitbit Inspire HR</p>
            <div class="text-gray-500 mb-2 text-xs">
              <span class="text-2xl font-bold text-black mt-2">₹8,999</span>
              <span class="line-through">₹904</span>
              <span class>|</span>
              <span class="text-green-500 font-hairline">40% OFF</span>
            </div>
          </div>
          <div class="border-t border-gray-300 text-center">
            <button class="text-sm font-bold text-primary py-4">MOVE TO BAG</button>
          </div>
        </div>
      </a>

      <a
        href="#"
        class="flex w-1/2 lg:w-1/4 xl:w-1/5 justify-between"
      >
        <div class="shadow m-3 relative">
          <img
            class="h-48 w-full object-cover"
            src="/cart-product.jpg"
            alt="product image"
          />
          <img
            src="/close-img.png"
            alt="close icon"
            class="absolute w-4 top-0 right-0 mt-2 mr-2"
          />
          <div class="px-2 leading-loose">
            <p class="text-sm font-hairline text-black">Fitbit Inspire HR</p>
            <div class="text-gray-500 mb-2 text-xs">
              <span class="text-2xl font-bold text-black mt-2">₹8,999</span>
              <span class="line-through">₹904</span>
              <span class>|</span>
              <span class="text-green-500 font-hairline">40% OFF</span>
            </div>
          </div>
          <div class="border-t border-gray-300 text-center">
            <button class="text-sm font-bold text-primary py-4">MOVE TO BAG</button>
          </div>
        </div>
      </a>

      <a
        href="#"
        class="flex w-1/2 lg:w-1/4 xl:w-1/5 justify-between"
      >
        <div class="shadow m-3 relative">
          <img
            class="h-48 w-full object-cover"
            src="/cart-product.jpg"
            alt="product image"
          />
          <img
            src="/close-img.png"
            alt="close icon"
            class="absolute w-4 top-0 right-0 mt-2 mr-2"
          />
          <div class="px-2 leading-loose">
            <p class="text-sm font-hairline text-black">Fitbit Inspire HR</p>
            <div class="text-gray-500 mb-2 text-xs">
              <span class="text-2xl font-bold text-black mt-2">₹8,999</span>
              <span class="line-through">₹904</span>
              <span class>|</span>
              <span class="text-green-500 font-hairline">40% OFF</span>
            </div>
          </div>
          <div class="border-t border-gray-300 text-center">
            <button class="text-sm font-bold text-primary py-4">MOVE TO BAG</button>
          </div>
        </div>
      </a>

      <a
        href="#"
        class="flex w-1/2 lg:w-1/4 xl:w-1/5 justify-between"
      >
        <div class="shadow m-3 relative">
          <img
            class="h-48 w-full object-cover"
            src="/cart-product.jpg"
            alt="product image"
          />
          <img
            src="/close-img.png"
            alt="close icon"
            class="absolute w-4 top-0 right-0 mt-2 mr-2"
          />
          <div class="px-2 leading-loose">
            <p class="text-sm font-hairline text-black">Fitbit Inspire HR</p>
            <div class="text-gray-500 mb-2 text-xs">
              <span class="text-2xl font-bold text-black mt-2">₹8,999</span>
              <span class="line-through">₹904</span>
              <span class>|</span>
              <span class="text-green-500 font-hairline">40% OFF</span>
            </div>
          </div>
          <div class="border-t border-gray-300 text-center">
            <button class="text-sm font-bold text-primary py-4">MOVE TO BAG</button>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
      variant: {}
    };
  },
  created() {
    this.$axios.$get("wishlists");
  },
  methods: {
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
      this.toast();
      // }
    }
  }
};
</script>

<style scoped>
.hr-line {
  border-bottom: 1px solid lightgray;
}
.fa-truck {
  transform: scaleX(-1);
}
.bb {
  border-bottom: 1px dashed lightgray;
}
.fa-truck,
.fa-undo,
.fa-shield {
  font-size: 1.5rem;
}
</style>
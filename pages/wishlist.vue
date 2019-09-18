<template>
  <div>
    <div class="flex flex-wrap justify-center p-5 text-sm shadow">
      <div class="w-1/3">
        <nuxt-link to="/">
          <img class="w-12 h-10 ml-8" src="/logo.png" />
        </nuxt-link>
      </div>
      <div class="w-1/3 text-center text-gray-500 font-bold pt-3 text-sm">
        <a href>BAG</a>
        <span>- - - - - - -</span>
        <a href>ADDRESS</a>
        <span>- - - - - - -</span>
        <a href>PAYMENT</a>
      </div>
      <div class="w-1/3 text-center flex flex-wrap justify-center">
        <img src="/secure.png" class="w-10" />
        <span class="text-gray-500 pt-2 text-lg">100% secure</span>
      </div>
    </div>
    <div class="flex flex-wrap justify-between">
      <div class="1/12"></div>
      <div class="xs:w-full shadow lg:w-3/12 mt-10">
        <div class="w-full">My Wishlist(1)</div>
      </div>
      <div class="lg:w-6/12 shadow mt-10 xs:w-full">
        <div class="w-full py-3 border-b border-gray-300">My Wishlist(1)</div>
      </div>
      <div class="1/12"></div>
    </div>
    <div class="w-full flex flex-wrap border-t border-gray-300 mb-2 p-3">
      <div class="w-3/4 right-0">
        <img src="/payment-cards.png" class="w-3/5 ml-40" />
      </div>
      <div class="w-1/4 text-sm text-center text-gray-700 font-bold">Need Help? Contact Us</div>
    </div>
  </div>
</template>

<script>
import Checkbox from "~/components/Checkbox";
export default {
  components: { Checkbox }
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
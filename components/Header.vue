<template>
  <header>
    <nav class="flex items-center justify-between flex-wrap bg-white-800 shadow">
      <div class="flex items-center flex-shrink-0 text-orange mr-6 order-1">
        <nuxt-link to="/">
          <img
            class="w-12 h-10 ml-8"
            src="/logo.png"
          />
        </nuxt-link>
        <div class="hidden lg:block flex flex-none text-sm py-4 xs:justify-between items-center text-gray order-2">
          <Megamenu />
        </div>
      </div>
      <div
        class="mr-8 border-gray-300 relative order-4 sm:order-3"
        style="flex:1"
      >
        <Search />
      </div>
      <div class="flex items-center flex-shrink-0 py-4 order-3 sm:order-4">
        <nuxt-link to="/login">
          <img
            class="w-5 h-4 ml-2"
            src="/avatar.png"
          />
          <div class="mr-6 inline-text-gray text-xs font-bold">Profile</div>
        </nuxt-link>
        <div>
          <img
            class="w-5 h-4 ml-3 center"
            src="/bookmark.png"
          />
          <div class="mr-6 text-xs inline-text-gray font-bold">Whistlist</div>
        </div>
        <nuxt-link
          to="/cart"
          class="relative"
        >
          <img
            class="w-5 h-4"
            src="/bag.png"
          />
          <div class="flex mr-6 text-xs inline-text-gray font-bold">
            Bag
            <span class="text-white font-bold desktop-badge rounded-full px-1 absolute">1</span>
          </div>
        </nuxt-link>
      </div>
    </nav>
  </header>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Megamenu from "~/components/Megamenu";
import Search from "~/components/Search";
export default {
  components: { Megamenu, Search },
  methods: {
    closeSidebar() {
      this.sidebar = false;
    },
    logout() {
      this.$store.dispatch("auth/logout").then(() => {});
    },
    go(url) {
      this.$router.push(url);
    }
    // ...mapActions({
    //   addToCart: "cart/addToCart",
    //   fetch: "cart/fetch"
    // }),
    // async checkAndAddToCart(item) {
    //   try {
    //     this.adding = true;
    //     await this.addToCart(item);
    //     this.adding = false;
    //   } catch (e) {
    //     console.log("err...", e.response.data);
    //   }
    //   this.refreshStock(); // Not required, because stock is being queried from database through addToCart... On page load stock need to be refreshed and added to items variable. Hence this is also required
    // },
    // async refreshStock() {
    //   // Each items stock is checked on page load
    //   try {
    //     this.items = await this.$axios.$post(
    //       `products/refresh`,
    //       this.cartItems
    //     );
    //   } catch (e) {
    //     this.items = [];
    //   }
    // }
  }
  // computed: {
  //   user() {
  //     return (this.$store.state.auth || {}).user || null;
  //   }
  // },
};
</script>
<style scoped>
.desktop-badge {
  height: 16px;
  background: #ff3f6c;
  left: 13px;
  top: -6px;
}
</style>
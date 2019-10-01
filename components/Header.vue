<template>
  <header>
    <nav class="flex items-center justify-between flex-wrap bg-white-800 shadow">
      <div class="flex items-center flex-shrink-0 text-orange mr-16 order-1">
        <nuxt-link to="/">
          <img class="w-12 h-10 ml-4" src="/logo.svg" />
        </nuxt-link>
        <div
          class="hidden lg:block flex flex-none text-sm py-4 xs:justify-between items-center text-gray order-2"
        >
          <Megamenu />
        </div>
      </div>
      <div class="mx-2 py-2 border-gray-300 relative order-4 sm:order-3" style="flex:1">
        <Search />
      </div>
      <div class="flex items-center flex-shrink-0 py-4 order-3 sm:order-4 mr-2 ml-6">
        <nuxt-link to="/login" v-if="!user">
          <img class="w-5 h-4 ml-2" src="/avatar.png" />
          <div class="mr-6 inline-text-gray text-xs font-bold">Profile</div>
        </nuxt-link>
        <nuxt-link to="/my" v-else>
          <img class="w-5 h-4 ml-2" src="/avatar.png" />
          <div class="mr-6 inline-text-gray text-xs font-bold">Profile</div>
        </nuxt-link>
        <nuxt-link to="/wishlist">
          <img class="w-5 h-4 ml-3 center" src="/bookmark.png" />
          <div class="mr-6 text-xs inline-text-gray font-bold">Whistlist</div>
        </nuxt-link>
        <nuxt-link to="/cart" class="relative">
          <img class="w-5 h-4" src="/bag.png" />
          <div class="flex mr-6 text-xs inline-text-gray font-bold">
            Bag
            <span
              class="text-white font-bold desktop-badge rounded-full px-1 absolute"
            >{{cart.qty }}</span>
          </div>
        </nuxt-link>
      </div>
    </nav>
  </header>
</template>
<script>
import { mapGetters } from "vuex";
import Megamenu from "~/components/Megamenu";
import Search from "~/components/Search";
export default {
  components: { Megamenu, Search },
  computed: {
    user() {
      return (this.$store.state.auth || {}).user || null;
    },
    cart() {
      return this.$store.state.cart || {};
    },
    ...mapGetters({
      checkCart: "cart/checkCart",
      showCart: "cart/showCart"
    })
  },
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
  }
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
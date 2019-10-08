<template>
  <header>
    <nav
      class="flex items-center justify-between flex-wrap bg-white lg:px-12"
      style="box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);"
    >
      <div class="flex items-center flex-shrink-0 text-orange order-1 w-1/2 lg:w-auto">
        <nuxt-link to="/">
          <img class="w-12 h-10 ml-2" src="/logo.svg" alt="logo" />
        </nuxt-link>
        <div
          class="hidden lg:block flex flex-none text-sm py-4 xs:justify-between items-center text-gray order-2"
        >
          <Megamenu />
        </div>
      </div>
      <div class="mx-2 py-2 relative order-4 sm:order-3 w-full lg:mr-6" style="flex:1">
        <Search />
      </div>
      <div
        class="flex items-center justify-between flex-shrink-0 py-4 order-3 sm:order-4 mr-3 w-40 headings"
      >
        <nuxt-link class="w-auto" to="/login" v-if="!user">
          <img class="h-4 ml-2" src="/avatar.png" alt="profile icon" />
          <div class="text-xs font-bold headings">Profile</div>
        </nuxt-link>
        <nuxt-link class="w-auto" to="/my" v-else>
          <img class="h-4 ml-2" src="/avatar.png" alt="profile icon" />
          <div class="text-xs font-bold headings">Profile</div>
        </nuxt-link>
        <nuxt-link class="w-auto" to="/wishlist">
          <img class="h-4 ml-3 center" src="/bookmark.png" alt="wishlist icon" />
          <div class="text-xs font-bold headings">Wishlist</div>
        </nuxt-link>
        <nuxt-link class="relative" to="/cart">
          <img class="h-4 ml-1" src="/bag.png" alt="cart icon" />
          <div class="flex text-xs font-bold">
            Cart
            <div class="primary font-bold desktop-badge rounded-full px-1 absolute text-center">
              <div class="number">{{cart.qty }}</div>
            </div>
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
  font-size: 8px;
  left: 11px;
  top: -6px;
  height: 15px;
  width: 14px;
  border-radius: 50%;
  display: inline-block;
}
.desktop-badge .number {
  margin-top: 1.5px;
  margin-left: -1px;
}
</style>
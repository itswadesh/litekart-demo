<template>
  <header class="bg-white border-b shadow-md">
    <nav
      class="flex flex-wrap items-center justify-between lg:px-5"
      style="box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);"
    >
      <div class="flex items-center flex-shrink-0 order-1 text-orange">
        <nuxt-link to="/">
          <img
            class="h-10 mx-2"
            :src="
              `${$store.state.settings.CDN_URL}/${$store.state.settings.logo}`
            "
            alt="Home"
          />
        </nuxt-link>
        <div
          class="items-center flex-none order-2 hidden text-sm lg:block xs:justify-between text-gray"
        >
          <Megamenu />
        </div>
      </div>
      <div
        class="flex-1 order-3 hidden w-full ml-6 lg:ml-0 sm:flex"
        :class="cls"
      >
        <Search class="w-full my-auto" />
      </div>
      <div
        class="flex items-center justify-between flex-shrink-0 order-3 w-40 py-4 ml-10 mr-3 sm:order-4 headings"
      >
        <nuxt-link class="w-auto" to="/account/login" v-if="!user">
          <img class="h-4 ml-2" src="/avatar.png" alt="" />
          <div class="text-xs font-bold headings">Profile</div>
        </nuxt-link>
        <nuxt-link class="w-auto" to="/my" v-else>
          <img class="h-4 mx-auto" src="/avatar.png" alt="" />
          <div class="text-xs font-bold headings">Profile</div>
        </nuxt-link>
        <nuxt-link class="w-auto" to="/wishlist">
          <img class="h-4 mx-auto center" src="/bookmark.png" alt="" />
          <div class="text-xs font-bold headings">Wishlist</div>
        </nuxt-link>
        <nuxt-link class="relative" to="/cart">
          <img class="h-4 mx-auto" src="/bag.png" alt="" />
          <div class="flex text-xs font-bold">
            Cart
            <div
              class="absolute px-1 font-bold text-center rounded-full primary desktop-badge"
              v-if="cart.qty > 0"
            >
              <div class="number">{{ cart.qty }}</div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </nav>
    <div class="sticky top-0">
      <Search class="pb-3 mx-2 my-auto sm:hidden" />
    </div>
  </header>
</template>
<script>
import { mapGetters } from 'vuex'
import Megamenu from '~/components/Megamenu'
import Search from '~/components/Search'
export default {
  data() {
    return {
      cls: ''
    }
  },
  mounted() {
    if (process.client) {
      window.addEventListener('scroll', () => {
        let scrolled = window.scrollY
        this.cls = scrolled > 147 ? 'fix-search' : ''
      })
    }
  },

  components: { Megamenu, Search },
  computed: {
    user() {
      return (this.$store.state.auth || {}).user || null
    },
    cart() {
      return this.$store.state.cart || {}
    },
    ...mapGetters({
      checkCart: 'cart/checkCart',
      showCart: 'cart/showCart'
    })
  },
  methods: {
    closeSidebar() {
      this.sidebar = false
    },
    logout() {
      this.$store.dispatch('auth/logout').then(() => {})
    },
    go(url) {
      this.$router.push(url)
    }
  }
}
</script>
<style scoped>
.desktop-badge {
  font-size: 9px;
  left: 11px;
  top: -6px;
  height: 17px;
  width: 17px;
  border-radius: 50%;
  display: inline-block;
}
.desktop-badge .number {
  margin-top: 0px;
  margin-left: 0px;
}

.fix-search {
  position: fixed;
  top: 0;
  left: 0;
  padding: 0px;
  z-index: 999;
  padding: 0rem 0.5rem;
  margin: 0px;
}
</style>

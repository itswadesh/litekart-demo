<template>
  <header class="fixed top-0 z-50 w-full lg:border-b lg:shadow backdrop-filter backdrop-blur-xl bg">
    <nav
      class="flex flex-wrap items-center justify-between lg:px-5"
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
        class="flex items-center justify-between flex-shrink-0 order-3 w-1/3 py-4 ml-10 mr-3 sm:w-40 sm:order-4 headings"
      >
        <nuxt-link class="w-auto sm:hidden" to="/search-suggestions">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </nuxt-link>
        <nuxt-link class="w-auto" to="/account/login" v-if="!user">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <div class="hidden text-xs font-bold sm:flex headings">Profile</div>
        </nuxt-link>
        <nuxt-link class="w-auto" to="/my" v-else>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <div class="hidden text-xs font-bold sm:flex headings">Profile</div>
        </nuxt-link>
        <nuxt-link class="w-auto" to="/wishlist">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
          <div class="hidden text-xs font-bold sm:flex headings">Wishlist</div>
        </nuxt-link>
        <nuxt-link class="relative" to="/cart">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <div class="hidden text-xs font-bold sm:flex">
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
    <!-- <div class="sticky top-0">
      <Search class="pb-3 mx-2 my-auto sm:hidden" />
    </div> -->
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
        // this.cls = scrolled > 147 ? 'fix-search' : ''
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
.bg{
  background-color: hsla(0, 0%, 100%, 0.80);
}
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

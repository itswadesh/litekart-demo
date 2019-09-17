<template>
  <header>
    <div>
      <!-- NAVBAR COMPONENT -->
      <nav class="flex items-center justify-between flex-wrap bg-white-800 shadow">
        <div class="flex items-center flex-shrink-0 text-orange mr-6 order-1">
          <nuxt-link to="/">
            <img class="w-12 h-10 ml-8" src="/logo.png" />
          </nuxt-link>
          <div
            class="hidden lg:block flex flex-none text-sm py-4 xs:justify-between items-center text-gray order-2"
          >
            <!-- <nuxt-link
              v-for="c in $store.state.categories"
              :key="c._id"
              :to="`/search?q=${c.slug}`"
              class="mr-8"
            >{{c.name.toUpperCase()}}</nuxt-link>-->

            <ul class="flex">
              <!--Hoverable Link-->
              <li class="hoverable">
                <a href="#" class="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold">
                  Electronics
                  <i class="fa fa-angle-down" aria-hidden="true"></i>
                </a>
                <div class="mega-menu mb-16 sm:mb-0 shadow-xl">
                  <div class="mx-auto w-full flex flex-wrap justify-between mx-2">
                    <ul
                      class="bg-gray-100 px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 border-b lg:border-b-0 pb-6 pt-6 lg:pt-3"
                    >
                      <div class="flex items-center">
                        <h3 class="font-bold text-sm text-black text-bold mb-2">
                          Mobiles
                          <i class="fa fa-caret-right" aria-hidden="true"></i>
                        </h3>
                      </div>
                      <div class="flex items-center py-3">
                        <ul>
                          <li class="py-1 text-gray-600">
                            <a href>Mi</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>Real Me</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>Samsung</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>Oppo</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>Vivo</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>Asus</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>One Plus</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>Honor</a>
                          </li>
                        </ul>
                      </div>
                    </ul>
                    <ul
                      class="bg-gray-200 px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 border-b lg:border-b-0 pb-6 pt-6 lg:pt-3"
                    >
                      <div class="flex items-center">
                        <h3 class="font-bold text-sm text-black text-bold mb-2">
                          Mobile Accessories
                          <i class="fa fa-caret-right" aria-hidden="true"></i>
                        </h3>
                      </div>
                      <div class="flex items-center py-3">
                        <ul>
                          <li class="py-1 text-gray-600">
                            <a href>Mi</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>Real Me</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>Samsung</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>Oppo</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>Vivo</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>Asus</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>One Plus</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>Honor</a>
                          </li>
                        </ul>
                      </div>
                    </ul>
                    <ul
                      class="bg-gray-100 px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 border-b lg:border-b-0 pb-6 pt-6 lg:pt-3"
                    >
                      <div class="flex items-center">
                        <h3 class="font-bold text-sm text-black text-bold mb-2">
                          Mobile Accessories
                          <i class="fa fa-caret-right" aria-hidden="true"></i>
                        </h3>
                      </div>
                      <div class="flex items-center py-3">
                        <ul>
                          <li class="py-1 text-gray-600">
                            <a href>Mi</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>Real Me</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>Samsung</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>Oppo</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>Vivo</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>Asus</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>One Plus</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>Honor</a>
                          </li>
                        </ul>
                      </div>
                    </ul>
                    <ul
                      class="bg-gray-200 px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 border-b lg:border-b-0 pb-6 pt-6 lg:pt-3"
                    >
                      <div class="flex items-center">
                        <h3 class="font-bold text-sm text-black text-bold mb-2">
                          Mobile Accessories
                          <i class="fa fa-caret-right" aria-hidden="true"></i>
                        </h3>
                      </div>
                      <div class="flex items-center py-3">
                        <ul>
                          <li class="py-1 text-gray-600">
                            <a href>Mi</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>Real Me</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>Samsung</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>Oppo</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>Vivo</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>Asus</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>One Plus</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>Honor</a>
                          </li>
                        </ul>
                      </div>
                    </ul>
                    <ul
                      class="bg-gray-100 px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 border-b lg:border-b-0 pb-6 pt-6 lg:pt-3"
                    >
                      <div class="flex items-center">
                        <h3 class="font-bold text-sm text-black text-bold mb-2">
                          Mobile Accessories
                          <i class="fa fa-caret-right" aria-hidden="true"></i>
                        </h3>
                      </div>
                      <div class="flex items-center py-3">
                        <ul>
                          <li class="py-1 text-gray-600">
                            <a href>Mi</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>Real Me</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>Samsung</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>Oppo</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>Vivo</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>Asus</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>One Plus</a>
                          </li>
                          <li class="py-1 text-gray-600">
                            <a href>Honor</a>
                          </li>
                        </ul>
                      </div>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="mr-8 border-gray-300 relative order-4 sm:order-3" style="flex:1">
          <form novalidate autocomplete="off" @submit.stop.prevent="submit()">
            <div class="absolute">
              <i class="fa fa-search ml-2 mt-3 text-gray-500" aria-hidden="true"></i>
            </div>
            <input
              type="search"
              v-model="search"
              class="w-full px-10 bg-purple-white pr-4 shadow rounded border-0 h-10"
              placeholder="Search for products,brands and more"
            />
          </form>
        </div>

        <div class="flex items-center flex-shrink-0 py-4 order-3 sm:order-4">
          <nuxt-link to="/login">
            <img class="w-5 h-4 ml-2" src="/avatar.png" />
            <div class="mr-6 inline-text-gray text-xs font-bold">Profile</div>
          </nuxt-link>
          <div>
            <img class="w-5 h-4 ml-3 center" src="/bookmark.png" />
            <div class="mr-6 text-xs inline-text-gray font-bold">Whistlist</div>
          </div>
          <nuxt-link to="/cart" class="relative">
            <img class="w-5 h-4" src="/bag.png" />
            <div class="flex mr-6 text-xs inline-text-gray font-bold">
              Bag
              <span class="text-white font-bold desktop-badge rounded-full px-1 absolute">1</span>
            </div>
          </nuxt-link>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { typingTimeout } from "~/config";
export default {
  data() {
    return {
      search: "",
      typingTimeout
    };
  },
  methods: {
    submit() {
      this.$router.push("/search?q=" + this.search);
    },
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
  },
  // computed: {
  //   user() {
  //     return (this.$store.state.auth || {}).user || null;
  //   }
  // },
  watch: {
    search: {
      immediate: false,
      handler(value, oldValue) {
        if (!oldValue) return; // Do not trigger on page load
        clearTimeout(this.typingTimer);
        let vm = this;
        this.typingTimer = setTimeout(function() {
          if (!value || value == "undefined") value = ""; // When clear button clicked
          vm.searchString = value;
          vm.$router.push("/search?q=" + value);
        }, vm.typingTimeout);
      }
    },
    "$route.query.q": {
      immediate: true,
      handler(value) {
        let pathName = null;
        if (!value || value == "undefined") value = "";
        if (value == "") return;
        if (this.search == "") this.search = value;
      }
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
.mega-menu {
  display: none;
  left: 0;
  position: absolute;
  text-align: left;
  width: 100%;
  z-index: 9999;
}

/* #hoverable Class Styles
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
.hoverable {
  position: static;
}

.hoverable > a:after {
  font-size: 10px;
  padding-left: 6px;
  position: relative;
  top: -1px;
}

.hoverable:hover .mega-menu {
  display: block;
}
</style>
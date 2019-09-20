<template>
  <ul class="flex">
    <li class="hoverable hover:bg-gray-300" v-for="c in $store.state.categories" :key="c._id">
      <nuxt-link
        :to="`/search?q=${c.slug}`"
        class="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold"
      >
        {{c.name.toUpperCase()}}
        <i class="fa fa-angle-down" aria-hidden="true"></i>
      </nuxt-link>
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
</template>

<script>
export default {};
</script>

<style scoped>
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
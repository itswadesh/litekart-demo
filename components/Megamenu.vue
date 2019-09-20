<template>
  <ul class="flex">
    <li
      class="hoverable hover:bg-gray-300"
      v-for="category in $store.state.categories"
      :key="category._id"
    >
      <nuxt-link
        :to="`/search?q=${category.slug}`"
        class="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold"
      >
        {{category.name && category.name.toUpperCase()}}
        <i
          class="fa fa-angle-down"
          aria-hidden="true"
        ></i>
      </nuxt-link>
      <div class="mega-menu mb-16 sm:mb-0 shadow-xl">
        <div class="mx-auto w-full flex flex-wrap justify-start mx-2">
          <ul
            v-for="(c,ix) in category.children"
            :key="c._id"
            class="bg-gray-100 px-4 w-full sm:w-1/2 lg:w-1/6 border-gray-600 border-b lg:border-b-0 pb-6 pt-6 lg:pt-3"
            :class="{'bg-gray-200':Math.abs(ix % 2)}"
          >
            <div class="flex items-center">
              <h3 class="font-bold text-sm text-black text-bold mb-2">
                {{c.name}}
                <i
                  class="fa fa-caret-right"
                  aria-hidden="true"
                ></i>
              </h3>
            </div>
            <div class="flex items-center py-3">
              <ul>
                <li
                  class="py-1 text-gray-600"
                  v-for="(c, index) in c.children"
                  :key="index"
                >
                  <nuxt-link :to="`/search?q=${c.slug}`">{{c.name}}</nuxt-link>
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
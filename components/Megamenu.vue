<template>
  <ul class="flex mx-8">
    <li
      class="border-b-4 border-white cursor-pointer hover:text-pink-500 hoverable hover:border-pink-500"
      v-for="(category, index) in $store.state.categories"
      :key="category._id"
      :class="{
          'hover:border-purple-500 hover:text-purple-500': index % 5 == 0,
          'hover:border-pink-500 hover:text-pink-500': index % 5 == 1,
          'hover:border-green-500 hover:text-green-500': index % 5 == 2,
          'hover:border-yellow-500 hover:text-yellow-500': index % 5 == 3,
      }"
    >
      <nuxt-link
        :to="`/${category.slug}`"
        class="relative items-center block p-5 font-bold"
      >
        {{ category.name && category.name.toUpperCase() }}
        <!-- <i
          class="fa fa-angle-down"
          aria-hidden="true"
        ></i> -->
      </nuxt-link>
      <div class="mt-1 mb-16 shadow-xl bg-gray-50 mega-menu sm:mb-0">
        <div class="flex flex-wrap justify-start w-full mx-auto">
          <ul
            v-for="(c, ix) in category.children"
            :key="c._id"
            class="w-full px-4 pt-6 pb-6 border-b border-gray-600 sm:w-1/2 text-1 lg:w-1/6 lg:border-b-0 lg:pt-3"
            :class="{ 'bg-gray-100': Math.abs(ix % 2) }"
          >
            <div class="flex">
              <div
                class="flex items-center mb-1 text-sm font-bold text-black hover:font-extrabold " 
                :class="{
                    'text-yellow-500 ': ix % 6 == 0,
                    'text-purple-500': ix % 6 == 1,
                    'text-red-500': ix % 6 == 2,
                    'text-green-500': ix % 6 == 3,
                    'text-pink-500': ix % 6 == 4,
                    'text-blue-500': ix % 6 == 5,
                }"
              >
                {{ c.name }}
                <div class="pl-1" style="padding-top:2px;">
                  <i class="fa fa-caret-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div class="flex items-center py-3">
              <ul>
                <li
                  class="py-1 text-gray-600 hover:font-semibold"
                  v-for="(c, index) in c.children"
                  :key="index"
                >
                  <nuxt-link :to="`/${c.slug}?page=1`">{{ c.name }}</nuxt-link>
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
export default {}
</script>

<style scoped>
.mega-menu {
  visibility: hidden;
  transition: 0.2s 0.1s; /* delay of 1 seconds on hover off */
  opacity: 0;
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
  padding-left: 6px;
  position: relative;
}

.hoverable:hover .mega-menu {
  visibility: visible;
  opacity: 1;
  transition-delay: 0.1s;
}
</style>

<template>
  <div
    class="py-2\1 bg-white-800 shadow bg-white top-0 left-0 fixed max-w-lg filters-demo"
    v-if="facets"
  >
    <!-- Mobile version starts here -->
    <div class="block h-full md:hidden" v-if="showMobileFilter">
      <div class="flex w-full py-4 bg-white shadow-md">
        <div class="flex-1 text-left text-gray-700" @click="$emit('hide')">
          <i class="ml-2 fa fa-times" aria-hidden="true"></i>
        </div>
        <div class="flex-1 font-bold text-center text-gray-700">FILTER</div>
        <button class="flex-1 mr-2 text-right text-gray-700" @click="clearAll">
          Clear all
        </button>
      </div>
      <div class="flex w-full h-full mt-1">
        <div class="w-2/5">
          <ul class="h-full bg-gray-200">
            <!-- <li
              :class="{'bg-white text-pink-500 border-l-4 border-pink-600':selected=='categories'}"
              @click="selected='categories'"
            >Category</li> -->
            <li
              :class="{
                'bg-white text-pink-500 border-l-4 border-pink-600':
                  selected == 'brands'
              }"
              @click="selected = 'brands'"
            >
              Brands
            </li>
            <li
              :class="{
                'bg-white text-pink-500 border-l-4 border-pink-600':
                  selected == 'sizes'
              }"
              @click="selected = 'sizes'"
            >
              Sizes
            </li>
            <li
              :class="{
                'bg-white text-pink-500 border-l-4 border-pink-600':
                  selected == 'colors'
              }"
              @click="selected = 'colors'"
            >
              Color
            </li>
            <li
              :class="{
                'bg-white text-pink-500 border-l-4 border-pink-600':
                  selected == 'Price'
              }"
              @click="selected = 'Price'"
            >
              Price
            </li>
            <li
              :class="{
                'bg-white text-pink-500 border-l-4 border-pink-600':
                  selected == 'Gender'
              }"
              @click="selected = 'Gender'"
            >
              Gender
            </li>
          </ul>
        </div>
        <div class="w-full overflow-y-scroll">
          <ul
            class="w-full px-5 py-2 ml-2"
            v-if="
              selected == 'categories' &&
                facets.categories &&
                facets.categories.all &&
                facets.categories.all.buckets
            "
          >
            <li
              v-for="b in facets.categories &&
                facets.categories.all &&
                facets.categories.all.buckets"
              :key="b.key"
            >
              <Checkbox
                :count="b.doc_count"
                :value="b.key"
                v-model="fl.categories"
                @change="
                  changed({ model: 'categories', checked: fl.categories })
                "
                >{{ b.key }}</Checkbox
              >
            </li>
          </ul>
          <ul
            class="w-full px-5 py-2 ml-2"
            v-if="
              selected == 'brands' &&
                facets.brands &&
                facets.brands.all &&
                facets.brands.all.buckets
            "
          >
            <li
              v-for="b in facets.brands &&
                facets.brands.all &&
                facets.brands.all.buckets"
              :key="b.key"
            >
              <Checkbox
                :count="b.doc_count"
                :value="b.key"
                v-model="fl.brands"
                @change="changed({ model: 'brands', checked: fl.brands })"
                >{{ b.key }}</Checkbox
              >
            </li>
          </ul>
          <ul
            class="w-full px-5 py-2 ml-2"
            v-if="
              selected == 'sizes' &&
                facets.sizes &&
                facets.sizes.all.buckets &&
                facets.sizes.all.buckets.length > 0
            "
          >
            <li
              v-for="b in facets.sizes &&
                facets.sizes.all &&
                facets.sizes.all.buckets"
              :key="b.key"
            >
              <Checkbox
                :count="b.doc_count"
                :value="b.key"
                v-model="fl.sizes"
                @change="changed({ model: 'sizes', checked: fl.sizes })"
                >{{ b.key }}</Checkbox
              >
            </li>
          </ul>
          <ul
            class="w-full px-5 py-2 ml-2"
            v-if="
              selected == 'colors' &&
                facets.colors &&
                facets.colors.colors &&
                facets.colors.colors.name &&
                facets.colors.colors.name.buckets &&
                facets.colors.colors.name.buckets.length > 0
            "
          >
            <li
              v-for="b in facets.colors &&
                facets.colors.colors &&
                facets.colors.colors.name &&
                facets.colors.colors.name.buckets"
              :key="b.key"
            >
              <Checkbox
                :color="b.val.buckets[0] && b.val.buckets[0].key"
                :count="b.doc_count"
                :value="b.key"
                v-model="fl.color"
                @change="changed({ model: 'colors', checked: fl.color })"
                >{{ b.key }}</Checkbox
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="absolute bottom-0 w-full text-center primary">
        <button class="w-full p-4 font-bold cursor-pointer focus:outline-none">
          APPLY
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
ul > li {
  font: bold;
  color: gray;
  padding: 10px;
  font-size: 1.1rem;
}

.filters-demo {
  width: 100%;
  height: 100%;
  z-index: 1000;
  overflow: hidden;
  background-color: white;
}
.show-for-small-only {
  background: #f5f5f5;
  height: 1px;
  position: relative;
  top: 13px;
  margin-left: 15px;
  width: calc(100% + 16px);
}
</style>
<script>
import { Checkbox, Radio } from '~/components/ui'
import { constructURL } from '~/lib/'

export default {
  name: 'ProductSidebar',
  props: {
    clear: Boolean,
    fl: {
      type: [Object, Array]
    },
    facets: {
      type: [Object, Array],
      default: () => {
        return {}
      }
    }
  },
  components: { Checkbox, Radio },
  data() {
    return {
      selected: 'brands',
      loadingPrice: true, // Required because after loading finished then only we will initiate the price slider component
      showMobileFilter: true
    }
  },
  methods: {
    Changed(i) {
      console.error('categoryChanged', i)
    },
    changed(e) {
      this.fl[e.model] = e.checked
      // this.fl.pilot = e.checked;
      let url = constructURL('/search', this.fl)
      this.$router.push(url)
    },
    checkCategory() {},
    go(slug) {
      this.$router.push('/' + slug)
    },
    clearAll() {
      this.$router.push(`/search`)
      this.$emit('hide')
    }
  }
}
</script>
<style scoped>
ul > li {
  cursor: pointer;
  font-size: 1rem;
}
</style>

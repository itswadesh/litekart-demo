<template>
  <div class="py-2\1 bg-white-800 shadow bg-white" v-if="facets">
    <!-- Mobile version starts here -->
    <div class="block md:hidden" v-if="showMobileFilter">
      <div class="flex shadow-md py-4 bg-white w-full">
        <div class="flex-1 text-gray-700 text-left" @click="$emit('hide')">
          <i class="fa fa-times px-6" aria-hidden="true"></i>
        </div>
        <div class="flex-1 text-gray-700 text-center font-bold px-4">FILTER</div>
        <div class="flex-1 text-gray-700 text-center px-4">Clear all</div>
      </div>
      <div class="w-full flex">
        <div class="w-2/5">
          <ul class="bg-gray-300">
            <li
              class="bg-white text-pink-500 py-4 text-gray-700 font-bold px-4 border-l-4 border-pink-600"
            >
              <a href>Shop for</a>
            </li>
            <li class="py-4 text-gray-700 font-bold px-4">
              <a href>Age</a>
            </li>
            <li class="py-4 text-gray-700 font-bold px-4">
              <a href>Category</a>
            </li>
            <li class="py-4 text-gray-700 font-bold px-4">
              <a href>Delivery Time</a>
            </li>
            <li class="py-4 text-gray-700 font-bold px-4">
              <a href>Colour</a>
            </li>
            <li class="py-4 text-gray-700 font-bold px-4">
              <a href>Price</a>
            </li>
            <li class="py-4 text-gray-700 font-bold px-4">
              <a href>Discount</a>
            </li>
            <li class="py-4 text-gray-700 font-bold px-4">
              <a href>Brands</a>
            </li>
          </ul>
        </div>
        <div class="3/5">
          <ul class="ml-2 py-2 px-5">
            <li v-for="b in facets.brands && facets.brands.buckets" :key="b.key">
              <Checkbox
                :count="b.doc_count"
                :value="b.key"
                v-model="fl.brands"
                @change="changed({model:'brands',checked:fl.brands})"
              >{{b.key}}</Checkbox>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full text-center bg-pink-500 text-white">
        <button class="w-full p-4 cursor-pointer font-bold focus:outline-none">APPLY</button>
      </div>
    </div>
  </div>
</template>
<script>
import Checkbox from "~/components/Checkbox";
import ColorCheckbox from "~/components/ColorCheckbox";
import Radio from "~/components/Radio";
import { constructURL } from "~/lib/";
export default {
  name: "ProductSidebar",
  props: {
    clear: Boolean,
    fl: {
      type: [Object, Array]
    },
    facets: {
      type: [Object, Array],
      default: () => {
        return {};
      }
    }
  },
  components: { Checkbox, ColorCheckbox, Radio },
  data() {
    return {
      loadingPrice: true, // Required because after loading finished then only we will initiate the price slider component
      showMobileFilter: true
    };
  },
  methods: {
    categoryChanged(i) {
      console.error("categoryChanged", i);
    },
    changed(e) {
      this.fl[e.model] = e.checked;
      // this.fl.pilot = e.checked;
      let url = constructURL("/search", this.fl);
      this.$router.push(url);
    },
    checkCategory() {},
    go(slug) {
      this.$router.push("/" + slug);
    }
  }
};
</script>

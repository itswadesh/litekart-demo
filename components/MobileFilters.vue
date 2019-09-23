<template>
  <div
    class="py-2\1 bg-white-800 shadow bg-white w-screen top-0 left-0 fixed h-screen max-w-lg"
    v-if="facets"
  >
    <!-- Mobile version starts here -->
    <div class="block md:hidden h-full" v-if="showMobileFilter">
      <div class="flex shadow-md py-4 bg-white w-full">
        <div class="flex-1 text-gray-700 text-left" @click="$emit('hide')">
          <i class="fa fa-times ml-2" aria-hidden="true"></i>
        </div>
        <div class="flex-1 text-gray-700 text-center font-bold">FILTER</div>
        <div class="flex-1 text-gray-700 text-right mr-2">Clear all</div>
      </div>
      <div class="w-full flex mt-1 h-full">
        <div class="w-2/5">
          <ul class="bg-gray-200 h-full">
            <li class="bg-white text-pink-500 border-l-4 border-pink-600">
              <a href>Shop for</a>
            </li>
            <li>
              <a href>Age</a>
            </li>
            <li>
              <a href>Category</a>
            </li>
            <li>
              <a href>Delivery Time</a>
            </li>
            <li>
              <a href>Colour</a>
            </li>
            <li>
              <a href>Price</a>
            </li>
            <li>
              <a href>Discount</a>
            </li>
            <li>
              <a href>Brands</a>
            </li>
          </ul>
        </div>
        <div class="w-full overflow-y-scroll">
          <ul class="ml-2 py-2 px-5 w-full">
            <!--<li v-for="b in facets.brands && facets.brands.buckets" :key="b.key">
              <Checkbox
                :count="b.doc_count"
                :value="b.key"
                v-model="fl.brands"
                @change="changed({model:'brands',checked:fl.brands})"
              >{{b.key}}</Checkbox>
            </li>-->
            <label class="vertical-filters-label common-customCheckbox hover:bg-none">
              <input type="checkbox" />
              <span>Below ₹500</span>
              <div class="common-checkboxIndicator"></div>
              <div class="show-for-small-only"></div>
            </label>
          </ul>
        </div>
      </div>
      <div class="w-full text-center bg-pink-500 text-white absolute bottom-0">
        <button class="w-full p-4 cursor-pointer font-bold focus:outline-none">APPLY</button>
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
import { Checkbox, Radio } from "~/components/ui";
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
  components: { Checkbox, Radio },
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

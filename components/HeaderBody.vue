<template>
  <div>
    <div class="flex justify-between p-2">
      <div class="hidden md:flex py-2 px-5 text-sm">
        Home / Clothing / Dresses /
        <span class="font-semibold">Clothing Dresses</span>
      </div>

      <div class="text-sm">
        <div class="font-semibold">Clothing Dresses</div>
        <div>{{count}} items</div>
      </div>

      <div class="flex-wrap">
        <!-- <div class="hidden lg:flex text-sm w-full">
          <a
            href="#"
            class="block inline-block mb-1 rounded-full p-1 mr-8 bg-gray-200 text-black"
          >
            Bundles<i class="fa fa-caret-down px-1" />
          </a>
          <a
            href="#"
            class="block inline-block mb-1 rounded-full  p-1 mr-8 bg-gray-200 text-black "
          >
            Pattern<i class="fa fa-caret-down px-1" />
          </a>
          <a
            href="#"
            class="block  text-black m-4 sm:inline-block  sm:mt-0 "
          >
            +8 more
          </a>
        </div> -->
        <div class="text-sm">

          <div class="inline-block relative">
            <select
              class="text-black border-gray-100 cursor-pointer cursor-pointer block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 leading-tight focus:outline-none focus:none"
              v-model="sortBy"
              @change="sort"
            >
              <option
                class="bg-white"
                v-for="(s,ix) in sorts"
                :key="ix"
                :value="s.val"
              >{{s.name}}</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <i class="fa fa-caret-down px-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="xs:block lg:hidden flex shadow-md py-4 bg-white w-full mb-1">
      <div
        class="flex-1 text-gray-700 text-left text-pink-500"
        @click="$emit('showFilters')"
      >
        <i
          class="fa fa-sliders px-3 mr-2"
          aria-hidden="true"
        ></i>Filter
      </div>
      <div class="flex-1 text-gray-700 text-center font-normal px-4">0 Items</div>
      <div class="flex-1 text-gray-700 text-center px-4 text-pink-500">
        <i
          class="fa fa-sort mr-2"
          aria-hidden="true"
        ></i>Sort
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from "~/components/ui/Checkbox";
import { constructURL } from "~/lib/";
import { sorts } from "~/config";
export default {
  components: { Checkbox },
  data() {
    return {
      sorts,
      sortBy: null
    };
  },
  created() {
    this.sortBy = this.$route.query.sort || "-createdAt";
  },
  props: {
    count: {
      type: Number
    },
    fl: {
      type: [Object, Array]
    }
  },
  methods: {
    sort() {
      let fl = { ...this.fl };
      fl.sort = this.sortBy;
      let url = constructURL("/search", fl);
      this.$router.push(url);
    },
    remove(k, i) {
      let ix = this.fl[k].indexOf(i);
      this.fl[k].splice(ix, 1);
      // this.$emit("removed", this.fl);
      let url = constructURL("/search", this.fl);
      this.$router.push(url);
    }
  }
};
</script>

<style scoped>
.bb {
  background: #f5f5f5;
}
select {
  border: 1px solid lightgray !important;
}
.txtxlr {
  color: #282c3f;
}
.hoveraffect {
  background-color: aquamarine;
  border-radius: 50px;
  padding-left: 1em;
  padding-right: 1em;
}
.arrowcls {
  float: right;
  margin-top: 0.6em;
  margin-left: 0.2em;
}
label:focus,
label:hover {
  outline: -webkit-focus-ring-color auto 1px;
  background: grey !important;
  border-color: rgb(212, 213, 217);
}
</style>
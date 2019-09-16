<template>
  <div>
    <p class="py-2 px-5 text-sm">
      Home / Clothing / Dresses /
      <span class="font-semibold">Clothing Dresses</span>
    </p>
    <p class="py-2 px-5 text-sm">
      <span class="font-semibold">Clothing Dresses</span>
      - {{count}} items
    </p>

    <div class="flex flex-wrap">
      <div class="flex text-sm w-full">
        <!-- <a
          href="#"
          class="block inline-block mb-1 rounded-full p-1 mr-8 bg-gray-200 text-black"
        >
          Bundles<i class="fa fa-caret-down px-1" />
        </a>
        <a
          href="#"
          class="block inline-block mb-1 rounded-full  p-1 mr-8 bg-gray-200 text-black"
        >
          Fabric <i class="fa fa-caret-down px-1" />
        </a>
        <a
          href="#"
          class="block inline-block mb-1 rounded-full  p-1 mr-8 bg-gray-200 text-black "
        >
          Length<i class="fa fa-caret-down px-1" />
        </a>
        <a
          href="#"
          class="block inline-block mb-1 rounded-full  p-1 mr-8 bg-gray-200 text-black "
        >
          Neck<i class="fa fa-caret-down px-1" />
        </a>
        <a
          href="#"
          class="block inline-block mb-1 rounded-full  p-1 mr-8 bg-gray-200 text-black "
        >
          Ocassion<i class="fa fa-caret-down px-1" />
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
        </a>-->
        <div class="text-sm flex h-12 py-4 w-full flex-wrap">
          <div
            v-for="(v,k) in fl"
            :key="k"
            v-if="v && v.length>0 && k!='page' && k!='sort'"
            class="block"
          >
            <span
              class="text-gray-600 m-4 p-2 border border-gray-300 hover:border-gray-500 capitalize rounded-full"
              v-for="(i,ix) in v"
              :key="ix"
            >
              {{i}}
              <i
                class="fa fa-times px-1 cursor-pointer"
                aria-hidden="true"
                @click="remove(k,i)"
              ></i>
            </span>
          </div>
        </div>
        <div class="inline-block relative w-64">
          <select
            class="text-black border-gray-100 cursor-pointer cursor-pointer block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 leading-tight focus:outline-none focus:none"
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
    <div class="xs:block lg:hidden">
      <div class="flex shadow-md py-4 bg-white w-full">
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
  </div>
</template>

<script>
import Checkbox from "~/components/Checkbox";
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
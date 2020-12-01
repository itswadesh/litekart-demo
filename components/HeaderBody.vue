<template>
  <div>
    <div class="items-center justify-between flex-none hidden py-4 text-sm lg:flex">
      <!-- <Breadcrumb v-if="category && category.slugPath && category.slugPath.length>0"
      :namePath="category.namePath"
      :slugPath="category.slugPath" class="px-1 py-0" />
    /> -->
      <div class="flex p-1 font-semibold headings">
        <div class="font-hairline text-1">{{count}} {{category.name}}</div>
      </div>
      <div class="flex-wrap p-1">
        <div class="text-sm">
          <div class="relative inline-block">
            <select
              class="hidden block px-4 py-2 pr-8 leading-tight text-black bg-white border border-gray-100 border-gray-400 appearance-none cursor-pointer md:block hover:border-gray-500 focus:outline-none focus:none"
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
            <div class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
              <i class="px-1 fa fa-caret-down" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex w-full py-4 mb-1 xs:block lg:hidden">
      <div
        class="flex items-center flex-1 text-left text-gray-700 text-primary"
        @click="$emit('showFilters')"
      >
        <i
          class="px-2 fa fa-sliders"
          aria-hidden="true"
        ></i>Filter
      </div>
      <div class="flex-1 hidden px-4 font-normal text-center text-gray-700 md:block">{{count}} Items</div>
      <div class="flex items-center flex-1 text-center text-gray-700 text-primary">
        <select
          class="block px-4 py-2 pr-8 leading-tight bg-white border border-gray-100 border-gray-400 appearance-none cursor-pointer text-primary hover:border-gray-500 focus:outline-none focus:none"
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
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "~/components/details/Breadcrumb";
import Checkbox from "~/components/ui/Checkbox";
import { constructURL } from "~/lib/";
import { sorts } from "~/config";
export default {
  components: { Checkbox, Breadcrumb },
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
    category: {
      type: Object
    },
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
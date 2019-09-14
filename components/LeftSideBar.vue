<template>
  <div
    class="py-2\1 bg-white-800 shadow bg-white"
    v-if="facets.brands"
  >
    <div class="flex-none px-2 py-4">
      <span class="font-normal text-sm text-gray px-5">FILTERS</span>
      <span class="font-normal text-sm float-right text-pink-500 font-bold cursor-pointer">CLEAR ALL</span>
    </div>
    <div class=" ">
      <ul class="ml-2 py-2 text-sm px-5 py-2">
        <li>
          <Radio />
        </li>
        <li>
          <Radio />
        </li>
      </ul>
    </div>
    <div>
      <p class="ml-2 py-2 font-semibold text-sm px-5">BRAND</p>
      <ul class="ml-2 py-2 px-5">
        <li
          v-for="b in facets.brands && facets.brands.buckets"
          :key="b.key"
        >
          <Checkbox
            :count="b.doc_count"
            :value="b.key"
            v-model="fl.brands"
            @change="changed({model:'brands',checked:fl.brands})"
          >{{b.key}}</Checkbox>
        </li>
      </ul>
    </div>

    <div>
      <p class="ml-2 py-2 font-semibold text-sm px-5">SIZES</p>
      <ul class="ml-2 py-2 px-5">
        <li
          v-for="b in facets.sizes && facets.sizes.buckets"
          :key="b.key"
        >
          <Checkbox
            :count="b.doc_count"
            :value="b.key"
            v-model="fl.sizes"
            @change="changed({model:'sizes',checked:fl.sizes})"
          >{{b.key}}</Checkbox>
        </li>
      </ul>
    </div>

    <div
      v-for="(v,k) in facets.features && facets.features.name.buckets"
      :key="k"
    >
      <p class="ml-2 py-2 font-semibold text-sm px-5">{{v.key}}</p>
      <ul class="ml-2 py-2 px-5">
        <li
          v-for="f in v.val.buckets"
          :key="f.key"
        >
          <Checkbox
            :count="f.doc_count"
            :value="f.key"
            v-model="fl[v.key]"
            @change="changed({model:v.key,checked:fl[v.key]})"
          >{{f.key}}</Checkbox>
        </li>
      </ul>
    </div>

    <div>
      <p class="ml-2 py-2 font-semibold text-sm px-5">COLOR</p>
      <ul class="ml-2 py-2 px-5">
        <li class="colour-listItem">
          <ColorCheckbox
            color="#ff0000"
            :count="100"
            text="Forever 21"
            val="Forever 21"
          />
        </li>
        <li class="colour-listItem">
          <ColorCheckbox
            color="#00ff00"
            :count="100"
            text="Forever 21"
            val="Forever 21"
          />
        </li>
        <li class="colour-listItem">
          <ColorCheckbox
            color="#0000ff"
            :count="100"
            text="Forever 21"
            val="Forever 21"
          />
        </li>
        <li class="colour-listItem">
          <ColorCheckbox
            color="yellow"
            :count="100"
            text="Forever 21"
            val="Forever 21"
          />
        </li>
        <li class="colour-listItem">
          <ColorCheckbox
            color="cyan"
            :count="100"
            text="Forever 21"
            val="Forever 21"
          />
        </li>
        <li class="colour-listItem">
          <ColorCheckbox
            color="orange"
            :count="100"
            text="Forever 21"
            val="Forever 21"
          />
        </li>
      </ul>
    </div>
    <div>
      <p class="ml-2 py-2 font-semibold text-sm px-5 py-2">DISCOUNT RANGE</p>
      <ul class="ml-2 py-2 text-gray-600 text-sm px-5 py-2">
        <li>
          <Radio />
        </li>
        <li>
          <Radio />
        </li>
        <li>
          <Radio />
        </li>
        <li>
          <Radio />
        </li>
        <li>
          <Radio />
        </li>
        <li>
          <Radio />
        </li>
        <li>
          <Radio />
        </li>

      </ul>
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
      fl: {
        brands: [],
        price: [],
        categories: [],
        colors: [],
        sizes: [],
        price: [1, 100],
        sort: null,
        features: { Type: [], Fit: [], Fabric: [], Neck: [], Color: [] },
        sorts: [
          { name: "Relevance", val: null },
          { name: "Whats New", val: "-createdAt" },
          { name: "Price low to high", val: "variants.price" },
          { name: "Price high to low", val: "-variants.price" }
        ]
      },
      loadingPrice: true // Required because after loading finished then only we will initiate the price slider component
    };
  },
  async created() {
    let query = this.$route.query;
    let vm = this;
    Object.keys(query).map(function(k, i) {
      if (
        query[k] &&
        !Array.isArray(query[k]) &&
        query[k] != null &&
        query[k] != ""
      )
        query[k] = query[k].split(",");
    });
    this.fl = query;
  },
  methods: {
    categoryChanged(i) {
      console.error("categoryChanged", i);
    },
    changed(e) {
      this.fl[e.model] = e.checked;
      // this.fl.pilot = e.checked;
      let url = constructURL("/search/", this.$route.params.q, this.fl);
      this.$router.push(url);
    },
    checkCategory() {},
    go(slug) {
      this.$router.push("/" + slug);
    }
  }
};
</script>

<style scoped>
.bb {
  border-bottom: 1px solid #edebef;
  height: max-content;
}
.margin-right {
  border-right: 1px solid #edebef;
  border-top: 1px solid #edebef;
  height: unset;
}
.margin-topp {
  border-top: 1px solid #edebef;
}
.right-body {
  padding: 1em;
}
.results-showMoreContainer {
  box-sizing: border-box;
}
input[type="radio"] {
  margin-top: 0.4em;
}
</style>
<template>
  <div class="w-64" v-if="facets">
    <div
      class="flex items-center justify-between py-3 text-sm font-bold border-b border-dashed md:px-3 lg:px-4 md:text-xs headings"
    >
      <div class="text-gray">FILTERS</div>
      <button
        @click="$emit('clearAllFilters')"
        class="text-right cursor-pointer text-primary"
      >
        CLEAR ALL
      </button>
    </div>
    <div
      v-for="(v, k) in fl"
      :key="k"
      v-if="
        v && v.length > 0 && k != 'page' && k != 'sort' && k != 'categories'
      "
      class="flex flex-wrap items-center my-2 ml-3 mr-2 text-xs"
    >
      <div class="rnd-mnt" v-for="(i, ix) in v" :key="ix">
        {{ i }}
        <i
          class="ml-1 cursor-pointer fa fa-times"
          aria-hidden="true"
          @click="remove(k, i)"
        ></i>
      </div>
    </div>
    <!-- {{facets.categories.all.buckets[0].key}} == {{facets.categories.all.buckets[0].val.buckets[0].key}}
    <div v-if="facets.categories && facets.categories.all.buckets && facets.categories.all.buckets.length>0">
      <p class="px-2 py-2 ml-2 text-sm font-semibold headings">CATEGORY</p>
      <ul class="px-2 py-2 ml-2 filter-container">
        <li
          v-for="b in facets.categories && facets.categories.all.buckets"
          :key="b.key"
        >
          <Checkbox
            :count="b.doc_count"
            :value="b.key"
            v-model="fl.categories"
            @change="changed({model:'categories',checked:fl.categories})"
          >{{b.val.buckets[0].key}}</Checkbox>
        </li>
      </ul>
    </div> -->

    <div
      class="pt-2 pb-5 my-3 border-b"
      v-if="
        facets.brands &&
          facets.brands.all.buckets &&
          facets.brands.all.buckets.length > 0
      "
    >
      <h4 class="px-2 ml-2 text-sm font-semibold uppercase">BRAND</h4>
      <ul class="px-2 ml-2 filter-container">
        <li
          v-for="b in facets.brands && facets.brands.all.buckets"
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
    </div>

    <div
      class="pt-3 pb-3 my-3 border-b"
      v-if="
        facets.sizes &&
          facets.sizes.all.buckets &&
          facets.sizes.all.buckets.length > 0
      "
    >
      <h4 class="px-2 ml-2 text-sm font-semibold uppercase">SIZES</h4>
      <ul class="px-2 ml-2 filter-container">
        <li v-for="b in facets.sizes && facets.sizes.all.buckets" :key="b.key">
          <Checkbox
            :count="b.doc_count"
            :value="b.key"
            v-model="fl.sizes"
            @change="changed({ model: 'sizes', checked: fl.sizes })"
            >{{ b.key }}</Checkbox
          >
        </li>
      </ul>
    </div>

    <div
      class="pt-2 pb-5 my-3 border-b"
      v-for="(v, k) in facets.features && facets.features.name.buckets"
      :key="k"
      v-if="v.key != 'Color' && v.val && v.val.buckets.length > 0"
    >
      <h4 class="px-2 ml-2 text-sm font-semibold uppercase">{{ v.key }}</h4>
      <ul class="px-2 ml-2 filter-container">
        <li v-for="f in v.val.buckets" :key="f.key">
          <Checkbox
            :count="f.doc_count"
            :value="f.key"
            v-model="fl[v.key]"
            @change="changed({ model: v.key, checked: fl[v.key] })"
            >{{ f.key }}</Checkbox
          >
        </li>
      </ul>
    </div>

    <div
      class="pt-3 pb-3 my-3 border-b"
      v-if="
        facets.colors &&
          facets.colors.colors &&
          facets.colors.colors.name &&
          facets.colors.colors.name.buckets &&
          facets.colors.colors.name.buckets.length > 0
      "
    >
      <h4 class="px-2 ml-2 text-sm font-semibold uppercase">COLOR</h4>
      <ul class="px-2 ml-2 filter-container">
        <li
          class="colour-listItem"
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
            @change="changed({ model: 'color', checked: fl.color })"
            >{{ b.key }}</Checkbox
          >
        </li>
      </ul>
    </div>
  </div>
</template>
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
      loadingPrice: true // Required because after loading finished then only we will initiate the price slider component
    }
  },
  methods: {
    categoryChanged(i) {
      console.error('categoryChanged', i)
    },
    changed(e) {
      this.fl[e.model] = e.checked
      // this.fl.pilot = e.checked;
      let url = constructURL('/search', this.fl)
      this.$router.push(url)
    },
    remove(k, i) {
      let ix = this.fl[k].indexOf(i)
      this.fl[k].splice(ix, 1)
      // this.$emit("removed", this.fl);
      let url = constructURL('/search', this.fl)
      this.$router.push(url)
    },
    checkCategory() {},
    go(slug) {
      this.$router.push('/' + slug)
    }
  }
}
</script>

<style scoped>
.filter-container {
  max-height: 400px;
  overflow: auto;
}
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
input[type='radio'] {
  margin-top: 0.4em;
}

.rnd-mnt:hover {
  border: solid 1px #94969f;
}
</style>

<template>
  <div class="flex flex-row w-full" v-if="count > 1">
    <div
      class="justify-start flex-1 w-full text-xs pagination-container lg:text-sm"
    >
      <div class="w-full pagination-paginationMeta lg:w-auto">
        Page {{ current }} of {{ count }}
      </div>
      <div class="justify-start flex-1 w-full lg:w-auto">
        <button
          v-if="current > 1"
          class="items-center hidden p-2 font-semibold border border-gray-400 rounded shadow hover:bg-white lg:inline-flex lg:mx-5 text-primary-200 lg:py-2 lg:px-4"
          @click="$emit('change', current - 1)"
        >
          <i class="fa fa-caret-left" />
          &nbsp;
          <span>Previous</span>
        </button>
        <button
          class="w-8 h-8 rounded-full hover:bg-white"
          :class="{
            'bg-black font-medium text-white tracking-wide rounded-sm':
              current == i
          }"
          v-for="i in pages"
          :key="i"
          @click="$emit('change', i)"
        >
          {{ i }}
        </button>
        <button
          class="items-center hidden px-4 py-2 font-semibold border border-gray-400 rounded shadow hover:bg-white lg:inline-flex text-primary-200"
          @click="$emit('change', current + 1)"
          v-if="current < count"
        >
          <span>Next</span>
          &nbsp;
          <i class="fa fa-caret-right" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    pages() {
      let count = this.count > 10 ? 10 : this.count
      return parseInt(count)
    }
  },
  props: {
    count: {
      type: Number,
      default: 1
    },
    current: {
      type: Number,
      default: 1
    }
  },
  methods: {}
}
</script>

<style scoped>
.pagination-container {
  list-style: none;
  text-align: center;
  border-top: 1px solid #edebef;
  padding: 20px 0px;
  color: #282c3f;
}
.pagination-paginationMeta {
  color: #535766;
  font-size: 14px;
  float: left;
  margin: 10px;
  cursor: default;
  font-weight: 400;
}
li {
  display: inline-block;
  font-weight: 500;
  cursor: pointer;
  border-radius: 0.4rem;
}
</style>

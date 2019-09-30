<template>
  <div class="flex flex-row w-full px-3">
    <ul class="flex pagination-container justify-center">
      <li class="pagination-paginationMeta">Page {{current}} of {{count}}</li>
      <div class="m-auto">
        <button v-if="current>1" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow rounded inline-flex items-center" @click="$emit('change',current-1)">
          <i class="fa fa-caret-left" />
          &nbsp;
          <span>Back</span>
        </button>
        <li
          class="p-2"
          :class="{'bg-black font-medium text-white tracking-wide rounded-sm':current==i}"
          v-for="i in pages"
          :key="i"
          @click="$emit('change',i)"
        >{{i}}</li>
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow rounded inline-flex items-center" @click="$emit('change',current+1)">
          <span>Next</span>
          &nbsp;
          <i class="fa fa-caret-right" />
        </button>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    pages() {
      if (this.count > 10) this.count = 10;
      return parseInt(this.count);
    }
  },
  props: {
    count: {
      type: Number,
      default: 2
    },
    current: {
      type: Number,
      default: 1
    }
  },
  methods:{

  }
};
</script>

<style scoped>
.pagination-container {
  list-style: none;
  text-align: center;
  border-top: 1px solid #edebef;
  padding-top: 24px;
  padding-bottom: 60px;
  color: #282c3f;
}
.pagination-paginationMeta {
  color: #535766;
  font-size: 14px;
  float: left;
  margin-top: 6px;
  margin-right: 10px;
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

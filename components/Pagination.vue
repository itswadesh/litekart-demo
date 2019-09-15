<template>
  <div class="flex flex-row w-full px-3">

    <ul class="flex pagination-container pb-12 pt-4 list-none text-center w-full">
      <li class="pagination-paginationMeta text-sm mt-3 py-3">
        Page {{current}} of {{count}}
      </li>
      <div class="m-auto">
        <!-- <li
          class="p-2"
          :class="{'bg-black font-medium text-white tracking-wide rounded-sm':current==i}"
          v-for="i in pages"
          :key="i"
          @click="$emit('changed',i)"
        >
          {{i}}
        </li> -->
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow rounded inline-flex items-center">
          <span>Next</span>
          &nbsp;<i class="fa fa-caret-right" />
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
  }
};
</script>

<style scoped>
.pagination-container {
  border-top: 0.01rem solid #edebef;
  color: #282c3f;
}
.pagination-paginationMeta {
  color: #535766;
}
li {
  display: inline-block;
  font-weight: 500;
  cursor: pointer;
  border-radius: 0.4rem;
}
</style>
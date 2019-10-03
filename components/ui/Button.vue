<template>
  <button
    v-bind="$attrs"
    :size="size"
    class="w-full p-3 text-lg font-bold rounded"
    :class="{'bg-pink-500 hover:bg-pink-600 text-white':color=='primary','text-black border border-gray-300':color=='none'}"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    icon: { type: String },
    size: { type: String, default: "text" },
    color: { type: String, default: "none" }
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style scoped>
</style>
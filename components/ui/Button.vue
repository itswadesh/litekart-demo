<template>
  <div class="group">
    <button
      v-bind="$attrs"
      :size="size"
      class="w-full p-3  text-lg font-bold rounded"
      :class="{'bg-pink-500 hover:bg-pink-600 text-white':color=='primary','text-black border border-gray-300':color=='none'}"
      :aria-label="label"
    >
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    icon: { type: String },
    size: { type: String, default: "text" },
    color: { type: String, default: "none" }
  }
};
</script>

<style scoped>
</style>
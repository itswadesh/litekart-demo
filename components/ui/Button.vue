<template>
  <div class="group">
    <!-- <button
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
      :type="type"
      :color="color"
      class="w-full p-3 bg-pink-500 hover:bg-pink-600 text-white text-lg font-bold rounded"
      :aria-label="label"
    >
      <slot />
    </button>-->

    <button
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
      :type="type"
      :color="color"
      class="w-full p-3 hover:bg-pink-600 text-black border border-gray-300 text-lg font-bold rounded"
      :aria-label="label"
    >
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    label: { type: String },
    type: { type: String, default: "text" },
    color: { type: String, default: "text" },
    value: { type: String }
  },
  data() {
    return {
      content: this.value
    };
  }
};
</script>

<style scoped>
</style>
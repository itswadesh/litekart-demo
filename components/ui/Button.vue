<template>
  <div class="group">
    <button
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
      :type="type"
      class="w-full mt-3 p-3 bg-pink-500 hover:bg-pink-600 text-white tet-2xl font-bold rounded"
      required
      :aria-label="label"
    ></button>
  </div>
</template>

<script>
export default {
  props: {
    label: { type: String },
    type: { type: String, default: "text" },
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
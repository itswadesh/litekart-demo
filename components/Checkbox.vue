<template>
  <label class="vertical-filters-label common-customCheckbox">
    <input
      type="checkbox"
      :value="val"
    >
    <span class="ml-2 text-sm">
      {{text}}
    </span>
    <span class="text-gray-500 text-xs">({{count}})</span>
    <div class="common-checkboxIndicator"></div>
  </label>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 1295
    },
    text: {
      type: String,
      default: ""
    },
    val: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
label {
  line-height: 2;

  cursor: pointer;
}
</style>
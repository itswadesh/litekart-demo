<template>
  <div class="w-full flex flex-wrap p-3">
    <div class="w-9/12 left-0 text-left text-xs text-gray-500">
      Home
      <i class="fa fa-angle-right" aria-hidden="true"></i>
      Wearable Smart Watch
      <i class="fa fa-angle-right" aria-hidden="true"></i> Smart Bands
      <i class="fa fa-angle-right" aria-hidden="true"></i>
      {{product.name}}
    </div>
    <div class="w-3/12 text-right right-0 pr-3">
      <i class="fa fa-share pr-2 text-gray-500" aria-hidden="true"></i>Share
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: { type: Object }
  }
};
</script>

<style>
</style>
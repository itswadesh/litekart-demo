<template>
  <div class="flex flex-wrap">
    <div
      v-for="(p,ix) in skeletonCount"
      :key="ix+'-1'"
      class="w-1/2"
    >
      <div class="lg:p-2 mt-3 border-0">
        <img
          class="w-full"
          style="height:280px;"
        />
        <div>
          <p class=""></p>
          <p class=""></p>
          <p class=""></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      skeletonCount: 8
    };
  }
};
</script>
<style lang="scss" scoped>
img {
  border: 0;
  border: none;
  border-width: 0;
}
</style>
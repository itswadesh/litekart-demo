<template>
  <div>
    <div class="container w-full">
      <div class="text-center text-gray-700">
        <img class src="/empty-listing.png" alt="" />
        <div class="headings">We are unable to find items matching</div>
        <div class="text-center text-1">{{ $route.query.q }}</div>
      </div>
    </div>
    <div class="flex w-full text-center shadow-md">
      <MegamenuMobile />
    </div>
  </div>
</template>

<script>
import MegamenuMobile from "~/components/MegamenuMobile";
export default {
  components: { MegamenuMobile },
};
</script>

<style></style>

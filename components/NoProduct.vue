<template>
  <div>
    <div class="w-full container">
      <div class="text-gray-700 text-center">
        <img class src="/empty-listing.png" alt="empty bag icon" />
        <div class="headings">We are unable to find items matching</div>
        <div class="text-1 text-center">{{$route.query.q}}</div>
      </div>
    </div>
    <div class="w-full flex text-center shadow-md">
      <MegamenuMobile />
    </div>
  </div>
</template>

<script>
import MegamenuMobile from "~/components/MegamenuMobile";
export default {
  components: { MegamenuMobile }
};
</script>

<style>
</style>
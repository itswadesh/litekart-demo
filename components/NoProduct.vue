<template>
  <div class="w-full ">
    <div class="mb-36">
      <div class="text-center text-gray-700">
        <img  src="/empty-listing.png" alt="" class="object-contain mx-auto h-80 w-80" />
        <div class="text-xl font-light text-primary">We are unable to find items matching</div>
        <div class="text-center text-1">{{ $route.query.q }}</div>
      </div>
    </div>
    <div class="flex w-full mb-6 text-center shadow-md">
      <MegamenuMobile class="w-full" />
    </div>
  </div>
</template>

<script>
import MegamenuMobile from '~/components/MegamenuMobile'
export default {
  components: { MegamenuMobile }
}
</script>

<style></style>

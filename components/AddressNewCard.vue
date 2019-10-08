<template>
  <div class="shadow bg-white p-2 rounded address">
    <div class="w-full flex justify-between">
      <nuxt-link to="/checkout/add" class="flextext-gray-600 font-sm m-auto">
        <img src="/rounded-plus.png" alt="plus" class="w-10 m-auto" />
        <div>Add new address</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Radio from "~/components/ui/Radio";
export default {
  components: { Radio },
  methods: {
    go(url) {
      this.$router.push(url);
    }
  }
};
</script>

<style>
</style>
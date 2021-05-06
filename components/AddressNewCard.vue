<template>
  <div class="p-2 bg-white rounded shadow address" @click="go('/checkout/add')">
    <div class="flex justify-between w-full">
      <nuxt-link to="" class="m-auto flextext-gray-600 font-sm">
        <img src="/rounded-plus.png" alt="+" class="w-10 m-auto" />
        <div>Add new address</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Radio from '~/components/ui/Radio'
export default {
  components: { Radio },
  methods: {
    go(url) {
      this.$router.push(url)
    }
  }
}
</script>

<style></style>

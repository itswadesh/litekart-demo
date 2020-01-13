<template>
  <div class="flex">
    <span class="mt-1">Quantity: &nbsp;</span>
    <div
      v-if="!checkCart({pid:product._id, vid:variant._id})"
      :disabled="!variant || variant.price<1 || variant.stock<1 || $store.state.loading"
      @click="addToBag(1);"
    >
      <button class="text-gray-600 bg-gray-200 rounded px-2 rounded">
        <img src="/plus.svg" alt="+" />
      </button>
    </div>
    <div v-else>
      <div class="flex flex-wrap">
        <button class="muted rounded-full w-8 h-8" @click="addToBag(-1)">
          <i class="fa fa-minus m-auto" aria-hidden="true"></i>
        </button>
        <div class="px-2 flex items-center text-center">
          <div v-if="!loading">{{getQty({pid:product._id, vid:variant._id})}}</div>
          <img alt="..." class="w-3 h-4" src="/loading.svg" v-else />
        </div>
        <button
          class="primary rounded-full w-8 h-8"
          :disabled="!variant || variant.price<1 || variant.stock<1 || loading"
          @click="addToBag(1)"
        >
          <i class="fa fa-plus m-auto" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["product", "variant"],
  data() {
    return {
      loading: false
    };
  },
  methods: {
    ...mapActions({ addToCart: "cart/addToCart" }),
    async addToBag(qty) {
      if (!this.variant) this.$store.commit("setErr", "Please select a size");
      else {
        this.loading = true;
        await this.addToCart({
          pid: this.product._id,
          vid: this.variant._id,
          qty
        });
        this.loading = false;
      }
    }
  },
  computed: {
    ...mapGetters({
      checkCart: "cart/checkCart",
      getQty: "cart/getQty"
    }),
    cart() {
      return this.$store.state.cart;
    }
  }
};
</script>
<style scoped>
.cart-button {
  border: 1px solid transparent;
  color: #32325d;
  cursor: pointer;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.23);
}
</style>


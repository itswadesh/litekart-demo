<template>
  <div class="flex">
    Quantity:
    <div
      v-if="!checkCart({pid:product._id, vid:variant._id})"
      :disabled="!variant || variant.price<1 || variant.stock<1 || $store.state.loading"
      @click="addToBag(1);"
    >
      <button class="cart-button w-8">
        <img src="/plus.svg" alt />
      </button>
    </div>
    <div v-else>
      <div class="flex-row-nocenter flex flex-wrap pl-3">
        <button class="cart-button w-8 hover:bg-yellow-500" @click="addToBag(-1)">
          <img src="/minus.svg" alt class="m-auto" />
        </button>
        <div class="px-4 py-1 w-12 h-8 text-center">
          <span v-if="!loading">{{getQty({pid:product._id, vid:variant._id})}}</span>
          <img src="/loading.svg" v-else />
        </div>
        <button
          class="cart-button w-8 bg-yellow-500"
          :disabled="!variant || variant.price<1 || variant.stock<1 || loading"
          @click="addToBag(1)"
        >
          <img src="/plus.svg" alt class="m-auto" />
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


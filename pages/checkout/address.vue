<template>
  <div>
    <CheckoutHeader selected="address" />
    <div class="p-2 flex flex-wrap justify-between lg:mx-10 items-start">
      <div class="flex flex-wrap justify-start pb-4">
        <!-- <div>
          <AddressCard class="mb-2 block lg:hidden" />
          <SelectAddress class="mb-2 hidden lg:block" />
        </div> -->
        <div
          class="w-full m-1 lg:w-1/3 shadow bg-white p-2 rounded flex flex-wrap justify-between border"
          :class="{'border-green-500':selectedAddress==a._id}"
          v-for="(a,ix) in addresses"
          :key="a._id"
        >
          <label class="cursor-pointer w-full flex justify-between">
            <div>
              <Radio
                :checked="selectedAddress==a._id"
                @changed="addressChanged"
                :value="a._id"
              />
            </div>
            <div class="flex-1 ml-2">
              <div class="font-semibold">{{a.firstName}} {{a.lastName}} </div>
              <div class="py-2 text-xs">
                <div>{{a.address}}</div>
                <div>{{a.phone}}</div>
                <div>{{a.state}}</div>
                <div>{{a.city}}</div>
                <div>{{a.country}}</div>
                <div>{{a.zip}}</div>
                <div class="py-2">
                  Mobile:
                  <span class="font-bold">{{a.phone}}</span>
                </div>
              </div>
            </div>
            <div v-if="ix==0">
              <div class="rounded-full text-xs bg-gray-200 py-1 px-2">Default</div>
            </div>
          </label>
          <div class="border-t border-gray-200 flex w-full">
            <button
              @click="del(a)"
              class="tracking-widest w-1/2 text-blue-500 py-1 border-r border-gray-200 mt-1"
            >Remove</button>
            <button
              @click="go('/checkout/add')"
              class="tracking-widest w-1/2 text-blue-500 py-1 mt-1"
            >Edit</button>
          </div>
        </div>
        <div class="hidden lg:block">
          <AddressNewCard class="mx-2 mb-2" />
        </div>
      </div>
      <div class="w-full lg:w-auto">
        <label class="flex justify-start border rounded p-2 text-sm border-green-300 bg-green-100">
          <Radio :checked="true" />
          <div class="ml-2">
            <div class="font-bold text-black">Standard Delivery</div>
            <div class="text-gray-500">Delivery Charge ₹149</div>
          </div>
        </label>
        <CartSummaryCheckout :selectedAddress="selectedAddress" />
      </div>
    </div>
  </div>
</template>

<script>
import AddressCard from "~/components/AddressCard";
import SelectAddress from "~/components/SelectAddress";
import AddressNewCard from "~/components/AddressNewCard";
import CartSummaryCheckout from "~/components/checkout/CartSummaryCheckout";
import Radio from "~/components/ui/Radio";
const CheckoutHeader = () => import("~/components/checkout/CheckoutHeader");
export default {
  data() {
    return {
      office: false,
      a: {},
      addresses: [],
      selectedAddress: ""
    };
  },
  created() {
    this.getAddress();
  },
  components: {
    CheckoutHeader,
    Radio,
    SelectAddress,
    AddressNewCard,
    AddressCard,
    CartSummaryCheckout
  },
  methods: {
    addressChanged(e) {
      console.log("addressChanged...........", e);
      this.selectedAddress = e;
    },
    del(a) {
      try {
        this.$store.commit("busy", true);
        this.$axios.$delete(`addresses/${a._id}`);
        this.getAddress();
        this.$store.commit("busy", false);
      } catch (e) {
        this.$store.commit("busy", false);
      }
    },
    async getAddress() {
      try {
        const a = await this.$axios.$get("addresses/my");
        this.addresses = a.data;
        this.selectedAddress = a.data[0] && a.data[0]._id;
      } catch (e) {}
    },
    go(url) {
      this.$router.push(url);
    }
  },
  layout: "none"
};
</script>

<style scoped>
</style>
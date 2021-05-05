<template>
  <div>
    <CheckoutHeader />
    <div>
      <div class="p-3 text-sm font-hairline text-gray-600">
        CHOOSE DELIVERY ADDRESS
      </div>
      <div class="m-2 lg:flex">
        <div
          class="flex flex-wrap justify-between p-2 m-1 bg-white border border-green-500 rounded shadow lg:w-1/3"
          v-for="(a, ix) in addresses"
          :key="a._id"
        >
          <label class="flex justify-between w-full cursor-pointer">
            <div>
              <Radio />
            </div>
            <div class="flex-1 ml-2">
              <div class="font-semibold">
                {{ a.firstName }} {{ a.lastName }}
                <span v-if="ix === 0">(Default)</span>
              </div>
              <div class="py-2 text-xs">
                <div>{{ a.address }}</div>
                <div>{{ a.phone }}</div>
                <div>{{ a.state }}</div>
                <div>{{ a.city }}</div>
                <div>{{ a.country }}</div>
                <div>{{ a.zip }}</div>
                <div class="py-2">
                  Mobile:
                  <span class="font-bold">{{ a.phone }}</span>
                </div>
              </div>
            </div>
            <div v-if="office">
              <div class="px-2 py-1 text-xs bg-gray-200 rounded-full">
                OFFICE
              </div>
            </div>
          </label>
          <div class="flex w-full border-t border-gray-200">
            <button
              class="w-1/2 py-1 mt-1 tracking-widest text-blue-500 border-r border-gray-200"
            >
              Remove
            </button>
            <button
              @click="go('/checkout/add')"
              class="w-1/2 py-1 mt-1 tracking-widest text-blue-500"
            >
              Edit
            </button>
          </div>
        </div>

        <nuxt-link
          to="/checkout/add"
          class="flex justify-between px-4 py-2 m-1 my-2 bg-white rounded shadow pointer lg:w-1/3"
        >
          <div>Add New Address</div>
          <i class="text-right fa fa-angle-right" aria-hidden="true"></i>
        </nuxt-link>
      </div>
    </div>
    <div
      class="fixed bottom-0 right-0 w-full p-2 bg-white lg:inset-auto lg:w-1/4 lg:absolute"
    >
      <button
        @click="$router.push('/checkout/address')"
        class="w-full p-3 mt-3 text-sm font-semibold tracking-widest text-white bg-red-500 rounded"
      >
        CONFIRM
      </button>
    </div>
  </div>
</template>

<script>
import Radio from "~/components/ui/Radio";
const CheckoutHeader = () => import("~/components/checkout/CheckoutHeader");
export default {
  data() {
    return {
      office: false,
      a: {},
      addresses: [],
    };
  },
  created() {
    this.getAddress();
  },
  components: {
    CheckoutHeader,
    Radio,
  },
  methods: {
    async getAddress() {
      const a = await this.$axios.$get("api/addresses/my");
      this.addresses = a.data;
    },
    go(url) {
      this.$router.push(url);
    },
  },
  layout: "none",
};
</script>

<style scoped>
.dot {
  height: 15px;
  width: 15px;
  background-color: green;
  border-radius: 50%;
  display: inline-block;
}
</style>

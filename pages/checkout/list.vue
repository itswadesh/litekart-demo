<template>
  <div>
    <CheckoutHeader />
    <div>
      <div class="text-sm font-hairline text-gray-600 p-3">CHOOSE DELIVERY ADDRESS</div>
      <div class="m-2 lg:flex">
        <div
          class="m-1 lg:w-1/3 shadow bg-white p-2 rounded flex flex-wrap justify-between border border-green-500"
        >
          <div class="w-full flex justify-between">
            <div>
              <Radio />
            </div>
            <div class="flex-1 ml-2">
              <div class="font-semibold">Kintali Naveesh(Default)</div>
              <div class="py-2 text-xs">
                <div>Girls Hostel Vit university vellore,Tamil Nadu,632014</div>
                <div>Vellore Institute Of Technology</div>
                <div>Vellore 632014</div>
                <div>Tamil Nadu</div>
                <div class="py-2">
                  Mobile:
                  <span class="font-bold">9944817722</span>
                </div>
              </div>
            </div>
            <div>
              <div class="rounded-full text-xs bg-gray-200 py-1 px-2">OFFICE</div>
            </div>
          </div>
          <div class="border-t border-gray-200 flex w-full">
            <button
              class="tracking-widest w-1/2 text-blue-500 py-1 border-r border-gray-200 mt-1"
            >Remove</button>
            <button
              @click="go('/checkout/add')"
              class="tracking-widest w-1/2 text-blue-500 py-1 mt-1"
            >Edit</button>
          </div>
        </div>

        <div class="m-1 lg:w-1/3 mt-2 shadow bg-white p-2 rounded flex flex-wrap justify-between">
          <div class="w-full flex justify-between">
            <div>
              <Radio />
            </div>
            <div class="flex-1 ml-2">
              <div class="font-semibold">Kintali Naveesh</div>
              <div class="py-2 text-xs">
                <div>Girls Hostel Vit university vellore,Tamil Nadu,632014</div>
              </div>
            </div>
            <div>
              <div class="rounded-full text-xs bg-gray-200 py-1 px-2">Home</div>
            </div>
          </div>
        </div>

        <nuxt-link
          to="/checkout/add"
          class="m-1 shadow bg-white pointer my-2 py-2 px-4 rounded flex justify-between lg:w-1/3"
        >
          <div>Add New Address</div>
          <i class="fa fa-angle-right text-right" aria-hidden="true"></i>
        </nuxt-link>
      </div>
    </div>
    <div class="fixed bottom-0 lg:inset-auto w-full lg:w-1/4 lg:absolute p-2 bg-white right-0">
      <button
        @click="$router.push('/checkout/address')"
        class="tracking-widest w-full mt-3 p-3 bg-red-500 text-white text-sm font-semibold rounded"
      >CONFIRM</button>
    </div>
  </div>
</template>

<script>
import Radio from "~/components/ui/Radio";
const CheckoutHeader = () => import("~/components/checkout/CheckoutHeader");
export default {
  components: {
    CheckoutHeader,
    Radio
  },
  methods: {
    go(url) {
      this.$router.push(url);
    }
  },
  layout: "none"
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
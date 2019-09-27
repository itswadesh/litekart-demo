<template>
  <div>
    <CheckoutHeader />
    <div class="p-2">
      <div class="w-full pb-4">
        <div
          class="shadow bg-white p-2 rounded flex flex-wrap justify-between border border-green-500"
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
              @click="go('/checkout/list')"
              class="tracking-widest w-1/2 text-blue-500 py-1 border-r border-gray-200 mt-1"
            >Edit/Change</button>
            <button
              @click="go('/checkout/add')"
              class="tracking-widest w-1/2 text-blue-500 py-1 mt-1"
            >Add New Address</button>
          </div>
        </div>
      </div>
      <div
        class="w-full flex justify-between border rounded p-2 text-sm border-green-300 bg-green-100"
      >
        <div>
          <Radio />
        </div>
        <div class="flex-1 ml-2">
          <div>
            <div class="font-bold text-black">Standard Delivery</div>
            <div class="text-gray-500">Get it by 02nd oct | Delivery Charge 149</div>
          </div>
        </div>
      </div>
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
</style>
<template>
  <div>
    <CheckoutHeader />
    <div>
      <div class="text-sm font-hairline text-gray-600 p-3">CHOOSE DELIVERY ADDRESS</div>
      <div class="m-2">
        <div
          class="shadow bg-white p-2 rounded flex flex-wrap justify-between border border-green-500"
        >
          <div class="w-full flex">
            <div class="w-1/12 relative">
              <span class="dot"></span>
            </div>
            <div class="w-4/6 font-bold">Kintali Naveesh(Default)</div>
            <div class="w-1/6 text-center mt-1 rounded-full bg-gray-200 text-black text-xs">OFFICE</div>
          </div>
          <div class="text-xs text-black w-full flex py-3">
            <div class="w-1/12"></div>
            <div class="w-4/6">
              <div>Girls Hostel Vit university vellore,Tamil Nadu,632014</div>
              <div>Vellore Institute Of Technology</div>
              <div>Vellore 632014</div>
              <div>Tamil Nadu</div>
              <div class="py-2">
                Mobile:
                <span class="font-bold">9944817722</span>
              </div>
            </div>
            <div class="w-1/6 text-right"></div>
          </div>

          <div class="border-t border-gray-200 flex w-full">
            <button
              class="tracking-widest w-1/2 text-blue-500 py-1 border-r border-gray-200 mt-1"
            >Remove</button>
            <button class="tracking-widest w-1/2 text-blue-500 py-1 mt-1">Edit</button>
          </div>
        </div>
        <a href="#">
          <div class="shadow bg-white my-2 p-2 rounded flex">
            <div class="w-11/12">Add New Address</div>
            <i class="fa fa-angle-right text-right" aria-hidden="true"></i>
          </div>
        </a>
      </div>
    </div>
    <div class="fixed bottom-0 w-full p-2">
      <button
        class="tracking-widest w-full mt-3 p-3 bg-red-500 text-white text-sm font-semibold rounded"
      >CONFIRM</button>
    </div>
  </div>
</template>

<script>
const CheckoutHeader = () => import("~/components/checkout/CheckoutHeader");
export default {
  components: {
    CheckoutHeader
  }
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
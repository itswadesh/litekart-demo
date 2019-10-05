<template>
  <div>
    <CheckoutHeader />
    <div>
      <div
        class="p-3 lg:py-2 lg:px-0 flex shadow lg:shadow-none items-center justify-between lg:w-1/2 m-auto"
      >
        <div class="flex items-center">
          <i class="fa fa-arrow-left mb-1" aria-hidden="true"></i>
          <div class="font-bold text-gray-700 text-xl ml-3">Payment</div>
        </div>
        <div class="text-xs text-gray-600">Step 3 of 3</div>
      </div>
    </div>
    <div class>
      <div class="p-2 lg:px-0 lg:w-1/2 m-auto">
        <ul
          class="shadow rounded text-sm bg-white border-l-4 border-green-600 text-gray-500 font-hairline"
        >
          <li class="p-2">
            10% Instant Discount on HDFC Bank Debit and Credit Cards on a min spend of Rs. 5,000. TCA
            <br />
            <div class="flex items-center">
              <div class="text-blue-700">
                Show More
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="p-2 lg:px-0 text-sm text-gray-700 p-2 lg:w-1/2 m-auto">
        <div>PAYMENT OPTIONS</div>
        <div class="my-2 font-semibold bg-white border border-gray-300">
          <div class="px-3 flex justify-between px-2 py-3 border-b border-gray-300">
            <div>CREDIT/DEBIT</div>
            <div class="text-secondary">SELECT</div>
          </div>
          <div class="px-3 flex justify-between px-2 py-3 border-b border-gray-300">
            <div>CASH/CARD ON DELIVERY</div>
            <div class="text-secondary">SELECT</div>
          </div>
          <div class="px-3 flex justify-between px-2 py-3 border-b border-gray-300">
            <div>NET BANKING</div>
            <div class="text-secondary">SELECT</div>
          </div>
          <div class="px-3 flex justify-between px-2 py-3 border-b border-gray-300">
            <div>PHONEPE/BHIM UPI</div>
            <div class="text-secondary">SELECT</div>
          </div>
          <div class="px-3 flex justify-between px-2 py-3 border-b border-gray-300">
            <div>WALLETS</div>
            <div class="text-secondary">SELECT</div>
          </div>
          <div class="px-3 flex justify-between px-2 py-3 border-b border-gray-300">
            <div>GIFT CARD</div>
            <div class="text-secondary">SELECT</div>
          </div>
        </div>
      </div>
      <div class="p-2 lg:px-0 text-sm text-gray-700 p-2 lg:w-1/2 m-auto">
        <div>DELIVER TO:</div>
        <br />
        <div class="w-full flex justify-between bg-white shadow rounded">
          <div class="flex-1 p-2">
            <div class="font-semibold">Kintali Naveesh(Default)</div>
            <div class="py-2 text-xs">
              <div>Girls Hostel Vit university vellore,Tamil Nadu,632014</div>
              <div>Vellore Institute Of Technology</div>
              <div>Vellore 632014</div>
              <div>Tamil Nadu</div>
              <div class="pt-2">
                Mobile:
                <span class="font-bold">9944817722</span>
              </div>
              <div class="pt-2">
                <a
                  href="#"
                  @click="$router.push('/checkout/address')"
                  class="text-blue-700 font-semibold"
                >Change Address</a>
              </div>
            </div>
          </div>
          <div class="p-2">
            <div class="rounded-full text-xs bg-gray-200 py-1 px-2">OFFICE</div>
          </div>
        </div>
      </div>
      <div
        class="shadow-md lg:shadow-none font-bold fixed w-full bottom-0 bg-white p-2 lg:w-1/2 m-auto lg:relative"
      >
        <div class="flex p-3">
          <div class="flex-1 text-center">
            <div>₹927</div>
            <div>
              <a href="#" class="text-red-400">view details</a>
            </div>
          </div>
          <div class="flex-1 p-1">
            <button class="px-5 py-2 w-full primary text-white rounded">Pay Now</button>
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
  layout: "none"
};
</script>

<style>
</style>
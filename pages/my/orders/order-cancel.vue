<template>
  <div style="background:#f5f5f5">
    <!-- mobile starts -->
    <div
      class="w-full font-semibold text-xs justify-between flex border-b-2 border-gray-300 lg:hidden block"
    >
      <div class="flex-1 text-center text-pink-500 border-b border-pink-500 bg-white py-4">Select</div>
      <div class="flex-1 py-4 bg-white">
        <div class="flex justify-between">
          <div>
            <i class="fa fa-angle-right text-gray-500" aria-hidden="true"></i>
          </div>
          <div class="text-gray-500">Reason</div>
          <div>
            <i class="fa fa-angle-right text-gray-500" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div class="flex-1 text-gray-500 py-4 bg-white text-center">Confirm</div>
    </div>
    <!-- mobile ends -->
    <div class="w-full lg:w-4/5 m-auto flex lg:border lg:border-gray-300">
      <div class="flex-1" :class="{'mask':step!==1}">
        <div
          class="text-center text-pink-500 border-b border-pink-500 bg-white py-4 hidden lg:block"
        >Select</div>
        <div>
          <div
            class="text-gray-700 text-sm px-6 bg-white border-b border-gray-300 py-4 font-semibold"
          >Select items for cancellation</div>
          <div class="p-5 py-4 flex justify-between bg-white rounded">
            <div>
              <Checkbox></Checkbox>
            </div>
            <div>
              <img class="lg:rounded xs:rounded-b-none w-16" src="/cart-product.jpg" />
            </div>
            <div class="lg:w-4/5 xs:9/12">
              <div class="pl-4 font-hairline text-sm text-gray-500">
                <div class="text-gray-700">Stylish Green Floral Print</div>
                <div class="flex">
                  <div>
                    <span>Size:</span>
                    3-4 years
                  </div>
                </div>
                <div class="flex justify-between text-xs mt-2">
                  <div>
                    <div>
                      <div class="text-gray-700 font-semibold">Cancel Qty</div>
                      <select
                        class="rounded focus:outline-none text-left w-full border border-gray-400"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                      </select>
                    </div>
                  </div>
                  <div class="text-gray-700 font-semibold">
                    Refund
                    <br />
                    <div class="font-hairline text-green-500">₹0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="fixed bottom-0 relative border-t-2 border-gray-300 bg-white">
          <div
            class="flex justify-between text-black font-semibold text-xs px-2 py-4 bg-white shadow"
          >
            <div>1 item selected</div>
            <div>₹0</div>
          </div>
          <div>
            <button
              @click="step=2"
              class="w-full mr-2 primary text-white py-2 px-6 font-bold text-sm"
            >Proceed to reason</button>
          </div>
        </div>
      </div>
      <div class="flex-1 text-center" :class="{'mask':step!==2}">
        <div class="bg-white">
          <div class="hidden lg:block">
            <div class="flex justify-between py-4">
              <div>
                <i class="fa fa-angle-right text-gray-500" aria-hidden="true"></i>
              </div>
              <div class="text-gray-500">Reason</div>
              <div>
                <i class="fa fa-angle-right text-gray-500" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
        <div :class="{'mask':step!==2}">
          <div
            class="text-gray-600 text-sm text-left px-10 border-b border-gray-300 py-3"
          >Why are you cancelling these items?</div>
          <div class="text-left">
            <ul class="pl-4 text-xs text-gray-600">
              <li>
                <Radio />Need to change delivery address
              </li>
              <li>
                <Radio />Need to change size
              </li>
              <li>
                <Radio />Promo code not applied
              </li>
              <li>
                <Radio />Ordered by mistake
              </li>
              <li>
                <Radio />Shipment is delayed
              </li>
              <li>
                <Radio />Waiting time is too long
              </li>
              <li>
                <Radio />others
              </li>
              <li>
                <Radio />Found cheaper alternative somewhere
              </li>
              <li class="li-last">
                <Radio />Price too high
              </li>
            </ul>
          </div>
          <div>
            <button
              @click="step=3"
              class="w-full mr-2 primary text-white py-2 px-6 font-bold text-sm"
            >Proceed to refund</button>
          </div>
        </div>
      </div>
      <div class="flex-1" :class="{'mask':step!==3}">
        <div class="text-gray-500 py-4 bg-white text-center hidden lg:block">Confirm</div>
        <div :class="{'mask':step!==3}">
          <div
            class="text-gray-600 text-sm px-6 border-b border-gray-300 py-3"
          >You are cancelling 1 item</div>
          <div class="text-gray-600 text-xs mt-2 px-6 border-b border-gray-300 py-3">
            <div class="font-semibold">No refund applicable</div>
            <div>Cash on delivery was the payment method chosen from this order</div>
          </div>
          <div>
            <button
              @click="confirm()"
              class="w-full mr-2 primary text-white py-2 px-6 font-bold text-sm"
            >Confirm Cancellation</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Checkbox, Radio } from "~/components/ui";
export default {
  data() {
    return {
      step: 1
    };
  },
  methods: {
    confirm() {
      console.log("ddone");
    }
  },
  components: { Checkbox, Radio }
};
</script>

<style scoped>
ul li {
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid lightgrey;
}
.li-last {
  margin-top: 0.8rem;
  margin-bottom: 0rem;
  padding-bottom: 0.4rem;
  border-bottom: 0px solid lightgrey;
}
</style>
<template>
  <div>
    <CheckoutHeader />
    <div class="w-full pb-4">
      <div class="py-4 px-2 mb-2 text-left text-gray-700 text-xl shadow">Add an address</div>
      <form class="form w-full mb-5">
        <div class="p-2">
          <Textbox label="Full Name" class="w-full" />
          <Textbox label="Pin Code" class="w-full" />
          <Textbox label="Address" class="w-full" />
          <Textbox label="Landmark" class="w-full" />

          <div class="w-full flex flex-wrap justify-between">
            <Textbox label="City" class="w-full lg:w-1/2" />
            <Textbox label="State" class="w-full lg:w-1/2" />
          </div>
          <Textbox label="Mobile" class="w-full" />
        </div>
        <div class="flex shadow fixed bottom-0 justify-between w-full">
          <button class="tracking-widest p-3 w-1/2 bg-white text-black text-sm font-semibold">CANCEL</button>
          <button
            class="tracking-widest p-3 w-1/2 hover:bg-pink-600 bg-pink-500 text-white text-sm font-semibold"
          >CONTINUE</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
const Textbox = () => import("~/components/ui/Textbox");
const CheckoutHeader = () => import("~/components/checkout/CheckoutHeader");
export default {
  components: {
    CheckoutHeader,
    Textbox
  }
};
</script>

<style scoped>
/* form */

form {
  display: inline-block;
}
.field {
  padding-top: 10px;
  display: flex;
  flex-direction: column;
}
label {
  order: -1;
  padding-left: 5px;
  font-size: 14px;
  transition: all 0.3s ease-in;
  transform: translateY(30px);
  pointer-events: none;
}
input:focus + label,
textarea:focus + label {
  transform: translateY(16px);
}
/* form ends */
</style>
<template>
  <div>
    <CheckoutHeader />
    <div class="w-full pb-4 lg:w-1/3 m-auto">
      <div>
        <div class="p-3 flex shadow lg:shadow-none items-center justify-between">
          <div class="flex items-center">
            <i
              @click="go('/checkout/list')"
              class="fa fa-arrow-left mb-1"
              aria-hidden="true"
            ></i>
            <div class="font-bold text-gray-700 text-xl ml-3">Add address</div>
          </div>
          <div class="text-xs text-gray-600">Step 2 of 3</div>
        </div>
      </div>
      <form
        class="lg:mx-15 form w-full mb-1"
        novalidate
        autocomplete="off"
        @submit.stop.prevent="submit(a)"
      >
        <div class="p-2">
          <Textbox
            label="Full Name"
            class="w-full"
            name="name"
            v-model="a.name"
          />
          <Textbox
            label="Pin Code"
            class="w-full"
            name="name"
            v-model="a.zip"
          />
          <Textbox
            label="Address"
            class="w-full"
            name="name"
            v-model="a.address"
          />
          <Textbox
            label="Landmark"
            class="w-full"
            name="name"
            v-model="a.landmark"
          />

          <div class="w-full flex justify-between">
            <Textbox
              label="City"
              class="w-1/2 mr-1"
              name="name"
              v-model="a.city"
            />
            <Textbox
              label="State"
              class="w-1/2 ml-1"
              name="name"
              v-model="a.state"
            />
          </div>
          <Textbox
            label="Mobile"
            class="w-full"
            name="name"
            v-model="a.mobile"
          />
        </div>
        <div class="flex shadow lg:shadow-none fixed bottom-0 justify-between w-full lg:w-1/3">
          <button
            @click="$router.push('/checkout/address')"
            class="tracking-widest p-3 w-1/2 bg-white text-black text-sm font-semibold"
          >CANCEL</button>
          <button
            type="submit"
            class="tracking-widest p-3 w-1/2 primary text-sm font-semibold"
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
  data() {
    return {
      a: {}
    };
  },
  components: {
    CheckoutHeader,
    Textbox
  },
  methods: {
    go(url) {
      this.$router.push(url);
    },
    async submit(address) {
      this.loading = true;
      // this.a = address;
      try {
        if (address._id)
          await this.$axios.$put("addresses/" + address._id, address);
        else await this.$axios.$post("addresses", address);
      } catch (e) {
        console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzz", e);
      }
    }
  },
  layout: "none"
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
<template>
  <div>
    <CheckoutHeader />
    <div class="w-full pb-4 m-auto lg:w-1/3">
      <div>
        <div class="flex items-center justify-between p-3 shadow lg:shadow-none">
          <nuxt-link
            class="flex items-center"
            to="/my/address"
          >
            <i
              class="mb-1 fa fa-arrow-left"
              aria-hidden="true"
            ></i>
            <div class="ml-3 text-xl font-bold text-gray-700">Add address</div>
          </nuxt-link>
          <div class="text-xs text-gray-600">Step 2 of 3</div>
        </div>
      </div>
      <form
        class="w-full mb-1 lg:mx-15 form"
        novalidate
        autocomplete="off"
        @submit.stop.prevent="submit(a)"
      >
        <div class="p-2">
          <Textbox
            label="First Name"
            class="w-full"
            name="firstName"
            v-model="a.firstName"
          />
          <Textbox
            label="Last Name"
            class="w-full"
            name="lastName"
            v-model="a.lastName"
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

          <div class="flex justify-between w-full">
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
            label="Phone"
            class="w-full"
            name="name"
            v-model="a.phone"
          />
        </div>
        <div class="fixed bottom-0 flex justify-between w-full shadow lg:shadow-none lg:w-1/3">
          <button
            type="button"
            @click="$router.push('/checkout/address')"
            class="w-1/2 p-3 text-sm font-semibold tracking-widest text-black bg-white"
          >CANCEL</button>
          <button
            type="submit"
            class="w-1/2 p-3 text-sm font-semibold tracking-widest primary"
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
  async created() {
    try {
      this.a = await this.$axios.$get(`api/addresses/${this.$route.query.id}`);
    } catch (e) {}
  },
  methods: {
    go(url) {
      this.$router.push(url);
    },
    async submit(address) {
      this.$store.commit("busy", true);
      try {
        if (address._id)
          await this.$axios.$put("api/addresses/" + address._id, address);
        else await this.$axios.$post("api/addresses", address);
        this.$store.commit("busy", false);
        this.go("/checkout/address");
      } catch (e) {
        this.$store.commit("busy", false);
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
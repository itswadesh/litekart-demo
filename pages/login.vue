<template>
  <div>
    <Header />
    <div class="bg-gray-100">
      <div class="container mx-auto h-full flex items-center">
        <div class="lg:w-1/3 xs:3/3">
          <div class="border-teal border-t-12 bg-white mb-6 rounded shadow-2xl">
            <div class="p-0 bg-blue-700 text-white rounded rounded-b-none">
              <h1 class="text-xl mb-6 text-left p-3">
                <span class="font-extrabold">SIGN IN</span> TO YOUR ACCOUNT
              </h1>
            </div>
            <form
              novalidate
              autocomplete="off"
              @submit.stop.prevent="submit()"
              class="center"
            >
              <div class="p-6">
                <div class="mb-5 flex items-center border-b border-b-2 border-grey-500">
                  <input
                    v-model="uid"
                    class="appearance-none bg-gray-200 border-none w-full text-gray-700 p-4 leading-tight focus:outline-none"
                    type="email"
                    placeholder="Email"
                    aria-label="Enter email id"
                  />
                </div>

                <!-- <p class="text-red-500 mb-5 text-xs font-hairline">Please enter password</p> -->

                <div class="mb-10 flex items-center border-b border-b-2 border-grey-500">
                  <input
                    v-model="password"
                    class="appearance-none bg-gray-200 border-none w-full text-gray-700 p-4 leading-tight focus:outline-none"
                    type="password"
                    placeholder="Password"
                    aria-label="Enter Password"
                  />
                </div>
                <div class="flex items-center justify-between">
                  <button class="text-2xl big-button outline-none text-xl w-full text-white font-bold py-2 px-4 rounded">Login Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header";
export default {
  data() {
    return {
      loading: false,
      isPhone: false,
      fadeIn: "",
      disable: "disable",
      p: {},
      msg: null,
      uid: "",
      password: "",
      otp: "",
      user: { email: "", password: "" }
    };
  },
  components: { Header },
  methods: {
    async submit() {
      if (!this.uid || this.uid == "") {
        this.$store.commit("setErr", "Please enter your email/phone no");
        return;
      }
      if (this.isPhone) {
        await this.phoneLogin();
      } else {
        await this.emailLogin();
      }
    },
    async phoneLogin() {},
    async emailLogin() {
      try {
        this.loading = true;
        const res = await this.$store.dispatch("auth/login", {
          email: this.uid,
          password: this.password
        });
        if (res.token) {
          this.$store.commit("success", "Verified! Thank You.");
          let returnUrl = this.$route.query.return || "/my";
          this.$router.push(returnUrl);
        }
      } catch (e) {
        // this.$store.commit("setErr", e);
      } finally {
        this.loading = false;
      }
    }
  },
  head() {
    return {
      title: "Login to Litekart",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "After this checkout process we will ship the item and it should be delivered within 7 working days"
        },
        {
          hid: "og:description",
          name: "Description",
          property: "og:description",
          content:
            "After this checkout process we will ship the item and it should be delivered within 7 working days"
        },

        {
          hid: "og:title",
          name: "og:title",
          property: "og:title",
          content: "Checkout with the products in your cart"
        },
        // Twitter
        {
          name: "twitter:title",
          content: "Checkout with the products in your cart"
        },
        {
          name: "twitter:description",
          content:
            "After this checkout process we will ship the item and it should be delivered within 7 working days"
        }
      ]
    };
  }
};
</script>
<style scoped>
.border-t {
  border-bottom: 1px solid lightgray;
}
.big-button {
  background: linear-gradient(87deg, #fb6340, #da1c5f) !important;
  border-color: #fb6340;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}
</style>
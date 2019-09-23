<template>
  <div>
    <Header />
    <div class="bg-gray-100 xs:mobile-login h-full px-4">
      <div class="container mx-auto h-full flex items-center">
        <div class="lg:w-1/3 w-full">
          <div class="border-teal border-t-12 bg-white mb-6 rounded shadow-2xl">
            <div class="p-0 bg-blue-700 text-white rounded rounded-b-none">
              <h1 class="text-xl mb-6 text-left p-3">
                <span class="font-extrabold">SIGN IN</span> TO YOUR ACCOUNT
              </h1>
            </div>
            <form novalidate autocomplete="off" @submit.stop.prevent="submit()" class="center">
              <div class="p-6">
                <div class="mb-5 flex items-center border-b border-b-2 border-grey-500">
                  <input
                    v-model="uid"
                    name="uid"
                    ref="uid"
                    class="appearance-none bg-gray-200 border-none w-full text-gray-700 p-4 leading-tight focus:outline-none"
                    type="email"
                    placeholder="Email/Phone"
                    aria-label="Enter email id"
                    @keyup="onPhoneChange"
                  />
                </div>
                <div v-if="showOTP">
                  <!-- <p class="text-red-500 mb-5 text-xs font-hairline">Please enter password</p> -->
                  <!-- Show password box -->
                  <div
                    class="mb-10 flex items-center border-b border-b-2 border-grey-500"
                    v-if="!isPhone"
                  >
                    <input
                      v-model="password"
                      name="password"
                      ref="password"
                      class="appearance-none bg-gray-200 border-none w-full text-gray-700 p-4 leading-tight focus:outline-none"
                      type="password"
                      placeholder="Password"
                      aria-label="Enter Password"
                    />
                  </div>
                  <!-- Show OTP box -->
                  <div
                    v-else
                    class="otp-container relative inline-block rounded p-2 w-32 w-12 mb-10 bg-gray-200"
                  >
                    <div
                      id="wraper1"
                      class="otp-seperator w-1 h-1 rounded absolute"
                      :class="{'wraper-hide':otp.length>0}"
                    ></div>
                    <div
                      id="wraper2"
                      class="otp-seperator w-1 h-1 rounded absolute"
                      :class="{'wraper-hide':otp.length>1}"
                    ></div>
                    <div
                      id="wraper3"
                      class="otp-seperator w-1 h-1 rounded absolute"
                      :class="{'wraper-hide':otp.length>2}"
                    ></div>
                    <div
                      id="wraper4"
                      class="otp-seperator w-1 h-1 rounded absolute"
                      :class="{'wraper-hide':otp.length>3}"
                    ></div>
                    <input
                      v-model="otp"
                      name="otp"
                      ref="otp"
                      class="outline-none pl-4 otp-content w-32 bg-transparent"
                      maxlength="4"
                      autocomplete="off"
                      @keyup="onKeyUpEvent(otp.length, $event)"
                    />
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <button
                    :disabled="loading"
                    class="text-2xl big-button outline-none text-xl w-full text-white font-bold py-2 px-4 rounded"
                  >
                    <span :class="{'loading':loading}" />
                    {{submitText}}
                  </button>
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
      fadeIn: "",
      disable: "disable",
      p: {},
      msg: null,
      uid: "",
      password: "",
      otp: "",
      showOTP: false,
      user: { email: "", password: "" }
    };
  },
  components: { Header },
  computed: {
    isPhone() {
      const phoneno = /^[+()\d-]+$/;
      if (this.uid.length >= 10 && this.uid.match(phoneno)) return true;
      else return false;
    },
    submitText() {
      // if (!this.isPhone && !this.showOTP) {
      //   return "Verify";
      // } else
      if (this.isPhone && !this.showOTP) {
        return "Verify Phone"; //Login Now
      } else if (this.isPhone && this.showOTP) {
        return "Verify OTP";
      } else if (!this.isPhone && !this.showOTP) {
        return "Verify Email"; //Login Now
      } else {
        return "Login Now";
      }
    }
  },
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
    async phoneLogin() {
      this.loading = true;
      if (!this.showOTP) {
        // When clicked 1st time
        try {
          const otp = await this.$axios.get("/users/phone/" + this.uid);
          if (otp.status == 200 || otp.status == 201) {
            this.showOTP = true;
            this.msg = "Please enter OTP sent to your Mobile";
            // this.$refs.otp.focus();
            return;
          }
        } catch (e) {
          console.log("err...", e);
        } finally {
          this.loading = false;
        }
      } else {
        try {
          this.loading = true;
          const res = await this.$store.dispatch("auth/login", {
            uid: this.uid,
            password: this.otp,
            route: this.$route.query.return
          });
        } catch (e) {
        } finally {
          this.loading = false;
        }
      }
    },
    async emailLogin() {
      if (!this.showOTP) {
        // When clicked 1st time
        this.showOTP = true;
        this.msg = "Please enter your password";
        // this.$refs.password.focus();
        return;
      } else {
        try {
          this.loading = true;
          const res = await this.$store.dispatch("auth/login", {
            uid: this.uid,
            password: this.password,
            route: this.$route.query.return
          });
          this.showOTP = true;
          // this.$refs.password.focus();
        } catch (e) {
          this.showOTP = false;
          this.err = e.toString();
          this.msg = this.err;
          // this.$refs.uid.focus();
        } finally {
          this.loading = false;
        }
      }
    },
    onKeyUpEvent(index, event) {
      const eventCode = event.which || event.keyCode;
      if (index == 4) {
        this.submit(); // Submit code
      }
    },
    onPhoneChange(e) {
      if (e.keyCode != 13) {
        this.showOTP = false;
        this.p = {};
        return;
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
.container {
  max-height: 80vh !important;
  min-height: 80vh !important;
}
</style>
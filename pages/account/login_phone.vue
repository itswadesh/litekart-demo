<template>
  <div>
    <div class="bg-gray-100">
      <div class="flex items-center justify-center h-full mx-auto">
        <div class="lg:w-1/3 xs:3/3">
          <div class="mb-6 bg-white rounded shadow-2xl border-teal border-t-12">
            <div class="p-0 text-white bg-blue-700 rounded rounded-b-none">
              <h1 class="p-3 mb-6 text-xl text-left">
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
                <div
                  class="flex items-center mb-10 border-b border-b-2 border-grey-500"
                >
                  <input
                    v-model="user.phone"
                    class="w-full p-4 leading-tight text-gray-700 bg-gray-200 border-none appearance-none focus:outline-none"
                    type="text"
                    placeholder="Phone No"
                    aria-label="Enter mobile no"
                    @keyup="onPhoneChange"
                  />
                </div>

                <p class="mb-5 text-xs font-hairline text-red-500">
                  Please enter OTP sent to mobile number
                </p>

                <div
                  class="relative inline-block w-12 w-32 p-2 mb-10 bg-gray-200 rounded otp-container"
                >
                  <div
                    id="wraper1"
                    class="absolute w-1 h-1 rounded otp-seperator"
                    :class="{ 'wraper-hide': otp.length > 0 }"
                  ></div>
                  <div
                    id="wraper2"
                    class="absolute w-1 h-1 rounded otp-seperator"
                    :class="{ 'wraper-hide': otp.length > 1 }"
                  ></div>
                  <div
                    id="wraper3"
                    class="absolute w-1 h-1 rounded otp-seperator"
                    :class="{ 'wraper-hide': otp.length > 2 }"
                  ></div>
                  <div
                    id="wraper4"
                    class="absolute w-1 h-1 rounded otp-seperator"
                    :class="{ 'wraper-hide': otp.length > 3 }"
                  ></div>
                  <input
                    v-model="otp"
                    class="w-32 pl-4 bg-transparent outline-none otp-content"
                    maxlength="4"
                    autocomplete="off"
                    @keyup="onKeyUpEvent(otp.length, $event)"
                  />
                </div>
                <div class="flex items-center justify-between">
                  <button
                    class="w-full px-4 py-2 text-xl text-2xl font-bold text-white rounded outline-none big-button hover:bg-red-200"
                  >
                    Verify Phone
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
      otp: "",
      loading: false,
      fadeIn: "",
      disable: "disable",
      p: {},
      showOTP: false,
      msg: null,
    };
  },
  components: {},
  computed: {
    user() {
      return (this.$store.state.auth || {}).user || {};
    },
  },
  methods: {
    onPhoneChange(e) {
      if (e.keyCode != 13) {
        this.showOTP = false;
        this.p = {};
        return;
      }
    },
    async submit() {
      let vm = this;
      this.err = null;
      this.msg = null;
      if (!this.user.phone || this.user.phone == "") {
        this.$store.commit("setErr", "Please enter your phone no");
        return;
      }
      if (!this.showOTP) {
        // When request OTP clicked 1st
        try {
          this.loading = true;
          const otp = await this.$axios.get(
            "api/users/phone/" + this.user.phone
          );
          if (otp.status == 200 || otp.status == 201) {
            this.showOTP = true;
            this.msg = "Please enter OTP sent to your Mobile";
            this.$refs.otp1.focus();
            return;
          }
        } catch (e) {
          this.showOTP = false;
          if (e && e.response && e.response.data) {
            this.err = e.response.data._message || e.response.data.msg;
            this.msg = this.err;
          }
          // this.$store.commit("setErr", this.err);
          return;
        } finally {
          this.loading = false;
        }
      } else {
        // To send OTP verification request 2nd
        try {
          this.loading = true;
          const password = this.p.i1 + this.p.i2 + this.p.i3 + this.p.i4;
          const res = await this.$store.dispatch("auth/login", {
            phone: this.user.phone,
            password,
          });
          if (res.token) {
            this.$store.commit("success", "Verified! Thank You.");
            let returnUrl = this.$route.query.return || "/";
            this.$router.push(returnUrl);
          }
          // this.showOTP = false;
        } catch (e) {
        } finally {
          this.loading = false;
        }
      }
    },
    getCodeBoxElement(index) {
      return document.getElementById("otp" + index);
    },
    onKeyUpEvent(index, event) {
      const eventCode = event.which || event.keyCode;
      if (index == 4) {
        this.submit(); // Submit code
      }
    },
    onFocusEvent(index) {
      // for (let item = 1; item < index; item++) {
      //   const currentElement = this.getCodeBoxElement(item);
      //   if (!currentElement.value) {
      //     currentElement.focus();
      //     break;
      //   }
      // }
    },
  },
  head() {
    return {
      title: "Login to Litekart",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "After this checkout process we will ship the item and it should be delivered within 7 working days",
        },
        {
          hid: "og:description",
          name: "Description",
          property: "og:description",
          content:
            "After this checkout process we will ship the item and it should be delivered within 7 working days",
        },

        {
          hid: "og:title",
          name: "og:title",
          property: "og:title",
          content: "Checkout with the products in your cart",
        },
        // Twitter
        {
          name: "twitter:title",
          content: "Checkout with the products in your cart",
        },
        {
          name: "twitter:description",
          content:
            "After this checkout process we will ship the item and it should be delivered within 7 working days",
        },
      ],
    };
  },
};
</script>

<style scoped>
.wraper-hide {
  visibility: hidden;
}
.border-t {
  border-bottom: 1px solid lightgray;
}
.big-button {
  background: linear-gradient(87deg, #fb6340, #da1c5f) !important;
  border-color: #fb6340;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.otp-container .otp-seperator {
  background-color: #dfe1e6;
  border: 1px solid #dfe1e6;
}
.otp-container #wraper1 {
  top: 20px;
  left: 28px;
}
.otp-container #wraper2 {
  top: 20px;
  left: 51px;
}
.otp-container #wraper3 {
  top: 20px;
  left: 76px;
}
.otp-container #wraper4 {
  top: 20px;
  left: 100px;
}
.otp-container .otp-content {
  letter-spacing: 15px;
  border: 1px solid transparent;
}
input + label {
  position: relative;
  z-index: 999;
}
</style>

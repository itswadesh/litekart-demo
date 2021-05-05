<template>
  <div class="mx-2 lg:mx-64">
    <h1 class="mt-8 text-5xl font-bold text-center mb:8 lg:mb-16">
      Sell On <span class="underline">Litekart</span>
    </h1>
    <div class="w-full mx-auto lg:w-1/2">
      <form novalidate autocomplete="off" @submit.stop.prevent="submit()">
        <Textbox v-model="company_name" label="Your Company Name" />
        <Textarea
          v-model="request_description"
          label="Your Company Description"
        />
        <Textbox v-model="first_name" label="First Name" />
        <Textbox v-model="last_name" label="Last Name" />
        <Textbox v-model="request_email" label="Your Email" />
        <Textbox v-model="request_phone" label="Phone No" />
        <Textbox v-model="request_address" label="Your Address" />
        <Textbox v-model="request_city" label="Your City" />
        <div>
          <button
            type="submit"
            :disabled="loading"
            class="flex items-center justify-center w-full py-2 text-2xl font-bold rounded outline-none h-14"
            :class="{
              'primary text-white': !loading,
              'border border-gray-400 bg-gray-300': loading,
            }"
          >
            <span v-if="!loading">Join Litekart</span>
            <img src="/loading.svg" alt="loading ..." v-else />
          </button>
        </div>
      </form>
    </div>
    <div class="mt-4 text-xs text-center">
      <p>
        By creating your account, you agree to our
        <router-link to="/terms">Terms and Conditions</router-link> &
        <router-link to="/privacy-policy">Privacy Policy </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import Textbox from "~/components/ui/Textbox";
import Textarea from "~/components/ui/Textarea";
export default {
  name: "Apply-for-vendor",
  data() {
    return {
      err: null,
      first_name: "",
      last_name: "",
      company_name: "",
      request_email: "",
      request_phone: "",
      request_url: "",
      request_address: "",
      request_description: "",
      request_city: "",
      request_country: "India",
      request_state: "Odisha",
      request_zip: "0000",
      loading: false,
      errors: {},
    };
  },
  components: { Textbox, Textarea },
  methods: {
    go(url) {
      this.$router.push(url);
    },
    async submit() {
      if (!this.company_name) {
        this.$store.commit("setErr", "Company Name is required", {
          root: true,
        });
        return;
      }
      if (!this.request_description) {
        this.$store.commit("setErr", "Please enter your business description", {
          root: true,
        });
        return;
      }
      if (!this.first_name) {
        this.$store.commit("setErr", "Please fill up first name", {
          root: true,
        });
        return;
      }
      if (!this.last_name) {
        this.$store.commit("setErr", "Please fill up last name", {
          root: true,
        });
        return;
      }
      if (!this.request_email) {
        this.$store.commit("setErr", "Please fill up email", {
          root: true,
        });
        return;
      }
      if (!this.request_phone) {
        this.$store.commit("setErr", "Please enter your phone no", {
          root: true,
        });
        return;
      }
      if (!this.request_address) {
        this.$store.commit("setErr", "Please enter your business address", {
          root: true,
        });
        return;
      }
      if (!this.request_city) {
        this.$store.commit("setErr", "Please enter your business city", {
          root: true,
        });
        return;
      }
      let requestDetails = {
        company_name: this.company_name,
        request_description: this.request_description,
        first_name: this.first_name,
        last_name: this.last_name,
        request_email: this.request_email,
        request_phone: this.request_phone,
        request_url: this.request_url,
        request_address: this.request_address,
        request_city: this.request_city,
        request_country: this.request_country,
        request_state: this.request_state,
        request_zip: this.request_zip,
      };
      try {
        let data = await this.$axios.$post(
          "api/vendors/requests",
          requestDetails
        );
        if (data.status === 200) {
          this.$store.commit(
            "success",
            "Your Request has been sent successfully!"
          ); // Should be at end because it returns false
          this.go("/");
        } else {
          // Could not do commit('setErr') because it throws back error
          this.$store.commit("setErr", "Something went wrong!");

          // this.$store.commit("setErr", "Removed from wishlist"); // Should be at end because it returns false
        }
      } catch (err) {
        this.$store.commit("setErr", "Something went wrong!");
        // this.err(err);
      }
    },
  },
  head() {
    return {
      title: "Apply for vendor account",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Apply for vendor account on " +
            this.$store.state.settings.shopName,
        },
        {
          hid: "og:description",
          name: "Description",
          property: "og:description",
          content:
            "Apply for vendor account on " +
            this.$store.state.settings.shopName,
        },
        {
          hid: "og:title",
          name: "og:title",
          property: "og:title",
          content: "Apply for vendor account",
        },
        // Twitter
        {
          name: "twitter:title",
          content: "Create a new account",
        },
        {
          name: "twitter:description",
          content: "Signup for " + this.$store.state.settings.shopName,
        },
      ],
    };
  },
  layout: "blank",
};
</script>

<style scoped>
.apply_for_vendor_heading {
  text-align: center;
}
.input_info {
  text-align: left;
  margin: 5px 0;
  font-size: 14px;
  color: #999;
}
.input_err {
  text-align: left;
  margin: 5px 0;
  font-size: 14px;
  color: red;
}
.login .form form {
  text-align: left;
}

.login .form form div {
  max-width: 380px;
  margin: 12px 50px;
  @media screen and (max-width: 800px) {
    margin: 12px 0;
  }
}
.login .form form .login-button {
  margin: 15px 0px;
}
</style>

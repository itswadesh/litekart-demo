<template>
  <div class="bg">
    <h1 class="text-5xl mt-8 mb:8 lg:mb-16 text-center font-bold">
      <span class="underline">Contact</span>
      Us
    </h1>
    <div class="flex flex-col justify-center">
      <div class="flex flex-wrap px-2 lg:px-16 xl:px-48 lg:mb-12">
        <div class="my-4 py-8 bg-white lg:bg-transparent shadow lg:shadow-none
        rounded lg:rounded-none w-full lg:w-1/2 pr-0 lg:pr-12 mb-8">
          <form
            novalidate
            @submit.stop.prevent="submit()"
            class="px-2 lg:px-24 flex flex-col leading-loose"
          >
            <Textbox
              v-model="email"
              label="Your email"
            />
            <Textarea
              v-model="message"
              label="Message"
            />
            <button
              type="submit"
              :disabled="loading"
              class="flex items-center justify-center h-14 text-2xl outline-none w-full font-bold py-2 rounded"
              :class="{'primary text-white':!loading,'border border-gray-400 bg-gray-300':loading}"
            >
              <div v-if="loading">
                <img
                  src="/loading.svg"
                  :class="{'loading':loading}"
                  alt=""
                />
              </div>
              <span v-else>Send</span>
            </button>
          </form>
        </div>
        <!-- <div class="w-full lg:w-1/2"> -->
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Textbox from "~/components/ui/Textbox";
import Textarea from "~/components/ui/Textarea";
import { CDN, HOST } from "~/config";
export default {
  data() {
    return {
      loading: false,
      disable: "disable",
      msg: null,
      err: null,
      email: "",
      message: ""
    };
  },
  components: { Textbox, Textarea },
  computed: {
    isEmail() {
      if (this.email.includes("@")) return true;
      else return false;
    }
  },
  methods: {
    async submit() {
      if (!this.email || this.email == "") {
        this.$store.commit("setErr", "Please enter your email/phone no");
        return;
      }
      if (!this.isEmail) {
        this.$store.commit("setErr", "Entered email is not valid");
        return;
      }
      try {
        this.loading = true;
        const res = this.$axios.$post("/api/email/contactus", {
          from: this.email,
          subject: "Conact from Litekart Demo",
          text: this.message
        });
        this.msg = "Thank you for message. We will get back to you soon";
      } catch (e) {
        this.err = e;
        console.log("err...", e.toString());
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.bg {
  background-image: url(/img/contact.png);
  background-position: 80% 0%;
  background-repeat: no-repeat;
}
</style>
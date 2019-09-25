<template>
  <form
    novalidate
    autocomplete="off"
    @submit.stop.prevent="submit(q)"
  >
    <div class="search_fix"></div>
    <div class="absolute">
      <i
        class="fa fa-search ml-2 mt-3 text-gray-500"
        aria-hidden="true"
      ></i>
    </div>
    <input
      type="text"
      v-model="q"
      class="w-full px-10 bg-purple-white pr-4 shadow rounded border-0 h-10"
      placeholder="Search for products,brands and more"
      name="search"
      @keyup="submit(q)"
    >
  </form>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
import { typingTimeout } from "~/config";
export default {
  mixins: [clickaway],
  data() {
    return {
      q: "",
      data: [],
      typingTimeout
    };
  },
  methods: {
    submit(q) {
      this.$router.push("/search?q=" + q);
    }
  },
  watch: {
    search: {
      immediate: false,
      handler(value, oldValue) {
        if (!oldValue) return; // Do not trigger on page load
        clearTimeout(this.typingTimer);
        let vm = this;
        this.typingTimer = setTimeout(function() {
          if (!value || value == "undefined") value = ""; // When clear button clicked
          vm.searchString = value;
          vm.$router.push("/search?q=" + value);
        }, vm.typingTimeout);
      }
    },
    "$route.query.q": {
      immediate: true,
      handler(value) {
        let pathName = null;
        if (this.$route.name) pathName = this.$route.name.substr(0, 8);
        if (pathName === "category") return;
        if (!value || value == "undefined") value = "";
        if (value == "") return;
        if (this.q == "") this.q = value;
      }
    }
  }
};
</script>

<style scoped>
img {
  margin-right: 1rem;
}
</style>
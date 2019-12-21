<template>
  <form
    novalidate
    autocomplete="off"
    @submit.stop.prevent="submit(q)"
    @click="showInstantSearch=true"
    v-on-clickaway="onClose"
  >
    <div
      class="search_fix"
      @click="showInstantSearch=false"
    ></div>
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
      @keyup="search(q)"
    />
    <div
      class="search_options"
      v-if="showInstantSearch"
    >
      <ul v-if="data.length>0">
        <li
          v-for="i in data"
          :key="i._id"
        >
          <div
            @click="go(i._source.name)"
            class="current_item"
          >
            <span>
              <img
                :src="i._source.imgUrls[0]"
                alt="..."
              />
            </span>
            {{i._source.name | truncate(50)}}
            <span class="category_tag">in t-shirt</span>
          </div>
        </li>
      </ul>
      <ul v-else>
        <li>
          <span></span>No match found!
        </li>
      </ul>
    </div>
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
      typingTimeout,
      showInstantSearch: false
    };
  },
  created() {
    this.search("");
  },
  methods: {
    go(q) {
      this.$router.push(`/search?q=${q}`);
      this.showInstantSearch = false;
    },
    onClose() {
      this.showInstantSearch = false;
    },
    async search(q) {
      const res = await this.$axios.$get("api/products/autocomplete", {
        params: { q }
      });
      this.data = res.data;
    },
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
        if (!value || value == "undefined") value = "";
        if (value == "") return;
        if (this.search == "") this.search = value;
      }
    }
  }
};
</script>

<style scoped>
img {
  margin-right: 1rem;
}
.search {
  position: relative;
  margin-top: 22px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.search_box {
  width: 100%;
  background-color: #fff;
  line-height: 36px;
  padding: 0 50px 0 20px;
  color: #373736;
  font-size: 14px;
  font-weight: 200;
  letter-spacing: 0.1px;
  border: none;
}

.search_submit {
  position: absolute;
  top: 8px;
  right: 15px;
  width: 20px;
  height: 20px;
  background: url(/search_icon.png);
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
}

.search_options {
  /* display: none; */
  position: absolute;
  top: 35px;
  left: 0;
  background-color: #fff;
  padding: 15px 20px;
  z-index: 999999;
  width: 100%;
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
}
.search_options .search_options.active_click {
  display: block;
}
.search_options ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
.search_options ul li {
  width: 100%;
  padding: 8px 0 15px 0;
  float: left;
}
.search_options ul li span {
  float: left;
  margin-right: 8px;
  width: 50px;
}
.search_options ul li span.category_tag {
  float: left;
  width: 84%;
  margin-right: 0px;
  margin-top: 5px;
  color: #be393f;
}
.search_options ul li a.current_item:after {
  display: none;
}
.search_options ul li a.current_item {
  padding-left: 0;
  margin-bottom: 8px;
}
.search_options ul li a {
  position: relative;
  font-size: 14px;
  font-weight: normal;
  color: #000;
  display: block;
  width: 100%;
  float: left;
  padding-left: 25px;
}
.search_options ul li:last-child {
  padding-bottom: 0;
}
.search_options ul li a:after {
  position: absolute;
  content: "";
  width: 15px;
  height: 14px;
  background-image: url(/dropdown_search_icon.png);
  background-repeat: no-repeat;
  top: 0;
  left: 0;
}
.search_options ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
</style>
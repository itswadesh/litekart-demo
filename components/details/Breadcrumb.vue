<template>
  <div class="flex flex-wrap p-3">
    <div class="left-0 text-xs text-left text-gray-500">
      <nuxt-link to="/">Home</nuxt-link>
      <span
        v-for="(b,ix) in slugs"
        :key="ix"
        v-if="b && b!=' '"
      >
        <i
          class="fa fa-angle-right"
          aria-hidden="true"
        ></i>
        <nuxt-link :to="b.trim()+'?page=1'">{{names[ix].trim()}}</nuxt-link>
      </span>
    </div>
    <!-- <div class="right-0 w-3/12 pr-3 text-right">
      <i class="pr-2 text-gray-500 fa fa-share" aria-hidden="true"></i>Share
    </div>-->
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: ["namePath", "slugPath"],
  data() {
    return {};
  },
  computed: {
    names() {
      return this.namePath && this.namePath.split("/");
    },
    slugs() {
      return this.slugPath && this.slugPath.split("/");
    }
  },
  created() {}
};
</script>

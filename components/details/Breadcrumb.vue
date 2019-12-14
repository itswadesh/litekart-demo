<template>
  <div class="flex flex-wrap p-3">
    <div class="left-0 text-left text-xs text-gray-500">
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
    <!-- <div class="w-3/12 text-right right-0 pr-3">
      <i class="fa fa-share pr-2 text-gray-500" aria-hidden="true"></i>Share
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

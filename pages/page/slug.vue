<template>
  <div class="container">
    <div class="content_container">
      <div class="content_card">
        <div class="content_title">
          <h3>{{page.name}}</h3>
        </div>
        <div class="content_text">
          <Shortcode :content="page.content"> </Shortcode>
          <center v-if="err">{{err}}</center>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped type="scss">
/* @import "@/assets/styles/Modules/_content_pages.scss"; */
</style>
<script>
import { TITLE, DESCRIPTION, KEYWORDS } from "~/config";
const Shortcode = () => import("~/components/Shortcode");

export default {
  layout: "bottomNavigationWithFooter",
  async asyncData({ params, route, $axios }) {
    const slug = route.path.substr(1);
    let page = {},
      err = null;
    try {
      if (slug) {
        page = await $axios.$get("api/pages/public/" + slug);
      }
      err = null;
    } catch (e) {
      page = {};
      if (e && e.response && e.response.data) {
        err = e.response.data;
      } else if (e && e.response) {
        err = e.response;
      } else {
        err = e;
      }
    }
    return { page, err };
  },
  components: { Shortcode },
  head() {
    return {
      title: (this.page && this.page.title) || TITLE,
      meta: [
        {
          hid: "description",
          name: "description",
          content: (this.page && this.page.metaDescription) || DESCRIPTION
        },
        {
          hid: "og:description",
          name: "Description",
          property: "og:description",
          content: (this.page && this.page.metaDescription) || DESCRIPTION
        },
        {
          hid: "keywords",
          name: "Keywords",
          property: "keywords",
          content: (this.page && this.page.metaKeywords) || KEYWORDS
        },
        {
          hid: "og:title",
          name: "og:title",
          property: "og:title",
          content: (this.page && this.page.metaTitle) || TITLE
        },
        // Twitter
        {
          name: "twitter:title",
          content: (this.page && this.page.metaTitle) || TITLE
        },
        {
          name: "twitter:description",
          content: (this.page && this.page.metaDescription) || DESCRIPTION
        }
      ]
    };
  }
};
</script>


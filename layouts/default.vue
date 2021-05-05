<template>
  <div style="min-height:71.8vh" class="antialiased ">
    <Header />
    <nuxt />
    <Footer />
    <BackToTopDark />
  </div>
</template>
<script>
import { BackToTopDark } from "~/components/ui";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default {
  components: { Header, Footer, BackToTopDark },
};
</script>

<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import AccountMenu from "~/components/AccountMenu";
export default {
  components: { Header, Footer, AccountMenu }
};
</script>

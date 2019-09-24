<template>
  <div>
    <nuxt />
    <BackToTopDark />
  </div>
</template>
<script>
import { BackToTopDark } from "~/components/ui";

export default {
  components: { BackToTopDark }
};
</script>
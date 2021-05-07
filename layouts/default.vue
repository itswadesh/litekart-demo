<template>
  <div style="min-height:71.8vh" class="antialiased ">
    <Header />
    <nuxt  class="sm:mt-16 pt-0.5 mt-32" />
    <Footer />
    <BackToTopDark />
  </div>
</template>
<script>
import { BackToTopDark } from '~/components/ui'
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: { Header, Footer, BackToTopDark }
}
</script>

<template>
  <div style="min-height:71.8vh" class="antialiased bg-gray-100">
    <Header />
    <nuxt class="lg:pt-2 mt-14 sm:mt-16" />
    <Footer  />
    <BackToTopDark class="mb-12" />
    <StickyFooter />
  </div>
</template>

<script>
import StickyFooter from '~/components/StickyFooter'
import { BackToTopDark } from '~/components/ui'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
export default {
  components: { Header, Footer, BackToTopDark, StickyFooter}
}
</script>

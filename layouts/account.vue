<template>
  <div class="bg-gray-100 ">
    <Header />
    <div class="flex flex-row px-2 pb-5 mt-2 antialiased sm:mt-5 md:mt-8 sm:px-5 lg:container lg:mx-auto ">
      <AccountMenu class="hidden w-full md:block md:w-64" />
      <nuxt class="w-full md:ml-10 md:w-3/4 lg:w-4/5" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import AccountMenu from '~/components/AccountMenu'
export default {
  components: { Header, Footer, AccountMenu }
}
</script>

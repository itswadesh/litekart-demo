<template>
  <div
    v-if="$store.state.settings.banners"
    class="flex flex-wrap"
  >
    <!-- Hero -->
    <nuxt-link
      v-if="$store.state.settings.banners.hero"
      :to="$store.state.settings.banners.hero.link || '/search'"
      class="lg:w-1/4 shadow xs:w-full"
    >
      <img
        v-lazy="$store.state.settings.CDN_URL+$store.state.settings.banners.hero.img"
        alt=""
        class="w-full object-cover object-center"
      />
    </nuxt-link>
    <!-- Hero1 -->
    <nuxt-link
      v-if="$store.state.settings.banners.hero1"
      :to="$store.state.settings.banners.hero1.link || '/search'"
      class="lg:w-1/4 shadow xs:w-full"
    >
      <img
        v-lazy="$store.state.settings.CDN_URL+$store.state.settings.banners.hero1.img"
        alt=""
        class="w-full object-cover object-center"
      />
    </nuxt-link>
    <!-- Hero2 -->
    <nuxt-link
      v-if="$store.state.settings.banners.hero2"
      :to="$store.state.settings.banners.hero2.link || '/search'"
      class="lg:w-1/4 shadow xs:w-full"
    >
      <img
        v-lazy="$store.state.settings.CDN_URL+$store.state.settings.banners.hero2.img"
        alt=""
        class="w-full object-cover object-center"
      />
    </nuxt-link>
    <!-- Hero3 -->
    <nuxt-link
      v-if="$store.state.settings.banners.hero3"
      :to="$store.state.settings.banners.hero3.link || '/search'"
      class="lg:w-1/4 shadow xs:w-full"
    >
      <img
        v-lazy="$store.state.settings.CDN_URL+$store.state.settings.banners.hero3.img"
        alt=""
        class="w-full object-cover object-center"
      />
    </nuxt-link>
  </div>
</template>
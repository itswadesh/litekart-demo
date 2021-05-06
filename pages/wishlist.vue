<template>
  <div>
    <div class="flex flex-wrap justify-between">
      <div class="w-full p-2 text-lg font-semibold text-center">
        My Wishlist
        <span class="font-hairline" v-if="wishlist.length > 0"
          >{{ wishlist.length }} item
          <span v-if="wishlist.length > 1">s</span></span
        >
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full mx-32 text-center " v-if="wishlist.length == 0">
        <img class="w-1/2 containerr" src="/empty.png" alt="" />
        <h1>Wishlist is empty</h1>
        <br />
        <nuxt-link
          to="/"
          class="w-full p-3 text-lg font-bold text-white rounded primary"
          >Add some items</nuxt-link
        >
      </div>
      <div
        v-else
        class="flex justify-between w-1/2 lg:w-1/4 xl:w-1/5"
        v-for="w in wishlist"
        :key="w._id"
      >
        <div class="relative m-3 shadow">
          <nuxt-link :to="`${w.product.slug}?id=${w.product._id}`">
            <img
              class="object-cover w-full h-48"
              :src="$store.state.settings.CDN_URL + w.product.img[0]"
              alt=""
            />
          </nuxt-link>
          <button>
            <img
              @click="remove(w._id)"
              src="/close-img.png"
              alt="x"
              class="absolute top-0 right-0 w-4 mt-2 mr-2"
            />
          </button>
          <div class="px-2 leading-loose">
            <nuxt-link :to="`${w.product.slug}?id=${w.product._id}`">
              <p class="text-sm font-hairline text-black">
                {{ w.product.name | truncate(50) }}
              </p>
            </nuxt-link>
            <div class="mb-2 text-xs text-gray-500">
              <span class="mt-2 text-2xl font-bold text-black">{{
                w.variant.price | currency
              }}</span>
              <span class="line-through">{{ w.variant.mrp | currency }}</span>
              <span class>|</span>
              <span class="font-hairline text-green-500"
                >{{
                  Math.round(
                    ((w.variant.mrp - w.variant.price) * 100) / w.variant.mrp
                  )
                }}% OFF</span
              >
            </div>
          </div>
          <div
            class="text-center border-t border-gray-300"
            @click="
              addToBag({ pid: w.product._id, vid: w.variant._id, qty: 1 })
            "
          >
            <button class="py-4 text-sm font-bold text-primary">
              MOVE TO BAG
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  data() {
    return {
      wishlist: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    ...mapActions({ addToCart: 'cart/addToCart' }),
    async getData() {
      try {
        const w = await this.$axios.$get('api/wishlists/my')
        this.wishlist = w.data
      } catch (e) {
        this.wishlist = []
      }
    },
    addToBag(obj) {
      this.addToCart(obj)
      this.$store.commit('success', 'Moved to cart')
    },
    async remove(id) {
      try {
        await this.$axios.$delete(`api/wishlists/my/${id}`)
        this.getData()
      } catch (err) {
        console.log('er......', err)
      }
    }
  }
}
</script>

<style scoped>
.hr-line {
  border-bottom: 1px solid lightgray;
}
.fa-truck {
  transform: scaleX(-1);
}
.bb {
  border-bottom: 1px dashed lightgray;
}
.fa-truck,
.fa-undo,
.fa-shield {
  font-size: 1.5rem;
}
</style>

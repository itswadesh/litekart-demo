<template>
  <div class="w-full h-screen bg-white shadow md:h-full">
    <div class="flex items-center justify-center p-5 text-xl font-bold text-center">
      <div class="mx-auto text-2xl font-bold">
       <div class="flex flex-row md:hidden">
          <i class="mt-0.5 mr-2 fa fa-arrow-left"
            @click="$router.push('/my/')"
            aria-hidden="true"></i>
          <div class=""> Orders </div>
       </div>
       <div class="hidden text-center md:flex">Orders </div>
      </div>
    </div>
    <nuxt-link :to="`/my/orders/${o._id}`" v-for="o in orders" :key="o._id">
      <div class="w-full my-4 bg-white rounded shadow hover:shadow-xl">
        <div class="p-3 bg-gray-100 rounded">
          <h1>Order # {{ o.orderNo }}</h1>
          <p class="text-gray-800">
            Date: <span class="text-xs"> {{ o.createdAt | date }}</span>
          </p>
        </div>
        <hr />
        <div
          v-for="(i, ix) in o.items"
          :key="i._id"
          class="flex flex-wrap justify-between p-3"
          :class="{ 'border-t': ix != 0 }"
        >
          <div class="flex items-center">
            <div>
              <img
                :src="$store.state.settings.CDN_URL + i.img[0]"
                class="w-12 h-12 mr-2 bg-blue-500 rounded-full"
                alt=""
              />
            </div>
            <div>
              <div class="text-sm font-semibold">{{ i.name }}</div>
              <div class="text-xs text-gray-500">
                {{ i.qty }} * {{ i.price | currency }}
              </div>
            </div>
          </div>
          <!-- <div class="p-2 ml-3 shadow">
          <img
            :src="i.img"
            class="w-12 h-12"
            alt="cart"
          />
        </div> -->
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'account',
  async asyncData({ params, query, route, redirect, $axios, store }) {
    let orders = [],
      err = null
    if (store.getters['cart/getTotal'] <= 0) {
      redirect('/')
    }
    try {
      const o = await $axios.$get(`api/orders/my`)
      orders = o.data
      err = null
    } catch (e) {
      orders = []
      if (e && e.response && e.response.data) {
        err = e.response.data
      } else if (e && e.response) {
        err = e.response
      } else {
        err = e
      }
      console.log('err...', `${err}`)
    }
    return { orders }
  }
}
</script>

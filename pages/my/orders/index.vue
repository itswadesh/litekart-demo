<template>
  <div class="lg:w-2/4 mt-0 lg:mt-10 lg:pr-20 xs:w-full lg:px-10 px-2 headings">
    <div class="text-2xl font-bold p-6 text-center lg:text-left">Orders</div>
    <nuxt-link
      :to="`/my/orders/${o._id}`"
      v-for="o in orders"
      :key="o._id"
    >
      <div
        v-for="i in o.items"
        :key="i._id"
        class="bg-white shadow rounded flex flex-wrap py-3 px-8 justify-between hover:shadow-xl"
      >
        <div class="flex items-center">
          <div>
            <img
              :src="i.img"
              class="rounded-full p-2 bg-blue-500 mx-2 w-12 h-12"
              alt=""
            />
          </div>
          <div>
            <div class="text-sm font-semibold">{{i.name | truncate(30)}}</div>
            <div class="text-gray-500 text-xs">{{i.qty}} item</div>
          </div>
        </div>
        <!-- <div class="p-2 shadow ml-3">
          <img
            :src="i.img"
            class="w-12 h-12"
            alt="cart"
          />
        </div> -->
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  layout: "account",
  async asyncData({ params, query, route, redirect, $axios, store }) {
    let orders = [],
      err = null;
    if (store.getters["cart/getTotal"] <= 0) {
      redirect("/");
    }
    try {
      const o = await $axios.$get(`api/orders/my`);
      orders = o.data;
      err = null;
    } catch (e) {
      orders = [];
      if (e && e.response && e.response.data) {
        err = e.response.data;
      } else if (e && e.response) {
        err = e.response;
      } else {
        err = e;
      }
      console.log("err...", `${err}`);
    }
    return { orders };
  }
};
</script>

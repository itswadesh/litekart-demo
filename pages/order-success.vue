<template>
  <div>
    <div v-if="order" class="flex flex-wrap justify-start">
      <div class="lg:w-1/4 xs:w-0"></div>
      <div class="px-2 mt-10 xs:w-full lg:w-1/3">
        <div class="mb-2 text-xl font-bold text-gray-700">All done</div>
        <div>
          <img
            alt=""
            src="/order-success.png"
            class="object-cover mb-2 rounded"
          />
        </div>
        <div class="text-sm font-hairline">
          Your Order number is:
          <span class="font-semibold">{{ order.orderNo }}</span>
        </div>
        <div
          class="flex justify-between pt-5 pb-5"
          v-for="i in order.items"
          :key="i._id"
        >
          <div class="left-0 lg:w-1/5 xs:w-3/12">
            <div>
              <img
                alt=""
                class="lg:rounded xs:rounded-b-none"
                :src="$store.state.settings.CDN_URL + i.img[0]"
              />
            </div>
          </div>
          <div class="right-0 text-sm lg:w-4/5 xs:9/12">
            <div class="pl-4 font-hairline">
              <p class="text-black">
                <a href="#">{{ i.name }}</a>
              </p>
              <p class="text-gray-500"><span>Size:</span>{{ i.size }}</p>
              <p class="relative mb-2">
                <span class="mb-2 ml-2 text-lg font-bold text-black">{{
                  i.price | currency
                }}</span>
                <span class="ml-2 text-gray-300 line-through">{{
                  i.mrp | currency
                }}</span>
              </p>
              <div class="flex justify-between">
                <div class="left-0 w-1/2">
                  <div class="relative inline-block w-16">
                    <div
                      class="block w-full p-1 text-xs font-hairline text-center text-black bg-gray-200 rounded appearance-none"
                    >
                      Qty {{ i.qty }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full p-2 mt-2 lg:w-1/4 lg:mt-10 lg:pr-20 lg:p-10">
        <!-- <div class="relative flex flex-wrap justify-between w-full pb-2">
          <img
            alt="banner"
            src="/order-success-side.png"
            class="object-cover w-full rounded lg:w-64 lg:h-56"
          />
        </div> -->
        <div class="right-0 pb-3 4/5 bb">
          <div>
            <p class="mt-4 text-sm font-normal text-black">Price Summary</p>
          </div>
        </div>
        <div
          class="right-0 pt-2 pb-10 border-b border-gray-300 4/5"
          v-if="order.amount"
        >
          <div class="flex justify-between mt-2 text-sm">
            <div class="w-1/2 font-bold text-left">Total</div>
            <div class="w-1/2 ml-2 font-bold text-right text-black-400">
              {{ order.amount.total | currency }}
            </div>
          </div>
          <div class="flex justify-between mt-2 text-xs">
            <div class="w-10/12 text-left">
              Pay by {{ order.payment.method }}
            </div>
            <div class="text-right text-black-400">
              {{ order.amount.total | currency }}
            </div>
          </div>
        </div>
        <div v-if="order && order.address">
          <div class="py-3 font-semibold text-gray-700">Shipping address</div>
          <div class="text-sm">
            <span class="font-bold text-gray-700"
              >{{ order.address.firstName }} {{ order.address.lastName }}</span
            >
            <br />{{ order.address.phone }}
            <div class="pt-2">
              {{ order.address.address }}
              {{ order.address.city }}
              {{ order.address.state }}
              {{ order.address.zip }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, query, route, redirect, $axios, store }) {
    let order = null,
      err = null;
    if (store.getters["cart/getTotal"] <= 0) {
      redirect("/");
    }
    try {
      order = await $axios.$get(`api/orders/public/${route.query.id}`);
      err = null;
    } catch (e) {
      order = null;
      if (e && e.response && e.response.data) {
        err = e.response.data;
      } else if (e && e.response) {
        err = e.response;
      } else {
        err = e;
      }
      console.log("err...", `${err}`);
    }
    return { order };
  },
};
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
  font-size: 2rem;
}
</style>

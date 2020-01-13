<template>
  <div>
    <div
      v-if="order"
      class="flex flex-wrap justify-start"
    >
      <div class="lg:w-1/4 xs:w-0"></div>
      <div class="xs:w-full lg:w-1/3 mt-10 px-2">
        <div class="text-gray-700 font-bold text-xl mb-2">All done</div>
        <div>
          <img
            alt=""
            src="/order-success.png"
            class="mb-2 object-cover rounded"
          />
        </div>
        <div class="font-hairline text-sm">
          Your Order number is:
          <span class="font-semibold">{{order.orderNo}}</span>
        </div>
        <div
          class="flex justify-between pt-5 pb-5"
          v-for="i in order.items"
          :key="i._id"
        >
          <div class="lg:w-1/5 left-0 xs:w-3/12">
            <div>
              <img
                alt=""
                class="lg:rounded xs:rounded-b-none"
                :src="$store.state.settings.CDN_URL+i.img[0]"
              />
            </div>
          </div>
          <div class="lg:w-4/5 right-0 text-sm xs:9/12">
            <div class="pl-4 font-hairline">
              <p class="text-black">
                <a href="#">{{i.name}}</a>
              </p>
              <p class="text-gray-500">
                <span>Size:</span>{{i.size}}
              </p>
              <p class="relative mb-2">
                <span class="text-black font-bold mb-2 text-lg ml-2">{{i.price | currency}}</span>
                <span class="text-gray-300 line-through ml-2">{{i.mrp | currency}}</span>
              </p>
              <div class="flex justify-between">
                <div class="w-1/2 left-0">
                  <div class="inline-block relative w-16">
                    <div class="text-xs font-hairline text-black p-1 text-center block appearance-none w-full bg-gray-200 rounded">Qty {{i.qty}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:w-1/4 mt-2 lg:mt-10 lg:pr-20 w-full lg:p-10 p-2">
        <!-- <div class="w-full flex flex-wrap justify-between pb-2 relative">
          <img
            alt="banner"
            src="/order-success-side.png"
            class="w-full lg:w-64 lg:h-56 object-cover rounded"
          />
        </div> -->
        <div class="4/5 right-0 pb-3 bb">
          <div>
            <p class="text-black mt-4 font-normal text-sm">Price Summary</p>
          </div>
        </div>
        <div
          class="4/5 right-0 pb-10 pt-2 border-b border-gray-300"
          v-if="order.amount"
        >
          <div class="flex justify-between mt-2 text-sm">
            <div class="w-1/2 font-bold text-left">Total</div>
            <div class="ml-2 w-1/2 font-bold text-black-400 text-right">{{order.amount.total | currency}}</div>
          </div>
          <div class="flex justify-between mt-2 text-xs">
            <div class="w-10/12 text-left">Pay by {{order.payment.method}}</div>
            <div class="ml-2 text-black-400 text-right">{{order.amount.total | currency}}</div>
          </div>
        </div>
        <div v-if="order && order.address">
          <div class="py-3 font-semibold text-gray-700">Shipping address</div>
          <div class="text-sm">
            <span class="font-bold text-gray-700">{{order.address.firstName}} {{order.address.lastName}}</span>
            <br />{{order.address.phone}}
            <div class="pt-2">
              {{order.address.address}}
              {{order.address.city}}
              {{order.address.state}}
              {{order.address.zip}}
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
  }
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
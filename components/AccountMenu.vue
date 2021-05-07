<template>
  <div
    class="w-full leading-loose text-center bg-white rounded shadow"
  >
    <div class="w-full py-8 border-b border-gray-200">
      <div
        class="flex items-center justify-center w-20 h-20 p-2 mx-auto text-4xl text-gray-600 bg-gray-200 rounded-full "
        >{{ user.firstName | first }}
      </div>
      <div class="my-3 text-lg">{{ user.firstName }}</div>
      <div class="w-full mx-auto text-sm text-center text-gray-500 ">{{ user.email }}</div>
    </div>
    <ul>
      <li>
        <nuxt-link
          to="/my/orders"
          active-class="text-pink-500"
          class="flex flex-wrap w-full text-lg"
        >
          <div class="w-1/5">
            <i class="p-5 fa fa-archive" aria-hidden="true"></i>
          </div>
          <div class="w-4/5 p-3 text-left">Orders</div>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/my/address"
          active-class="text-pink-500"
          class="flex flex-wrap w-full text-lg"
        >
          <div class="w-1/5">
            <i class="p-5 fa fa-address-card" aria-hidden="true"></i>
          </div>
          <div class="w-4/5 p-3 text-left">Address</div>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/my/profile"
          active-class="text-pink-500"
          class="flex flex-wrap w-full text-lg"
        >
          <div class="w-1/5">
            <i class="p-5 fa fa-user-circle" aria-hidden="true"></i>
          </div>
          <div class="w-4/5 p-3 text-left">Profile Details</div>
        </nuxt-link>
      </li>

      <!-- <li>
        <nuxt-link to="/my/orders/details" class="flex flex-wrap w-full text-lg">
          <div class="w-1/5">
            <i class="p-5 fa fa-heart-o" aria-hidden="true"></i>
          </div>
          <div class="w-4/5 p-3 text-left">Order Details</div>
        </nuxt-link>
      </li> -->
      <li>
        <nuxt-link
          to="/my/password"
          active-class="text-pink-500"
          class="flex flex-wrap w-full text-lg"
        >
          <div class="w-1/5">
            <i class="p-5 fa fa-key" aria-hidden="true"></i>
          </div>
          <div class="w-4/5 p-3 text-left">Password</div>
        </nuxt-link>
      </li>
      <li>
        <a href="#" class="flex flex-wrap w-full text-lg">
          <div class="w-1/5">
            <i class="p-5 fa fa-credit-card" aria-hidden="true"></i>
          </div>
          <div class="w-4/5 p-3 text-left">Credits</div>
        </a>
      </li>
      <li>
        <div @click="logout" class="flex flex-wrap w-full text-lg logout">
          <div class="w-1/5">
            <i class="p-5 fa fa-power-off" aria-hidden="true"></i>
          </div>
          <div class="w-4/5 p-3 text-left">Sign Out</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: true
    }
  },
  computed: {
    user() {
      return (this.$store.state.auth || {}).user || {}
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('auth/logout')
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
ul > li:hover {
  background-color: #f6f6f6;
}
.logout {
  cursor: pointer;
}
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

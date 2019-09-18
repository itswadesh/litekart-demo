<template>
  <div>
    <Header />
    <div class="flex flex-wrap justify-between">
      <div class="1/12"></div>
      <div class="xs:w-full lg:w-3/12 mt-2 p-3">
        <div class="w-full shadow p-2 flex flex-wrap">
          <div class="w-1/4">
            <img src="/avatar.png" class="w-12" />
          </div>
          <div class="w-3/4">
            <div class="text-xs">
              Hello,
              <br />
              <span class="captalize font-semibold text-black text-sm">KOHN WICKY</span>
            </div>
          </div>
        </div>

        <div class="w-full shadow p-2 mt-3">
          <div class="text-gray-600 flex-wrap flex font-semibold py-3">
            <img src="/wishlist-order.png" />
            <span class="w-9/12 pt-2 text-sm pl-3">MY ORDERS</span>
            <i class="fa fa-chevron-right mt-4" aria-hidden="true"></i>
          </div>

          <div class="text-gray-600 flex-wrap flex font-semibold py-3">
            <img src="/wishlist-account.png" />
            <span class="w-9/12 pt-2 text-sm pl-3">ACCOUNT SETTINGS</span>
            <div class="px-12 ml-1 font-hairline">
              <a href class="w-full self-center leading-loose">Profile Information</a>
              <a href class="w-full self-center leading-loose">Manage Addresses</a>
              <a href class="w-full self-center leading-loose">Pan Card Information</a>
            </div>
          </div>

          <div class="text-gray-600 flex-wrap flex font-semibold py-3">
            <img src="/wishlist-payment.png" />
            <span class="w-9/12 pt-2 text-sm pl-3">PAYMENTS</span>
            <div class="w-9/12 px-12 ml-1 font-hairline">
              <a href class="w-full self-center leading-loose">PhonePe Wallet</a>
              <a href class="w-full self-center leading-loose">Gift Cards</a>
              <a href class="w-full self-center leading-loose">Saved Cards</a>
            </div>
          </div>

          <div class="text-gray-600 flex-wrap flex font-semibold py-3">
            <img src="/wishlist-order.png" />
            <span class="w-9/12 pt-2 text-sm pl-3">MY CHATS</span>
            <i class="fa fa-chevron-right mt-4" aria-hidden="true"></i>
          </div>

          <div class="text-gray-600 flex-wrap flex font-semibold py-3">
            <img src="/wishlist-stuff.png" />
            <span class="w-9/12 pt-2 text-sm pl-3">MY STUFF</span>
            <div class="w-11/12 px-12 ml-1 font-hairline">
              <ul>
                <li>
                  <a href class="w-full self-center leading-loose">My Rewards</a>
                </li>
                <li>
                  <a href class="w-full self-center leading-loose">My Reviews & Ratings</a>
                </li>
                <li>
                  <a href class="w-full self-center leading-loose">All Notifications</a>
                </li>
                <li>
                  <a href class="w-full self-center leading-loose">Wishlist</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="text-gray-600 flex-wrap flex font-semibold py-3">
            <img src="/wishlist-logout.png" />
            <span class="w-9/12 pt-2 text-sm pl-3">LOGOUT</span>
          </div>
        </div>
        <div class="w-full shadow p-2 text-sm mt-4">
          <p>Frequently Visited</p>
          <p class="text-gray-600 text-xs">
            <a href class>Change Password</a>
            <a href class="mx-3">Track Order</a>
            <a href class="mx-3">Help Center</a>
          </p>
        </div>
      </div>
      <div class="lg:w-4/6 shadow mt-2 xs:w-full">
        <div class="border-b border-gray-300">
          <div class="w-full p-2 font-semibold text-lg">My Wishlist(1)</div>
        </div>
        <div class="p-2 flex flex-wrap border-b border-gray-300">
          <img class="w-1/4 h-32 object-cover" src="/cart-product.jpg" />
          <div class="w-4/6 px-2">
            <p
              class="xs:w-full lg:w-9/12 left-0 text-left text-lg text-black"
            >Fitbit Inspire HR (Black Strap, Size : Regular)</p>
            <p class="mt-2">
              <a href class="w-9/12 left-0 text-left text-lg text-black mt-2">
                <span class="text-white text-xs p-1 bg-green-700 rounded">
                  4.1
                  <i class="fa fa-star" aria-hidden="true"></i>
                </span>
                <span class="text-gray-500 text-sm p-1">214 Ratings & 22 Reviews</span>
              </a>
            </p>
            <div class="text-gray-500 mb-2 text-xs">
              <span class="text-2xl font-bold text-black mt-2">₹8,999</span>
              <span class="line-through">₹904</span>
              <span class>|</span>
              <span class="text-green-500 font-hairline">40% OFF</span>
            </div>
          </div>
          <div class="w-1/12">
            <button class="text-gray-600 font-medium text-lg right-0 bg-gray-200 rounded px-3 py-1">
              <i class="fa fa-trash"></i>
            </button>
          </div>
        </div>
        <div class="p-2 flex flex-wrap border-b border-gray-300">
          <img class="w-1/4 h-32 object-cover" src="/cart-product.jpg" />
          <div class="w-4/6 px-2">
            <p
              class="xs:w-full lg:w-9/12 left-0 text-left text-lg text-black"
            >Fitbit Inspire HR (Black Strap, Size : Regular)</p>
            <p class="mt-2">
              <a href class="w-9/12 left-0 text-left text-lg text-black mt-2">
                <span class="text-white text-xs p-1 bg-green-700 rounded">
                  4.1
                  <i class="fa fa-star" aria-hidden="true"></i>
                </span>
                <span class="text-gray-500 text-sm p-1">214 Ratings & 22 Reviews</span>
              </a>
            </p>
            <div class="text-gray-500 mb-2 text-xs">
              <span class="text-2xl font-bold text-black mt-2">₹8,999</span>
              <span class="line-through">₹904</span>
              <span class>|</span>
              <span class="text-green-500 font-hairline">40% OFF</span>
            </div>
          </div>
          <div class="w-1/12">
            <button class="text-gray-600 font-medium text-lg right-0 bg-gray-200 rounded px-3 py-1">
              <i class="fa fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="1/12"></div>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header";
export default {
  components: { Header }
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
  font-size: 1.5rem;
}
</style>
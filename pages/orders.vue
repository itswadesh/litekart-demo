<template>
  <div>
    <Header />
    <div class="flex flex-wrap justify-center bg-gray-100 pb-5">
      <div class="xs:w-full text-center lg:w-1/5 mt-10 bg-white shadow leading-loose rounded">
        <div class="w-full p-10 border-b border-gray-200">
          <span class="h-20 w-20 p-2 text-4xl text-gray-600 rounded-full bg-gray-200 inline-block">K</span>
          <br />
          <span class="text-lg">KOHN WICK</span>
          <span class="text-sm text-gray-500">kohnwick@gmail.com</span>
        </div>
        <ul>
          <li>
            <a href="#" class="w-full flex flex-wrap text-lg text-pink-500">
              <div class="w-1/5">
                <i class="fa fa-first-order p-5" aria-hidden="true"></i>
              </div>
              <div class="w-4/5 text-left p-3">Orders</div>
            </a>
          </li>
          <li>
            <a href="#" class="w-full flex flex-wrap text-lg">
              <div class="w-1/5">
                <i class="fa fa-user-circle p-5" aria-hidden="true"></i>
              </div>
              <div class="w-4/5 text-left p-3">Profile Details</div>
            </a>
          </li>

          <li>
            <a href="#" class="w-full flex flex-wrap text-lg">
              <div class="w-1/5">
                <i class="fa fa-heart-o p-5" aria-hidden="true"></i>
              </div>
              <div class="w-4/5 text-left p-3">My Moments</div>
            </a>
          </li>
          <li>
            <a href="#" class="w-full flex flex-wrap text-lg">
              <div class="w-1/5">
                <i class="fa fa-credit-card p-5" aria-hidden="true"></i>
              </div>
              <div class="w-4/5 text-left p-3">Saved Cards</div>
            </a>
          </li>
          <li>
            <a href="#" class="w-full flex flex-wrap text-lg">
              <div class="w-1/5">
                <i class="fa fa-credit-card p-5" aria-hidden="true"></i>
              </div>
              <div class="w-4/5 text-left p-3">Credits</div>
            </a>
          </li>
          <li>
            <a href="#" class="w-full flex flex-wrap text-lg">
              <div class="w-1/5">
                <i class="fa fa-power-off p-5" aria-hidden="true"></i>
              </div>
              <div class="w-4/5 text-left p-3">Sign Out</div>
            </a>
          </li>
        </ul>
      </div>
      <div class="lg:w-2/4 mt-10 lg:pr-20 xs:w-full px-10">
        <div class="text-2xl text-black font-bold p-10">Orders</div>
        <div class="bg-white shadow rounded flex flex-wrap py-3 px-12">
          <i class="fa fa-truck text-green-500 mt-3"></i>
          <div class="p-3">
            <p class="text-black text-sm font-semibold">Arrives by Sep 12</p>
            <p class="text-gray-500 text-xs">1 item</p>
          </div>
          <div class="p-3 ml-32 shadow">
            <img src="cart-product.jpg" class="w-12 h-12" />
          </div>
        </div>
      </div>
      <div class="w-8"></div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";
export default {
  components: { Header, Footer }
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
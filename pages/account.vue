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
            <a href="#" class="w-full flex flex-wrap text-lg">
              <div class="w-1/5">
                <i class="fa fa-first-order p-5" aria-hidden="true"></i>
              </div>
              <div class="w-4/5 text-left p-3">Orders</div>
            </a>
          </li>
          <li>
            <a href="#" class="w-full flex flex-wrap text-lg">
              <div class="w-1/5">
                <i class="fa fa-address-card p-5" aria-hidden="true"></i>
              </div>
              <div class="w-4/5 text-left p-3">Address</div>
            </a>
          </li>
          <li>
            <a href="#" class="w-full flex flex-wrap text-lg text-pink-500">
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
      <div class="lg:w-1/2 mt-10 xs:w-full bg-white shadow ml-10 py-5 px-8">
        <div class="text-xl text-gray-700 font-bold p-5 border-b border-gray-200">Profile details</div>
        <div class="w-full text-sm text-center mt-5 mb-5 py-5 px-8">
          Just 2 step(s) to go and your profile's complete
          <div
            class="w-full h-1 bg-green-500 rounded-lg m-1 text-xs leading-none text-center text-white"
          ></div>
        </div>

        <div class="w-full">
          <ul class="w-full">
            <a href="#">
              <li class="flex-wrap flex mt-5 mb-5 hover:bg-gray-200 py-5 px-8">
                <div class="w-1/12">
                  <i class="fa fa-id-card" aria-hidden="true"></i>
                </div>
                <div class="w-10/12">KOHN WICK</div>
                <div class="w-1/12">
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </div>
              </li>
            </a>

            <a href="#">
              <li class="flex-wrap flex mt-5 mb-5 hover:bg-gray-200 py-5 px-8">
                <div class="w-1/12">
                  <i class="fa fa-id-card" aria-hidden="true"></i>
                </div>
                <div class="w-10/12">9999999999</div>
                <div class="w-1/12">
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </div>
              </li>
            </a>

            <a href="#">
              <li class="flex-wrap flex mt-5 mb-5 hover:bg-gray-200 py-5 px-8">
                <div class="w-1/12">
                  <i class="fa fa-id-card" aria-hidden="true"></i>
                </div>
                <div class="w-10/12">kohnwick@gmail.com</div>
                <div class="w-1/12">
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </div>
              </li>
            </a>

            <a href="#">
              <li class="flex-wrap flex mt-5 mb-5 hover:bg-gray-200 py-5 px-8">
                <div class="w-1/12">
                  <i class="fa fa-id-card" aria-hidden="true"></i>
                </div>
                <div class="w-10/12">Password</div>
                <div class="w-1/12">
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </div>
              </li>
            </a>
          </ul>
        </div>
      </div>
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
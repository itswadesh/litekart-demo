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
            <a href="#" class="w-full flex flex-wrap text-lg text-pink-500">
              <div class="w-1/5">
                <i class="fa fa-address-card p-5" aria-hidden="true"></i>
              </div>
              <div class="w-4/5 text-left p-3">Address</div>
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
      <div class="lg:w-1/2 mt-10 xs:w-full p-2 bg-white shadow ml-10">
        <div class="text-xl text-black font-bold">Manage Addresses</div>
        <div class="w-full mt-5 mb-5 p-5 border border-gray-200">
          <a href="#" class="text-sm text-blue-500 font-bold w-full">
            <i class="fa fa-plus-square-o mr-2" aria-hidden="true"></i>ADD NEW ADDRESS
          </a>
        </div>
        <div class="w-full p-5 flex flex-wrap border border-gray-100 relative">
          <span class="text-xs bg-gray-200 text-gray-700 p-1">HOME</span>
          <div class="text-right right-0 absolute px-5">
            <p class="w-1 h-1 bg-gray-500 rounded-full m-1"></p>
            <p class="w-1 h-1 bg-gray-500 rounded-full m-1"></p>
            <p class="w-1 h-1 bg-gray-500 rounded-full m-1"></p>
          </div>
          <div class="w-full py-2 text-sm leading-loose">
            <p>Kintali Navesh 9944817722</p>
            <span>
              kintali naveesh girls hostel vit university vellore tamilnadu,632014, vellore, Vellore, Tamil Nadu -
              <span
                class="font-bold"
              >632014</span>
            </span>
          </div>
        </div>
        <div class="w-full p-5 flex flex-wrap border border-gray-100 relative">
          <span class="text-xs bg-gray-200 text-gray-700 p-1">HOME</span>
          <div class="text-right right-0 absolute px-5">
            <p class="w-1 h-1 bg-gray-500 rounded-full m-1"></p>
            <p class="w-1 h-1 bg-gray-500 rounded-full m-1"></p>
            <p class="w-1 h-1 bg-gray-500 rounded-full m-1"></p>
          </div>
          <div class="w-full py-2 text-sm leading-loose">
            <p>Kintali Navesh 9944817722</p>
            <span>
              kintali naveesh girls hostel vit university vellore tamilnadu,632014, vellore, Vellore, Tamil Nadu -
              <span
                class="font-bold"
              >632014</span>
            </span>
          </div>
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
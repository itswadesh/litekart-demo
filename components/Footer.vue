<template>
  <footer class="footer">
    <div class="flex flex-wrap justify-between py-8">
      <div class="p-2 lg:p-8">
        <div class="mr-2 text-sm font-bold headings">ONLINE SHOPPING</div>
        <ul class="text-sm font-hairline">
          <li>
            <nuxt-link to="/men">Men</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/women">Women</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/kids">Kids</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/home">Home & Living</nuxt-link>
          </li>
          <li>
            <a target="_blank" href="https://www.angularcode.com/">
              Litekart Insider</a
            >
            <span class="desktop-superscript primary">New</span>
          </li>
        </ul>
      </div>
      <div class="p-2 lg:p-8">
        <div class="mr-2 text-sm font-bold headings">USEFUL LINKS</div>
        <ul class="text-sm font-hairline">
          <li>
            <nuxt-link to="/terms">Terms & Conditions</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/help-center/bulk-orders-business-inquiry"
              >Sell on Litekart</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/privacy-policy">Privacy Statement</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about-us">About Us</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="p-2 lg:p-8">
        <div class="mr-2 text-sm font-bold headings">HELP</div>
        <ul class="text-sm font-hairline">
          <li>
            <nuxt-link to="/help-center/return-replacement"
              >Returns & Replacement</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/help-center/shipping-delivery"
              >Shipping & Delivery</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/help-center/payments-refunds"
              >Payments & Refunds</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/help-center/cancellations">Cancellations</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="items-center p-2 my-4 lg:p-8 lg:my-0">
        <div class="text-sm font-bold headings">
          EXPERIENCE LITEKART APP ON MOBILE
        </div>
        <div class="flex mb-2">
          <a
            href="https://play.google.com/store/apps/details?id=com.codenx.misiki&hl=en"
            ><img class="h-10 mt-2" src="/playstore.png" alt=""
          /></a>
          <a
            href="https://play.google.com/store/apps/details?id=com.codenx.misiki&hl=en"
            ><img class="h-10 mt-2" src="/appstore.png" alt=""
          /></a>
        </div>
        <div>
          <h6 class="text-lg text-left lg:text-xs">KEEP IN TOUCH</h6>
          <div class>
            <a href="https://facebook.com/codenx2">
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/itswadesh">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/itswadesh">
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="items-center p-1 lg:p-6">
        <div class="flex items-center">
          <img class="h-10 my-1" src="/original.png" alt="100% original" />
          <div class="text-sm">
            <div>
              <span class="ml-1 font-bold headings">100% ORIGINAL</span>
              <!-- guarantee for all products              at litekart.in -->
            </div>
          </div>
        </div>
        <div class="flex items-center">
          <img class="h-10 my-1 ml-1" src="/return.png" alt="return" />
          <div class="text-sm">
            <div>
              <span class="ml-1 font-bold headings">Return within 30days</span>
              <!-- of receiving your order -->
            </div>
          </div>
        </div>
        <div class="flex items-center">
          <img class="h-10 my-1 ml-1" src="/truck.png" alt="truck" />
          <div class="text-sm">
            <div>
              <span class="ml-1 font-bold headings">Get free delivery</span>
              <!-- for every order above ₹1199 -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-2 text-sm lg:p-8">
      <div class="font-medium hr-line headings">POPULAR SEARCHES</div>
      <hr class="text-gray-800" />
      <div class="mt-5 mb-5 font-normal">
        <nuxt-link
          v-for="(s, ix) in popularSearches"
          :key="ix"
          :to="`/search?q=${s}`"
          >{{ s }} |
        </nuxt-link>
      </div>
    </div>
    <div class="flex flex-wrap justify-between p-2 text-sm lg:p-8">
      <div>
        In case of any concern,
        <nuxt-link to="/contact-us" class="px-2 text-indigo-600"
          >Contact Us</nuxt-link
        >
      </div>
      <div>© 2020 www.litekart.in. All rights reserved.</div>
    </div>
  </footer>
</template>

<script>
import { popularSearches } from '~/config/'
export default {
  data() {
    return { popularSearches }
  }
}
</script>
<style scoped>
.hr-line {
  border-bottom: 1px solid #fafbfc;
}
.desktop-superscript {
  font-size: 12px;
  padding: 0px 5px;
  border-radius: 90px;
  margin: 0px 0px 0px 5px;
}
</style>

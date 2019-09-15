<template>
  <div>
    <Header />
    <div class="flex flex-wrap justify-start p-2">
      <div class="xs:w-full lg:w-2/4 flex justify-start flex-wrap">
        <div class="flex md:flex-col xs:order-2 md:order-1">
          <img
            class="w-28 cursor-pointer"
            src="/small-product.png"
          />
          <img
            class="w-28 cursor-pointer"
            src="/small-product.png"
          />
          <img
            class="w-28 cursor-pointer"
            src="/small-product.png"
          />
        </div>
        <div class="flex-1 xs:order-1 md:order-2">
          <img
            class="inline-block w-full border border-gray-400"
            src="/product.png"
          />
          <div class="w-full flex">
            <button class="bg-orange-500 flex-1 my-3 p-3 md:p-5 mr-2 text-center font-bold text-white focus:outline-none text-xs lg:text-lg">
              <i
                class="fa fa-shopping-cart mr-2"
                aria-hidden="true"
              ></i> ADD TO CART
            </button>
            <button class="bg-yellow-600 flex-1 my-3 p-3 md:p-5 text-center font-bold text-white focus:outline-none text-xs lg:text-lg">
              <i
                class="fa fa-bolt mr-2"
                aria-hidden="true"
              ></i>BUY NOW
            </button>
          </div>
        </div>
      </div>
      <div class="xs:w-full lg:w-2/4 p-2">
        <div class="w-full flex flex-wrap">
          <p class="w-9/12 left-0 text-left text-xs text-gray-500">
            Home
            <i
              class="fa fa-angle-right"
              aria-hidden="true"
            ></i>
            Wearable Smart Watch
            <i
              class="fa fa-angle-right"
              aria-hidden="true"
            ></i> Smart Bands
            <i
              class="fa fa-angle-right"
              aria-hidden="true"
            ></i> FitBit Smart Band
          </p>
          <p class="w-3/12 text-right right-0 pr-3">
            <i
              class="fa fa-share pr-2 text-gray-500"
              aria-hidden="true"
            ></i>Share
          </p>
        </div>
        <div class="w-full">
          <p class="xs:w-full lg:w-9/12 left-0 text-left text-lg text-black">Fitbit Inspire HR (Black Strap, Size : Regular)</p>
          <p class="mt-2">
            <a
              href
              class="w-9/12 left-0 text-left text-lg text-black mt-2"
            >
              <span class="text-white text-xs p-1 bg-green-700 rounded">
                4.1
                <i
                  class="fa fa-star"
                  aria-hidden="true"
                ></i>
              </span>
              <span class="text-gray-500 text-sm p-1">214 Ratings & 22 Reviews</span>
            </a>
          </p>
          <p class="w-9/12 left-0 text-left text-2xl font-bold text-black mt-2">₹8,999</p>
          <ul class="mt-2 text-sm">
            <li class="mt-3">
              <i
                class="mr-2 fa fa-calendar-check-o text-green-500"
                aria-hidden="true"
              ></i>No cost EMI ₹750/month. Standard EMI also available
              <a
                href
                class="text-blue-500 font-semibold"
              >
                View Plans
                <i
                  class="fa fa-angle-right"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
            <li class="mt-3">
              <i
                class="mr-2 fa fa-tag text-green-500"
                aria-hidden="true"
              ></i>
              <b>Bank Offer</b> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card
              <a
                href
                class="text-blue-500 font-semibold"
              >T & C</a>
            </li>
            <li class="mt-3">
              <i
                class="mr-2 fa fa-tag text-green-500"
                aria-hidden="true"
              ></i>
              <b>Bank Offer</b> 5% Cashback* on HDFC Bank Debit Cards
              <a
                href
                class="text-blue-500 font-semibold"
              >T & C</a>
            </li>
            <li class="mt-3">
              <i
                class="mr-2 fa fa-tag text-green-500"
                aria-hidden="true"
              ></i>
              <b>Bank Offer</b> Extra 5% off* with Axis Bank Buzz Credit Card
              <a
                href
                class="text-blue-500 font-semibold"
              >T & C</a>
            </li>
          </ul>
        </div>
        <div class="w-full flex flex-wrap mt-3">
          <p class="w-20 pt-2 text-left text-sm text-gray-500">Delivery</p>
          <div class="lg:w-1/3 xs:w-full text-left left-0 relative">
            <i
              aria-hidden="true"
              class="fa fa-map-marker absolute mt-3"
            ></i>
            <input
              type="search"
              placeholder="Enter Delivery Pincode"
              class="p-2 pl-5 w-full focus:outline-none text-sm border-blue-600 border-b"
            />
            <button class="absolute text-sm mt-2 text-blue-500 font-bold focus:outline-none hover:text-gray-600 cursor-pointer">Check</button>
            <br />
            <p class="w-full text-justify mt-2 text-sm text-red-500">Not a valid pincode</p>
          </div>
        </div>

        <div class="w-full flex flex-wrap mt-3">
          <p class="w-20 pt-2 text-left text-sm text-gray-500">Color</p>
          <div class="xs:w-full lg:w-1/3 flex flex-wrap justify-start">
            <img
              class="w-14 h-12 cursor-pointer"
              src="/small-product.png"
            />
            <img
              class="w-14 h-12 cursor-pointer"
              src="/small-product.png"
            />
            <img
              class="w-14 h-12 cursor-pointer"
              src="/small-product.png"
            />
          </div>
        </div>

        <div class="w-full mt-3 flex flex-wrap">
          <div class="xs:w-full lg:w-1/2 flex flex-wrap">
            <div class="w-20">
              <p class="pt-2 text-left text-sm text-gray-500">Highlights</p>
            </div>
            <div class="w-48">
              <ul class="mt-2 text-sm">
                <li class="mt-3">Activity Tracking, Sleep Tracking, Calories Burnt, Automatic Exercise Recognition</li>
                <li class="mt-3">15 Goal Based Exercise Modes Like - Running, Biking, Yoga etc</li>
                <li class="mt-3">24/7 Heart Rate Tracking</li>
                <li class="mt-3">Swim-proof Water Resistant Upto 50 m</li>
              </ul>
            </div>
          </div>
          <div class="xs:w-full lg:w-1/2 flex flex-wrap">
            <div class="w-20">
              <p class="pt-2 text-left text-sm text-gray-500">Services</p>
            </div>
            <div class="w-48">
              <ul class="mt-2 text-sm">
                <li class="mt-3">
                  <i
                    class="mr-2 fa fa-shield"
                    aria-hidden="true"
                  ></i> 1 Year Warranty Provided by the Manufacturer from Date of Purchase
                </li>
                <li class="mt-3">
                  <i
                    class="mr-2 fa fa-exchange"
                    aria-hidden="true"
                  ></i>24/7 Heart Rate Tracking
                </li>
                <li class="mt-3">
                  <i
                    class="mr-2 fa fa-inr"
                    aria-hidden="true"
                  ></i> 24/7 Heart Rate Tracking
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="w-full flex flex-wrap mt-3 mb-10 text-justify">
          <p class="w-20 pt-2 text-left text-sm text-gray-500">Seller</p>
          <div class="w-1/3 mt-3">
            <a
              href
              class="text-blue-500"
            >RetailNet</a>
            <span class="text-white text-xs p-1 text-center bg-blue-500 rounded-l-lg rounded-r-lg">
              4.1
              <i
                class="fa fa-star"
                aria-hidden="true"
              ></i>
            </span>
          </div>
        </div>

        <div class="w-full flex flex-wrap mt-3 mb-10">
          <p class="w-20 pt-2 text-left text-sm text-gray-500">Description</p>
          <div class="xs:w-full lg:w-4/5 text-justify mt-3">
            <p>Meet the Fitbit Inspire HR, your new partner who will guide you towards a healthier lifestyle. From tracking your heart rate and sleep quality to the number of calories you burn and the steps you take, the Inspire HR is designed to get you up and moving.</p>
          </div>
        </div>
        <!-- Product description -->
        <div>
          <div class="w-full flex flex-wrap mt-3 border p-5">
            <p class="text-2xl">Product Description</p>
            <p class="text-sm">Meet the Fitbit Inspire HR, your new partner who will guide you towards a healthier lifestyle. From tracking your heart rate and sleep quality to the number of calories you burn and the steps you take, the Inspire HR is designed to get you up and moving.</p>
          </div>
          <div class="w-full border-b border-l border-r p-5">
            <p class="text-sm">Meet the Fitbit Inspire HR, your new partner who will guide you towards a healthier lifestyle. From tracking your heart rate and sleep quality to the number of calories you burn and the steps you take, the Inspire HR is designed to get you up and moving.</p>
          </div>
          <div class="w-full border-b border-l border-r p-5">
            <p class="text-md text-blue-500">
              <a href>View all features</a>
            </p>
          </div>
        </div>

        <!-- Specification -->
        <div>
          <div class="w-full flex flex-wrap mt-3 border p-5">
            <p class="text-2xl">Specifications</p>
          </div>
          <div class="w-full border-b border-l border-r p-5">
            <p class="text-lg">General</p>
            <table>
              <tr>
                <td class="text-gray-500 w-48">Model Number</td>
                <td>FB413BKBK</td>
              </tr>
              <tr>
                <td class="text-gray-500 w-48">Model Number</td>
                <td>FB413BKBK</td>
              </tr>
              <tr>
                <td class="text-gray-500 w-48">Model Number</td>
                <td>FB413BKBK</td>
              </tr>
              <tr>
                <td class="text-gray-500 w-48">Model Number</td>
                <td>FB413BKBK</td>
              </tr>
              <tr>
                <td class="text-gray-500 w-48">Model Number</td>
                <td>FB413BKBK</td>
              </tr>
            </table>
          </div>
          <div class="w-full border-b border-l border-r p-5">
            <p class="text-md text-blue-500">
              <a href>Read More</a>
            </p>
          </div>
        </div>
        <!-- Product Review -->
        <div>
          <div class="w-full flex flex-wrap mt-3 border p-5">
            <p class="xs:text-xl lg:text-2xl w-1/2">Ratings & Reviews</p>
            <p class="text-sm w-1/2 text-right">
              <button class="bg-white border px-4 py-2 shadow font-normal">Rate Product</button>
            </p>
            <div class="text-sm w-full flex flex-wrap">
              <div class="">
                <span class="text-black text-4xl text-center">4.1</span>
                <i
                  class="fa fa-star"
                  aria-hidden="true"
                ></i>
                <br />
                <span class="text-gray-500 text-xs p-1">214 Ratings <br />& 22 Reviews</span>
              </div>
              <div class="flex-1">
                <div class="w-full bg-grey-light">
                  <div class="flex flex-wrap">
                    <span>
                      5
                      <i
                        class="fa fa-star w-1/5"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <div class="w-4/5 h-2 bg-green-500 rounded-lg m-1 text-xs leading-none text-center text-white"></div>
                  </div>

                  <div class="flex flex-wrap">
                    <span>
                      4
                      <i
                        class="fa fa-star w-1/5"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <div class="w-4/5 h-2 bg-green-500 rounded-lg m-1 text-xs leading-none text-center text-white"></div>
                  </div>

                  <div class="flex flex-wrap">
                    <span>
                      3
                      <i
                        class="fa fa-star w-1/12"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <div class="w-4/5 h-2 bg-green-500 rounded-lg m-1 text-xs leading-none text-center text-white"></div>
                  </div>

                  <div class="flex flex-wrap">
                    <span>
                      2
                      <i
                        class="fa fa-star w-1/5"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <div class="w-4/5 h-2 bg-green-500 rounded-lg m-1 text-xs leading-none text-center text-white"></div>
                  </div>

                  <div class="flex flex-wrap">
                    <span>
                      1
                      <i
                        class="fa fa-star w-1/5"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <div class="w-4/5 h-2 bg-green-500 rounded-lg m-1 text-xs leading-none text-center text-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full border-b border-l border-r p-5 flex flex-wrap">
            <span class="text-white text-xs p-1 bg-green-700 rounded">
              4.1
              <i
                class="fa fa-star"
                aria-hidden="true"
              ></i>
            </span>
            <p class="text-lg font-bold ml-3">Must Buy</p>
            <div class="w-full text-xs pt-2">Quick Delivery by Flipkart. Many feature Activity Tracker at a reasonable Price Tag with an equally good App.</div>
            <div class="w-9/12 text-xs text-gray-500 pt-2">
              <span class="font-bold">B K Nanda</span>
              <i
                class="fa fa-certificate"
                aria-hidden="true"
              ></i>
              Certified Buyer, Jamshedpur
              5 months ago
            </div>
            <div class="w-3/12 text-xs text-gray-500 pt-2 text-sm">
              <p>
                18
                <i
                  class="fa fa-thumbs-o-up mr-6"
                  aria-hidden="true"
                ></i>
                19
                <i
                  class="fa fa-thumbs-o-down mr-6"
                  aria-hidden="true"
                ></i>
                <i
                  class="fa fa-angle-down"
                  aria-hidden="true"
                ></i>
              </p>
            </div>
          </div>
          <div class="w-full border-b border-l border-r p-5">
            <p class="text-md text-blue-500">
              <a href>All 22 reviews</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header";
export default {
  components: { Header }
};
</script>

<style>
</style>
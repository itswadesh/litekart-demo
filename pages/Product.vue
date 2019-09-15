<template>
    <div class="flex flex-wrap justify-between pt-10">
        <div class="w-2/4 flex">
            <div class="xs:w-full lg:w-1/5 justify-center align-middle relative">
                <img class="w-14 h-12 cursor-pointe" src="/small-product.png">
                <img class="w-14 h-12 cursor-pointe" src="/small-product.png">
                <img class="w-14 h-12 cursor-pointer" src="/small-product.png">
            </div>
            <div class="xs:w-full lg:w-3/4 mr-4 relative">
                <img class="inline-block w-full border border-gray-400" src="/product.png">
                <div class="absolute w-full flex flex-wrap">
                    <button class="bg-yellow-600 w-56 my-3 mr-3 p-5 text-center font-bold text-white focus:outline-none">
                       <i class="fa fa-shopping-cart mr-2" aria-hidden="true"></i>  ADD TO CART
                    </button> 
                    <button class="bg-orange-500 w-56 my-3 ml-3 p-5 text-center font-bold text-white focus:outline-none">
                        <i class="fa fa-bolt mr-2" aria-hidden="true"></i>BUY NOW
                    </button>
                </div>
            </div>
        </div>
        <div class="xs:w-full lg:w-2/4 p-2">
            <div class="w-full flex flex-wrap">
                <p class="w-9/12 left-0 text-left text-xs text-gray-500">Home <i class="fa fa-angle-right" aria-hidden="true"></i>
                Wearable Smart Watch <i class="fa fa-angle-right" aria-hidden="true"></i> Smart Bands
                <i class="fa fa-angle-right" aria-hidden="true"></i> FitBit Smart Band</p>
                <p class="w-3/12 text-left right-0"><i class="fa fa-share pr-2" aria-hidden="true"></i>Share</p>
            </div>
            <div class="w-full">
                <p class="w-9/12 left-0 text-left text-lg text-black">
                    Fitbit Inspire HR  (Black Strap, Size : Regular)
                </p>
                <p class="mt-2">
                    <a href="" class="w-9/12 left-0 text-left text-lg text-black mt-2">
                    <span class="text-white text-xs p-1 bg-green-700 rounded">4.1<i class="fa fa-star" aria-hidden="true"></i></span>
                    <span class="text-gray-500 text-sm p-1">214 Ratings & 22 Reviews</span>
                    </a>
                </p>
                <p class="w-9/12 left-0 text-left text-2xl font-bold text-black mt-2">
                    ₹8,999
                </p>
                <ul class="mt-2 text-sm">
                    <li class="mt-3"><i class="mr-2 fa fa-calendar-check-o" aria-hidden="true"></i>No cost EMI ₹750/month. Standard EMI also available <a href="">View Plans <i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
                    <li class="mt-3"><i class="mr-2 fa fa-tag" aria-hidden="true"></i><b>Bank Offer</b> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card <a href="">T & C</a></li>
                    <li class="mt-3"><i class="mr-2 fa fa-tag" aria-hidden="true"></i><b>Bank Offer</b> 5% Cashback* on HDFC Bank Debit Cards <a href="">T & C</a></li>
                    <li class="mt-3"><i class="mr-2 fa fa-tag" aria-hidden="true"></i><b>Bank Offer</b> Extra 5% off* with Axis Bank Buzz Credit Card <a href="">T & C</a></li>
                </ul>
            </div>
            <div class="w-full flex flex-wrap mt-3">
                <p class="w-20 pt-2 text-left text-sm text-gray-500">Delivery </p>
                <div class="w-1/3 text-left left-0 relative"><i aria-hidden="true" class="fa fa-map-marker absolute mt-3"></i> <input type="search" placeholder="Enter Delivery Pincode" class="p-2 pl-5 w-full focus:outline-none text-sm border-blue-600 border-b"> <button class="absolute text-sm mt-2 text-blue-500 font-bold focus:outline-none hover:text-gray-600 cursor-pointer">
                    Check
                </button><br>
                <p class="w-full text-justify mt-2 text-sm text-red-500">Not a valid pincode</p>
                </div>
            </div>

            <div class="w-full flex flex-wrap mt-3">
                <p class="w-20 pt-2 text-left text-sm text-gray-500">Color </p>
                <div class="w-1/3 flex flex-wrap justify-between">
                   <img class="w-14 h-12 cursor-pointer" src="/small-product.png">
                    <img class="w-14 h-12 cursor-pointer" src="/small-product.png">
                    <img class="w-14 h-12 cursor-pointer" src="/small-product.png">
                </div>
            </div>

            <div class="w-full mt-3 flex flex-wrap">
                <div class="w-1/2 flex flex-wrap">
                    <div class="w-20">
                        <p class="pt-2 text-left text-sm text-gray-500">Highlights </p>
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
                <div class="w-1/2 flex flex-wrap">
                    <div class="w-20">
                        <p class="pt-2 text-left text-sm text-gray-500">Services </p>
                    </div>
                    <div class="w-48">
                        <ul class="mt-2 text-sm">
                            <li class="mt-3"><i class="mr-2 fa fa-shield" aria-hidden="true"></i> 1 Year Warranty Provided by the Manufacturer from Date of Purchase</li>
                            <li class="mt-3"><i class="mr-2 fa fa-exchange" aria-hidden="true"></i>24/7 Heart Rate Tracking</li>
                            <li class="mt-3"><i class="mr-2 fa fa-inr" aria-hidden="true"></i> 24/7 Heart Rate Tracking</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="w-full flex flex-wrap mt-3 mb-10 text-justify">
                <p class="w-20 pt-2 text-left text-sm text-gray-500">Seller </p>
                <div class="w-1/3 mt-3">
                   <a href="" class="text-blue-500">RetailNet</a>
                   <span class="text-white text-xs p-1 text-center bg-blue-500 rounded-l-lg rounded-r-lg">4.1<i class="fa fa-star" aria-hidden="true"></i></span>
                </div>
            </div>


            <div class="w-full flex flex-wrap mt-3 mb-10">
                <p class="w-20 pt-2 text-left text-sm text-gray-500">Description </p>
                <div class="w-4/5 text-justify mt-3">
                    <p>
                        Meet the Fitbit Inspire HR, your new partner who will guide you towards a healthier lifestyle. From tracking your heart rate and sleep quality to the number of calories you burn and the steps you take, the Inspire HR is designed to get you up and moving.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
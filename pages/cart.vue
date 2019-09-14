<template>
  <div>
    <Header />
    <div class="flex flex-wrap justify-between">
        <div class="lg:w-16 xs:w-0">
            
        </div>
        <div class="xs:w-full lg:w-2/4 mt-10 px-2">
            <div class="w-full flex flex-wrap hr-line justify-between pb-2">
                <p class="font-semibold text-3xl text-black">Cart
                    <span class="ml-2 mr-1 font-hairline text-gray-500 text-xl">.</span>
                    <span class="text-gray-500 text-xl font-hairline">item</span>
                </p>
                <button class="text-gray-600 font-medium text-sm right-0 hover:bg-gray-200 rounded px-2">
                   Enter pincode for delivery<i class="fa fa-caret-down px-2" />
                </button>
            </div>
            <div class="flex hr-line justify-between pt-5 pb-5">
                <div class="lg:w-1/5 left-0 xs:w-3/12">
                    <div>
                        <img class="lg:rounded xs:rounded-b-none" src="/cart-product.jpg">
                        <div class="lg:hidden xs:visible text-black p-2 bg-gray-300 rounded rounded-t-none">
                            Arrives 19 Sep
                        </div>
                    </div>
                </div>
                <div class="lg:w-4/5 right-0 xs:9/12">
                    <div class="pl-4 font-hairline">
                        <p class="text-black mb-2"><a href="#">Stylish Green Floral Print Mid Thigh L</a>... Arrives 19 Sep By Prince & Princes</p>
                        <p class="text-gray-500 mb-2"><span>Size:</span>3-4 years</p>
                        <p class="relative mb-2">
                             <span class="text-sm top-0 mt-1 absolute">₹</span>
                            <span class="text-black font-bold mb-2 text-2xl ml-2">
                               889
                            </span>
                            <span class="text-gray-300 line-through ml-2">₹1049</span>
                            <span class="ml-2 text-green-400">15% off</span>
                        </p>
                        <div class="flex justify-between ">
                           <div class="w-1/2 left-0">
                                <div class="inline-block relative w-24">
                                    <select class="text-sm font-bold text-gray-500 p-2 border-gray-300 cursor-pointer cursor-pointer block appearance-none w-full bg-gray-200 rounded border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8  leading-tight focus:outline-none focus:none">
                                        <option class="bg-white ">Qty 1</option>
                                        <option class="bg-white text-black">2</option>
                                        <option class="bg-white text-black">3</option>
                                        <option class="bg-white text-black">4</option>
                                        <option class="bg-white text-black">5</option>
                                        <option class="bg-white text-black">6</option>
                                        <option class="bg-white text-black">7</option>
                                    </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <i class="fa fa-caret-down px-1" />
                                    </div>
                                </div>
                            </div>
                            <div class="w-1/2 right-0">
                                <div class="right-0 text-right">
                                    <button class="text-gray-600 font-medium text-lg right-0 bg-gray-200 rounded px-3 py-1">
                                        <i class="fa fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden lg:block">
                <div class="w-full flex justify-between mt-6 mb-6">
                    <div class="w-1/3">
                        <div class="bg-gray-200 rounded pl-3 pr-3 pt-8 pb-8 mt-3 mb-3 mr-1 mr-1">
                            <i class="fa fa-truck text-gray-500"></i>
                            <p class="text-gray-500 text-lg font-normal">Free Shipping*</p>
                            <p class="text-gray-500 text-xs">On orders of ₹500 and above.Details</p>
                        </div>
                    </div>
                    <div class="w-1/3">
                         <div class="bg-gray-200 rounded pl-3 pr-3 pt-8 pb-8 mt-3 mb-3 mr-1 mr-1">
                            <i class="fa fa-undo text-gray-500"></i>
                            <p class="text-gray-500 text-lg font-normal">Easy returns</p>
                            <p class="text-gray-500 text-xs">Send items back for free within 15 days</p>
                        </div>
                    </div>
                    <div class="w-1/3">
                         <div class="bg-gray-200 rounded pl-3 pr-3 pt-8 pb-8 mt-3 mb-3 mr-1">
                            <i class="fa fa-shield text-gray-500"></i>
                            <p class="text-gray-500 text-lg font-normal">Secure shopping</p>
                            <p class="text-gray-500 text-xs">Your payment details are fully encrypted</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="lg:w-1/4 mt-10 lg:pr-20 xs:w-full px-3">
            <div class="w-full flex flex-wrap hr-line justify-between pb-2">
                <button class="relative  text-gray-600 font-medium text-sm w-full rounded p-3 pl-0 text-left focus:outline-none hover:text-black">
                   Got a promo code?<i class="fa fa-caret-down right-0 absolute" />
                </button>
            </div>
            <div class="4/5 right-0 pb-3 bb">
                <div>
                    <p class="text-black mt-4 font-normal text-xl">Price Summary</p>
                    <span class="text-gray-400 text-xs">Includes GST and all government taxes</span>
                    <div class="flex justify-between mt-1">
                            <div class="w-1/2 text-sm text-left">Total item price</div>
                            <div class="ml-2 w-1/2 text-black-400 text-right">₹1,009</div>
                    </div>
                    <div class="flex justify-between mt-1">
                            <div class="w-1/2 text-sm text-left">Item discount</div>
                            <div class="ml-2 w-1/2 text-black-400 text-right">-₹577</div>
                    </div>
                    <div class="flex justify-between mt-1">
                            <div class="w-1/2 text-sm text-left">Shipping fee</div>
                            <div class="ml-2 w-1/2 text-black-400 text-right">₹100</div>
                    </div>
                    <div class="mt-1">
                            <p class="text-xs text-gray-400">Free shipping on orders of ₹999 or
                                 more. For first purchase, <a href="" class="underline">See Offer</a></p>
                    </div>
                </div>
            </div>
            <div class="4/5 right-0 pb-3 ">
                <div class="flex justify-between mt-2">
                    <div class="w-1/2 text-lg font-bold text-left">Total</div>
                    <div class="ml-2 w-1/2 font-bold text-black-400 text-right">₹532</div>
                </div>
                <button class="w-full mt-3 p-3 bg-pink-500 hover:bg-pink-600 text-white tet-2xl font-bold rounded">
                    Proceed To Checkout
                </button>
            </div>
        </div>
        <div class="w-8">
            
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

<style scoped>
.hr-line {
  border-bottom: 1px solid lightgray;
}
.fa-truck {
    transform: scaleX(-1);
}
.bb{
    border-bottom: 1px dashed lightgray;  
}
.fa-truck,.fa-undo,.fa-shield{
    font-size: 2rem;
}
</style>
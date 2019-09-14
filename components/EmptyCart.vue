<template>
  <div>
    <Header /> 
    <div class="flex flex-wrap justify-between">
        <div class="lg:w-16 xs:w-0">
            
        </div>
        <div class="xs:w-full lg:w-2/4 mt-10 px-2">
            <div class="w-full hr-line  pb-2">
                <p class="font-semibold text-3xl text-black">Cart
                    <span class="text-gray-600 text-3xl font-hairline">is empty :(</span>
                </p>
            </div>
            <div class="pt-5 pb-5">
                <div class="w-full left-0">
                    <div class="mt-16">
                        <img class="container w-1/2" src="/emptycart.png">
                    </div>
                </div>
                <div class="w-full left-0">
                    <div>
                        <p class="text-center font-bold text-lg text-black">There's nothing in here</p>
                         <p class="text-center font-hairline text-lg text-black">You have not added any items to your cart yet.</p>
                    </div>
                </div>
                <div class="container mt-8"> 
                    <button class="w-1/3 mt-10 p-3 bg-pink-500 hover:bg-pink-600 text-white tet-2xl font-bold rounded">
                        SHOP NOW
                    </button>
                </div>
            </div>
        </div>
        <div class="lg:w-1/4 mt-10 lg:pr-20 xs:w-full px-3 ">
            <div class="hidden lg:block">
                <div class="w-full">
                    <div class="w-full">
                        <div class="bg-gray-200 rounded pl-3 pr-3 pt-8 pb-8 mt-3 mb-3 mr-1 mr-1">
                            <i class="fa fa-truck text-gray-500"></i>
                            <p class="text-gray-500 text-lg font-normal">Free Shipping*</p>
                            <p class="text-gray-500 text-xs">On orders of ₹500 and above.Details</p>
                        </div>
                    </div>
                    <div class="w-full">
                         <div class="bg-gray-200 rounded pl-3 pr-3 pt-8 pb-8 mt-3 mb-3 mr-1 mr-1">
                            <i class="fa fa-undo text-gray-500"></i>
                            <p class="text-gray-500 text-lg font-normal">Easy returns</p>
                            <p class="text-gray-500 text-xs">Send items back for free within 15 days</p>
                        </div>
                    </div>
                    <div class="w-full">
                         <div class="bg-gray-200 rounded pl-3 pr-3 pt-8 pb-8 mt-3 mb-3 mr-1">
                            <i class="fa fa-shield text-gray-500"></i>
                            <p class="text-gray-500 text-lg font-normal">Secure shopping</p>
                            <p class="text-gray-500 text-xs">Your payment details are fully encrypted</p>
                        </div>
                    </div>
                </div>
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
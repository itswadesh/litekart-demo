<template>
<div class="bg-gray-100">
  <div class="container mx-auto h-full flex justify-center items-center">
        <div class="lg:w-1/3 xs:3/3">
            <div class="border-teal border-t-12 bg-white mb-6 rounded shadow-2xl">
                <div class="p-0 bg-blue-700 text-white rounded rounded-b-none">
                    <h1 class="text-xl mb-6 text-left p-3"><span class="font-extrabold">SIGN IN</span> TO YOUR ACCOUNT</h1>
                </div>
                <div class="p-6">
                    <div class="mb-10 flex items-center border-b border-b-2 border-grey-500">
                         <input class="appearance-none bg-gray-200 border-none w-full text-gray-700 p-4 leading-tight focus:outline-none" type="text" placeholder="Phone No" aria-label="Full name">
                    </div>
                    
                    <p class="text-red-500 mb-5 text-xs font-hairline">Please enter OTP sent to mobile number</p>
                    <div class="otp-container relative inline-block rounded p-2 w-32 w-12 mb-10 bg-gray-200">
                        <div id="wraper1" class="otp-seperator w-1 h-1 rounded absolute "></div>
                        <div id="wraper2" class="otp-seperator w-1 h-1 rounded absolute"></div>
                        <div id="wraper3" class="otp-seperator w-1 h-1 rounded absolute"></div>
                        <div id="wraper4" class="otp-seperator w-1 h-1 rounded absolute"></div>
                        <input type="tel" class="outline-none pl-4 otp-content w-32 bg-transparent" maxlength="4" autocomplete="off">
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="text-2xl big-button outline-none text-xl hover:bg-red-200 w-full text-white font-bold py-2 px-4 rounded">
                            Verify Phone
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.border-t {
    border-bottom: 1px solid lightgray;
}
.big-button {
    background: linear-gradient(87deg,#fb6340,#da1c5f)!important;
    border-color: #fb6340;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
}

.otp-container .otp-seperator {
    background-color: #dfe1e6;
    border: 1px solid #dfe1e6;
}
.otp-container #wraper1 {
    top: 16px;
    left: 22px;
}
.otp-container #wraper2 {
    top: 16px;
    left: 48px;
}
.otp-container #wraper3 {
    top: 16px;
    left: 78px;
}
.otp-container #wraper4 {
    top: 16px;
    left: 106px;
}
.otp-container .otp-content {
    letter-spacing: 15px;
    border: 1px solid transparent;
}
</style>
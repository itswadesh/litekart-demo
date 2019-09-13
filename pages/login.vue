<template>
<div class="bg-gray-100">
  <div class="container mx-auto h-full flex justify-center items-center">
        <div class="lg:w-1/3 xs:3/3">
            <div class="border-teal border-t-12 bg-white mb-6 rounded shadow-2xl">
                <div class="p-0 bg-blue-700 text-white rounded rounded-b-none">
                    <h1 class="text-xl mb-6 text-left p-3"><span class="font-extrabold">SIGN IN</span> TO YOUR ACCOUNT</h1>
                </div>
                <div class="p-6">
                    <div class="mb-20 flex items-center border-b border-b-2 border-grey-500">
                         <input class="appearance-none bg-gray-200 border-none w-full text-gray-700 p-4 leading-tight focus:outline-none" type="text" placeholder="Phone No" aria-label="Full name">
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="big-button text-xl hover:bg-red-200 w-full text-white font-bold py-2 px-4 rounded">
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
</style>
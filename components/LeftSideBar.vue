<template>
    <div class="flex flex-wrap">
        <div class="w-1/6 margin-right  flex">
            <div class="bb w-screen">
                <ul class="ml-2 py-2 font-semibold text-sm px-3">
                    <input  type="radio" name="gender"><li><a   href="#">Women</a></li>
                    <input   type="radio" name="gender"><li><a   href="#">Girls</a></li>
                </ul>
            </div>
        </div>
        <div class="w-5/6 right-body margin-right flex p-2">
            <!-- CARD COMPONENT start -->
            <div class="bg-white">
                <div>
                    <img src="/cardimage.webp" alt="" class="h-3/5 w-3/5" />
                </div>
                <div class="ml-1 pt-1">
                    <p class="text-xl text-gray-900 font-bold ">Dorothy Perkins</p>
                    <p class=" text-black font-thin">Women solid wrap dress</p>
                    <p class=" text-gray-600">Rs.2990</p>
                </div>
            </div>
            <!-- CARD COMPONENT end -->
            
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
input{
    float: left;
    margin-top: .5em;
    margin-right: .5em;
}
.bb{
    border-bottom: 1px solid lightgray;
    width:100%;
}
.margin-right{
    border-right: 1px solid lightgray;
    border-top: 1px solid lightgray;
}
.right-body{
    padding: 1em;
}
</style>
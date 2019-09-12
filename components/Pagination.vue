<template>
  <div class="flex flex-row w-full px-3">

    <ul class="flex pagination-container pb-12 pt-4 list-none text-center w-full">
      <li class="pagination-paginationMeta text-sm mt-3">
        Page
        
        1
        
         of
        
        627
        
      </li>
      <div class="m-auto">
        <li class="bg-black font-medium text-white tracking-wide rounded-sm"><a href="">
            1
            </a></li>
        <li><a href="">
            2
            </a></li>
        <li><a href="">
            3
            </a></li>
        <li><a href="">
            4
            </a></li>
        <li><a href="">
            5
            </a></li>
        <li><a href="">
            6
            </a></li>
        <li><a href="">
            7
            </a></li>
        <li><a href="">
            8
            </a></li>
        <li><a href="">
            9
            </a></li>
        <li><a href="">
            10
            </a></li>
        <li class=" ml-3 h-10 text-center round-sm border-gray-300"><a
            rel="next"
            href=""
            class="font-bold"
            >Next
            <span class="absolute"><img
                src="/right.png"
                class="w-9/12 py-2 px-1"
                ></span></a></li>
        </div>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.pagination-container {
    border-top: 0.01rem solid #EDEBEF;
    color: #282c3f;
}
.pagination-paginationMeta {
    color: #535766;
}
li {
    display: inline-block;
    margin-right: 0.09rem;
    font-weight: 500;
    cursor: pointer;
    padding: 0.9rem 0.9rem;
    border-radius: 0.4rem;
}
</style>
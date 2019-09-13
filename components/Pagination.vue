<template>
  <div class="flex flex-row w-full px-3">

    <ul class="flex pagination-container pb-12 pt-4 list-none text-center w-full">
      <li class="pagination-paginationMeta text-sm mt-3 py-3">
        Page

        1

        of

        627

      </li>
      <div class="m-auto">
        <li class="py-2 px-2 bg-black font-medium text-white tracking-wide rounded-sm"><a href="">
            1
          </a></li>
        <li class=" px-2"><a href="">
            2
          </a></li>
        <li class=" px-3"><a href="">
            3
          </a></li>
        <li class=" px-3"><a href="">
            4
          </a></li>
        <li class=" px-3"><a href="">
            5
          </a></li>
        <li class=" px-3"><a href="">
            6
          </a></li>
        <li class=" px-3"><a href="">
            7
          </a></li>
        <li class=" px-3"><a href="">
            8
          </a></li>
        <li class=" px-3"><a href="">
            9
          </a></li>
        <li class=" px-3"><a href="">
            10
          </a></li>
        <li class="text-gray-600 m-4 px-4 py-2 border border-gray-300 hover:border-gray-500 capitalize rounded-full">Next
          <span class="absolute">
            <img
              src="/right.png"
              class="w-9/12 py-2 px-1"
            >
          </span>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.pagination-container {
  border-top: 0.01rem solid #edebef;
  color: #282c3f;
}
.pagination-paginationMeta {
  color: #535766;
}
li {
  display: inline-block;
  font-weight: 500;
  cursor: pointer;
  border-radius: 0.4rem;
}
</style>
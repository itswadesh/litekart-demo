<template>
  <div class="lg:w-1/2 mt-10 xs:w-full bg-white shadow ml-10 py-5">
    <div class="border-b border-gray-300">
      <div class="text-lg text-gray-700 px-8 font-bold border-b border-gray-200 py-4">
        <i class="fa fa-long-arrow-left mr-4" aria-hidden="true"></i>Password
      </div>
    </div>
    <div class="w-full">
      <form class="px-16 py-8">
        <span class="text-sm">Minimum 6 characters</span>
        <div class="mb-4 w-1/2 mt-3">
          <input
            class="bg-gray-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            type="text"
            placeholder="New Password"
          />
        </div>
        <div class="w-1/2">
          <button
            class="w-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            type="button"
          >SAVE</button>
        </div>
        <input />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: "account"
};
</script>

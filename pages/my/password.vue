<template>
  <div class="lg:w-1/2 mt-0 lg:mt-10 xs:w-full bg-white shadow lg:ml-10 p-5 w-full">
    <div class="border-b border-gray-300">
      <div class="text-lg text-gray-700 lg:px-8 px-0 font-bold border-b border-gray-200 py-4">
        <i
          class="fa fa-arrow-left mr-2 block lg:invisible"
          @click="$router.push('/my/')"
          aria-hidden="true"
        ></i>Password
      </div>
    </div>
    <div class="w-full">
      <form class="px-0 lg:px-16 py-8">
        <span class="text-sm">Minimum 6 characters</span>
        <div class="mb-4 lg:w-1/2 w-full mt-3">
          <input
            class="bg-gray-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            type="text"
            placeholder="New Password"
          />
        </div>
        <div class="w-1/3 lg:w-1/2">
          <button
            class="w-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 lg:px-4 px-1 rounded focus:outline-none"
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

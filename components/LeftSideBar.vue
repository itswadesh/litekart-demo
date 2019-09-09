<template>
  <div class="flex flex-wrap">
    <div class="w-1/6 margin-right  flex">
      <div class="bb w-screen">
        <ul class="ml-2 py-2 font-semibold text-sm px-3">
          <input
            type="radio"
            name="gender"
          >
          <li><a href="#">Women</a></li>
          <input
            type="radio"
            name="gender"
          >
          <li><a href="#">Girls</a></li>
        </ul>
      </div>
    </div>
    <div class="w-5/6 right-body margin-right flex flex-row flex-wrap p-2 items-center">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  </div>
</template>

<script>
import Product from "~/components/Product";

export default {
  components: { Product }
};
</script>

<style scoped>
input {
  float: left;
  margin-top: 0.5em;
  margin-right: 0.5em;
}
.bb {
  border-bottom: 1px solid lightgray;
  width: 100%;
}
.margin-right {
  border-right: 1px solid lightgray;
  border-top: 1px solid lightgray;
}
.right-body {
  padding: 1em;
}
</style>
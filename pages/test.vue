<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <Button color="primary">Buy Now</Button>
      </div>
    </div>
  </div>
</template>

<script>
const Button = () => import("~/components/ui/Button");
export default {
  components: { Button }
};
</script>

<style>
</style>
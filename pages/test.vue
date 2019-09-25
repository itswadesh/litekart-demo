<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <Textbox />
      </div>
    </div>
  </div>
</template>

<script>
const Textbox = () => import("~/components/ui/Textbox");
export default {
  components: { Textbox }
};
</script>

<style>
</style>
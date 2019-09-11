<template>
    <label class="vertical-filters-label common-customCheckbox">
       <input type="checkbox" value="FOREVER 21">FOREVER 21
       <span class="brand-num">(1295)</span>
       <div class="common-checkboxIndicator"></div>
    </label>
</template>

<script>
export default {

}
</script>

<style scoped>
.common-customCheckbox input:checked ~ .common-checkboxIndicator {
    border: none;
    background: #ff3f6c;
}
.common-checkboxIndicator {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    margin-right: 1em;
    width: 16px;
    height: 16px;
    border: 1px solid #c3c2c9;
    background: #fff;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    margin-top: -1.5em;
}
</style>
<template>
    <label data-count="4957" class="vertical-filters-label common-customCheckbox">
        <input
            type="checkbox"
            value="Black"
        >
        <span data-colorhex="black" class="colour-label colour-colorDisplay" style="background-color: rgb(211, 75, 86);"></span>
        FOREVER 21<span class="brand-num">(1295)</span>
       <div class="common-checkboxIndicator"></div>
        
    </label>
</template>

<script>
export default {

}
</script>

<style>
.colour-colorDisplay {
  width: 15px;
  height: 15px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
  margin-left: 4px;
}
input[type="checkbox"],
input[type="radio"] {
  margin-top: 0.4em;
}
.colour-colorDisplay {
  width: 15px;
  height: 15px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
  margin-left: 4px;
}
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
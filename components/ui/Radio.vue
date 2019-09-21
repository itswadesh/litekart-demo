<template>
        <label class="common-customRadio vertical-filters-label">
            <input 
                type="radio" 
                class="discount-input" 
                name="discount-product" 
                value="10.0 TO 100.0">
                10% and above
            <div class="common-radioIndicator"></div>
        </label>
</template>

<script>
export default {

}
</script>

<style scoped>
.common-customRadio input:checked ~ .common-radioIndicator:before {
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
    border-color: #ff3f6c;
    visibility: visible;
    background: #ff3f6c;
    -webkit-box-shadow: inset 0 0 0 3px #fff;
    -moz-box-shadow: inset 0 0 0 3px #fff;
    box-shadow: inset 0 0 0 3px #fff;
}
.common-radioIndicator:before {
    content: "";
    position: absolute;
    z-index: 1;
    width: 16px;
    height: 16px;
    border: 1px solid #c3c2c9;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    visibility: visible;
    display: inline-block;
    vertical-align: middle;
    padding: 2px;
    text-align: center;
}
.common-customRadio {
    position: relative;
    cursor: pointer;
    vertical-align: middle;
}
.common-radioIndicator {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
}
.common-customRadio input {
    margin: 0 10px 0 0;
    visibility: hidden;
}
</style>
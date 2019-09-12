<template>
  <div class="py-16 bg-white-800 shadow ">
    <div class="flex-none px-2">
      <p class="font-semibold py-2 px-5 py-2">FILTERS</p>
    </div>
    <div class=" ">
      <ul class="ml-2 py-2 text-sm px-5 py-2">
        <li>
          <label class="common-customRadio gender-label undefined">
            <input
              type="radio"
              name="ladies"
              value="women,men women"
            >Women
          </label>
        </li>
        <li>
          <label class="common-customRadio gender-label undefined">
            <input
              type="radio"
              name="ladies"
              value="women,men women"
            >Girls
          </label>
        </li>
      </ul>
    </div>
    <div class=" ">
      <p class="ml-2 py-2 font-semibold text-sm px-5 py-2">BRAND</p>
      <ul class="ml-2 py-2 text-gray-600 text-sm px-5 py-2">
        <li>
          <label>
           <Checkbox/>
          </label>
        </li>
        <li>
          <label>
           <Checkbox/>
          </label>
        </li>
        <li>
          <label>
           <Checkbox/>
          </label>
        </li>
        <li>
          <label>
           <Checkbox/>
          </label>
        </li>
        <li>
          <label>
           <Checkbox/>
          </label>
        </li>
        <li>
          <label>
           <Checkbox/>
          </label>
        </li>
        <li>
          <label>
           <Checkbox/>
          </label>
        </li>

      </ul>
    </div>

    <div>
      <p class="ml-2 py-2 font-semibold text-sm px-5 py-2">PRICE</p>
      <ul class="ml-2 py-2 text-gray-600 text-xs px-5 py-2">
        <li>
         <Checkbox/>
        </li>
        <li>
          <label>
           <Checkbox/>
          </label>
        </li>
        <li>
          <label>
            <Checkbox/>
          </label>
        </li>
        <li>
          <label>
            <Checkbox/>
          </label>
        </li>
        <li>
          <label>
            <Checkbox/>
          </label>
        </li>
      </ul>
    </div>

    <div >
      <p class="ml-2 py-2 font-semibold text-sm px-5 py-2">COLOR</p>
      <ul class="ml-2 py-2 text-gray-600 text-sm px-5 py-2">
        <li class="colour-listItem">
           <ColorCheckbox/>
        </li>
        <li class="colour-listItem">
           <ColorCheckbox/>
        </li>
        <li class="colour-listItem">
           <ColorCheckbox/>
        </li>
        <li class="colour-listItem">
           <ColorCheckbox/>
        </li>
        <li class="colour-listItem">
           <ColorCheckbox/>
        </li>
        <li class="colour-listItem">
          <ColorCheckbox/>
        </li>
      </ul>
    </div>
    <div>
      <p class="ml-2 py-2 font-semibold text-sm px-5 py-2">DISCOUNT RANGE</p>
      <ul class="ml-2 py-2 text-gray-600 text-sm px-5 py-2">
        <li>
          <label class="common-customRadio">
            <input
              type="radio"
              class="discount-input"
              name="discount-product"
              value="10.0 TO 100.0"
            >
            10% and above
          </label>
        </li>
        <li>
          <label class="common-customRadio">
            <input
              type="radio"
              class="discount-input"
              name="discount-product"
              value="10.0 TO 100.0"
            >
            20% and above
          </label>
        </li>
        <li>
          <label class="common-customRadio">
            <input
              type="radio"
              class="discount-input"
              name="discount-product"
              value="10.0 TO 100.0"
            >
            30% and above
          </label>
        </li>
        <li>
          <label class="common-customRadio">
            <input
              type="radio"
              class="discount-input"
              name="discount-product"
              value="10.0 TO 100.0"
            >
            40% and above
          </label>
        </li>
        <li>
          <label class="common-customRadio">
            <input
              type="radio"
              class="discount-input"
              name="discount-product"
              value="10.0 TO 100.0"
            >
            50% and above
          </label>
        </li>
        <li>
          <label class="common-customRadio">
            <input
              type="radio"
              class="discount-input"
              name="discount-product"
              value="10.0 TO 100.0"
            >
            60% and above
          </label>
        </li>
        <li>
          <label class="common-customRadio">
            <input
              type="radio"
              class="discount-input"
              name="discount-product"
              value="10.0 TO 100.0"
            >
            70% and above
          </label>
        </li>
        <li>
          <label class="common-customRadio">
            <input
              type="radio"
              class="discount-input"
              name="discount-product"
              value="10.0 TO 100.0"
            >
            80% and above
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Checkbox from '~/components/Checkbox'
import ColorCheckbox from '~/components/ColorCheckbox'
export default{
  components:{Checkbox,ColorCheckbox}
}
</script>
<style scoped>
input {
  margin-right: 0.5em;
}
.bb {
  border-bottom: 1px solid #edebef;
  height: max-content;
}
.margin-right {
  border-right: 1px solid #edebef;
  border-top: 1px solid #edebef;
  height: unset;
}
.margin-topp {
  border-top: 1px solid #edebef;
}
.right-body {
  padding: 1em;
}
.results-showMoreContainer {
  box-sizing: border-box;
}
input[type="checkbox"],
input[type="radio"] {
  margin-top: 0.4em;
}
</style>
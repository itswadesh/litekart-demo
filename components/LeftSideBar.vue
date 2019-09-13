<template>
  <div class="py-2\1 bg-white-800 shadow bg-white">
    <div class="flex-none px-2 py-4">
      <span class="font-normal text-sm text-gray px-5">FILTERS</span>
      <span class="font-normal text-sm float-right text-pink font-bold cursor-pointer">CLEAR ALL</span>
    </div>
    <div class=" ">
      <ul class="ml-2 py-2 text-sm px-5 py-2">
        <li>
          <Radio />
        </li>
        <li>
          <Radio />
        </li>
      </ul>
    </div>
    <div>
      <p class="ml-2 py-2 font-semibold text-sm px-5">BRAND</p>
      <ul class="ml-2 py-2 px-5">
        <li>
          <label>
            <Checkbox
              :count="100"
              text="Forever 21"
              val="Forever 21"
            />
          </label>
        </li>
        <li>
          <label>
            <Checkbox
              :count="100"
              text="Forever 21"
              val="Forever 21"
            />
          </label>
        </li>
        <li>
          <label>
            <Checkbox
              :count="100"
              text="Forever 21"
              val="Forever 21"
            />
          </label>
        </li>
        <li>
          <label>
            <Checkbox
              :count="100"
              text="Forever 21"
              val="Forever 21"
            />
          </label>
        </li>
        <li>
          <label>
            <Checkbox
              :count="100"
              text="Forever 21"
              val="Forever 21"
            />
          </label>
        </li>
        <li>
          <label>
            <Checkbox
              :count="100"
              text="Forever 21"
              val="Forever 21"
            />
          </label>
        </li>
        <li>
          <label>
            <Checkbox
              :count="100"
              text="Forever 21"
              val="Forever 21"
            />
          </label>
        </li>

      </ul>
    </div>

    <div>
      <p class="ml-2 py-2 font-semibold text-sm px-5">PRICE</p>
      <ul class="ml-2 py-2 px-5">
        <li>
          <Checkbox
            :count="100"
            text="Forever 21"
            val="Forever 21"
          />
        </li>
        <li>
          <label>
            <Checkbox
              :count="100"
              text="Forever 21"
              val="Forever 21"
            />
          </label>
        </li>
        <li>
          <label>
            <Checkbox
              :count="100"
              text="Forever 21"
              val="Forever 21"
            />
          </label>
        </li>
        <li>
          <label>
            <Checkbox
              :count="100"
              text="Forever 21"
              val="Forever 21"
            />
          </label>
        </li>
        <li>
          <label>
            <Checkbox
              :count="100"
              text="Forever 21"
              val="Forever 21"
            />
          </label>
        </li>
      </ul>
    </div>

    <div>
      <p class="ml-2 py-2 font-semibold text-sm px-5">COLOR</p>
      <ul class="ml-2 py-2 px-5">
        <li class="colour-listItem">
          <ColorCheckbox
            color="#ff0000"
            :count="100"
            text="Forever 21"
            val="Forever 21"
          />
        </li>
        <li class="colour-listItem">
          <ColorCheckbox
            color="#00ff00"
            :count="100"
            text="Forever 21"
            val="Forever 21"
          />
        </li>
        <li class="colour-listItem">
          <ColorCheckbox
            color="#0000ff"
            :count="100"
            text="Forever 21"
            val="Forever 21"
          />
        </li>
        <li class="colour-listItem">
          <ColorCheckbox
            color="yellow"
            :count="100"
            text="Forever 21"
            val="Forever 21"
          />
        </li>
        <li class="colour-listItem">
          <ColorCheckbox
            color="cyan"
            :count="100"
            text="Forever 21"
            val="Forever 21"
          />
        </li>
        <li class="colour-listItem">
          <ColorCheckbox
            color="orange"
            :count="100"
            text="Forever 21"
            val="Forever 21"
          />
        </li>
      </ul>
    </div>
    <div>
      <p class="ml-2 py-2 font-semibold text-sm px-5 py-2">DISCOUNT RANGE</p>
      <ul class="ml-2 py-2 text-gray-600 text-sm px-5 py-2">

        <li>
          <Radio />
        </li>
        <li>
          <Radio />
        </li>
        <li>
          <Radio />
        </li>
        <li>
          <Radio />
        </li>
        <li>
          <Radio />
        </li>
        <li>
          <Radio />
        </li>
        <li>
          <Radio />
        </li>

      </ul>
    </div>
  </div>
</template>
<script>
import Checkbox from "~/components/Checkbox";
import ColorCheckbox from "~/components/ColorCheckbox";
import Radio from "~/components/Radio";
export default {
  components: { Checkbox, ColorCheckbox, Radio }
};
</script>
<style scoped>
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
input[type="radio"] {
  margin-top: 0.4em;
}
</style>
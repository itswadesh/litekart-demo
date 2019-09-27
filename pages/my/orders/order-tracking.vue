<template>
  <div>
    <div class="bg-gray-100">
      <div class="flex flex-wrap py-4">
        <div class="w-1/12"></div>
        <div class="w-5/6 bg-white p-1 shadow">
          <div class="w-full flex text-xs p-1 border-b border-gray-200">
            <div class="w-4/12 px-2 border-r border-gray-200">
              <span class="text-gray-500">COURIER</span>
              <p class="font-semibold text-gray-700">Delivery</p>
            </div>
            <div class="w-4/12 px-2 border-r border-gray-200">
              <span class="text-gray-500">TRACKING ID</span>
              <p class="font-semibold text-gray-700">701836265094</p>
            </div>
            <div class="w-4/12 px-2 border-r border-gray-200">
              <span class="text-gray-500">ORDER ID</span>
              <p class="font-semibold text-gray-700">052212543788</p>
            </div>
            <div class="w-4/5 px-2">
              <span class="text-gray-500">LAST UPDATE</span>
              <p class="font-semibold text-gray-700">Lost on 24th june,o1:22pm</p>
            </div>
          </div>
          <div class="w-full flex text-xs p-2">
            <div class="w-11/12">
              <span class="text-gray-500">ORDER PLACED</span>
              <p class="font-semibold text-gray-700">22nd may 19</p>
            </div>
            <button class="px-5 right-0 focus:outline-none px-3 py-0 bg-pink-500 text-white font-semibold rounded-full">
              <i
                class="fa fa-share-alt"
                aria-hidden="true"
              ></i> Share
            </button>
          </div>
        </div>
        <div class="w-1/12"></div>
      </div>
      <div class="flex flex-wrap pb-3">
        <div class="w-1/12"></div>
        <div class="w-5/6 flex">
          <div class="w-8/12 shadow bg-white pb-5">
            <div class="border-b border-gray-200">
              <div class="flex justify-between p-3 text-gray-500 text-xs">
                <div>
                  ORDER
                  <br />PLACED
                </div>
                <div>DISPATCHED</div>
                <div>LOST</div>
              </div>
              <div class="w-full">
                <ol class="steps">
                  <li class="step is-active first"></li>
                  <li class="step second"></li>
                  <li class="step third"></li>
                </ol>
              </div>
            </div>
            <div class="p-3 h-40 overflow-y-scroll">
              <div class="w-full flex text-xs text-gray-700 mb-1">
                <div class="w-16 text-center font-semibold flex">
                  24
                  <br />Jun
                  <ul id="progress">
                    <li>
                      <div class="node green"></div>
                    </li>
                    <li>
                      <div class="divider grey"></div>
                    </li>
                  </ul>
                </div>
                <div class="w-full flex p-2 bg-pink-100">
                  <div class="w-1/3">
                    <span class="font-semibold">Location:</span>(Haryana)
                  </div>
                  <div class="w-1/3">
                    <span class="font-semibold">Time:</span>13:20
                  </div>
                  <div class="w-1/3">
                    <span class="font-semibold">Remark:</span>Returned as per client
                  </div>
                </div>
              </div>
              <div class="w-full flex text-xs text-gray-700 mb-1">
                <div class="w-16 text-center font-semibold flex">
                  24
                  <br />Jun
                  <ul id="progress">
                    <li>
                      <div class="node green"></div>
                    </li>
                    <li>
                      <div class="divider grey"></div>
                    </li>
                  </ul>
                </div>
                <div class="w-full flex p-2 bg-pink-100">
                  <div class="w-1/3">
                    <span class="font-semibold">Location:</span>(Haryana)
                  </div>
                  <div class="w-1/3">
                    <span class="font-semibold">Time:</span>13:20
                  </div>
                  <div class="w-1/3">
                    <span class="font-semibold">Remark:</span>Returned as per client
                  </div>
                </div>
              </div>
              <div class="w-full flex text-xs text-gray-700 mb-1">
                <div class="w-16 text-center font-semibold flex">
                  24
                  <br />Jun
                  <ul id="progress">
                    <li>
                      <div class="node green"></div>
                    </li>
                    <li>
                      <div class="divider grey"></div>
                    </li>
                  </ul>
                </div>
                <div class="w-full flex p-2 bg-pink-100">
                  <div class="w-1/3">
                    <span class="font-semibold">Location:</span>(Haryana)
                  </div>
                  <div class="w-1/3">
                    <span class="font-semibold">Time:</span>13:20
                  </div>
                  <div class="w-1/3">
                    <span class="font-semibold">Remark:</span>Returned as per client
                  </div>
                </div>
              </div>
              <div class="w-full flex text-xs text-gray-700 mb-1">
                <div class="w-16 text-center font-semibold flex">
                  24
                  <br />Jun
                  <ul id="progress">
                    <li>
                      <div class="node green"></div>
                    </li>
                    <li>
                      <div class="divider grey"></div>
                    </li>
                  </ul>
                </div>
                <div class="w-full flex p-2 bg-pink-100">
                  <div class="w-1/3">
                    <span class="font-semibold">Location:</span>(Haryana)
                  </div>
                  <div class="w-1/3">
                    <span class="font-semibold">Time:</span>13:20
                  </div>
                  <div class="w-1/3">
                    <span class="font-semibold">Remark:</span>Returned as per client
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-4"></div>
          <div class="w-4/12 shadow">
            <img
              src="banner-imgs.jpg"
              class="w-full h-56 object-cover"
            />
            <p class="p-3 bg-white text-gray-600">Hop300</p>
          </div>
        </div>
        <div class="w-1/12"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped>
.steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: table;
  table-layout: fixed;
  width: 100%;
  color: #929292;
  height: 2rem;
}
.steps > .step {
  position: relative;
  display: table-cell;
  text-align: center;
  font-size: 0.875rem;
  color: #6d6875;
}
.first:before {
  margin-left: 2rem;
}
.second:before {
  margin-left: 7.5rem;
}
.third:before {
  margin-left: 12rem;
}
.steps > .step:before {
  content: attr(data-step);
  display: block;
  background: #fff;
  border: 2px solid red;
  color: red;
  width: 0.8rem;
  height: 0.8rem;
  text-align: center;
  margin-bottom: -4.2rem;
  line-height: 1.9rem;
  border-radius: 100%;
  position: relative;
  z-index: 1;
  font-weight: 700;
  font-size: 1rem;
}
.steps > .step:after {
  content: "";
  position: absolute;
  display: block;
  background: red;
  width: 25rem;
  height: 0.125rem;
  top: 0.4rem;
  left: 15%;
}
.steps > .step:last-child:after {
  display: none;
}
.steps > .step.is-complete {
  color: #6d6875;
}
.steps > .step.is-complete:before {
  color: red;
  background: #fef0e2;
  border: 2px solid red;
}
.steps > .step.is-complete:after {
  background: #f68e20;
}
.steps > .step.is-active {
  font-size: 1.5rem;
}
.steps > .step.is-active:before {
  color: #fff;
  border: 2px solid red;
  background: red;
  margin-bottom: -4.9rem;
}
/* vertical scroll bar starts */
.node {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
  transition: all 1000ms ease;
}

.activated {
  box-shadow: 0px 0px 3px 2px rgb(224, 34, 174);
}

.divider {
  height: 40px;
  width: 2px;
  margin-left: 4px;
  transition: all 800ms ease;
}

li p {
  display: inline-block;
  margin-left: 25px;
}

li {
  list-style: none;
  line-height: 1px;
}

.blue {
  background-color: rgba(82, 165, 255, 1);
}
.green {
  background-color: rgb(224, 34, 174);
}
.red {
  background-color: rgba(255, 148, 148, 1);
}
.grey {
  background-color: rgb(224, 34, 174);
}
#progress {
  margin-left: 0.5rem;
}
/* vertical scroll bar ends */
</style>
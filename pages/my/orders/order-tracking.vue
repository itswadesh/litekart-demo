<template>
  <div>
    <div class="bg-gray-100">
      <div class="flex flex-wrap py-4">
        <div class="lg:w-1/12"></div>
        <div class="flex-1 bg-white shadow">
          <div class="flex w-full text-xs border-b border-gray-200">
            <div class="flex-1 p-2 border-r border-gray-200">
              <span class="text-gray-600">COURIER</span>
              <p class="text-gray-700 headings">Delivery</p>
            </div>
            <div class="flex-1 p-2 border-r border-gray-200">
              <span class="text-gray-600">TRACKING ID</span>
              <p class="text-gray-700 headings">701836265094</p>
            </div>
            <div class="flex-1 p-2 border-r border-gray-200">
              <span class="text-gray-600">ORDER ID</span>
              <p class="text-gray-700 headings">052212543788</p>
            </div>
            <div class="flex-1 p-2">
              <span class="text-gray-600">LAST UPDATE</span>
              <p class="text-gray-700 headings">Lost on 24th june,o1:22pm</p>
            </div>
          </div>
          <div class="flex w-full p-2 text-xs">
            <div class="w-11/12">
              <span class="text-gray-600">ORDER PLACED</span>
              <p class="text-gray-700 headings">22nd may 19</p>
            </div>
            <button
              class="right-0 flex items-center px-6 text-white rounded-full focus:outline-none primary"
            >
              <i class="mr-2 fa fa-share-alt" aria-hidden="true"></i> Share
            </button>
          </div>
        </div>
        <div class="lg:w-1/12"></div>
      </div>
      <div class="flex flex-wrap pb-3">
        <div class="w-1/12"></div>
        <div class="lg:w-5/6 lg:flex">
          <div class="pb-5 bg-white shadow lg:w-8/12">
            <div class="border-b border-gray-200">
              <div class="flex justify-between p-3 text-xs text-gray-500">
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
            <div class="h-40 p-3 overflow-y-auto">
              <div class="flex w-full mb-1 text-xs text-gray-700">
                <div class="flex w-16 font-semibold text-center">
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
                <div class="flex w-full p-2 bg-pink-100">
                  <div class="w-1/3">
                    <span class="font-semibold">Location:</span>(Haryana)
                  </div>
                  <div class="w-1/3">
                    <span class="font-semibold">Time:</span>13:20
                  </div>
                  <div class="w-1/3">
                    <span class="font-semibold">Remark:</span>Returned as per
                    client
                  </div>
                </div>
              </div>
              <div class="flex w-full mb-1 text-xs text-gray-700">
                <div class="flex w-16 font-semibold text-center">
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
                <div class="flex w-full p-2 bg-pink-100">
                  <div class="w-1/3">
                    <span class="font-semibold">Location:</span>(Haryana)
                  </div>
                  <div class="w-1/3">
                    <span class="font-semibold">Time:</span>13:20
                  </div>
                  <div class="w-1/3">
                    <span class="font-semibold">Remark:</span>Returned as per
                    client
                  </div>
                </div>
              </div>
              <div class="flex w-full mb-1 text-xs text-gray-700">
                <div class="flex w-16 font-semibold text-center">
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
                <div class="flex w-full p-2 bg-pink-100">
                  <div class="w-1/3">
                    <span class="font-semibold">Location:</span>(Haryana)
                  </div>
                  <div class="w-1/3">
                    <span class="font-semibold">Time:</span>13:20
                  </div>
                  <div class="w-1/3">
                    <span class="font-semibold">Remark:</span>Returned as per
                    client
                  </div>
                </div>
              </div>
              <div class="flex w-full mb-1 text-xs text-gray-700">
                <div class="flex w-16 font-semibold text-center">
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
                <div class="flex w-full p-2 bg-pink-100">
                  <div class="w-1/3">
                    <span class="font-semibold">Location:</span>(Haryana)
                  </div>
                  <div class="w-1/3">
                    <span class="font-semibold">Time:</span>13:20
                  </div>
                  <div class="w-1/3">
                    <span class="font-semibold">Remark:</span>Returned as per
                    client
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-4"></div>
          <div class="mt-2 shadow lg:w-4/12 lg:mt-0">
            <img
              src="/banner-imgs.jpg"
              class="object-cover w-full h-56"
              alt=""
            />
            <p class="p-3 text-gray-600 bg-white">Hop300</p>
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
}
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
  background-image: linear-gradient(to bottom, #fb6340 0%, #da1c5f 100%);
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
  content: '';
  position: absolute;
  display: block;
  background: linear-gradient(87deg, #fb6340, #da1c5f);
  width: 25rem;
  height: 0.125rem;
  top: 0.4rem;
  left: 15%;
}
.steps > .step:last-child:after {
  display: none;
}
.steps > .step.is-complete:before {
  color: linear-gradient(87deg, #fb6340, #da1c5f) !important;
  background: #fef0e2;
  border: 2px solid linear-gradient(87deg, #fb6340, #da1c5f);
}
.steps > .step.is-active {
  font-size: 1.5rem;
}
.steps > .step.is-active:before {
  color: #fff;
  border: 2px solid linear-gradient(87deg, #fb6340, #da1c5f);
  background: linear-gradient(87deg, #fb6340, #da1c5f) !important;
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

.green {
  background-color: rgb(224, 34, 174);
}
.grey {
  background-color: rgb(224, 34, 174);
}
#progress {
  margin-left: 0.5rem;
}
/* vertical scroll bar ends */
@media only screen and (max-width: 640px) {
  .second:before {
    margin-left: 4rem;
  }
  .third:before {
    margin-left: 6rem;
  }
  .steps > .step:after {
    width: 12rem;
    left: 30%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .second:before {
    margin-left: 4rem;
  }
  .third:before {
    margin-left: 14rem;
  }
  .steps > .step:after {
    width: 27.5rem;
    left: 17%;
  }
}
@media only screen and (min-width: 1024px) and (max-width: 1266px) {
  .second:before {
    margin-left: 4rem;
  }
  .third:before {
    margin-left: 10rem;
  }
  .steps > .step:after {
    width: 20rem;
    left: 18%;
  }
}
</style>

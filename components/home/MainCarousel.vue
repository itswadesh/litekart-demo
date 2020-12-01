<template>
  <div class="relative mt-2 mb-2 bg-white shadow-2xl carousel">
    <div class="relative w-full overflow-hidden carousel-inner">
      <!--Slide 1-->
      <input
        class="carousel-open"
        type="radio"
        id="carousel-1"
        name="carousel"
        aria-hidden="true"
        hidden
        checked="checked"
      />
      <div class="absolute h-64 opacity-0 carousel-item">
        <div class="block w-full h-full text-5xl text-center text-white bg-indigo-500">Slide 1</div>
      </div>
      <label
        for="carousel-3"
        class="absolute inset-y-0 left-0 z-10 hidden w-10 h-10 my-auto ml-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer prev control-1 md:ml-10 hover:text-white hover:bg-blue-700"
      >‹</label>
      <label
        for="carousel-2"
        class="absolute inset-y-0 right-0 z-10 hidden w-10 h-10 my-auto text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer next control-1 md:mr-10 hover:text-white hover:bg-blue-700"
      >›</label>

      <!--Slide 2-->
      <input
        class="carousel-open"
        type="radio"
        id="carousel-2"
        name="carousel"
        aria-hidden="true"
        hidden
      />
      <div class="absolute h-64 opacity-0 carousel-item">
        <div class="block w-full h-full text-5xl text-center text-white bg-orange-500">Slide 2</div>
      </div>
      <label
        for="carousel-1"
        class="absolute inset-y-0 left-0 z-10 hidden w-10 h-10 my-auto ml-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer prev control-2 md:ml-10 hover:text-white hover:bg-blue-700"
      >‹</label>
      <label
        for="carousel-3"
        class="absolute inset-y-0 right-0 z-10 hidden w-10 h-10 my-auto mr-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer next control-2 md:mr-10 hover:text-white hover:bg-blue-700"
      >›</label>

      <!--Slide 3-->
      <input
        class="carousel-open"
        type="radio"
        id="carousel-3"
        name="carousel"
        aria-hidden="true"
        hidden
      />
      <div class="absolute h-64 opacity-0 carousel-item">
        <div class="block w-full h-full text-5xl text-center text-white bg-green-500">Slide 3</div>
      </div>
      <label
        for="carousel-2"
        class="absolute inset-y-0 left-0 z-10 hidden w-10 h-10 my-auto ml-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer prev control-3 md:ml-10 hover:text-white hover:bg-blue-700"
      >‹</label>
      <label
        for="carousel-1"
        class="absolute inset-y-0 right-0 z-10 hidden w-10 h-10 my-auto mr-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer next control-3 md:mr-10 hover:text-white hover:bg-blue-700"
      >›</label>

      <!-- Add additional indicators for each slide-->
      <ol class="hidden max-w-xs carousel-indicators">
        <li class="inline-block mr-3">
          <label
            for="carousel-1"
            class="block text-4xl text-white cursor-pointer focus:outline-none carousel-bullet hover:text-blue-700"
          >•</label>
        </li>
        <li class="inline-block mr-3">
          <label
            for="carousel-2"
            class="block text-4xl text-white cursor-pointer focus:outline-none carousel-bullet hover:text-blue-700"
          >•</label>
        </li>
        <li class="inline-block mr-3">
          <label
            for="carousel-3"
            class="block text-4xl text-white cursor-pointer focus:outline-none carousel-bullet hover:text-blue-700"
          >•</label>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}
.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}
#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}
.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}
#carousel-1:checked
  ~ .control-1
  ~ .carousel-indicators
  li:nth-child(1)
  .carousel-bullet,
#carousel-2:checked
  ~ .control-2
  ~ .carousel-indicators
  li:nth-child(2)
  .carousel-bullet,
#carousel-3:checked
  ~ .control-3
  ~ .carousel-indicators
  li:nth-child(3)
  .carousel-bullet {
  color: #2b6cb0;
}
</style>
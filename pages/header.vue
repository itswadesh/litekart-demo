<template>
  <div>
    <center>
      <div class="floating-form">
        <div class="floating-label">
          <input
            class="w-full bg-gray-200 border-b rounded floating-input hover:bg-gray-300 focus:outline-none focus:border-pink-500"
            type="text"
            placeholder=" "
            required
          />
          <span class="highlight"></span>
          <label>Text</label>
        </div>
      </div>
    </center>
  </div>
</template>

<script>
// export default {
//   data() {
//     return {
//       cls: ""
//     };
//   },
//   mounted() {
//     if (process.client) {
//       window.addEventListener("scroll", () => {
//         let scrolled = window.scrollY;
//         this.cls = scrolled > 147 ? "fix-search" : "";
//       });
//     }
//   }
// };
</script>

<style scoped>
.floating-form {
  width: 320px;
}

/****  floating-Lable style start ****/
.floating-label {
  position: relative;
  margin-bottom: 20px;
}
.floating-input {
  font-size: 14px;
  padding: 4px 4px;
  display: block;
  width: 100%;
  height: 48px;
  padding: 14px 12px 0;
  background-color: lightgray;
  border: none;
}

.floating-input:focus {
  outline: none;
  border-bottom: 2px solid #da1c5f;
}

label {
  color: #999;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 8px;
  top: 13px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.floating-input:focus ~ label,
.floating-input:not(:placeholder-shown) ~ label {
  top: -1px;
  font-size: 14px;
  color: #5264ae;
}

.floating-select:focus ~ label,
.floating-select:not([value=""]):valid ~ label {
  top: -18px;
  font-size: 14px;
  color: #5264ae;
}
</style>
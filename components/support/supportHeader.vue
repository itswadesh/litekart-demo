<template>
  <div class="header header-background header-color">
    <div class="top-header">
      <div class="responsive-top-logo-and-login">
        <div class="faq-logo">
          <nuxt-link to="/" style="color: white">
            <img
              :src="
                `${$store.state.settings.CDN_URL}/${$store.state.settings.logo}`
              "
              alt=""
              style="width: 80px;height: 16px;position: relative;top:4px"
          /></nuxt-link>
        </div>
        <div class="flex mr-4">
          <div class="flex">
            <nuxt-link to="/" class="flex mr-4 header-color">
              <svg
                _ngcontent-c8=""
                height="16"
                viewBox="0 0 16 16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                style="position: relative;top:2px"
                class="mr-1"
              >
                <path
                  _ngcontent-c8=""
                  d="M8.042 14.514A6.519 6.519 0 0 1 1.519 8a6.519 6.519 0 0 1 6.523-6.514 6.521 6.521 0 0 1 6.47 5.681h-6.91l2.01-2.007a.832.832 0 1 0-1.178-1.178L5 7.412a.83.83 0 0 0 0 1.177l3.433 3.429a.834.834 0 0 0 1.178-1.178l-2.01-2.007h6.91a6.521 6.521 0 0 1-6.47 5.681z"
                  fill-rule="nonzero"
                  fill="#fff"
                ></path>
              </svg>
              <div class="back-to-shop-text">BACK TO SHOPPING</div>
              <div class="home-text">Home</div>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/account/login" class="header-color"
              ><span v-if="!user">SIGN IN</span
              ><span v-else @click="logout()">SIGN OUT</span></nuxt-link
            >
          </div>
        </div>
      </div>
      <div class="help-heading">
        Hi. How can we help?
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout").then(() => {});
    },
  },
  mounted() {
    this.user = this.$store.state.auth.user;
    console.log(this.user);
  },
};
</script>
<style scoped>
.responsive-top-logo-and-login {
  display: flex;
  justify-content: space-between;
  height: 70px;
  padding: 32px 0 24px 0;
}
.top-header {
  width: 60%;
  margin: auto;
}
.help-heading {
  width: 100%;
  text-align: center;
  font-size: 40px;
  font-weight: bolder;
  padding: 40px 0 40px 0;
  font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
}
.header-color {
  color: white;
}
.header-background {
  background-image: url(data:image/png;base64,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);
}
.header {
  width: 100%;
  background-color: #359f90;
}
.login-area {
  display: flex;
  justify-content: space-between;
  width: 250px;
}

@media only screen and (max-width: 600px) {
  .help-heading {
    padding: 0 0 25px 0;
  }
  .responsive-top-logo-and-login {
    padding: 20px 4px 24px 20px;
  }
  .login-area {
    justify-content: space-evenly;
    width: 200px;
  }

  .back-to-shop-text {
    display: none;
  }

  .home-text {
    display: initial;
  }
  .help-heading {
    font-size: 24px;
  }
  .top-header {
    width: 100%;
  }
}

@media only screen and (min-width: 600px) {
  .help-heading {
    padding: 0 0 25px 0;
  }
  .responsive-top-logo-and-login {
    padding: 20px 4px 24px 20px;
  }
  .login-area {
    justify-content: space-evenly;
    width: 200px;
  }
  .back-to-shop-text {
    display: none;
  }
  .home-text {
    display: initial;
  }
  .help-heading {
    font-size: 28px;
  }
  .top-header {
    width: 100%;
  }
}

@media only screen and (min-width: 768px) {
  .help-heading {
    padding: 10px 0 25px 0;
  }
  .responsive-top-logo-and-login {
    padding: 20px 4px 24px 20px;
  }
  .login-area {
    justify-content: space-evenly;
    width: 250px;
  }
  .back-to-shop-text {
    display: initial;
  }
  .home-text {
    display: none;
  }
  .help-heading {
    font-size: 32px;
  }
  .top-header {
    width: 80%;
  }
}

@media only screen and (min-width: 992px) {
  .help-heading {
    padding: 30px 0 35px 0;
  }
  .responsive-top-logo-and-login {
    padding: 20px 20px 24px 20px;
  }
  .back-to-shop-text {
    display: initial;
  }
  .home-text {
    display: none;
  }
  .help-heading {
    font-size: 34px;
  }
  .top-header {
    width: 85%;
  }
}
@media only screen and (min-width: 1200px) {
  .help-heading {
    padding: 35px 0 40px 0;
  }
  .responsive-top-logo-and-login {
    padding: 20px 0 24px 0;
  }
  .back-to-shop-text {
    display: initial;
  }
  .home-text {
    display: none;
  }
  .help-heading {
    font-size: 40px;
  }
  .top-header {
    width: 85%;
  }
}
</style>

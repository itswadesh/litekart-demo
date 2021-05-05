<template>
  <div style="background-color:#2a3441; width: 100% ">
    <div class="faq-footer">
      <div class="footer-block mobile-view">
        <div class="footer-content">
          <nuxt-link to="/">
            <div
              class="image-align-center-footer"
              style="position: relative;top:-3px"
            >
              <img
                :src="
                  `${$store.state.settings.CDN_URL}/${$store.state.settings.logo}`
                "
                alt=""
                style="width: 80px;height: 16px;position: relative;top:4px"
              />
            </div>
          </nuxt-link>
          <div class="footer-sub-content">
            © 2014 - 2020 Litekart. All rights reserved
          </div>
        </div>
      </div>
      <div class="footer-block ">
        <div class="footer-icon">
          <svg
            _ngcontent-c16=""
            class="icon-email"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              _ngcontent-c16=""
              d="M14.435 15.299V9.542a.838.838 0 0 0-.834-.84C10.867 8.416 9.5 9.515 9.5 12c0 2.2.832 3.299 2.499 3.299h2.436c2.565.034 5.065-1.447 5.065-4.966 0-4.695-4.249-5.833-6.667-5.833C11.45 4.5 4.5 4.692 4.5 12c0 .822-.123 7.5 6.667 7.5h4.166"
              fill="none"
              fill-rule="evenodd"
              stroke="#FFF"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.6"
            ></path>
          </svg>
        </div>
        <div class="footer-content">
          E-mail us at for 24/7 support
          <div class="footer-sub-content">
            support@litekart.com
          </div>
        </div>
      </div>
      <div class="footer-block ">
        <div class="footer-icon">
          <svg
            class="icon-call"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              _ngcontent-c17=""
              d="M10.725 13.202c1.405 1.457 3.57 1.822 3.57 1.822l1.19-.893a1 1 0 0 1 .6-.2h1.489c.728 0 1.093.364 1.093 1.093v2.914c0 .729 0 .734-1.44.729-3.214-.094-6.657-1.01-8.732-3.248-2.231-2.076-3.067-5.436-3.161-8.645-.005-1.44 0-1.44.729-1.44h2.914c.729 0 1.093.364 1.093 1.092v1.489a1 1 0 0 1-.2.6l-.89 1.19c0 .366.289 2.092 1.745 3.497z"
              fill="none"
              fill-rule="evenodd"
              stroke="#FFF"
              stroke-width="1.6"
            ></path>
          </svg>
        </div>
        <div class="footer-content">
          Call us 11 AM to 6 PM (Mon to Sat)
          <div class="footer-sub-content">
            +91-00000-00000
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.footer-sub-content {
  font-size: 12px;
  line-height: 14px;
  opacity: 0.5;
}
.footer-icon {
  padding-right: 10px;
  height: 32px;
  width: 32px;
}
.footer-block {
  width: 100%;
  color: white;
  padding: 35px 20px 25px 0;
  display: flex;
}
.faq-footer {
  display: flex;
  width: 70%;
  margin: auto;
  flex-direction: row;
  background-color: #2a3441;
}
.image-align-center-footer {
  text-align: center;
}
@media only screen and (max-width: 600px) {
  .image-align-center-footer {
    text-align: center !important;
  }
  .mobile-view {
    justify-content: center;
    padding-top: 38px !important;
    padding-bottom: 35px !important;
    order: 3;
    background-color: #16202d !important;
  }
  .footer-block {
    padding: 25px 25px 5px 25px;
  }
  .faq-footer {
    flex-direction: column;
    width: 100%;
  }
}

@media only screen and (min-width: 600px) {
  .image-align-center-footer {
    text-align: center !important;
  }
  .mobile-view {
    justify-content: center;
    padding-top: 38px !important;
    padding-bottom: 35px !important;
    order: 3;
    background-color: #16202d !important;
  }
  .footer-block {
    padding: 25px 25px 5px 25px;
  }
  .faq-footer {
    flex-direction: column;
    width: 100%;
  }
}

@media only screen and (min-width: 768px) {
  .image-align-center-footer {
    text-align: initial !important;
  }
  .mobile-view {
    justify-content: initial;
    padding: 25px !important;
    order: initial;
    background-color: #2a3441 !important;
  }
  .footer-block {
    padding: 30px 20px 15px 24px !important;
  }
  .faq-footer {
    flex-direction: row;
    width: 100%;
  }
}

@media only screen and (min-width: 992px) {
  .image-align-center-footer {
    text-align: initial !important;
  }
  .footer-block {
    padding: 30px 20px 15px 24px !important;
  }
  .faq-footer {
    flex-direction: row;
  }
  .faq-footer {
    flex-direction: row;
    width: 80%;
  }
}

@media only screen and (min-width: 1200px) {
  .image-align-center-footer {
    text-align: initial !important;
  }
  .mobile-view {
    justify-content: initial;
    padding: 25px !important;
    order: initial;
    background-color: #2a3441 !important;
  }
  .footer-block {
    padding: 30px 20px 15px 24px !important;
  }
  .faq-footer {
    flex-direction: row;
  }
  .faq-footer {
    flex-direction: row;
    width: 70%;
  }
}
</style>

<template>
  <div>
    <Header />
    <HeaderBody />
    <div>
      <LeftSideBar />
    <RightSideBar />
    </div>
    <Footer/>
    <!-- <div class="chat-notification">
      <div class="chat-notification-logo-wrapper">
        <img
          class="chat-notification-logo"
          src="/logo.svg"
          alt="ChitChat Logo"
        >
      </div>
      <div class="chat-notification-content">
        <h4 class="chat-notification-title">ChitChat</h4>
        <p class="chat-notification-message">You have a new message!</p>
      </div>
    </div> -->
  </div>
</template>
<script>
import Footer from "~/components/Footer";
import LeftSideBar from "~/components/LeftSideBar";
import RightSideBar from "~/components/RightSideBar";
import Header from "~/components/Header";
import HeaderBody from "~/components/HeaderBody";
import Logo  from "~/components/Logo";
import Button  from "~/components/Button";
export default {
    components:{
        Logo,Button,Header,HeaderBody,Footer,LeftSideBar
    }
}
</script>
<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.chat-notification {
  display: flex;
  max-width: 24rem;
  margin: 0 auto;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.chat-notification-logo-wrapper {
  flex-shrink: 0;
}
.chat-notification-logo {
  height: 3rem;
  width: 3rem;
}
.chat-notification-content {
  margin-left: 1.5rem;
  padding-top: 0.25rem;
}
.chat-notification-title {
  color: #1a202c;
  font-size: 1.25rem;
  line-height: 1.25;
}
.chat-notification-message {
  color: #718096;
  font-size: 1rem;
  line-height: 1.5;
}
</style>

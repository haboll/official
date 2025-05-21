<template>
  <div class="m-wrap">
    <m-header></m-header>
    <m-home></m-home>
    <m-about-us></m-about-us>
    <m-business></m-business>
    <m-success-case></m-success-case>
    <m-other-case></m-other-case>
    <m-form></m-form>
    <m-qr-display></m-qr-display>
    <m-copyright></m-copyright>
  </div>
</template>
<script setup>
import MHeader from "./header.vue"
import MHome from "./home.vue"
import MAboutUs from "./aboutUs.vue"
import MBusiness from "./business.vue"
import MSuccessCase from "./successCase.vue"
import MOtherCase from "./otherCase.vue"
import MForm from "./form.vue"
import MQrDisplay from "./qrDisplay.vue"
import MCopyright from "./copyright.vue"

</script>
<style scoped lang="less">
.m-wrap {
  width: 100%;
  height: 100%;
  font-size: 12px;
  background-color: #05193D;
  -webkit-overflow-scrolling: touch;
  /* 启用惯性滚动 */
  scroll-behavior: smooth;
  /* 平滑滚动 */
  overflow-y: auto;
}
</style>

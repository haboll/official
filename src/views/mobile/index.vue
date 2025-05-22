<template>
  <div class="m-container">
    <m-header @contactUs="handleContactUs" :isMoving="isMoving"></m-header>
    <div class="m-wrap" id="wrapper">
      <div class="m-content">
        <m-home></m-home>
        <m-about-us></m-about-us>
        <m-business></m-business>
        <m-success-case></m-success-case>
        <m-other-case></m-other-case>
        <m-form id="m-form"></m-form>
        <m-qr-display></m-qr-display>
        <m-copyright></m-copyright>
        
      </div>
    </div>
  </div>

</template>
<script setup>
import BScroll from "better-scroll"
import MHeader from "./header.vue"
import MHome from "./home.vue"
import MAboutUs from "./aboutUs.vue"
import MBusiness from "./business.vue"
import MSuccessCase from "./successCase.vue"
import MOtherCase from "./otherCase.vue"
import MForm from "./form.vue"
import MQrDisplay from "./qrDisplay.vue"
import MCopyright from "./copyright.vue"
import { onMounted, nextTick, ref } from "vue"

const isMoving = ref(false)

onMounted(() => {
  nextTick(() => {
    const wrapper = document.getElementById("wrapper")
    scroll = new BScroll(wrapper, {
      scrollY: true,
      click: true
    })
    scroll.on("scrollStart", () => {
      isMoving.value = true
      scroll.refresh()
    })
    scroll.on("scrollEnd", () => {
      isMoving.value = false
      scroll.refresh()
    })
  })
})



const handleContactUs = () => {
  // Handle contact us button click
  scroll.scrollToElement("#m-form", 1000, 0, -200)
}




</script>
<style scoped lang="less">

.m-container {
  width: 100%;
  height: 100%;
  background-color: #05193D;
}
.m-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 12px;
  /* 平滑滚动 */
  overflow: hidden;
}
.m-content {
  width: 100%;
}
</style>

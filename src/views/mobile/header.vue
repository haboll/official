<template>
  <transition name="moving">
    <div v-show="!props.isMoving" class="header">
      <div class="header-left"></div>
      <button class="header-button" @click="contactUs">联系我们</button>
    </div>
  </transition>

</template>
<script setup>
import { defineEmits, defineProps } from "vue";
const emit = defineEmits(["contactUs"]);
const props = defineProps({ isMoving: Boolean });
const contactUs = () => {
  // Handle contact us button click
  console.log("Contact Us button clicked");
  emit("contactUs");
};
</script>
<style scoped lang="less">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 0 20px;
  justify-content: space-between;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  background-color: #05193D;
  z-index: 100;
}

.moving-enter-active,
.moving-leave-active {
  transition: all 1s ease;
}

.moving-leave-to {
  top: -80px;
  opacity: 0;
}

.header-left {
  width: 98px;
  height: 21px;
  background-size: contain;
  background-position: 100% 100%;
  background-repeat: no-repeat;
  background-image: url("/src/assets/image/logo.png");
}

.header-button {
  width: 82px;
  height: 30px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 30px;
}
</style>

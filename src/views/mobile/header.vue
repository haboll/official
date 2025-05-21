<template>
  <div class="header">
    <div class="header-left"></div>
    <button class="header-button">联系我们</button>
  </div>
</template>
<script setup>

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

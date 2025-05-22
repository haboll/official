<template>
  <div class="m-company-desc">
    智想新知©️{{year}}&nbsp;&nbsp;&nbsp;&nbsp;京ICP备2022011202号-1
  </div>
</template>
<script setup>
const year = new Date().getFullYear();
</script>
<style scoped lang="less">
.m-company-desc {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
}
</style>

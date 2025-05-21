<template>
  <div class="home">
    <div class="home-top">
      <div class="home-title"></div>
      <div class="home-subtitle">专业、用心、诚信、长期主义</div>
    </div>
    <videoContainer class="home-video" videoSrc="/src/assets/media/mobile_home.webm"></videoContainer>
    <div class="home-bottom">
      <div class="btn-wrap">
        <div class="btn">滑动继续</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import videoContainer from '/src/components/videoContainer.vue';
</script>
<style scoped lang="less">
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  box-sizing: border-box;
}

.home-title {
  width: 246px;
  height: 41px;
  background-image: url("/src/assets/image/jieguo.png");
  margin: 20px auto;
  background-repeat: no-repeat;
  background-size: contain;
}

.home-subtitle {
  width: 100%;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 26px;
  font-size: 18px;
}

.home-video {
  width: 100%;
  flex: 1;
  overflow: hidden;
}

.home-bottom {
  flex: 0 0 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}

.btn-wrap {
  width: 216px;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.04);
  border-radius: 31px;
}

.btn {
  position: relative;
  /* 为伪元素定位提供基准 */
  overflow: hidden;
  width: 200px;
  height: 46px;
  background: linear-gradient(180deg, rgba(9, 90, 252, 0.2) 0%, rgba(9, 102, 252, 0) 100%);
  border: none;
  border-radius: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 扫光效果实现 */
.btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  /* 控制扫光宽度 */
  height: 100%;
  background: linear-gradient(to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.308) 48%,
      rgba(255, 255, 255, 0) 100%);
  transform: skewX(-30deg);
  /* 倾斜角度 */
  animation: sweep 3s infinite ease-in-out;
}

@keyframes sweep {
  0% {
    transform: translateX(-100%) skewX(-20deg);
  }

  100% {
    transform: translateX(200%) skewX(-20deg);
    /* 200%确保完全移出容器 */
  }
}
</style>
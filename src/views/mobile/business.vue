<template>
  <div class="business">
    <div class="business-title"></div>
    <div class="business-subtitle">大模型&数字化转型咨询、端到端技术交付</div>
    <MediaCard v-for="item in mediaData" :key="item.imageUrl" :videoSrc="item.videoSrc" :imageUrl="item.imageUrl"
      :imageAlt="item.imageAlt" />
  </div>
</template>
<script setup>

import MediaCard from '@/components/mediaCard.vue';

const mediaData = [
  {
    videoSrc: "src/assets/video/mobile_home.webm",
    imageUrl: "src/assets/image/zhineng.png",
    imageAlt: "智能体Agent",
  },
  {
    videoSrc: "src/assets/video/mobile_home.webm",
    imageUrl: "src/assets/image/zhinengzhishi.png",
    imageAlt: "智能知识库",
  },
  {
    videoSrc: "src/assets/video/mobile_home.webm",
    imageUrl: "src/assets/image/ChatBI.png",
    imageAlt: "ChatBI",
  },
  {
    videoSrc: "src/assets/video/mobile_home.webm",
    imageUrl: "src/assets/image/chuizhi.png",
    imageAlt: "垂直领域大模型",
  }
]
</script>
<style scoped lang="less">
.business {
  width: 100%;
}

.business-title {
  width: 96px;
  height: 29px;
  background-image: url("/src/assets/image/zhuying.png");
  background-repeat: no-repeat;
  background-size: contain;
  margin: 20px auto 12px;
}

.business-subtitle {
  width: 100%;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 17px;
  text-align: center;
  margin-bottom: 16px;
}
</style>

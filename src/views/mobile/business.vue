<template>
  <div class="business">
    <div class="business-title"></div>
    <div class="business-subtitle">大模型&数字化转型咨询、端到端技术交付</div>
    <media-card v-animate v-for="item in mediaData" :key="item.imageUrl" v-bind="item"></media-card>
  </div>
</template>
<script setup>

import MediaCard from '@/components/mediaCard.vue';

const mediaData = [
  {
    videoSrc: "src/assets/media/agent.mp4",
    imageUrl: "src/assets/image/zhineng.png",
    imageAlt: "智能体Agent",
  },
  {
    videoSrc: "src/assets/media/zhinengzhishi.mp4",
    imageUrl: "src/assets/image/zhinengzhishi.png",
    imageAlt: "智能知识库",
  },
  {
    videoSrc: "src/assets/media/CHATBI.mp4",
    imageUrl: "src/assets/image/ChatBI.png",
    imageAlt: "ChatBI",
  },
  {
    videoSrc: "src/assets/media/chuizhilingyu.mp4",
    imageUrl: "src/assets/image/chuizhi.png",
    imageAlt: "垂直领域大模型",
  }
]
</script>
<style scoped lang="less">
.business {
  width: 100%;
  margin-bottom: 80px;
  padding: 0px 18px;
  box-sizing: border-box;
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

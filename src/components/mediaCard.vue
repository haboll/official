<template>
  <div class="media-card">
    <!-- 图片容器 -->
    <div class="media-video-wrapper">
      <video-container class="media-video" :videoSrc="videoSrc"></video-container>
    </div>
    <div class="media-image">
      <!-- 文字图片 -->
      <img :src="imageUrl" :alt="imageAlt">
    </div>
  </div>
</template>

<script setup>
import VideoContainer from './videoContainer.vue';
const props = defineProps({
  // 视频地址
  videoSrc: {
    type: String,
    required: true
  },
  // 图片地址
  imageUrl: {
    type: String,
    required: true
  },
  // 图片描述
  imageAlt: {
    type: String,
    default: ''
  },
});
</script>

<style scoped>
.media-card {
  width: 100%;
}

.media-video-wrapper {
  position: relative;
  width: 354px;
  height: 260px;
  padding: 10px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.01);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.media-video {
  width: 100%;
  height: 100%;
}

.media-image {
  width: 100%;
  margin: 10px 0;
  &>img {
    height: 22px;
  }
}
</style>
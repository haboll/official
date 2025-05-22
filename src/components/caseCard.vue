<template>
  <div :class="['vertical-container', { 'is-success': isSuccess }]">
    <!-- 渐变圆形按钮 -->
    <div class="gradient-btn">{{ buttonText }}</div>

    <!-- 主图片展示 -->
    <div v-if="!isSuccess" v-rotate-border class="main-media-container">
      <video-container class="main-image" :videoSrc="videoSrc"></video-container>
    </div>

    <!-- 标题图片 -->
    <div class="title-image-container">
      <img :src="titleImage" :alt="titleAlt" class="title-image" :style="{ height: titleHeight }">
    </div>

    <!-- 文字介绍 -->
    <div class="description">
      <pre>{{ content }}</pre>
    </div>

    <!-- 主图片展示 -->
    <div v-if="isSuccess" class="main-image-container">
      <img :src="mainImage" :alt="mainAlt" class="main-image">
    </div>
  </div>
</template>

<script setup>
import VideoContainer from './videoContainer.vue';
const props = defineProps({
  // 按钮相关
  buttonText: {
    type: String,
    default: ''
  },
  gradientColors: {
    type: Array,
    default: () => ['#ff6b6b', '#4ecdc4']
  },

  // 标题图片
  titleImage: {
    type: String,
    required: true
  },
  titleAlt: {
    type: String,
    default: ''
  },
  titleHeight: {
    type: String,
    default: ''
  },

  // 文字内容
  content: {
    type: String,
    required: true
  },

  // 主图片
  mainImage: {
    type: String,
    default: ''
  },
  mainAlt: {
    type: String,
    default: ''
  },
  videoSrc: {
    type: String,
    default: ''
  },
  // 成功案例， 图片展示在文本上方
  isSuccess: {
    type: Boolean,
    default: false
  }
});

</script>

<style scoped>
.vertical-container {
  padding: 10px 18px;
  margin-bottom: 30px;
  box-sizing: border-box;
}

.is-success {

  .title-image-container,
  .description {
    margin-top: 20px;
  }

  .title-image {
    height: 29px;
  }
}

/* 按钮样式 */
.gradient-btn {
  width: 40px;
  height: 20px;
  line-height: 20px;
  border-radius: 10px;
  color: white;
  font-size: 8px;
  margin: auto;
  background: linear-gradient(270deg, #8C0BFC 0%, #0B42FC 100%);
}

.gradient-btn:hover {
  transform: scale(1.1);
}

/* 标题图片 */
.title-image-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px auto 0;
}


.title-image {
  max-width: 100%;
  height: 17px;
  object-fit: contain;
  margin: 8px auto 0;
}

/* 文字介绍 */
.description {
  font-size: 0.65rem;
  margin-top: 8px;
}

.description pre {
  white-space: pre-wrap;
  font-family: inherit;
  margin: 0;
  color: rgba(255, 255, 255, 0.5);
}

/* 主图片区域 */
.main-media-container {
  position: relative;
  margin-top: 16px;
}

.main-image-container {
  position: relative;
  margin-top: 16px;
  margin-top: 32px;
  padding: 6px;
  box-sizing: border-box;
}

.main-image {
  width: 353px;
  height: 191px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
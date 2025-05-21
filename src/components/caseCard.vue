<template>
  <div class="vertical-container">
    <!-- 渐变圆形按钮 -->
    <div class="gradient-btn" >{{ buttonText }}</div>

    <!-- 主图片展示 -->
    <div v-if="isSuccess" class="main-image-container">
      <img :src="mainImage" :alt="mainAlt" class="main-image"  >
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
    <div v-if="!isSuccess" class="main-image-container">
      <img :src="mainImage" :alt="mainAlt" class="main-image">
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  // 按钮相关
  buttonText: {
    type: String,
    default: '点击'
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
    default: '标题图片'
  },
   titleHeight: {
    type: String,
    default: '29px'
  },

  // 文字内容
  content: {
    type: String,
    required: true
  },

  // 主图片
  mainImage: {
    type: String,
    required: true
  },
  mainAlt: {
    type: String,
    default: '主图'
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
  padding: 1.5rem;
  margin-top: 60px;
}

/* 按钮样式 */
.gradient-btn {
  width: 4rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: 2rem;
  color: white;
  font-size: 0.8rem;
  margin: auto;
  background: linear-gradient(270deg,#8C0BFC 0%, #0B42FC 100%);
}

.gradient-btn:hover {
  transform: scale(1.1);
}

/* 标题图片 */
.title-image-container {
  width: 100%;
  margin-bottom: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
}

.title-image {
  max-width: 100%;
  object-fit: contain;
}

/* 文字介绍 */
.description {
  font-size: 0.65rem;
  
}

.description pre {
  white-space: pre-wrap;
  font-family: inherit;
  margin: 0;
  color: rgba(255, 255, 255, 0.5);
}

/* 主图片区域 */
.main-image-container {
  position: relative;
  margin: 16px 0;
}

.main-image {
  width: 353px;
  height: 191px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
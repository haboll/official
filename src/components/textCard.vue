<template>
  <div class="content-container">
    <!-- 内容区域 -->
    <div class="content-text">
      <!-- 标题区域 -->
      <h2 class="title">{{ title }}</h2>
      <!-- 文本内容区域 -->
      <div class="text-content">
        <pre>{{ content }}</pre>
      </div>
    </div>
    <!-- 图片区域 -->
    <div class="content-image">
      <img :src="imageUrl" :alt="imageAlt" :style="{ objectFit: imageFit }">
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  // 标题
  title: {
    type: String,
    required: true
  },
  // 文本内容（支持换行）
  content: {
    type: String,
    required: true
  },
  // 图片URL
  imageUrl: {
    type: String,
    required: true
  },
  // 图片替代文本
  imageAlt: {
    type: String,
    default: ''
  },
  // 图片填充方式（默认cover）
  imageFit: {
    type: String,
    default: 'cover',
    validator: (value) => ['cover', 'contain', 'fill'].includes(value)
  }
});
</script>

<style scoped>
.content-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.75rem;
  border-image: linear-gradient(180deg, rgba(255, 255, 255, 0.23000000417232513), rgba(255, 255, 255, 0)) 1 1;
  display: flex;
}

.content-text {
  flex: 1;
  padding: 16px;
  padding-right: 10px;
  box-sizing: border-box;
}

.content-image {
  flex: 0 0 6rem;
  padding-top: 10px;
  box-sizing: border-box;
}

.content-container img {
  width: 100%;
  height: 100%;
}

.title {
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
  margin: 0;
}

.text-content {
  flex: 1;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.7);
  padding-top: 0.5rem;
}

.text-content pre {
  white-space: pre-wrap;
  font-family: inherit;
  margin: 0;
  line-height: 1.6;
  text-align: left;
}
</style>
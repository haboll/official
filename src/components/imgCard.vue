<template>
  <div class="media-card">
    <!-- 图片容器 -->
    <div class="image-wrapper">
      <img 
        :src="imageUrl"
        :alt="imageAlt"
        class="main-image"
        :style="{ objectFit: imageFit }"
      >
      
      <!-- 文字遮罩层 -->
      <div class="text-overlay">
        <div class="content-wrapper">
          <slot name="text">
            <!-- 默认插槽内容 -->
            <p class="content-text">{{ textContent }}</p>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
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
  // 图片填充方式
  imageFit: {
    type: String,
    default: 'cover',
    validator: (v) => ['cover', 'contain', 'fill'].includes(v)
  },
  // 文本内容
  textContent: {
    type: String,
    default: ''
  },
  // 遮罩透明度
  overlayOpacity: {
    type: Number,
    default: 0.6,
    validator: (v) => v >= 0 && v <= 1
  }
});
</script>

<style scoped>
.media-card {
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.image-wrapper {
  position: relative;
  aspect-ratio: 16/9; /* 控制图片比例 */
}

.main-image {
  width: 100%;
  height: 100%;
  display: block;
}

.text-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, v-bind('overlayOpacity')) 20%,
    rgba(0, 0, 0, 0) 100%
  );
  padding: 2rem 1.5rem;
  color: white;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.content-text {
  margin: 0;
  font-size: 1.2rem;
  line-height: 1.6;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

@media (max-width: 768px) {
  .text-overlay {
    padding: 1rem;
  }
  
  .content-text {
    font-size: 1rem;
  }
}
</style>
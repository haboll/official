<template>
  <div class="video-container" ref="container">
    <video ref="videoEl"  :muted="muted" :loop="isLoop" playsinline class="video-background">
      <source :src="videoSrc" type="video/webm">
      您的浏览器不支持 video 标签。
    </video>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  videoSrc: {
    type: String,
    required: true
  },
  isLoop: {
    type: Boolean,
    default: true
  },
  muted: {
    type: Boolean,
    default: true
  }
})

const videoEl = ref(null)
const container = ref(null)

// 视频控制逻辑
const playVideo = () => {
  if (videoEl.value) {
    videoEl.value.currentTime = 0
    videoEl.value.play()
  }
}

const stopVideo = () => {
  if (videoEl.value) {
    videoEl.value.pause()
    videoEl.value.currentTime = 0
  }
}
onMounted(() => {
  playVideo()
})

onUnmounted(() => {
  stopVideo()
})
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.video-background {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 850px;
  overflow: visible;
}
</style>
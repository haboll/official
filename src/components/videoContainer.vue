<template>
  <video ref="videoEl" :muted="muted" :loop="isLoop" playsinline :class="['video-container', { 'is-home': isHome }]">
    <source :src="videoSrc" :type="mediaType" />
    您的浏览器不支持 video 标签。
  </video>

</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

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
  },
  isHome: {
    type: Boolean,
    default: false
  }
})

const videoEl = ref(null)

const mediaType = computed(() => {
  const type = props.videoSrc.split('.').pop()
  console.log(type)
  return 'video/' + type
})
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
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.is-home {
  position: absolute;
  width: 850px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: visible;
}
</style>
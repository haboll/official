<template>
  <div class="m-wrap">
    <m-header class="m-header">xx</m-header>
    <swiper class="m-swiper" direction="vertical" :slides-per-view="3" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
      <swiper-slide>
        <m-home></m-home>
      </swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper>
  </div>
</template>
<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import MHeader from "./header.vue"
import MHome from "./home.vue"
const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log('slide change');
};

</script>
<style scoped lang="less">
.m-wrap {
  width: 100%;
  height: 100%;
  background-color: #fff;
}

.m-header {
  position: fixed;
  top: 0;
  left: 0;
  border: 1px solid;
}
.m-swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  width: 100%;
  min-height: 100%;
}
</style>

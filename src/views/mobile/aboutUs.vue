<template>
  <div class="about-us">
    <TextCard v-animate class="text-card" title="服务覆盖" imageUrl="/src/assets/image/aboutus1.png" imageFit="contain"
      content="智想新知拥有全球视野专家团队，为国内外企事业单位、院校、政府提供人工智能战略规划、业务智能化咨询、端到端的技术落地服务。 技术覆盖大模型、小模型、CV领域、自动驾驶等。" />
    <TextCard v-animate class="text-card" title="关于我们" imageUrl="/src/assets/image/aboutus2.png" imageFit="contain"
      content="专注人工智能技术研发与产业赋能的创新型科技企业以“让AI成为企业增长新引擎”为使命。 为全球企业提供领先的人工智能解决方案和技术支持服务，助力客户实现智能化升级与数字化转型，团队来自北大、中科院、哈工大，经验丰富实力雄厚。" />
  </div>
</template>
<script setup>

import TextCard from '@/components/textCard.vue';
</script>
<style scoped lang="less">
.about-us {
  width: 100%;
  padding: 18px;
  box-sizing: border-box;
}
.text-card {
  margin-bottom: 1rem;
}
</style>

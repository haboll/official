<template>
  <div class="other-case">
    <h2>其他成功案例</h2>
    <case-card v-animate v-for="item in caseData" v-bind="item" :key="item.buttonText"></case-card>

  </div>
</template>
<script setup>
import caseCard from '@/components/caseCard.vue';
const caseData = [
  {
    buttonText: "01",
    content: "多模态智能体、多智能体协作、审计规则自动化校验、审计报告辅助生成",
    videoSrc: "/src/assets/media/guowangshenji.mp4",
    titleImage: "/src/assets/image/guowang.png",
  },
  {
    buttonText: "02",
    content: "多模态 时间序列 lstm xgboost模型",
    videoSrc: "/src/assets/media/meitanfengdian.mp4",
    titleImage: "/src/assets/image/meitan.png",
  },
  {
    buttonText: "03",
    content: "用药靶点预测 数据报告 多模态大模型 时序模型",
    videoSrc: "/src/assets/media/baxiang.mp4",
    titleImage: "/src/assets/image/aizheng.png",
  }
]
</script>
<style scoped lang="less">
.other-case {
  margin-bottom: 80px;
}
</style>

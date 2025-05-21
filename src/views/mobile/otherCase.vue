<template>
  <div class="case">
    <h2>其他成功案例</h2>
    <case-card v-for="item in caseData" :buttonText="item.buttonText" :isSuccess="true" :mainImage="item.mainImage"
      content="多模态智能体、多智能体协作、审计规则自动化校验、审计报告辅助生成"></case-card>

  </div>
</template>
<script setup>
import caseCard from '@/components/caseCard.vue';
const caseData = [
  {
    buttonText: "01",
    content: "多模态智能体、多智能体协作、审计规则自动化校验、审计报告辅助生成",
    mainImage: "/src/assets/image/case.png"
  },
  {
    buttonText: "02",
    content: "多模态 时间序列 lstm xgboost模型",
    mainImage: "/src/assets/image/case.png"
  },
  {
    buttonText: "03",
    content: "用药靶点预测 数据报告 多模态大模型 时序模型",
    mainImage: "/src/assets/image/case.png"
  }
]
</script>
<style scoped lang="less"></style>

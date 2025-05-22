<template>
  <div class="success-case">
    <case-card v-animate v-for="item in caseData" v-bind="item" :isSuccess="true"></case-card>
  </div>
</template>
<script setup>
import caseCard from '@/components/caseCard.vue';
const caseData = [
  {
    buttonText: "成功案例",
    content: "机械工业领域问答、机械工业标准以及科研报告辅助撰写、智能纠错、工业专业术语文献翻译",
    mainImage: "/src/assets/image/case1.png",
    titleHeight: "44px",
    titleImage: "/src/assets/image/mouzhi.png"
  },
  {
    buttonText: "成功案例",
    content: "机械工业领域问答、机械工业标准以及科研报告辅助撰写、智能纠错、工业专业术语文献翻译",
    mainImage: "/src/assets/image/case2.png",
    titleImage: "/src/assets/image/jixie.png"
  }
]
</script>
<style scoped lang="less">
.success-case {
  margin-bottom: 100px;
  width: 100%;
}
</style>
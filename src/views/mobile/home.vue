<template>
  <div class="home">
    <video loop autoplay class="home-video">
      <source src="/src/assets/images/3d.webm" type="video/webm">
    </video>
  </div>
</template>
<script setup>

</script>
<style scoped lang="less">
.home {
  width: 100%;
  height: 100%;
  background-image: url(@/assets/images/3d.webm);
}
.home-video { 
  width: auto;
  height: 400px;
}
</style>

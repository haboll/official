<template>
    <div v-animate class="qr-container">
        <!-- 文本区域 -->
        <div class="text-section">
            <p class="main-title">扫码联系我们</p>
            <p class="sub-text">可以扫描二维码添加好友咨询</p>
        </div>

        <!-- 二维码区域 -->
        <div class="qr-image-wrapper">
            <img src="/src/assets/image/qr.jpg" alt="联系二维码" class="qr-image">
        </div>
    </div>
</template>

<style scoped>
.qr-container {
    width: 76%;
    min-width: 260px;
    height: 260px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 16px 16px 16px 16px;
    margin: auto;
}

.text-section {
    margin-bottom: 20px;
}

.main-title {
    color: #fff;
    font-size: 1.1rem;
    margin: 0 0 16px 0;
    text-align: center;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.sub-text {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.85rem;
    margin-bottom: 16px;
    text-align: center;
    line-height: 1.5;
}

.qr-image-wrapper {
    position: relative;
    width: 170px;
    height: 170px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    margin: 0 auto;
    overflow: hidden;
    transition: transform 0.3s ease;
}

.qr-image {
    width: 100%;
    height: 100%;
    border-radius: 8px;
}
</style>
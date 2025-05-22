<template>
    <div class="form-wrapper" >
        <form v-animate @submit.prevent="handleSubmit" class="form-container">
            <!-- 姓名 -->
            <div class="form-item">
                <label class="form-label">姓名</label>
                <div class="input-container">
                    <input v-model="formData.name" type="text" placeholder="请输入您的姓名" class="form-input"
                        @blur="validateField('name')" />

                </div>
            </div>
            <div class="error-message">
                <span v-if="errors.name">{{ errors.name }}
                </span>
            </div>

            <!-- 公司 -->
            <div class="form-item">
                <label class="form-label">公司</label>
                <div class="input-container">
                    <input v-model="formData.company" type="text" placeholder="请输入您的公司名称" class="form-input"
                        @blur="validateField('company')" />

                </div>
            </div>
            <div class="error-message">
                <span v-if="errors.company">{{ errors.company }}
                </span>
            </div>
            <!-- 所属行业 -->
            <div class="form-item">
                <label class="form-label">所属行业</label>
                <div class="input-container">
                    <select v-model="formData.industry" class="form-select" @change="validateField('industry')">
                        <option value="" disabled selected>请选择行业</option>
                        <option v-for="option in industryOptions" :key="option.value" :value="option.value">
                            {{ option.label }}
                        </option>
                    </select>

                </div>
            </div>
            <div class="error-message">
                <span v-if="errors.industry">{{ errors.industry }}
                </span>
            </div>

            <!-- 联系方式 -->
            <div class="form-item">
                <label class="form-label">联系方式</label>
                <div class="input-container">
                    <input v-model="formData.contact" type="text" placeholder="请输入您的手机号" class="form-input"
                        @blur="validateField('contact')" />

                </div>
            </div>
            <div class="error-message">
                <span v-if="errors.contact">{{ errors.contact }}
                </span>
            </div>

            <button type="submit" class="submit-button">提交</button>
        </form>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const formData = reactive({
    name: '',
    company: '',
    industry: '',
    contact: ''
});

const errors = reactive({
    name: '',
    company: '',
    industry: '',
    contact: ''
});

const industryOptions = [
    { value: 'internet', label: '互联网/IT' },
    { value: 'finance', label: '金融/银行' },
    { value: 'education', label: '教育/培训' },
    { value: 'manufacturing', label: '生产制造' },
    { value: 'medical', label: '医疗健康' },
    { value: 'trade', label: '贸易/零售' }
];

const validateField = (field) => {
    const value = formData[field].trim();
    switch (field) {
        case 'name':
            errors.name = value ? '' : '姓名不能为空';
            break;
        case 'company':
            errors.company = value ? '' : '公司名称不能为空';
            break;
        case 'industry':
            errors.industry = value ? '' : '请选择所属行业';
            break;
        case 'contact':
            const phoneReg = /^1[3-9]\d{9}$/;
            errors.contact = phoneReg.test(value) ? '' : '请输入有效的手机号码';
            break;
    }
};

const handleSubmit = () => {
    // 验证所有字段
    Object.keys(formData).forEach(field => validateField(field));

    // 检查是否有错误
    const hasErrors = Object.values(errors).some(error => error !== '');
    const isEmpty = Object.values(formData).some(value => !value.trim());

    if (!hasErrors && !isEmpty) {
        // 提交逻辑
        console.log('表单提交成功：', formData);
        alert('表单提交成功！');
    } else {
        alert('请正确填写所有字段');
    }
};
</script>

<style scoped>
.form-wrapper {
    width: 86%;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    margin: auto;
}

.form-container {
    width: 100%;
    margin: 20px auto;
    padding: 20px;
    box-sizing: border-box;
}

.form-item {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
}

.form-label {
    flex: 0 0 60px;
    display: inline-block;
    text-align: justify;
    text-align-last: justify;
    margin-right: 12px;
    font-size: 14px;
}

.input-container {
    flex: 1;
}

.form-input,
.form-select {
    height: 2.6rem;
    width: 100%;
    max-width: 300px;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 14px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    box-sizing: border-box;
    color: #fff;
}

.form-input::placeholder {
    color: rgba(255, 255, 255, 0.3);
}

.form-select {
    color: rgba(255, 255, 255, 0.3);
}

.form-select {
    appearance: none;
}

.error-message {
    color: #f56c6c;
    font-size: 12px;
    margin-top: 4px;
    height: 20px;
}

.submit-button {
    display: block;
    width: 100%;
    padding: 12px;
    margin: auto;
    color: #fff;
    border: none;
    transition: background-color 0.3s;
    background: linear-gradient(270deg, #0B42FC 0%, #8C0BFC 100%);
    border-radius: 8px;
}
</style>
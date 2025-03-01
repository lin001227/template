<template>
  <div class="login-container">
    <!-- 系统名称标题 -->
    <div class="system-title">
      <div class="title-icon">🚀</div>
      <h1>智慧管理系统</h1>
      <p>欢迎登录，开启高效工作之旅</p>
    </div>

    <a-card class="login-card">
      <h2 class="login-title">登录</h2>
      <a-form :model="form" @submit="handleSubmit" size="large" layout="horizontal" auto-label-width>
        <!-- 用户名输入 -->
        <a-form-item field="username" :rules="[{ required: true, message: '请输入用户名' }]">
          <a-input v-model="form.username" placeholder="用户名" :style="{ width: '100%', height: '40px' }">
            <template #prefix>
              <icon-user />
            </template>
          </a-input>
        </a-form-item>

        <!-- 密码输入 -->
        <a-form-item field="password" :rules="[{ required: true, message: '请输入密码' }]">
          <a-input-password v-model="form.password" placeholder="密码" :style="{ width: '100%', height: '40px' }">
            <template #prefix>
              <icon-lock />
            </template>
          </a-input-password>
        </a-form-item>

        <!-- 验证码输入 -->
        <a-form-item field="captcha" :rules="[{ required: true, message: '请输入验证码' }]">
          <div class="captcha-input-container">
            <a-input v-model="form.captcha" placeholder="验证码" :style="{ width: '70%', height: '40px' }">
              <template #prefix>
                <icon-pen-fill />
              </template>
            </a-input>
            <img :src="captchaImage" alt="验证码" class="captcha-image" @click="refreshCaptcha" />
          </div>
        </a-form-item>

        <!-- 登录按钮 -->
        <a-form-item>
          <a-button type="primary" html-type="submit" long :style="{ height: '40px' }">登录</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { Message } from '@arco-design/web-vue';

  // 表单数据
  const form = ref({
    username: '',
    password: '',
    captcha: '',
  });

  // 验证码图片（这里使用随机图片代替，实际项目中应从后端获取）
  const captchaImage = ref('https://picsum.photos/100/40?random=1');

  // 刷新验证码
  const refreshCaptcha = () => {
    captchaImage.value = `https://picsum.photos/100/40?random=${Math.random()}`;
  };

  // 表单提交
  const handleSubmit = (data) => {
    if (data.errors) {
      Message.error('请填写完整信息');
      return;
    }
    // 这里可以添加登录逻辑
    Message.success('登录成功');
  };
</script>

<style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url('@/assets/login/login-bg.png');
    background-size: cover; /* 背景图片覆盖整个容器 */
    background-position: center; /* 背景图片居中 */
    background-attachment: fixed; /* 背景图片固定，不随页面滚动 */
  }

  /* .login-container {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 40px;
    max-width: 400px;
    width: 100%;
    text-align: center;
  } */

  .system-title .title-icon {
    font-size: 48px;
    margin-bottom: 10px;
  }

  .system-title h1 {
    font-size: 32px;
    color: #333;
    margin-bottom: 10px;
    background: linear-gradient(90deg, #42b983, #35495e);
    -webkit-background-clip: text;
    color: transparent;
  }

  .system-title p {
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
  }

  .login-title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px; /* 调整字体大小 */
    font-weight: 600; /* 调整字体粗细 */
    color: #333; /* 调整字体颜色 */
  }

  .login-card {
    width: 450px;
    padding: 20px;
    background: rgba(255, 255, 255); /* 表单背景透明 */
    backdrop-filter: blur(10px); /* 高斯模糊效果 */
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }

  .captcha-input-container {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .captcha-image {
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid #ddd;
  }

  /* 隐藏必填项红色 * */
  :deep(.arco-form-item-label-required-symbol) {
    display: none;
  }
</style>

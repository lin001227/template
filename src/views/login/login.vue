<template>
  <div class="login-container">
    <!-- 登录卡片 -->
    <a-card class="login-card">
      <!-- 中英文切换按钮 -->
      <div class="language-switcher">
        <a-button @click="toggleLanguage" type="text" shape="round">
          <template #icon>
            <icon-translate />
          </template>
          {{ currentLanguage === 'zh' ? '中' : 'EN' }}
        </a-button>
      </div>

      <!-- 系统名称 -->
      <div class="system-title">
        <div class="title-icon">🚀</div>
        <h1>{{ currentLanguage === 'zh' ? '权限认证管理系统' : 'Auth Management System' }}</h1>
        <p>{{ currentLanguage === 'zh' ? '欢迎登录，开启高效工作之旅' : 'Welcome, start your efficient work journey' }}</p>
      </div>

      <!-- 登录表单 -->
      <h2 class="login-title">{{ currentLanguage === 'zh' ? '账号登录' : 'Account Login' }}</h2>
      <a-form :model="form" @submit="handleSubmit" size="large" layout="horizontal" auto-label-width>
        <!-- 用户名输入 -->
        <a-form-item
          field="username"
          :rules="[{ required: true, message: currentLanguage === 'zh' ? '请输入用户名' : 'Please enter your username' }]"
        >
          <a-input v-model="form.username" :placeholder="currentLanguage === 'zh' ? '用户名' : 'Username'" :style="{ width: '100%', height: '40px' }">
            <template #prefix>
              <icon-user />
            </template>
          </a-input>
        </a-form-item>

        <!-- 密码输入 -->
        <a-form-item field="password" :rules="[{ required: true, message: currentLanguage === 'zh' ? '请输入密码' : 'Please enter your password' }]">
          <a-input-password
            v-model="form.password"
            :placeholder="currentLanguage === 'zh' ? '密码' : 'Password'"
            :style="{ width: '100%', height: '40px' }"
          >
            <template #prefix>
              <icon-lock />
            </template>
          </a-input-password>
        </a-form-item>

        <!-- 验证码输入 -->
        <a-form-item field="captcha" :rules="[{ required: true, message: currentLanguage === 'zh' ? '请输入验证码' : 'Please enter the captcha' }]">
          <div class="captcha-input-container">
            <a-input v-model="form.captcha" :placeholder="currentLanguage === 'zh' ? '验证码' : 'Captcha'" :style="{ width: '70%', height: '40px' }">
              <template #prefix>
                <icon-pen-fill />
              </template>
            </a-input>
            <img :src="captchaImage" alt="验证码" class="captcha-image" @click="refreshCaptcha" />
          </div>
        </a-form-item>

        <!-- 登录按钮 -->
        <a-form-item>
          <a-button type="primary" html-type="submit" long :style="{ height: '40px' }">
            {{ currentLanguage === 'zh' ? '登录' : 'Login' }}
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  // 表单数据
  const form = ref({
    username: '',
    password: '',
    captcha: '',
  });

  // 验证码图片路径
  const captchaImage = ref('path/to/captcha/image');

  // 当前语言状态，默认为中文
  const currentLanguage = ref('zh');

  // 处理登录逻辑
  const handleSubmit = () => {
    // 登录逻辑
  };

  // 刷新验证码逻辑
  const refreshCaptcha = () => {
    // 刷新验证码
  };

  // 切换语言
  const toggleLanguage = () => {
    currentLanguage.value = currentLanguage.value === 'zh' ? 'en' : 'zh';
  };
</script>

<style scoped>
  @import './login.css';
</style>

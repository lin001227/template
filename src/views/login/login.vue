<template>
  <div class="login-container">
    <!-- 登录卡片 -->
    <a-card class="login-card">
      <!-- 中英文切换按钮 -->
      <div class="language-switcher">
        <a-button @click="toggleLanguage" type="text">
          <template #icon>
            <icon-translate />
          </template>
          {{ $t('login.language') }}
        </a-button>
      </div>

      <!-- 系统名称 -->
      <div class="system-title">
        <div class="title-icon">🚀</div>
        <h1>{{ $t('login.systemTitle') }}</h1>
        <p>{{ $t('login.welcomeMessage') }}</p>
      </div>

      <!-- 登录表单 -->
      <h2 class="login-title">{{ $t('login.loginTitle') }}</h2>
      <a-form :model="form" @submit="handleSubmit" size="large" layout="horizontal" auto-label-width>
        <!-- 用户名输入 -->
        <a-form-item field="username" :rules="[{ required: true, message: $t('login.usernamePlaceholder') }]">
          <a-input v-model="form.username" :placeholder="$t('login.usernamePlaceholder')" :style="{ width: '100%', height: '40px' }">
            <template #prefix>
              <icon-user />
            </template>
          </a-input>
        </a-form-item>

        <!-- 密码输入 -->
        <a-form-item field="password" :rules="[{ required: true, message: $t('login.passwordPlaceholder') }]">
          <a-input-password v-model="form.password" :placeholder="$t('login.passwordPlaceholder')" :style="{ width: '100%', height: '40px' }">
            <template #prefix>
              <icon-lock />
            </template>
          </a-input-password>
        </a-form-item>

        <!-- 验证码输入 -->
        <a-form-item field="captcha" :rules="[{ required: true, message: $t('login.captchaPlaceholder') }]">
          <div class="captcha-input-container">
            <a-input v-model="form.captcha" :placeholder="$t('login.captchaPlaceholder')" :style="{ width: '70%', height: '40px' }">
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
            {{ $t('login.loginButton') }}
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';

  const { t, locale } = useI18n();

  // 表单数据
  const form = ref({
    username: '',
    password: '',
    captcha: '',
  });

  // 验证码图片路径
  const captchaImage = ref('path/to/captcha/image');

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
    locale.value = locale.value === 'zh_CN' ? 'en_US' : 'zh_CN';
  };
</script>

<style scoped>
  @import './login.css';
</style>

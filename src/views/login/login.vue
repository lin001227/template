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
      <a-form :model="form" @submit="handleSubmit" size="large" layout="horizontal" ref="formRef" auto-label-width>
        <!-- 用户名输入 -->
        <a-form-item field="username" :rules="[{ required: true, message: $t('login.usernameErrorMessage') }]">
          <a-input v-model="form.username" :placeholder="$t('login.usernamePlaceholder')" :style="{ width: '100%', height: '40px' }">
            <template #prefix>
              <icon-user />
            </template>
          </a-input>
        </a-form-item>

        <!-- 密码输入 -->
        <a-form-item field="password" :rules="[{ required: true, message: $t('login.passwordErrorMessage') }]">
          <a-input-password v-model="form.password" :placeholder="$t('login.passwordPlaceholder')" :style="{ width: '100%', height: '40px' }">
            <template #prefix>
              <icon-lock />
            </template>
          </a-input-password>
        </a-form-item>

        <!-- 验证码输入 -->
        <a-form-item field="captcha" :rules="[{ required: true, message: $t('login.captchaErrorMessage') }]">
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
  import { ref, reactive } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { Message } from '@arco-design/web-vue'; // 引入 Message 组件
  import { useUserStore } from '@/store/modules/userStore'; // 引入 userStore
  import router from '@/router';

  const { t, locale } = useI18n();
  const formRef = ref(); // 表单实例
  const userStore = useUserStore(); // 使用 userStore

  // 表单数据
  const form = reactive({
    username: 'admin',
    password: '123456',
    captcha: '1234',
  });

  // 验证码图片路径
  const captchaImage = ref('path/to/captcha/image');

  // 处理登录逻辑
  const handleSubmit = async ({ errors, values }) => {
    if (!errors) {
      try {
        await userStore.login(form); // 调用 userStore 的登录方法
        // 登录成功后跳转到首页或其他页面
        router.push('/home');
      } catch (error) {
        console.log(error);
      }
    } else {
      Message.error(t('login.formErrorMessage')); // 表单验证失败提示
    }
  };

  // 刷新验证码逻辑
  const refreshCaptcha = () => {
    // 刷新验证码
    captchaImage.value = 'path/to/new/captcha/image';
  };

  // 切换语言
  const toggleLanguage = () => {
    const newLang = locale.value === 'zh_CN' ? 'en_US' : 'zh_CN'; // 切换语言
    locale.value = newLang; // 更新 vue-i18n 的语言
    userStore.setLanguage(newLang); // 更新 userStore 中的语言状态
  };
</script>

<style scoped>
  @import './login.css';
</style>

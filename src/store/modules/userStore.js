// src/store/modules/userStore.js
import { defineStore } from 'pinia';
import { login, getUserInfo } from '@/api/auth'; // 导入登录和获取用户信息的接口

export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem('token') || '', // 从localStorage中获取token
    userInfo: null, // 用户信息
    language: localStorage.getItem('language') || 'zh_CN', // 语言状态，默认中文
  }),

  actions: {
    // 登录方法
    async login(credentials) {
      try {
        
        const response = await login(credentials); // 调用登录接口
        console.log(response,"返回");
        const { token } = response.data; // 假设接口返回token

        // 存储token到state和localStorage
        this.token = token;
        localStorage.setItem('token', token);

        // 获取用户信息
        await this.fetchUserInfo();
      } catch (error) {
        console.error('登录失败:', error);
        throw error;
      }
    },

    // 获取用户信息
    async fetchUserInfo() {
      try {
        const response = await getUserInfo(); // 调用获取用户信息接口
        this.userInfo = response.data; // 假设接口返回用户信息
      } catch (error) {
        console.error('获取用户信息失败:', error);
        throw error;
      }
    },

    // 清除用户数据（用于注销）
    clearUserData() {
      this.token = '';
      this.userInfo = null;
      localStorage.removeItem('token'); // 清除localStorage中的token
    },

    // 切换语言
    setLanguage(lang) {
      this.language = lang;
      localStorage.setItem('language', lang); // 将语言状态存储到localStorage
    },
  },

  getters: {
    // 判断用户是否登录
    isLoggedIn: (state) => !!state.token,

    // 获取当前语言
    currentLanguage: (state) => state.language,
  },
});

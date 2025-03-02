import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Message } from '@arco-design/web-vue';

NProgress.configure({
  showSpinner: false, // 禁用 Spinner
});

// 创建 Axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
  timeout: 10000,
});

// 请求计数器
let requestCount = 0;

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 增加请求计数
    requestCount++;
    if (requestCount === 1) NProgress.start(); // 第一个请求时启动进度条

    // 在发送请求之前添加 token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 请求错误时减少计数
    handleRequestCount();
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 统一处理计数
    handleRequestCount();
    const res = response.data;
    if (res.code === 200) {
      // 如果状态码为 200，显示成功信息
      if (res.message) {
        Message.success(res.message); // 使用 Message.success 显示成功信息
      }
      return res; // 返回响应数据
    } else {
      // 如果状态码不是 200，显示错误信息
      Message.error(res.message || 'Error');
      return Promise.reject(new Error(res.message || 'Error'));
    }
  },
  (error) => {
    // 统一处理计数
    handleRequestCount();

    // 根据状态码进行详细错误处理
    if (error.response) {
      const status = error.response.status;
      const message = error.response.data?.message || 'Request failed';
      console.log(status);
      switch (status) {
        case 400:
          Message.error(`Bad Request: ${message}`);
          console.log(400);
          break;
        case 401:
          console.log(401);
          Message.error('Unauthorized: Please login again');
          localStorage.removeItem('token');
          window.location.href = '/login'; // 重定向到登录页
          break;
        case 403:
          Message.error(`Forbidden: ${message}`);
          console.log(403);
          break;
        case 404:
          Message.error(`Not Found: ${message}`);
          console.log(404);
          break;
        case 500:
          console.log(500);
          Message.error(`Server Error: ${message}`);
          break;
        default:
          Message.error(`Error: ${message}`);
      }
    } else if (error.request) {
      // 请求已发出，但没有收到响应
      Message.error('Network Error: Please check your network connection');
    } else {
      // 其他错误
      Message.error(`Error: ${error.message}`);
    }

    return Promise.reject(error);
  }
);

// 处理请求计数
function handleRequestCount() {
  requestCount--;
  if (requestCount <= 0) {
    requestCount = 0;
    NProgress.done();
  }
}

export default service;

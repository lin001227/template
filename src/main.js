import { createApp } from 'vue';
import App from './App.vue';
// 引入ArcoDesign和图标库
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';
// 引入重置样式
import './assets/css/reset.css';

import './assets/css/sanitize.css';

// 路由配置
import router from './router';
// Pinia 状态管理
import { createPinia } from 'pinia';
// Axios 全局挂载
import axios from 'axios';
//国际化
import i18n from './i18n';

const app = createApp(App);
app.use(ArcoVue);
app.use(ArcoVueIcon);
app.use(createPinia());
app.use(router);
app.use(i18n);
app.config.globalProperties.$axios = axios;
app.mount('#app');

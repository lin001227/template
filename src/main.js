import { createApp } from 'vue';
import App from './App.vue';
// 引入ArcoDesign和图标库
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';
// 引入重置样式
import './assets/css/reset.css';
import './assets/css/sanitize.css';
// 引入进度条样式
import '@/assets/css/nprogress.css';

// 路由配置
import router from './router';
// Pinia 状态管理
import pinia from './store'; // 引入Pinia实例
//国际化
import i18n from './i18n';
import { useUserStore } from '@/store/modules/userStore'; // 引入 userStore

// 开发环境加载Mock
if (__MOCK__) {
  import('./mock').then(() => {
    console.log('[System] Mock server enabled');
  });
}

const app = createApp(App);
app.use(pinia);
app.use(ArcoVue);
app.use(ArcoVueIcon);
app.use(router);
app.use(i18n);
const userStore = useUserStore();
i18n.global.locale.value = userStore.language; // 设置 i18n 的语言状态
app.mount('#app');

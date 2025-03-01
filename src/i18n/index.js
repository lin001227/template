import { createI18n } from 'vue-i18n';

// 动态加载语言文件
const loadLocaleMessages = () => {
  const messages = {};
  const modules = import.meta.glob('./locales/**/*.js', { eager: true }); // 动态加载所有语言文件

  for (const path in modules) {
    const matched = path.match(/\.\/locales\/(.+)\/(.+)\.js/);
    if (matched && matched.length > 2) {
      const locale = matched[1]; // 语言类型，如 en_US
      const page = matched[2]; // 页面名称，如 login
      if (!messages[locale]) {
        messages[locale] = {};
      }
      messages[locale][page] = modules[path].default; // 按页面存储翻译内容
    }
  }
  return messages;
};

// 创建 i18n 实例
const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: 'zh_CN', // 默认语言
  fallbackLocale: 'en_US', // 回退语言
  messages: loadLocaleMessages(), // 加载语言文件
});

export default i18n;

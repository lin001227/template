// src/i18n.js
import { createI18n } from "vue-i18n";

import en from "@/i18n/locales/en_US/index";
import zh from "@/i18n/locales/zh_CN/index";
// 定义语言包
const messages = {
	en,
	zh,
};

// 创建 i18n 实例
const i18n = createI18n({
	legacy: false, // 关闭 Vue2 兼容模式（必须）
	locale: "zh", // 默认语言
	fallbackLocale: "en", // 备用语言
	messages, // 语言包
});

export default i18n;

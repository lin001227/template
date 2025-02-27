import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	// 基础路径 (部署在子路径时需要)
	base: "./",
	plugins: [vue()],
	// 解析配置
	resolve: {
		// 设置文件./src路径为 @
		alias: [
			{
				find: "@",
				replacement: resolve(__dirname, "./src"),
			},
		],
	},
	// 开发服务器配置
	server: {
		host: "0.0.0.0", // 允许外部访问
		port: 8081, // 指定端口
		open: true, // 自动打开浏览器

		// 代理配置 (解决跨域)
		proxy: {
			"/api": {
				target: "http://your-api-domain.com",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
});

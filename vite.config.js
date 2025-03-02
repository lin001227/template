import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  // 路径别名配置
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@api': resolve(__dirname, 'src/api'),
      '@utils': resolve(__dirname, 'src/utils'),
    },
  },

  // 开发服务器配置
  server: {
    port: 3000, // 指定端口
    host: '0.0.0.0', // 允许外部访问
    open: true, // 自动打开浏览器
    proxy: {
      // 代理配置（需要真实接口时使用）
      '/api': {
        target: 'http://your-real-api.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },

  // 环境变量配置
  define: {
    // 定义全局MOCK开关（根据环境变量决定）
    __MOCK__: JSON.stringify(process.env.NODE_ENV === 'development'),
  },

  // 构建配置
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]',
      },
    },
  },
});

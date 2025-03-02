import Mock from 'mockjs';
import './auth'; // 加载接口模块

// 全局配置
Mock.setup({
  timeout: '200-800', // 随机延迟
});

// 打印注册的mock接口
console.log('[Mock] 已注册接口:', ['/api/login (POST)', '/api/user/info (GET)', '/api/logout (POST)'].join('\n'));

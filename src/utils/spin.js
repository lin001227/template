// src/utils/spin.js
import { Spin } from '@arco-design/web-vue';

let requestCount = 0; // 记录当前正在进行的请求数量

// 显示 Spin
export function showSpin() {
  if (requestCount === 0) {
    Spin.show();
  }
  requestCount++;
}

// 隐藏 Spin
export function hideSpin() {
  requestCount--;
  if (requestCount === 0) {
    Spin.hide();
  }
}

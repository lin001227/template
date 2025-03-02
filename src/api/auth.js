import request from '@/utils/request';

// 登录接口
export const login = (data) => {
  return request({
    url: '/login', // 必须与mock地址完全一致
    method: 'post',
    data,
  });
};

// 获取用户信息
export const getUserInfo = () => {
  return request({
    url: '/user/info',
    method: 'get',
  });
};

// 退出登录
export const logout = () => {
  return request({
    url: '/logout',
    method: 'post',
  });
};

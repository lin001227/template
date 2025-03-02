import Mock from 'mockjs';

// 登录接口
Mock.mock('/api/login', 'post', (req) => {
  const { username, password, captcha } = JSON.parse(req.body);

  // 模拟用户数据
  const users = [
    { username: 'admin', password: '123456', captcha: '1234' },
    { username: 'user', password: '123456', captcha: '1234' },
  ];

  // 查找匹配的用户
  const user = users.find((u) => u.username === username && u.password === password && u.captcha === captcha);

  if (user) {
    return Mock.mock({
      code: 200,
      message: '登录成功',
      data: {
        token: '@guid', // 使用 Mock.js 的随机生成 token
        username: user.username,
        roles: user.username === 'admin' ? ['admin'] : ['user'], // 根据用户名分配角色
      },
    });
  } else {
    return {
      code: 401,
      message: '用户名或密码错误',
    };
  }
});

// 获取用户信息接口
Mock.mock('/api/user/info', 'get', (req) => {
  const token = req.headers?.authorization?.split(' ')[1]; // 从请求头中获取 token

  // 模拟用户数据
  const users = [
    { token: 'admin-token', username: 'admin', role: 'admin' },
    { token: 'user-token', username: 'user', role: 'user' },
  ];

  // 查找匹配的用户
  const user = users.find((u) => u.token === token);

  if (user) {
    return Mock.mock({
      code: 200,
      message: '获取用户信息成功',
      data: {
        username: user.username,
        role: user.role,
      },
    });
  } else {
    return {
      code: 401,
      message: '用户未登录或 token 无效',
    };
  }
});

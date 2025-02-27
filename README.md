# 通用框架搭建

Status: Not started

## 1. 框架模板生成

```powershell
#基于vite创建vue3+vite项目
yarn create vite template --template vue

#进入template
cd template

#安装包并运行
yarn
yarn dev
```

## 2. 安装组件

```powershell
#安装组件 
	yarn add --dev @arco-design/web-vue  #UI组件
	yarn add vue-router@4                #路由
	yarn add pinia                       #全局状态管理
	yarn add axios                       #http请求处理
	yarn add sass                        #CSS 预处理器
	yarn add dotenv                      #环境变量管理
	yarn add lodash                      #提供实用的工具函数
	yarn add eslint --dev                #JavaScript/TypeScript 代码校验工具
	yarn add prettier --dev              #代码格式化工具
	yarn add vue-i18n@9                  #国际化
	yarn add @types/node                 #避免代码爆红
```

## 3. main.js引用
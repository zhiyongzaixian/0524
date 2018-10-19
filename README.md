## 小程序开发流程: 
  1. 注册应用: app.js ---> App()
  2. 设置全局的配置文件: app.json ---> "pages":[放置页面的路径]
  3. 注册页面: index.js ---> Page({})
## 注意点：
  1. 写完代码 ctrl + s
  
## 获取用户登录信息
  1. wx. getUserInfo()   注意授权问题
  2. 出现授权弹窗: <button open-type='getUserInfo'></button>
  3. 时机: onLoad
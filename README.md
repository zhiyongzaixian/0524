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
## 页面操作注意事项
  1. 修改状态: this.setData({});
  2. 页面的实例this
## 数据绑定
  1. 初始化数据  data生成
  2. 页面获取data中的数据: {{}}
## 列表渲染
  1. 语法: wx:for='{{array}}'
  2. 默认: 下标:index 个体: item
  3. wx:key: 唯一值，用于提高性能
## <font color=red>react和vue性能对比</font>
  1. react: DOM DIFF算法，最小化页面重绘
  2. vue: 文档碎片，降低渲染的次数
## 模板
  1. 定义: template name='模板名'
  2. 使用: template is='模板名'
  3. 引入
    1. 结构: <import src='路径'>
    2. 样式: @import '路径'


## 本地存储
  1. 语法: wx.setStorage || wx.getStorageSync()
  2. 思路:
    1. 存储目标： {0: true, 1: false}
    2. 初始化的时候: 空 ---> 预处理 ---> 提前往本地缓存一个空对象{} ---> oldStorage[index]不报错
    3. 页面加载的时候先去本地读取缓存数据更新状态: this.setData({isCollected: 本地存储的状态值})

// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		msg: 'xxxxx',
		userInfo: {},
		isShow: true // 标识按钮是否显示
  },

	// 用于获取用户信息
	getUserInfo(){
		console.log(this);
		// 获取用户登录信息
		wx.getUserInfo({ // 配置对象
			success: (data) => {
				console.log('获取成功', data);
				// 更新data中的状态数据
				// this.setState(); react
				// this.msg = 'xxx' vue
				this.setData({
					userInfo: data.userInfo,
					isShow: false
				});
			},
			fail: (error) => {
				console.log('获取失败', error);
			}
		})
	},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		console.log('onLoad');
		// 发送ajax请求
		this.getUserInfo();
  },
	handleGetUserInfo(msg) {
		console.log('用户点击了。。。', msg);
		if (msg.detail.userInfo) {
			// 用户点击的是允许
			this.getUserInfo();
		}
	},

 
})
// pages/list/list.js
//  注意只能使用相对路径
let listArr = require('../../datas/list-data.js');
console.log(listArr, typeof listArr);
Page({

  /**
   * 页面的初始数据
   */
  data: {
		listArr: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		this.setData({listArr: listArr.list_data});
  },

	toDetail(event){
		console.log(event);
		//  获取对应的下标
		let index = event.currentTarget.dataset.index
		// 跳转到详情页detail
		wx.navigateTo({
			url: '/pages/detail/detail?index=' + index,
		})
	},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
		
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
// pages/detail/detail.js
let listArr = require('../../datas/list-data.js');
let appData = getApp();
console.log(appData, typeof appData);
Page({

  /**
   * 页面的初始数据
   */
  data: {
		detailObj: {},
		index: null,
		isCollected: false,
		isMusicPlay: false  // 标识音乐是否播放
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		console.log(options);
		let index = options.index;
		// 更新data中的内容
		this.setData({
			detailObj: listArr.list_data[index],
			index
		});

		// 预处理收藏的状态
		let oldStorage = wx.getStorageSync('isCollected')
		console.log(oldStorage, '----');
		oldStorage ? '': oldStorage = {};
		wx.setStorageSync('isCollected', oldStorage);
		// 思考： oldStorage[index] ---> true || false || undefined
		this.setData({
			isCollected: oldStorage[index]? true:false
		})

		// 预处理音乐是否在播放
		if (appData.data.pageIndex === index && appData.data.isPlay){
			this.setData({
				isMusicPlay: true
			});
		}
		// 监听音乐的播放和暂停
		wx.onBackgroundAudioPlay(() => {
			console.log('音乐播放');
			this.setData({
				isMusicPlay: true
			});

			appData.data.pageIndex = index;
			appData.data.isPlay = true;
		})
		// 暂停
		wx.onBackgroundAudioPause(() => {
			console.log('音乐暂停');
			this.setData({
				isMusicPlay: false
			});
			
			appData.data.isPlay = false;
		})
  },
	// 处理收藏的方法
	handleCollection(){
		let isCollected = !this.data.isCollected
		this.setData({
			isCollected
		});
		let title = isCollected? '收藏成功': '取消收藏'
		wx.showToast({
			title
		})
		// 将收藏的状态缓存到本地storage
		// 思考： 缓存对象 ---> {0: true, 1: false, 2: true}
		// 获取之前缓存的状态值
		let obj = wx.getStorageSync('isCollected');
		console.log(obj, '--------------');
		let index = this.data.index;
		obj[index] = isCollected;
		wx.setStorage({
			key: 'isCollected',
			data: obj,
			success(){

			}
		})
	},
	// 处理音乐播放的方法
	handleMusicPlay(){
		let isMusicPlay = !this.data.isMusicPlay;
		this.setData({
			isMusicPlay
		});

		let {dataUrl, title} = this.data.detailObj.music;
		if (isMusicPlay){
			wx.playBackgroundAudio({
				dataUrl,
				title
			})

		}else {
			wx.pauseBackgroundAudio()
		}
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
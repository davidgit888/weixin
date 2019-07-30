//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      '../../images/bg1.png',
      '../../images/bg2.png',
      '../../images/AUbg_1.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,  
    contentItems: [''],
    listItems: ['', '']
  },
  onLoad: function (options) {
    console.log('首页onLoad')
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    console.log('首页onReady')
    // 页面渲染完成
  },
  onShow: function () {
    console.log('首页onShow')
    // 页面显示
  },
  onHide: function () {
    console.log('首页onHide')
    // 页面隐藏
  },
  onUnload: function () {
    console.log('首页onUnLoad')
    // 页面关闭
  },
  // handleTapImage: function (event) {
  //   //图片点击、
  //   console.log(event);
  //   // wx.navigateTo({
  //   //   url: '../../pages/posts/posts',
  //   //   success: function (res) {
   
  //   //   },
  //   //   fail: function () {
        
  //   //   },
  //   //   complete: function () {

  //   //   }
  //   // })
  // }
})
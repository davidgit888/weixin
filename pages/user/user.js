var app = getApp();
Page({
  data: {
    filterId: 1,
    banners: [
      {
        id: 1,
        img: '/images/bg1.png',
        url: '',
        name: '防伪'
      },
      {
        id: 2,
        img: '/images/bg2.png',
        url: '',
        name: '溯源'
      },
      {
        id: 3,
        img: '/images/AUbg_1.jpg',
        url: '',
        name: '防串货'
      }
    ],   
  },

  onLoad: function () {
    console.log('关于我们onLoad')
  },
  onShow: function () {
    console.log('关于我们onShow')
  },
  onReady: function () {
    console.log('关于我们onReady')
    // 页面渲染完成
  },
  onHide: function () {
    console.log('关于我们onHide')
    // 页面隐藏
  },
  onUnload: function () {
    console.log('关于我们onUnLoad')
    // 页面关闭
  },

  tapBanner: function (e) {
    var name = this.data.banners[e.target.dataset.id].name;
    wx.showModal({
      title: '提示',
      content: '您点击了“' + name + '”链接，页面暂未完成！',
      showCancel: false
    });
  }//可以不用

});


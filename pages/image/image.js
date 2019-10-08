// pages/image/image.js

//获取应用实例
const app = getApp();
const regeneratorRuntime = require('../../libs/regenerator-runtime/runtime.js');
var util = require("../../utils/util.js")
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    useBtn:false,
    number:1,
    maxIterNumber:20
  },
  // //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.getLocations();
    this.ctx = wx.createCameraContext();
    var that = this;
    setTimeout(function() {
      that.takePhoto();
    },3000);
  },

  // get user information
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  // take picture in wechat
  takePhoto() {
    var path = 'kong';
    var that = this;
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        path = res.tempImagePath;
        console.log(path);
        that.setData({
          src: res.tempImagePath
        })
        this.sendPhoto()
      }
    })
    return path;
  },

  // send photo
  sendPhoto() {
    var that = this  
    wx.uploadFile({
      // url: 'http://localhost:8000/api/image/', // need to be replaced
      url: 'https://www.hswetest.com/api/image/',
      filePath: that.data.src,
      name: 'file',
      formData:{
        'lat': that.data.latitude,
        'log': that.data.longitude
      },
      success: function (res) {
        var data = res.data;
        that.setData({
          results:res.data
        })
        console.log('res is '+that.data.results);
        that.iter()
      }
    })
  },

  // upload 20 times
  iter(){
    var number = this.data.number;
    var results = this.data.results;
    if(results){
      if(results.indexOf("不清晰") != -1 && this.data.number<this.data.maxIterNumber){
        this.setData({
          number:number+1
        })
        this.takePhoto();
      }else{
        wx.redirectTo({
          url: '/pages/results/results?res=' + this.data.results +'&number='+number
        })
      }
    }else{
      this.takePhoto();
    }
  },

  // Get location
  getLocations(){
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        that.setData({
          latitude:res.latitude,
          longitude:res.longitude
        })
      }
    })
  },
  
  error(e) {
    console.log(e.detail)
  }
})

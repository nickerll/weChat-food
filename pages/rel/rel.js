// pages/rel/rel.js
const {request} = getApp().bool
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nid:"",
    contant:"",
    word:"",
    title:""
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    this.data.nid = options.nid
    console.log(this.data.nid)
      const dataList = await request({
        url: "shops?id="+this.data.nid
      })
    console.log(dataList.data[0].comments)
      this.setData({
        contant: dataList.data[0].images,
        word:dataList.data[0].comments,
        title:dataList.data
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
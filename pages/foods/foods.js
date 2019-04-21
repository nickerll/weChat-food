// pages/foods/foods.js
const {request} = getApp().bool
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cid:"",
    word:[],
    startPage:0,
    viewcount:6,
    hasmore:true
  },
  async loadpage(){
    let { data,header } = await request({
      url: `categories/${this.data.cid}/shops?_start=${this.data.startPage}&_limit=${this.data.viewcount}`
    })
    this.data.startPage+=1
    /**
     * 1.判断当显示的最后一个下标大于内容的length的时候hasmore为false，不能加载更多了
     * 2.下拉刷新的时候恢复初始值
     * 3.上拉加载更多并可以显示之前加载的所有内容
     * 4.点击进入详情页
     */   
    var pageStart = this.data.startPage * this.data.viewcount
    console.log(pageStart)
    if (pageStart >= header['X-Total-Count']){
      this.data.hasmore = false
    }
    this.setData({
      word: this.data.word.concat(data),
      hasmore:this.data.hasmore
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
   this.data.cid = options.cid
   this.loadpage()
   
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
    this.loadpage()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
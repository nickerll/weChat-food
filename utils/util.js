const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const request = (options) => {
  var BaseUrl = "http://localhost:3000/"
  return new Promise((resolve,reject) => {
    if(!options.method){
      options.method = "get"
    }
    Object.assign(options,{
      url:BaseUrl + options.url,
      success:resolve,
      fail:reject,
      complete:wx.hideLoading
    })
    wx.showLoading({
      title: 'loding...',
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    wx.request(options)
  })
}


module.exports = {
  formatTime: formatTime,
  request: request
}

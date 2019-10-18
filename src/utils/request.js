export default function (obj) {
  let url = obj.url || ''
  let method = obj.method || 'GET'
  let data = obj.data || {}
  url = 'https://www.uinav.com/' + url
  return new Promise((resolve, reject) => {
    // 请求发送之前设置loading 显示loading提示框
    mpvue.showLoading({ title: '正在加载中...' })
    mpvue.request({
      url,
      method,
      data,
      success (info) {
        resolve(info.data)
        // 请求完成之后 隐藏 loading 提示框
        mpvue.hideLoading()
      }
    })
  })
}

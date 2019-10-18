export default function (obj) {
  let url = obj.url || ''
  let method = obj.method || 'GET'
  let data = obj.data || {}
  url = 'https://www.uinav.com/' + url
  return new Promise((resolve, reject) => {
    mpvue.request({
      url,
      method,
      data,
      success (info) {
        // console.log(info)
        resolve(info.data)
      }
    })
  })
}

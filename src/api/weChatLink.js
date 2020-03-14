import request from '@/utils/request'

// post params形式
export function getWxCode (params) {
  return request({
    url: 'wx/getWxCode',
    method: 'post',
    params
  })
}

// post params形式
export function getToken (params) {
  return request({
    url: 'uaa/oauth/token',
    headers: {
      Authorization: 'Basic YXBwOjEyMzQ1Ng=='
    },
    method: 'post',
    params
  })
}
// 获取用户信息
export function queryUserInfo (params) {
  return request({
    url: 'report/carowner/getInfo',
    method: 'post',
    params
  })
}

// 获取用户信息
export function getJsapiTicket (params) {
  return request({
    url: 'wx/getJsapiTicket',
    method: 'post',
    params
  })
}

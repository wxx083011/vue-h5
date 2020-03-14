import request from '@/utils/request'

// post params形式
export function getValidateCode (params) {
  return request({
    url: 'report/sms/getValidateCode',
    method: 'post',
    params
  })
}

// 发送短信验证码
export function sendSms (params) {
  return request({
    url: 'report/sms/sendSms',
    method: 'post',
    params
  })
}

// 发送短信验证码
export function registerUserByPublic (params) {
  return request({
    url: '/report/carowner/registerUserByPublic',
    method: 'post',
    params
  })
}

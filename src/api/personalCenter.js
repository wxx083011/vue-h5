import request from '@/utils/request'

// 修改用户信息
export function uptateUser (params) {
  return request({
    url: 'report/carowner/uptateUser',
    method: 'post',
    params
  })
}

// 绑定车辆
export function bindingCar (params) {
  return request({
    url: 'report/carowner/bindingCar',
    method: 'post',
    params
  })
}

// 获取车辆列表
export function getCarList (params) {
  return request({
    url: 'report/carowner/getCarList',
    method: 'post',
    params
  })
}
// 获取车辆列表
export function setDefaultCar (params) {
  return request({
    url: 'report/carowner/setDefaultCar',
    method: 'post',
    params
  })
}
// 删除车辆列表
export function delBindingCar (params) {
  return request({
    url: 'report/carowner/delBindingCar',
    method: 'post',
    params
  })
}

// 修改车辆列表
export function updateCarInfo (params) {
  return request({
    url: 'report/carowner/updateCarInfo',
    method: 'post',
    params
  })
}

// 获取车报告列表
export function getCheckReport (params) {
  return request({
    url: 'report/checkReport/getCheckReport',
    method: 'post',
    params
  })
}
// 获取车报告列表
export function getCheckReportByid (params) {
  return request({
    url: 'report/checkReport/getCheckReportByid',
    method: 'post',
    params
  })
}

// 获取车报告列表
export function evaluateScore (params) {
  return request({
    url: 'report/checkReport/evaluateScore',
    method: 'post',
    params
  })
}
// 获取客服电话
export function getKeFu (params) {
  return request({
    url: 'report/carowner/getKeFu',
    method: 'post',
    params
  })
}

import axios from 'axios'
const service = axios.create({
  baseURL: apiUrl,
  timeout: 15000,
  withCredentials: false
})
service.interceptors.request.use(
  config => {
    let token = sessionStorage.getItem('token') || ''
    if (token) {
      // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token
      config.headers.Authorization = token
    }
    return config
  },
  err => {
    console.log(err.config)
    return Promise.reject(err)
  }
)
service.interceptors.response.use(
  function(response) {
    // 请求正常则返回
    try {
      return Promise.resolve(response)
    } catch (error) {
      console.log(error)
    }
  },
  function(error) {
    return Promise.reject(error)
  }
)
export default service
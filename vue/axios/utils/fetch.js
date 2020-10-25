import axios from 'axios'

// 以QQ音乐歌单链接地址为例：https://c.y.qq.com/soso/fcgi-bin/client_search_cp

let baseURL_dev = 'https://c.y.qq.com'  // 开发环境
// let baseURL_pro = ''  // 公司环境
// let baseURL_test = ''  // 测试环境
// let baseURL_dev = 'http://localhost:8080'  // 跨域问题


// (可于NPM中查询axios的create方法)
// 创建axios实例
const fetch = axios.create({
    baseURL: baseURL_dev,  // 根据环境修改
    timeout: 7000,  // 超时设置
    headers: {  // 请求头(可于MDN>HTTP中查询content-Type)
        'content-Type': 'application/json;charset=UTF-8'
    }
})

// (可于NPM中查询axios中的interceptors)
// 封装请求拦截器
fetch.interceptors.request.use((config) => {
    // console.log('请求拦截：暂停', config)
    // 请求发送之前，在这里做一些检测或者包装的处理
    // 鉴权 token
    config.headers.Authorization = localStorage.getItem('token')
    return config
}, (error) => {
    // 请求错误时
    return Promise.reject(error)
})

// 封装响应拦截器
fetch.interceptors.response.use((response) => {
    // console.log('响应拦截：暂停',response)
    // 请求成功
    // 根据后端标识字符来进行数据过滤
    if (response.data && response.data.success) {  // success也可能是err、code、status
        return response.data.data
    } else {
        console.log('网络异常，请稍后再试')
    }
 }, (error) => {
    // 请求失败
    return Promise.reject(error)
})

// 抛出实例
export default fetch
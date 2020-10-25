### axios(处理接口问题)  

1、axios的优势  
  它是基于Promise封装的，用起来非常方便，解决了回调地狱的问题。  
  它在客户端、node.js服务器都可以使用。  

2、axios安装与使用  
  下载：`$ cnpm install axios -S`  
  封装axios(可以去NPM查询代码)：
    `axios.create()`
  封装请求拦截器:  
      `fetch.interceptors.request.use()`
      在请求发出之前进行拦截
  封装响应拦截器：  
      `fetch.interceptors.response.use()`
      在客户端收到响应之前进行拦截
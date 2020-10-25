// vue.config.js解决跨域问题

// ！！！只要改变vue.config.js文件后，必须要重启项目才能生效！！！


// 当产生跨域问题时，将baseURL的地址粘贴至target
// 而baseURL需要改成本地地址：http://localhost:8080

// (vue官网CLI中查找devServer.proxy，进行代理)
module.exports = {
    //filenameHashing: true,
    devServer: {
        // 代理、转发
        proxy: {
            '/api': {  // api的值视接口而定,例：/soso
                target: '',  // 目标服务器，例：https://c.y.qq.com
                ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        }
    }
}
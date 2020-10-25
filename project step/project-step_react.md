# <font color='orange'>react项目的步骤流程思路</font>  

## <font color='green'>环境搭建</font>
1、$ npm init  

2、下载webpack以及webpack-cli  

    $ cnpm install webpack -D  
    $ cnpm install webpack -g  
    $ cnpm install webpack-cli -D  
    $ cnpm install webpack-cli -g  

3、手动创建src文件夹，并创建一个main.js文件；再创建一个public文件夹，并创建index.html文件；在根目录下手动创建 webpack.config.js，并编写该文件  

4、打包命令：  

$ webpack --config webpack.config.js  

5、plugin插件：

    用于打包时的额外功能  
    html-webpack-plugin  
    clean-webpack-plugin

6、loader用于编译打包文件模块，将其转化成浏览器能够识别的代码  

    $ cnpm install style-loader -D  
    $ cnpm install css-loader -D  
    $ cnpm install sass-loader -D  
    $ cnpm install node-sass -D  
下载完成后需要去webpack.config.js文件的module里写规则rules  

    { test: /\.(css|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader'] }  
    { test: /\.(jpg|png|gif)$/, use: ['file-loader'] }  
    { test: /\.(js|jsx)$/, use: ['babel-loader'] }  

7、本地服务(开发环境)：  

    webpack-dev-server  
        open  
        contentBase  
        hot
    热更新：  
        devServer.hot = true  
        使用两个webpack的内置插件  

    生成环境与开发环境的区分：  
        cross-env 使用这个包来指定 process.env.NODE_ENV 环境变量  
        package.json的script的build中设置cross-env NODE_ENV=production  
        package.json的script的serve 中设置cross-env NODE_ENV=development


7、ESLint(ESLint用户指南)  

    eslint下载安装：  
        $ cnpm install eslint -D  
        $ cnpm install eslint-loader -D  
    eslint配置文件：
    // 参考ESLint中文网>用户指南>配置  
        手动创建 .eslintrc.json 配置文件  
        或者在package.json中进行配置
    eslint浮层报错：  
        webpack网站>配置>开发中>overlay  
        配置在config.devServer中  
    错误等级：  
        "off/warn/error" or 0/1/2  

--------------------------------------
--------------------------------------
## <font color='green'>react</font>

1、react安装：  

    $ cnpm install react -S  
    $ cnpm install react-dom -S  

    $ cnpm install @babel/preset-react -D  // 解析jsx的插件  
    $ cnpm install @babel/reset-env -D  // 使用较新的js语法  

    手动创建 .babelrc.json 配置文件，使babel插件起作用  
    { "presets": ["@babel/preset-react", "@babel/preset-env"] }

    react根组件APP.js (相当于vue的APP.vue)  

2、jsx  

    jsx 相当于 javaScript xml，是一个语法糖  
    jsx 是一个变量、对象  
    jsx 可以嵌套  
    jsx 中可以使用表达式，使用方法用单大括号进行包裹  
    jsx 不是强制的，但jsx让代码更具有可读性   

3、react中有多少种创建组件的方法？  

    a) React.createElement()  
    b) 类组件 class User extends React.Component {}  
    c) 无状态组件 function User(props) {}  
    d) 高级组件 function Hoc(Child) { }  
    e) Hook组件  

4、代码检测  

$ cnpm install prop-types -S  

5、react路由  

    <!-- npm搜索包 -->
    <!-- React Training官网右下角react router -->
    $ cnpm install react-router -S  
    $ cnpm install react-router-dom -S (运行在浏览器)  
    $ cnpm install react-router-native  (运行在RN APP)  

6、withRouter  

    withRouter是一个高阶函数，作用是使得没有被`<Route></Route>`包裹的组件拥有this.props里的众多属性，如this.props.history  
    使用方法：  
        import { withRouter } from 'react-router-dom'  
    抛出：  
        export default withRouter(组件名)  

7、代码分割(代码懒加载)  

    下载安装依赖：  
        $ cnpm install @babel/plugin-syntax-dynamic-import -D  
        $ cnpm install @loadable/component -S  
    配置.babel.json：  
        "plugins": ["@babel/plugin-syntax-dynamic-import"]

    重启项目，实现动态加载  
        `import loadable from '@loadable/component'`  
        `const Home = loadable(()=>import('./home'))`  

    然后会报错，eslint问题  
    下载babel-eslint插件，将较新的eslint语法解析为eslint可解析的代码  
        $ cnpm install babel-eslint -D  

    配置.eslintrc.json：  
        "parser": "babel-eslint"  

9、Ant Design  

    下载安装：  
        $ cnpm install antd -S  

----------------------------------
----------------------------------

## <font color='green'>react脚手架</font>  

1、脚手架创建项目  

    下载：  
        $ cnpm install create-react-app -g  
    创建项目：  
        $ create-react-app my_project  

2、还原脚手架原本隐藏封装的脚本：  

    $ npm run eject  
    <font color='red'>注意：执行eject会报错</font>  
    解决：  
        ```
        cd react-cli-cms  
        git init  // 创建本地仓库  
        git add .  // 添加所有文件  
        git commit -m 'first commit'  
        npm run eject  
        ```  
    可以将serviceWorker.js删除，对应的到index.js删除引入的相关代码  

3、环境配置完善  

    修改端口号，避免冲突：  
        /scripts/start.js --> PORT  
    设置@别名：  
        /config/webpack.config.js 里找到 resolve.alias  
    制作favicon：  
        百度'favicon制作在线工具'，规格32×32  
    安装sass：  
        $ cnpm install node-sass -D  
    删除多余文件：  
        --src中--
        删除App.css，同时删除引入App.css的代码，  
        删除logo.svg，同时删除引入logo.svg的代码，  
        删除App.test.css，  
        删除App内的代码，App的className改成app  
        --public--  
        删除logo192.png  
        删除logo512.png  
        删除robots.txt  
        删除manifest.json中icons中括号内的代码  

4、跨域--服务器代理  

    (npm>Create React App>Back-End Integration>proxying in Development)
    安装 cnpm install http-proxy-middleware -D
    新建代理文件 src/setupProxy.js
     ```
    const { createProxyMiddleware } = require('http-proxy-middleware');
    module.exports = function(app) {
        app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://xxx.com',   // 目标服务器
            changeOrigin: true
        })
        )
    }
    ```
  重启服务  

---------------------------
---------------------------

## <font color='green'>react状态管理</font>  

状态管理工具：可预测的数据管理  

1、mobx  --  写法非常灵活，适合小型项目  

    安装：$ cnpm install mobx -S  
    mobx-react --  把mobx和react关联起来的一个工具  
    安装：  
        $ cnpm install mobx-react -S  
    要用mobx就要用到babel中的两个插件(babel>插件>Experimental>decorators)
        $ cnpm install @babel/plugin-proposal-decorators -D  
        $ cnpm install @babel/plugin-proposal-class-properties -D  
    配置，注意先后顺序  
        ["@babel/plugin-proposal-decorators", { "legacy": true }],  
        ["@babel/plugin-proposal-class-properties", { "loose" : true }]

2、redux  --  写法相对难以理解，中大型项目  

    action：  
        触发、行为，作用就是触发改变数据的行为  
    reducer：  
        它的作用是用来改变store中的数据  
    store：  
        共享数据的存储中心，store中的数据发生变化，视图也随着变化  
    
    1、安装
    ```
    cnpm install redux -S   // 创建store
    ```
    2、定义reducer
    ```
    // 定义reducer需要两个参数，分别是当前需要被共享的state、用于改变state的action信号
    // action={type, payload}，type用于指明你想做什么，payload指明你想得到的结果。
    function reducer(state={}, action) {
    switch(action.type) {
        case '1':
            // 先深复制，再修改
            let newState = JSON.parse(JSON.stringify(state))
            return state
        case '2':
            return state
        default:
            
            return state
    }
    }
    ```
    在实际工作中，reducer要拆分成多个子reducer，也就是多个纯函数。
    最终在创建store时，要使用combineReducers进行合并(参见store创建代码)

    3、在src/store/index.js创建store并抛出
    ```
    import { createStore, combineReducers } from 'redux'
    // 创建store，必须要传第一个参数是reducer，它是一个纯函数，其作用是用来改变store的

    import reducer1 from './reducers/r1'
    import reducer2 from './reducers/r2'

    const reducer = combineReducers({reducer1, reducer2})
    const store = createStore(reducer)
    export default store
    ```

    4、在App.js中进行上下文关联
    ```
    cnpm install react-redux -S   // 把store与react组件关联起来
    ```
    在App.js中引入store，并使用上下文进行关联
    ```
    import { Provider } from 'react-redux'
    import store from '@/store'

    return(
    <Provider store={store}></Provider>
    )
    ```
    5、在页面组件中使用store
    ```
    import { connect } from 'react-redux'

    // 把state中的数据，变成当成组件的props
    function mapStateToProps(state){
        return {
            msg: state.msg
        }
    }
    // 把actions中方法，放在当前组件的props
    function mapActionToProps(dispatch) {
        return {
            changeMsg: ()=>{
            // 派发一个action到reducer去
            console.log('changeMsg')
            }
        }
    }
    export default connect(mapStateToProps,mapActionToProps)(Home)
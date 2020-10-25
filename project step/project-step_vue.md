## <font color='orange'>Web App项目的流程思路</font>  

1、在含有vue脚手架devtools的文件夹下Git Bash Here,然后在命令行中输入`$ vue create my_project`<font color='red'>(文件名不能包含大写)</font>  

2、下载完成后去package.json文件的scripts中添加`"start": npm run serve`，方便项目运行  

3、Git命令行cd到my_project，运行项目`npm start`，index.html在浏览器打开，并将路径更改为`localhost:8080`  

4、文件基本结构  
在public文件夹引入rem.js，在src文件夹新建store、utils、pages文件夹。store中一般为index.js(总银行)以及modules(分行)，utils中一般有fetch.js(封装好的调取接口的方法)以api.js(各个地方运用fetch方法调取后端给的接口)，pages中放置一些主要页面，而公共的一些组件放在components的common中，比如tabBar.vue  

5、下载常用插件  
下载至dependencies(-S):
```
$ cnpm install vue-router -S
$ cnpm install vuex -S
$ cnpm install vant -S
$ cnpm install axios -S
```  
下载至devDependencies(-D):
```
$ cnpm install node-sass -D
$ cnpm install sass-loader -D
$ cnpm install babel-plugin-import -D // 按需加载组件
```
按需加载组件需要在babel.config.js中进行配置  
```
plugins: [
    ['import', {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
    }, 'vant']
]
```  

6、关于main.js，主要是引入路由和vuex实例，并在根实例组件进行挂载  
```
import router from './router'
import store from './store/index'  // index可以省略
```

7、关于router.js  
主要工作是引入相关的组件，并在路由实例routes中设置“路径-组件”一一对应关系  
```
import A from '@/components/home/A.vue'  // 一般引入方式  
const Home = ()=>import('./pages/Home.vue')  // 路由懒加载  
{ path: '/home', component: Home }  // 路径-组件
```  
有时候也会设置全局路由守卫，用于登录拦截  
```
router.beforeEach((to, from, next) => {
  // console.log(to, from)
  // 只对访问购物车组件的路由跳转行为进行拦截
  if (to.fullPath=='/cart' || to.fullPath=='/user') {
    let token = localStorage.getItem('token')
    if(token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
```

8、vant引用可以去vant官网复制代码，`import xxx from 'vant'`(按需引入)，注意要在components中修改组件名字才能直接使用 `[xxx.name]: xxx`  

### <font color='red'>！！！注意事项！！！</font>
1、上线时注意路由模式hash和history  
2、fetch方法里可能需要该环境、接口或者状态码code/success...
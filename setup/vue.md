### Vue CLI安装

要求：先安装node.js (node -v验证是否安装成功)
安装：$ npm install -g @vue/cli

创建项目：
$ vue create my-project
<font color="red">注意：新创建的文件不要随意修改文件名，也不要随意更改路径</font>

快速开始项目：
$ cd my-project(可使用tab键自动补全)
$ npm run serve(启动本地服务)

可以在package的scripts中添加"start":"mpm run start"，
方便启动项目$ npm start

### Devtools安装
下载：git clone https://github.com/arcliang/Vue-Devtools-.git
浏览器设置-->拓展程序-->加载已解压的拓展程序-->选择Devtools文件-->安装完成(开发者模式以及右下角按钮选项都要打开)

### vue 安装  
$ cnpm install vue -S

### router 路由安装
$ cnpm install vue-router -S

### vuex 安装
$ cnpm install vuex -S

### axios 安装
$ cnpm install axios -S

### sass 安装
$ cnpm install node-sass -D
$ cnpm install sass-loader -D

### vant 安装
$ cnpm install vant -S
按需引入组件插件安装： $ cnpm install babel-plugin-import -D(PC端无需按需加载)  
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

### element 安装
$ cnpm install element-ui -S
按需引入插件：$ cnpm install babel-plugin-component -D
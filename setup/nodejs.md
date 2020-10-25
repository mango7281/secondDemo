### nodejs安装

1、node.js中文网下载msi安装包，傻瓜式安装，下一步下一步...
2、node -v以及npm -v查看版本号，验证是否安装成功(新版本nodejs自带npm)

设置环境变量  
此电脑>空白处右键>属性>高级系统设置>环境变量>新建>变量名：NODE_PATH；变量值：自己node安装的路径>完成

### cnpm安装(淘宝镜像)

1、$ npm install -g cnpm --registry=https://registry.npm.taobao.org  
2、cnpm -v查看版本号，验证是否安装成功  

### yarn安装  

$ cnpm install yarn -g  

### nrm安装  

$ cnpm install nrm -g  
指令：  
$ nrm ls -->查看镜像源  
$ nrm use xxx -->切换镜像源  
$ nrm test -->测试镜像源速度  

### nodejs代码实时编辑工具(进程守护)  

#### nodemon安装
$ cnpm install nodemon -g  

### supervisor安装
$ cnpm install supervisor -g  

### Express安装  
$ cnpm install express -S
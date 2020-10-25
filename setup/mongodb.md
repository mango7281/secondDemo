## MongoDB的安装

1、安装  
D盘：新建文件夹MongoDB
安装>接受>custom自定义路径>选择MongoDB文件夹>next>Install MongoDB Compass取消选中>Ignore>完成

2、更改环境变量(WIN10)  
此电脑>空白处右键>属性>高级系统设置>环境变量>变量名：path>新建>变量值：D:\MongoDB\bin>完成
<font color='red'>更改完环境变量需重启MangoDB，可能还需要重启电脑</font>

3、安装验证  
任意位置打开命令行
启动MongoDB:$ mongod --dbpath "D:\MongoDB\data"
查找27017，可能在末尾，也可能在中间
连接MangoDB：$ mongo
展示数据库：show dbs

4、卸载  
腾讯管家或者其它软件卸载程序，再找到文件夹卸载残留文件  

### mongoose安装  
在需要运行的项目文件夹打开命令行
$ cnpm install mongoose -S
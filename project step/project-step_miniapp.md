## 小程序开发流程思路  

### 微信开发者工具下载  
    微信公众平台>小程序>小程序开发者文档>工具>开发者工具>win64版本  

### 微信小程序项目的创建  
    1、微信开发者工具>小程序>点击加号  
    2、文件名，文件目录，填写AppID，不使用云服务，JavaScript语言  
    3、新建  
    4、新建完成后，详情>本地设置>不检验合法域名

### 微信小程序版本的管理  
    1、开发版本  
        由微信开发者工具上传，得到的为开发者版本(仅开发者可以访问)  
    2、体验版本  
        选为体验版本(可能需要修改路径)，能生成二维码(开发者、体验者均可访问)  
    3、线上版本  
        开发版本提交审核，过审后的版本(所有人均可访问)  
        !!!--注意--!!!：
            1、requireAPI文件夹里需要将baseUrl改成线上服务器地址  
            2、图片的url改成线上的CDN地址  
            3、小程序后台>开发者设置>服务器设置均需要更改
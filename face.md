## H5+CSS

#### 1、如何阻止浏览器对窗口的拖拽？
    {resize: none}

#### 2、rgb和rgba的区别？
        在css3中基本没什么区别，都支持RGB三色以及α通道,但在css2.1中的rgb则只接受r、g、b三个参数,所以为了保证兼容性,在需要使用透明色的时候,尽可能用rgba,不要用rgb带四个参数的方式

#### 3、px、em、rem的区别？
        px是像素点，是相对于显示屏幕分辨率而言的。优缺点：比较精确，但在浏览器中放大或者缩小时页面会出现混乱的情况；
    em是相对于父元素来设置字体大小的。一般来说，如果当前行内文本的字体尺寸未被人为设置，是相对于浏览器的默认字体大小16px；
    rem是CSS3新增的一个相对单位，是相对HTML根元素的。优缺点：既可以做到只修改根元素就成比例地调整所有字体大小，又可以避免字体大小逐层复合的连锁反应。
    浏览器兼容性：px所有浏览器都支持，除了IE6-IE8，其它的浏览器都支持em和rem。

#### 4、省略号设置的条件
    a) 给容器一个宽度；
    b) 强制文本在一行内显示：white-space: nowrap ；
    c) 溢出内容隐藏： overflow: hidden ；
    d) 溢出文本显示省略号： text-overflow： allipsis 。

#### 5、垂直居中的几种方法  
    .parent .child
    a) 设置行高等于高度/只设置行高  
        这种方法比较适合单行文本的垂直水平居中
        父元素：
        height: 50px;
        子元素：
        text-align: center;
        line-height: 50px;

    b) vertical-align: middle
        --已知父元素高度--
        父元素的行高等于自身高度，子元素要是行内块元素
        父元素：
        宽、高、背景色
        height: 100px;
        line-height: 100px;
        子元素：
        宽、高、背景色
        display: inline-block;
        vertical-align:middle;
        --未知父元素高度--
        I) 在子元素的后面不换行加上一个span标签，span标签的作用是作一个标尺、一个参考物
        span标签:
        width: 0;
        height: 100%;
        display: inline-block;
        vertical-align: middle;
        II) 父元素添加伪元素.parent:before
        content: '';
        height: 100%;
        display: inline-block;
        vertical-align: middle;
    
    c) 绝对定位
        --已知子元素宽高--
        绝对定位+加负外边距
        父元素:
        宽、高、背景色
        position: relative  
        子元素：
        宽、高、背景色;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -50px;  // margin-top的值设为子元素高度的一半，此处设子元素宽100px，百分比高度同样适用
        margin-left: -50px;  // margin-left的值设为子元素宽度的一半
        --未知子元素宽高--
        I) 绝对定位+margin：auto
        父元素:
        宽、高、背景色
        position: relative  
        子元素：
        宽、高、背景色;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        II) 绝对定位+transform: translate(-50%, -50%)
        父元素:
        宽、高、背景色
        position: relative  
        子元素：
        宽、高、背景色;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
    d) flex布局
        适用于移动端，缺点是浏览器兼容性不好
        父元素：
        宽、高、背景色;
        display: flex;
        justify-content: center;  // 水平居中
        align-items: center;  // 父元素设置垂直居中
        子元素：
        宽、高、背景色
        align-self: center  // 子元素设置垂直居中  

----------------------------
----------------------------

## JS  

#### this关键字的指向  
    a) 全局作用域下的this指向windows  
    b) 自定义函数中的this指向window  
    c) 严格模式下，this指向undefined
    d) 箭头函数中的this指向上下文环境  
    e) 定时器中的this指向window
    f) 在事件处理程序中，this指向接收事件的元素  
    g) 在自定义对象方法中的this指向上一级对象，或者说是调用当前函数的对象  

#### 对文档碎片的理解  
    1、我们要明白当js操作dom时发生了什么？   
       每次对dom的操作都会重新渲染界面（触发"重排"，发生重绘或回流），这严重影响到能耗，一般通常采取的做法是尽可能的减少dom操作来减少"重排"  
    2、什么是文档碎片？  
        document.createDocumentFragment()    一个容器，一个缓存区，用于暂时存放创建的dom元素  
    3、文档碎片有什么用？  
        将需要添加的大量元素  先添加到文档碎片中，再将文档碎片添加到需要插入的位置，大大减少dom操作，提高性能（IE和火狐比较明显）    

----------------------------
----------------------------

## Vue

#### vue响应式原理

    vue之所以具有响应式原理，是因为vue实例在创建的时候，使用了Object.defineProperty()方法， 把我们所有的数据进行遍历，进行劫持，然后进行getter和setter封装，当实例上的数据发生变化时，就会触发setter操作，触发监听器去更新真实的DOM。

----------------------------
----------------------------

## React  

#### react中有多少种创建组件的方法？  
    a) React.createElement()  
    b) 类组件 class User extends React.Component {}  
    c) 无状态组件 function User(props) {}  
    d) 高级组件 function Hoc(Child) { }
    e) HOOK组件  

#### mobx的理解  
     在mobx状态管理中，所有的变量、数据放在@observable中，所有的函数、方法放在@action中，action中的方法既可以是同步的，也可以是异步的，他可以对可观察的变量进行修改，在页面中使用mobx中的@inject('store')以及@observer,可以进行动态绑定，当状态管理中的数据发生变化的时候，页面视图会自动发生变化。  

#### 怎么理解redux？  
    Redux 可以用这三个基本原则来描述：  
    1、单一数据源  
        整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。  
    2、State 是只读的  
        唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。  
    3、使用纯函数来执行修改  
        为了描述 action 如何改变 state tree ，你需要编写 reducers。
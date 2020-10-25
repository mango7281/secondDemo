#### 状态管理vuex

1、初识Vuex

	状态：即数据、视图。
	状态管理的本质，就是对应用程序的数据进行科学地流程化管理，目标是让数据变化可预期、可控。
	Flux一种数据管理架构方案，这是一种数据管理的思想，最早诞生于React团队。
	React技术栈中，最出名的状态管理工具是 Redux和Mobx。
	Vue技术栈中，最出名的状态管理工具是Vuex。
	Vuex只是一种数据管理方案，并不是Vue开发必须的。换句话说，在架构Vue项目时可以不使用Vuex。
	虽然可以不使用Vuex，但不得不说Vuex非常强大，所以还是建议尽量用上它。
	Vuex常用于实现组件之间的数据交互、程序数据缓存等需求。
	Vuex配合devtools，可以非常方便地调试应用程序中的数据bug。

2、安装

	cnpm install vuex -S
	在src目录中新建一个名为store.js的文件
	引入vue、vuex，并注册Vue.use(Vuex)
	创建Vuex.Store实例，使用到四个重要选项：state、getters、mutations、actions，并抛出该实例
	在main.js中引入并挂载。
	如何验证安装成功呢？在任何中访问this.$store。

3、Vuex基础知识点

	1）五个核心概念
		state：用于定义共享数据
		getters：相当于是计算属性
		mutations：这是vuex官方建议的用于直接地同步地修改state
		actions：这是vuex与后端接口交互的唯一入口，用于间接地异步地修改state
		modules：用于把一个完整的根store拆分成多个子模块，以方便工作协同开发，减少工作冲突。
	2）如何触发mutations方法？
		在组件中this.$store.commit('已定义的mutation方法', '负载')
		建议使用 mapMutations('命名空间', [])进行映射，使用this.进行访问。
	3）如何触发actions方法？
		在组件中this.$store.dispatch('已定义的action方法', '负载')
		建议使用 mapActions('命名空间', [])进行映射，使用this.进行访问。
	4）如何把根store拆分成多个子module？
		定义子module时，一定要记得加上 namespaced:true 以开启命名空间
		在 new Vuex.Store({modules: {}}) 中使用modules选项，对多个子module进行组装。
	5）四个 mapXXX 的使用
		mapState 和 mapGetters 只能在computed计算中进行使用。
		mapMutations 和 mapActions 只能methods选项中进行使用。
		映射进来的变量和方法，可以使用 this.进行访问，更方便。
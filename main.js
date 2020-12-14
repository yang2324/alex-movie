import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.serverUrl = "https://www.imovietrailer.com/superhero"

Vue.prototype.getGlobalUser = function(key){
	//获取全局缓存的信息
	const userInfo = uni.getStorageSync("globalUser")
	//判断是否为空   不为空则为已存在用户信息
	if(userInfo != null && userInfo != "" && userInfo != undefined){
		return userInfo
	}else{
		return null
	}
}

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

<template>
	<view class="page page-fill">
		
		<form @submit="formSubmitBrithday">
			
			<view class="page-block" style="margin-top: 20upx;">
				<picker mode="date" @change="dateChange">
					<view class="input">{{birthday}}</view>
				</picker>
			</view>
			
			<button type="primary" form-type="submit" class="submitBtn">提交</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				birthday:"",
				globalUser:{}
			}
		},
		onLoad() {
			//获取缓存的用户信息
			let me = this
			let globalUser =  me.getGlobalUser("globalUser")
			me.globalUser = globalUser
			me.birthday = globalUser.birthday
		},
		methods: {
			dateChange(e){
				this.birthday = e.detail.value
			},
			formSubmitBrithday(e){
				let me = this;
				let birthday = me.birthday
				
				uni.request({
					url:me.serverUrl + "/user/modifyUserinfo?qq=2715705745",
					data:{
						"userId":me.globalUser.id,
						"birthday":birthday
					},
					header: {
						"headerUserId": me.globalUser.id,
						"headerUserToken": me.globalUser.userUniqueToken
					},
					method:"POST",
					success(res) {
						// debugger;
						var resData = res.data;
						if (resData.status == 200) {
							// 获得最新的用户数据
							var userInfo = resData.data;
							uni.setStorageSync("globalUser", userInfo);
							uni.navigateBack({
								delta: 1
							})
						} else if (resData.status == 502 || resData.status == 500) {
							uni.showToast({
								title: res.data.msg,
								image: "../../static/icos/error.png",
								duration: 2000
							})
						}
					}
				})
			}
		}
	}
</script>

<style scoped>
/* 页面铺满屏幕 */
.page-fill {
	width:100%;
	height: 100%;
	position: absolute;
}

.graywords {
	color: #EAEAEA;
}
.page-block{
	background-color: #FFFFFF;
}

.input {
	height: 80upx;
	line-height: 80upx;
	width: 500upx;
	margin-left: 40upx;
}

.submitBtn {
	width: 95%;
	margin-top: 40upx;
}
</style>

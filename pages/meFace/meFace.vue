<template>
	<view class="page page-fill">
			
			<view class="pending-wapper">
				<image id="face" :src="tempFace" class="pending-face" mode="scaleToFill"></image>
			</view>
			
			<view class="notice">
				<view class="notice-words">
					* 请从相册中选择等比宽高的图片噢~
				</view>
			</view>
			
			<view class="footer-opertor">
				<view class="opertor-words" @click="changePendingFace">
					重新选择
				</view>
				<view class="opertor-words" @click="upload" >
					确认上传
				</view>
			</view>
			
		</view>
</template>

<script>
	export default {
		data() {
			return {
				tempFace:''
			}
		},
		onLoad(params) {
			let tempFilePath = params.tempFilePath
			this.tempFace = tempFilePath
		},
		methods: {
			//重新上传
			changePendingFace(){
				let me = this
				uni.chooseImage({
					count: 1,
					sizeType: ["compressed"],
					sourceType: ["album"],
					success(res) {
						//获得临时路径
						let tempFilePath = res.tempFilePaths[0]
						me.tempFace = tempFilePath
					}
				})
			},
			//上传头像
			upload(){
				let me = this
				//获取全局缓存的信息
				let globalUser = me.getGlobalUser("globalUser");
				uni.showLoading({
					title:"上传中，请稍后",
					mask:true
				})
				//实现头像上传
				uni.uploadFile({
					url: me.serverUrl + "/user/uploadFace?userId=" + globalUser.id +"&qq=2715705745",
					filePath: me.tempFace,
					name: "file",
					header: {
						"headerUserId": globalUser.id,
						"headerUserToken": globalUser.userUniqueToken
					},
					success(res) {
						// debugger;
						var resDataStr = res.data;
						// console.log(typeof(resDataStr));
						//字符串转换成对象
						var resData = JSON.parse(resDataStr);
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
					},
					complete() {
						uni.hideLoading();
					}
				});
			}
		}
	}
</script>

<style scoped>
@import url("meFace.css");
</style>

<template>
	<view class="black">
		<image class="cover" :src="cover" 
				mode="widthFix" @longpress="operator"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cover:""
			}
		},
		onLoad(params){
			let cover = params.cover
			this.cover = cover
			//通过api修改导航栏颜色
			uni.setNavigationBarColor({
				backgroundColor:"#000000",
				frontColor:"#ffffff"
			})
		},
		methods: {
			operator(){
				let me = this;
				uni.showActionSheet({
					itemList:["保存图片到本地","分享"],
					success: (res) => {
						if(res.tapIndex == 0 ){
							uni.showLoading({
								title:"图片保存中。。。"
							})
							uni.downloadFile({
								url: me.cover,
								success: (result) => {
									let temp = result.tempFilePath;
									//保存图片到本地系统
									uni.saveImageToPhotosAlbum({
										filePath:temp,
										success: () => {
											uni.showToast({
												title:"保存成功",
												duration:2000
											})
										},
										complete: () => {
											uni.hideLoading()
										}
									})
								}
							})
						}
					}
				})
			}
		}
	}
</script>

<style scoped>
	.black {
		background-color: #000000;
		width: 100%;
		height: 100%;
		
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: fixed;
	}
	.cover {
		align-self: center;
	}
</style>

<template>
	<view class="page">
		<!-- 轮播图 -->
		<index-swiper :carouselList="carouselList"></index-swiper>
		<!-- 热门英超 -->
		<super-hot :hotSuperheroList="hotSuperheroList"></super-hot>
		<!-- 热门预告 -->
		<trailer-hot :hotTrailerList="hotTrailerList"></trailer-hot>
		<!-- 猜你喜欢 -->
		<guessu-like :guessULikeList="guessULikeList" @praiseMe="praiseMe" 
					 :animationDataArr="animationDataArr"></guessu-like>
	</view>
</template>

<script>
	import IndexSwiper from "./childComps/IndexSwiper.vue"
	import SuperHot from "./childComps/SuperHot.vue"
	import TrailerHot from "./childComps/TrailerHot.vue"
	import GuessuLike from "./childComps/GuessuLike.vue"
	
	export default {
		components:{
			IndexSwiper,
			SuperHot,
			TrailerHot,
			GuessuLike
		},
		data() {
			return {
				//轮播图数据
				carouselList:[]	,
				//热门英超数据
				hotSuperheroList:[],
				//热门预告数据
				hotTrailerList:[],
				//猜你喜欢列表数据
				guessULikeList:[],
				//动画
				animationData:{},
				animationDataArr: [
					{}, {}, {}, {}, {}
				]
			}
		},
		onPullDownRefresh() {
			this.refresh();
		},
		onUnload() {
			//页面卸载时候，清除动画数据
			this.animationData = {},
			this.animationDataArr = [
				{}, {}, {}, {}, {}
			];
		},
		onHide() {
			if (this.videoContext) {
				this.videoContext.pause();
			}
		},
		onLoad() {
			let me = this
			//通过挂载在main.js 获取服务器地址，作为全局变量
			let serverUrl = me.serverUrl
			// 在页面创建的时候，创建一个临时动画对象
			this.animation = uni.createAnimation();
			
			//获取轮播图数据
			uni.request({
				url: serverUrl+'/index/carousel/list?qq=2715705745', 
				method:"POST",
				success: (res) => {
					//console.log(res.data);
					if(res.data.status ==200){
						me.carouselList = res.data.data
					}
				}
			});
			//获取热门英超数据
			uni.request({
				url:serverUrl +"/index/movie/hot?type=superhero&qq=2715705745",
				method:"POST",
				success: (res) => {
					if(res.data.status == 200){
						me.hotSuperheroList = res.data.data
					}
				}
			})
			//获取热门预告数据
			uni.request({
				url:serverUrl +"/index/movie/hot?type=trailer&qq=2715705745",
				method:"POST",
				success: (res) => {
					if(res.data.status == 200){
						me.hotTrailerList = res.data.data
						//console.log(me.hotTrailerList)
					}
				}
			})
			me.refresh()
		},
		methods: {
			praiseMe(gIndex){
				//var gIndex = e.currentTarget.dataset.gindex;
				//console.log(gIndex);
				// 构建动画数据，并且通过step来表示这组动画的完成
				this.animation.translateY(-60).opacity(1).step({
					duration: 400
				});
				
				// 导出动画数据到view组件，实现组件的动画效果
				this.animationData = this.animation;
				//this.animationDataArr[gIndex] = this.animationData.export();
				this.animationDataArr.splice(gIndex, 1, this.animationData.export())
				//还原动画
				setTimeout(function(){
					this.animation.translateY(0).opacity(0).step({
						duration: 0
					});
					this.animationData = this.animation;
					//this.animationDataArr[gIndex] = this.animationData.export();
					this.animationDataArr.splice(gIndex, 1, this.animationData.export())
				}.bind(this),500)
			},
			
			//猜你喜欢数据
			refresh(){
				let me = this
				
				uni.showLoading({
					mask: true
				});
				uni.showNavigationBarLoading();
				
				//通过挂载在main.js 获取服务器地址，作为全局变量
				let serverUrl = me.serverUrl
				//猜你喜欢列表数据
				uni.request({
					url:serverUrl +"/index/guessULike?qq=2715705745",
					method:"POST",
					success: (res) => {
						//console.log(res)
						if(res.data.status == 200){
							me.guessULikeList = res.data.data
						}
					},
					complete: () => {
						uni.hideNavigationBarLoading();
						uni.hideLoading();
						uni.stopPullDownRefresh();
					}
				})
			}
		}
	}
</script>

<style scoped>

</style>

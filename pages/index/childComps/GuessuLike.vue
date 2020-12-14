<template>
	<view class="page guess-like">
		<!-- 标题 -->
		<view class="guess-title">
			<image src="../../../static/icos/guess-u-like.png" class="guess-title-icon"></image>
			<text class="guess-text">猜你喜欢</text>
		</view>
		<!-- 视频列表 -->
		<view class="guess-list" v-for="(guess,gIndex) in guessULikeList">
			<navigator class="single-like-movie" :url="'../movie/movie?trailerId=' + guess.id" hover-class="none">
				<image :src="guess.cover" class="like-img" ></image>
				<!-- <easy-loadimage mode="widthFix"
					:scroll-top="scrollTop"
					class="like-img"
					:image-src="guess.cover"></easy-loadimage> -->
				<view class="guess-desc">
					<view class="desc-name">{{guess.name}}</view>
					<trailer-stars :innerScore="guess.score" ></trailer-stars>
					<view class="desc-info">{{guess.basicInfo}}</view>
					<view class="desc-info">{{guess.releaseDate}}</view>
				</view>
			</navigator>
			<view class="movie-oper" :data-gIndex="gIndex" @click="praiseMe">
				<image src="../../../static/icos/praise.png" class="praise-ico"></image>
				<view class="praise-me">
					点赞
				</view>
				<view :animation="animationDataArr[gIndex]" class="praise-me animation-opacity">
					+1
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import TrailerStars from "@/components/content/trailerStars.vue"
	import easyLoadimage from '@/components/common/easy-loadimage/easy-loadimage.vue'
	export default{
		components:{
			TrailerStars,
			easyLoadimage
		},
		props:{
			guessULikeList:{
				type: Array,
				default() {
				  return []
				}
			},
			animationDataArr:{
				type: Array,
				default() {
					return [];
				}
			}
		},
		data(){
		    return {
		        scrollTop:0
		    }
		},
		onPageScroll({scrollTop}) {
		    // 传入scrollTop值并触发所有easy-loadimage组件下的滚动监听事件
		    this.scrollTop = scrollTop;
			console.log(scrollTop)
		},
		methods:{
			praiseMe(e){
				var gIndex = e.currentTarget.dataset.gindex;
				this.$emit("praiseMe",gIndex)
			}
		}
	}
</script>

<style scoped>
	.guess-title{
		padding: 30upx 20upx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.guess-title .guess-title-icon{
		width: 30upx;
		height: 30upx;
	}
	.guess-title .guess-text{
		font-size: 20px;
		font-weight: bold;
		margin-left: 15px;
	}
	.guess-list {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 20upx 20upx;
	}
	.single-like-movie {
		display: flex;
		justify-content: space-between;
	}
	.like-img{
		width: 180upx;
		height: 240upx;
		border-radius: 3%;
	}
	.guess-desc {
		width: 340upx;
		display: flex;
		flex-direction: column;
		margin-left: 20upx;
	}
	.desc-name{
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.desc-info {
		color: #808080;
		font-size: 14px;
	}
	.movie-oper {
		width: 140upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		
		border-left: dashed 2px;
		border-left-color: #dbdbda;
	}
	.praise-ico {
		width: 40upx;
		height: 40upx;
		align-self: center;
	}
	.praise-me {
		font-size: 14px;
		color: #feab2a;
		align-self: center;
	}
	.animation-opacity {
		font-weight: bold;
		opacity: 0;
	}
</style>

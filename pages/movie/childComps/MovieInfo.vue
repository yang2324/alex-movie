<template>
	<view class="movie-info">
		<navigator hover-class="none" :url="'../cover/cover?cover=' + trailerInfo.cover" >
			<image :src="trailerInfo.cover" class="cover" mode="aspectFill"></image>
		</navigator>
		<view class="movie-desc">
			<view class="desc-name">{{trailerInfo.name}}</view>
			<view class="desc-info">{{trailerInfo.basicInfo}}</view>
			<view class="desc-info">{{trailerInfo.originalName}}</view>
			<view class="desc-info">{{trailerInfo.totalTime}}</view>
			<view class="desc-info">{{trailerInfo.releaseDate}}</view>
			<view class="desc-score">
				<view class="score">
					<view class="score-title">综合评分：</view>
					<view class="score-num">{{trailerInfo.score}}</view>
				</view>
				<view class="like">
					<block v-if="trailerInfo.score>=0">
						<trailer-stars  :innerScore="trailerInfo.score" showNum="0"></trailer-stars>
					</block>
					<view class="prise-counts">{{trailerInfo.prisedCounts}}人点赞</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import TrailerStars from "../../../components/content/trailerStars.vue"
	export default{
		components:{
			TrailerStars
		},
		props:{
			trailerInfo:{
				type: Object,
				default() {
				  return {}
				}
			},
		},
		methods:{}
	}
</script>

<style scoped>
	.movie-info {
		padding: 40upx 20upx;
		display: flex;
		flex-direction: row;
		background-color: #f7f4f9;
	}
	.cover {
		width: 280upx;
		height: 380upx;
	}
	.movie-desc{
		display: flex;
		flex-direction: column;
		margin-left: 30upx;
		width: 400upx;
	}
	.desc-name {
		font-size: 36upx;
		padding-bottom: 10upx;
	}
	.desc-info {
		color: darkgray;
		font-size: 28upx;
		line-height: 40upx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.desc-score{
		background-color: white;
		margin-top: 20upx;
		width: 360upx;
		height: 90upx;
		padding: 20upx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		/* 追加阴影效果 */
		box-shadow: 3px 2px 10px #dedede;
	}
	.score-title{
		font-size: 28upx;
		color: darkgray;
	}
	.score-num{
		font-size: 46upx;
		font-weight: bold;
		margin-left: 8upx;
		color: #FEAB2A;
		line-height: 60upx;
	}
	.prise-counts {
		font-size: 28upx;
		color: grey;
		line-height: 60upx;
	}
</style>

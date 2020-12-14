<template>
	<view class="traile-hot">
		<!-- 标题 -->
		<view class="hot-title">
			<image src="../../../static/icos/interest.png" class="hot-title-icon"></image>
			<text class="hot-text">热门预告</text>
		</view>
		<!-- 预告列表 -->
		<view class="hot-movies">
			<video 
				:id="trailer.id"
				:data-playingindex="trailer.id"
				@play="meIsPlaying"
				v-for="trailer in hotTrailerList" 
				:src="trailer.trailer" 
				:poster="trailer.poster" 
				class="hot-movie-single"
				controls></video>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{}
		},
		props:{
			hotTrailerList:{
				type: Array,
				default() {
				  return []
				}
			}
		},
		methods:{
			// 播放一个视频的时候，需要暂停其他正在播放的视频
			meIsPlaying(e){
				var me = this;
				var trailerId = "";
				if (e) {
					trailerId = e.currentTarget.dataset.playingindex;
					//console.log(trailerId)
					me.videoContext = uni.createVideoContext(trailerId);
				}
				var hotTrailerList = me.hotTrailerList;
				for (var i = 0; i < hotTrailerList.length ; i ++) {
					var tempId = hotTrailerList[i].id;
					if (tempId != trailerId) {
						uni.createVideoContext(tempId).pause();
					}
				}
			}
		}
	}
</script>

<style scoped>
	.hot-title{
		padding: 30upx 20upx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.hot-title .hot-title-icon{
		width: 30upx;
		height: 30upx;
	}
	.hot-title .hot-text{
		font-size: 20px;
		font-weight: bold;
		margin-left: 15px;
	}
	.hot-movies {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0upx 20upx 20upx 20upx;
	}
	.hot-movie-single {
		width: 350upx;
		height: 220upx;
		margin-top: 10upx;
	}
</style>

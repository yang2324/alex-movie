<template>
	<view class="super-hot">
		<!-- 标题 -->
		<view class="hot-title">
			<image src="../../../static/icos/hot.png" class="hot-title-icon"></image>
			<text class="hot-text">热门英超</text>
		</view>
		<!-- 内容滚动区域 -->
		<scroll-view scroll-x="true" class="scroll-box">
			<view class="scroll-list" v-for="supers in hotSuperheroList">
				<navigator class="sup-list" hover-class="none" :url="'../movie/movie?trailerId=' + supers.id">
					<!-- <image :src="supers.cover" class="sup-img"></image> -->
					<easy-loadimage mode="widthFix"
					    :scroll-top="scrollTop"
						class="sup-img"
					    :image-src="supers.cover"></easy-loadimage>
					<text class="sup-text">{{supers.name}}</text>
					<trailer-stars :innerScore="supers.score" showNum="1"></trailer-stars>
				</navigator>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import TrailerStars from "../../../components/content/trailerStars.vue"
	import easyLoadimage from '@/components/common/easy-loadimage/easy-loadimage.vue'
	export default{
		components:{
			TrailerStars,
			easyLoadimage
		},
		props: {
		  hotSuperheroList: {
		    type: Array,
		    default() {
		      return []
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
	.scroll-box{
		width: 100%;
		white-space: nowrap;
	}
	.scroll-list{
		display: inline-block;
		margin-left: 20upx;
	}
	.sup-list{
		display: flex;
		flex-flow: column;
	}
	.sup-img{
		width: 200upx;
		height: 270upx;
	}
	.sup-text{
		width: 200upx;
		margin-top: 10upx;
		font-size: 14px;
		font-weight: bold;
		/* name超出则省略 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>

<template>
	<view class="page">
		<!-- 视频播放 -->
		<video-player :trailerInfo="trailerInfo" id="myTrailer"></video-player>
		<!-- 视频详情 -->
		<movie-info :trailerInfo="trailerInfo"></movie-info>
		<!-- 分隔线 -->
		<line-wapper></line-wapper>
		<!-- 剧情介绍 -->
		<view class="plots-block">
			<view class="plots-title">剧情介绍</view>
			<view class="plots-desc">{{trailerInfo.plotDesc}}</view>
		</view>
		<!-- 演职列表 -->
		<cast-member :directorArray="directorArray" :actorArray="actorArray" @lookStaffs="lookStaffs"></cast-member>
		<!-- 剧照 -->
		<plot-pics :plotPicsArray="plotPicsArray" @lookMe="lookMe"></plot-pics>
	</view>
</template>

<script>
	import VideoPlayer from "./childComps/VideoPlayer.vue"
	import MovieInfo from "./childComps/MovieInfo.vue"
	import LineWapper from "../../components/common/LineWapper.vue"
	import CastMember from "./childComps/CastMember.vue"
	import PlotPics from "./childComps/PlotPics.vue"
	
	export default {
		components:{
			VideoPlayer,
			MovieInfo,
			LineWapper,
			CastMember,
			PlotPics
		},
		data() {
			return {
				trailerInfo: {},
				plotPicsArray: [],	// 剧照
				directorArray: [],	// 导演列表
				actorArray: []		// 演员列表
			}
		},
		// 页面初次渲染完成，获得视频上下文对象
		onReady() {
			this.videoContext = uni.createVideoContext('myTrailer');
		},
		onHide() {
			// 页面被隐藏的时候，暂停播放
			this.videoContext.pause();
		},
		onShow() {
			// 页面被再次显示的时候，可以继续播放
			if (this.videoContext) {
				this.videoContext.play();
			}
		},
		onLoad(params) {
			var me = this;
			// 获取上一个页面传入的参数
			var trailerId = params.trailerId;
			//通过api修改导航栏颜色
			uni.setNavigationBarColor({
				backgroundColor:"#000000",
				frontColor:"#ffffff"
			})
			
			// 获取预告片的详细信息
			var serverUrl = me.serverUrl;
			uni.request({
				url:serverUrl+'/search/trailer/'+trailerId+'?qq=2715705745',
				method:"POST",
				success: (res) => {
					if(res.data.status == 200 ){
						me.trailerInfo = res.data.data
						me.plotPicsArray = JSON.parse(me.trailerInfo.plotPics)
					}
				}
			})
			//获取导演
			uni.request({
				url:serverUrl+'/search/staff/'+trailerId+'/1'+'?qq=2715705745',
				method:"POST",
				success: (res) => {
					if(res.data.status == 200 ){
						me.directorArray = res.data.data
					}
				}
			})
			//获取演员
			uni.request({
				url:serverUrl+'/search/staff/'+trailerId+'/2'+'?qq=2715705745',
				method:"POST",
				success: (res) => {
					if(res.data.status == 200 ){
						me.actorArray = res.data.data
					}
				}
			})
		},
		// 此函数仅仅只支持在小程序端的分享，分享到微信群或者微信好友
		onShareAppMessage(res) {
			let me = this;
			return {
			  title: me.trailerInfo.name,
			  path: '/pages/movie/movie?trailerId=' + me.trailerInfo.id
			}
		},
		//监听原生标题栏按钮点击事件
		onNavigationBarButtonTap(e){
			let index = e.index
			var me = this;
			var trailerInfo = me.trailerInfo;
			var trailerId = trailerInfo.id;
			var trailerName = trailerInfo.name;
			var cover = trailerInfo.cover;
			var poster = trailerInfo.poster;
			
			if(index == 0){
				uni.share({
				    provider: "weixin",
				    scene: "WXSceneSession",
				    type: 0,
				    href:  "http://www.imovietrailer.com:909/#/pages/movie/movie?trailerId=" + trailerId,
				    title: trailerName,
				    summary: trailerName,
				    imageUrl: cover,
				    success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    }
				});
			}
		},
		methods: {
			//剧照点击放大图片预览
			lookMe(imgIndex){
				let me = this
				uni.previewImage({
					current: me.plotPicsArray[imgIndex],
					urls: me.plotPicsArray
				})
			},
			//演职点击放大图片预览
			lookStaffs(staffIndex){
				let me = this
				//定义一个新的数组
				let directorArray = me.directorArray;
				let actorArray = me.actorArray;
				let newStaffArray = [];
				newStaffArray = newStaffArray.concat(directorArray).concat(actorArray);
				
				let urls = [];
				for (let i = 0; i < newStaffArray.length ; i ++) {
					let tempPhoto = newStaffArray[i].photo;
					urls.push(tempPhoto);
				}
				
				uni.previewImage({
					current: urls[staffIndex],
					urls: urls
				})
			}
		}
	}
</script>

<style scoped>
	.plots-block {
		background-color: #f7f4f9;
		padding: 20upx 40upx;
	}
	.plots-title {
		color: #A9A9A9;
		font-size: 14px;
	}
	.plots-desc {
		margin-top: 10upx;
		font-size: 16px;
	}
</style>

<template>
	<view class="page">
		<!-- 搜索框 -->
		<search-input @searchMe="searchMe"></search-input>
		<!-- 电影列表 -->
		<movie-list :trailerList="trailerList" @showTrailer="showTrailer"></movie-list>
	</view>
</template>

<script>
	import SearchInput from "./childComps/SearchInput.vue"
	import MovieList from "./childComps/MovieList.vue"
	
	export default {
		components:{
			SearchInput,
			MovieList
		},
		data() {
			return {
				trailerList:[],
				keywords: "",			// 搜索的关键字
				page: 1,				// 当前第几页
				totalPages: 1			// 总页数
			}
		},
		onLoad() {
			let me = this;
			uni.showLoading({
				mask: true,
				title: "请稍后..."
			});
			uni.showNavigationBarLoading();
			//通过挂载在main.js 获取服务器地址，作为全局变量
			let serverUrl = me.serverUrl
			uni.request({
				 url:serverUrl+"/search/list?keywords=&page=&pageSize=&qq=2715705745",
				method:"POST",
				success: (res) => {
					if(res.data.status == 200){
						me.trailerList = res.data.data.rows
					}
					//console.log(me.trailerList)
				},
				complete: () => {
					uni.hideNavigationBarLoading();
					uni.hideLoading();
				}
			})
		},
		onReachBottom() {
			var me = this;
			
			var page = me.page + 1;			// 查询下一页面，当前页数累加1
			var keywords = me.keywords;		// 获得当前页面中data里的搜索值
			var totalPages = me.totalPages;	// 获取总页数
			
			// 如果当前需要分页的分页数和总页数相等，就不分页
			if (page > totalPages) {
				return;
			}
			
			me.pagedTrailerList(keywords, page, 15);
			
		},
		methods: {
			//点击跳转到详情页
			showTrailer(trailerId) {
				//var trailerId = e.currentTarget.dataset.trailerid;
				// 页面跳转接口api
				uni.navigateTo({
					url: "../movie/movie?trailerId=" + trailerId
				})
			},
			pagedTrailerList(keywords, page, pageSize) {
				var me = this;
				
				uni.showLoading({
					mask: true,
					title: "请稍后..."
				});
				uni.showNavigationBarLoading();
				
				var serverUrl = me.serverUrl;
				// 查询猜你喜欢数据列表
				uni.request({
					url: serverUrl + '/search/list?keywords=' + keywords+ '&page=' + page+ '&pageSize=' + pageSize+'&qq=2715705745',
					method: "POST",
					success: (res) => {
						// 获取真实数据之前，务必判断状态是否为200
						if (res.data.status == 200) {
							// debugger;
							var tempList = res.data.data.rows;
							me.trailerList = me.trailerList.concat(tempList);
							me.totalPages = res.data.data.total;	// 获取总页数
							me.page = page;		// 覆盖当前页面里的page
						}
						console.log(res)
					},
					complete: () => {
						uni.hideNavigationBarLoading();
						uni.hideLoading();
					}
				});
			},
			searchMe(value) {
				var me = this;
				// 获取搜索的内容
				//var value = e.detail.value;
				me.keywords = value;
				me.trailerList = [];
				
				me.pagedTrailerList(value, 1, 15);
			}
		}
	}
</script>

<style scoped>
	
</style>

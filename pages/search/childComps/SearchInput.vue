<template>
	<view class="search-box">
		<view class="search-ico-wapper">
			<image src="../../../static/icos/search.png" class="search-icon"></image>
		</view>
		<input
			placeholder="搜索电影"  
			class="search-text"
			maxlength="10"
			confirm-type="search"
			@confirm="searchMe"/>
	</view>
</template>

<script>
	export default{
		methods:{
			searchMe(e){
				var value = e.detail.value;
				this.$emit("searchMe",value)
			}
		}
	}
</script>

<style scoped>
	.search-box {
		display: flex;
		flex-direction: row;
		padding: 0upx 20upx 20upx 20upx;
		/* 固定搜索栏 */
		position: fixed;
		top: 100;
		z-index: 2000;
		background-color: #F8F8F8;
	}
	.search-ico-wapper {
		background-color: #eaeaea;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0upx 10upx;
	}
	/* 搜索框 start */
	.search-icon{
		width: 40upx;
		height: 40upx;
	}
	.search-text {
		font-size: 14px;
		background-color: #eaeaea;
		height: 60upx;
		width: 650upx;
	}
</style>

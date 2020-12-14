<template>
	<view class="plot-pics">
		<view class="plot-title">剧照</view>
		<scroll-view scroll-x class="scroll-list">
			<!-- 剧照 -->
			<image v-for="(plot,imgIndex) in plotPicsArray" 
					:src="plot" class="single-actor" 
					mode="aspectFill"
					@click="lookMe"
					:data-imgIndex="imgIndex"></image>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		props:{
			plotPicsArray:{
				type:Array,
				default() {
				  return []
				}
			}
		},
		methods:{
			lookMe(e){
				let imgIndex = e.currentTarget.dataset.imgindex;
				this.$emit("lookMe",imgIndex)
			}
		}
	}
	
</script>

<style scoped>
	.plot-pics {
		background-color: #f7f4f9;
		padding: 20upx 40upx;
	}
	.scroll-list {
		width: 100%;
		white-space: nowrap;
		margin-top: 20upx;
	}
	.plot-title {
		color: #A9A9A9;
		font-size: 14px;
	}
	.single-actor {
		width: 220upx;
		height: 300upx;
		margin-right: 10upx;
	}

</style>

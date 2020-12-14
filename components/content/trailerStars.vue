<template>
	<view class="stars-list">
		<image v-for="yello in yelloScore" src="../../static/icos/star-yellow.png" class="stars-icon"></image>
		<image v-for="gray in grayScore" src="../../static/icos/star-gray.png" class="stars-icon"></image>
		<view class="stars-score" v-if="showNum == 1">{{innerScore}}</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				yelloScore: 0,
				grayScore: 5
			}
		},
		props:{
			innerScore: 0	,//父组件传入的值
			showNum: 0			// 是否需要显示具体的分数  1：显示  0：不显示
		},
		//创建时候调用
		created() {
			let tempScore = 0;
			if(this.innerScore !=null && this.innerScore !='' && this.innerScore != undefined){
				tempScore = this.innerScore
			}
			let yelloScore = parseInt(tempScore / 2);
			let grayScore = 5 - yelloScore;
			
			this.yelloScore = yelloScore;
			this.grayScore = grayScore
		}
	}
</script>

<style>
	.stars-list{
		display: flex;
		flex-flow: row;
		align-items: center;
	}
	.stars-icon{
		width: 20upx;
		height: 20upx;
	}
	.stars-score{
		font-size: 12px;
		margin-left: 10px;
	}
</style>

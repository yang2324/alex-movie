<template>
	<view class="player">
		<video 
			id="myTrailer"
			:src="trailerInfo.trailer" 
			:poster="trailerInfo.poster" 
			class="movie"></video>
	</view>
</template>

<script>
	export default{
		props:{
			trailerInfo:{
				type: Object,
				default() {
				  return {}
				}
			}
		}
	}
</script>

<style scoped>
	.player {
		display: flex;
		justify-content: center;
		background-color: black;
	}
	
	.movie {
		width: 100%;
		height: 440upx;
	}
</style>

<template>
	<view class="movie-list">
		<view class="movie-wapper" v-for="trailer in trailerList">
			<image :src="trailer.cover" class="poster" 
					:data-trailerId="trailer.id"
					@click="showTrailer"></image>
		</view>
	</view>
</template>

<script>
	export default{
		props: {
		    trailerList: {
		      type: Array,
		      default() {
		        return []
		      }
		    }
		},
		methods:{
			showTrailer(e){
				var trailerId = e.currentTarget.dataset.trailerid;
				this.$emit("showTrailer",trailerId)
			}
		}
	}
</script>

<style scoped>
	.movie-list {
		padding: 100upx 30upx 0upx 30upx;
		width: 100%;
		height: 100%;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		box-sizing: border-box;
	}
	.movie-wapper {
		padding: 15upx 0;
		width: calc((100% - 60upx)/3);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.movie-list:after { 
		content: ""; 
		width:210upx;
	} 
	.poster {
		width: 100%;
		height: 270upx;
	}
</style>

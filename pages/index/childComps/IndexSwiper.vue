<template>
	<!-- 轮播图 -->
	<swiper :indicator-dots="true" :autoplay="true" class="carousel" indicator-active-color="#9AFF9A" indicator-color="#F0FFF0">
		<swiper-item v-for="carousel in carouselList">
			<navigator open-type="navigate" hover-class="none" :url="'../movie/movie?trailerId=' + carousel.movieId">
				<!-- <image :src="carousel.image" class="carousel"></image> -->
				<easy-loadimage mode="widthFix"
				    :scroll-top="scrollTop"
					class="carousel"
				    :image-src="carousel.image"></easy-loadimage>
			</navigator>
		</swiper-item>
	</swiper>
</template>

<script>
	import easyLoadimage from '@/components/common/easy-loadimage/easy-loadimage.vue'
	export default{
		components:{
			easyLoadimage
		},
		props: {
		    carouselList: {
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
		},
	}
</script>

<style scoped>
	.carousel{
		width: 100%;
		height: 440upx;
	}
</style>

<template>
	<view class="cast-member">
		<view class="cast-title">演职人员</view>
		<scroll-view scroll-x class="scroll-list">
			<!-- 导演 -->
			<view class="actor-wapper" v-for="(director,staffIndex) in directorArray">
				<image :src="director.photo" class="single-actor" mode="aspectFill" 
						@click="lookStaffs" :data-staffIndex="staffIndex"></image>
				<view class="actor-name">{{director.name}}</view>
				<view class="actor-role">{{director.actName}}</view>
			</view>
			<!-- 演员 -->
			<view class="actor-wapper" v-for="(actor,actorIndex) in actorArray">
				<image :src="actor.photo" class="single-actor" mode="aspectFill" 
						@click="lookStaffs" :data-staffIndex="actorIndex + directorArray.length"></image>
				<view class="actor-name">{{actor.name}}</view>
				<view class="actor-role">{{actor.actName}}</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		props:{
			directorArray:{
				type:Array,
				default() {
				  return []
				}
			},
			actorArray:{
				type:Array,
				default() {
				  return []
				}
			}
		},
		methods:{
			lookStaffs(e){
				let staffIndex = e.currentTarget.dataset.staffindex;
				this.$emit("lookStaffs",staffIndex)
			}
		}
	}
</script>

<style scoped>
	.cast-member {
		background-color: #f7f4f9;
		padding: 20upx 40upx;
	}
	.scroll-list {
		width: 100%;
		white-space: nowrap;
		margin-top: 20upx;
	}
	.cast-title {
		color: #A9A9A9;
		font-size: 14px;
	}
	.single-actor {
		width: 170upx;
		height: 240upx;
		margin-right: 10upx;
	}
	.actor-wapper {
		display: inline-block;
	}
	.actor-name {
		width: 170upx;
		text-align: center;
		font-size: 15px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.actor-role {
		width: 170upx;
		text-align: center;
		font-size: 13px;
		color: #A9A9A9;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>

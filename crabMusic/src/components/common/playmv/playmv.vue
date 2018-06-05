<template>
<transition name="fold">
<div class="playmv">
	<div class="title">
		<span class="item-back iconfont icon-fanhui" @click="goBack()"></span>
		<span class="title-name">mv</span>
		<span class="item-back"></span>
	</div>
	<div class="playmvBox">
		<!-- <video :src="videomv" autoplay controls style="max-width: 100%;height: 100%;"> -->
			<!-- 问题：本地的可以播放网络的不能播放暂时没找到原因 -->
		<video :src="mvSrc1" autoplay controls style="max-width: 100%;height: 100%;">
		</video>
	</div>
</div>
</transition>
</template>

<script>
export default {
  name: 'playmv',
  data () {
    return {
      mvSrc1: 'static/mengda.mp4'
    }
  },
  props: ['videomv'],
  methods: {
  	goBack: function(){
  		this.$emit('playClose')
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.playmv{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #434343;
	z-index: 8;
	font-size: 0;
}
.title{
	padding: 0.1rem 0.6rem;
}
.title .item-back{
	display: inline-block;
	width: 10%;
	text-align: left;
	font-size: 0.8rem;
	height: 1.2rem;
	line-height: 1.2rem;
	vertical-align: top;
}
.title-name{
	display: inline-block;
	width: 80%;
	text-align: center;
	font-size: 0.6rem;
	height: 1.2rem;
	line-height: 1.2rem;
	vertical-align: top;
}

.playmvBox{
	position: absolute;
	top: 25%;
	left: 0;
	right: 0;
	width: 100%;
	height: 50%;
	background-color: #e3e3e3;
	font-size: 2rem;
}


.playmv.fold-enter-active,
.playmv.fold-leave-active {
  transition: all 0.2s;
}
.playmv.fold-enter,
.playmv.fold-leave-active {
  transform: translate3d(0, 100%, 0);
}
</style>

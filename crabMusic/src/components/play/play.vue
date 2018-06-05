<template>
<transition name="fold">
<div class="playPage">
	<div class="play-bg">
		<img v-lazy="song.al.picUrl">
	</div>
  <div class="play-header">
  	<div class="play-header-item play-header-left" @click="goBack()">
  		<span class="iconfont icon-nav-more"></span>
  	</div>
  	<div class="play-header-item play-header-con">
  		<span class="song-name">{{song.name}}</span>
        <span class="singer">{{song.al.name}}</span>
  	</div>
  	<div class="play-header-item play-header-right">
  		<span>Hi-Fi</span>
  	</div>
  </div>
  <div class="play-img">
  	<div class="play-img-box">
  		<img v-show="isPlay" class="rotImg1" v-lazy="song.al.picUrl">
  		<img v-show="!isPlay" v-lazy="song.al.picUrl">
  	</div>
  </div>
  <div class="play-control">
  	<div class="play-control-time">
		<span>{{progressTime1}}</span>
  		<progress class="progress" :value="progressTime" :max="progressEnd">
		</progress>
		<span>{{progressEnd1}}</span>
       <audio controls autoplay id="audio" @timeupdate='updateTime' @canplay='durationTime' style="display:none" @ended='endedTime' :src='songMp3'>
            <source src=''  id="source">
        </audio>
  	</div>
  	<div class="play-control-c">
  		<span class="other-item iconfont icon-suijibofang"></span>
  		<span style="font-size: 1.2rem;" class="other-item iconfont icon-rewkuaitui"></span>
  		<span @click="play()" style="font-size: 1.4rem;" class="other-item iconfont icon-bofang5" v-show="!isPlay"></span>
  		<span @click="play()" style="font-size: 1.4rem;" class="other-item iconfont icon-weibiaoti519" v-show="isPlay"></span>
  		<span style="font-size: 1.2rem;" class="other-item iconfont icon-speedkuaijin"></span>
  		<span class="other-item iconfont icon-liebiao"></span>
  	</div>
  	<div class="play-control-other">
  		<span v-show="!isCollect" @click="collect" class="other-item iconfont icon-icon_collect"></span>
  		<span v-show="isCollect" @click="collect" class="other-item iconfont icon-icon3" style="color: red;"></span>
  		<span class="other-item iconfont icon-icon" @click="downLoad()"></span>
  		<span class="other-item iconfont icon-weibiaoti-"></span>
  		<span class="other-item iconfont icon-more"></span>
  	</div>
  </div>

</div>
</transition>
</template>

<script>
import {getSongmsg} from '@/api/api'
import {mapMutations,mapGetters} from 'vuex'

export default {
  name: 'play',
  data () {
    return {
      progressTime: 0,//进度条的value
      progressEnd: 0,//进度条的maxvalue
      progressTime1: '00:00',//显示歌曲进度条所在的时间
      progressEnd1: '00:00',//歌曲的总时间
      songMp3: '',//存放歌曲的src地址
      isCollect: false //判断是否收藏
    }
  },
  computed: {
  	...mapGetters([
  		"song",
  		"isPlay"
  		])
  },
  watch: {
  	isPlay() {//检测歌曲播放和暂停按钮变动，并控制暂停播放154465
		if (!this.song.id) {//用于第一次时候不存在歌曲，用于初始化（注意id至换一下）
			console.log(66666666)
			this.setSong({
				al: {
					name:'刘德华',
					picUrl:'static/images/stupid.jpg'
				},
				name: '笨小孩',
				id: 154465
			})
		}
		if (this.isPlay && this.songMp3.length) {
		document.querySelector('audio').play()//播放
		}else{
		document.querySelector('audio').pause()//暂停
		}
  	},
  	song() {//监控歌曲是否改变，如果改变就修改isPlay为true
  		console.log(999999999999999)
  		this.setIsPlay(true)
  		var that = this
  		getSongmsg(this.song.id).then((res) => {
  			that.songMp3=res.data[0].url
  		})
  	}
  },
  methods: {
  	goBack: function(){
  		this.$emit('playClose')
  	},
  	downLoad: function(){
  		console.log("点击了下载，正在下载...")
  	},
  	updateTime() {
  		// 这个是歌曲所在时间单位是（秒）s
  		this.progressTime=parseInt(document.querySelector('audio').currentTime)
  		this.progressTime1=this.chengTime(parseInt(document.querySelector('audio').currentTime))
  	},
	durationTime() {
		// 这是是歌曲总共时间单位是（秒）s
		this.progressEnd = parseInt(document.querySelector('audio').duration)
		this.progressEnd1 = this.chengTime(parseInt(document.querySelector('audio').duration))
	},
	endedTime() {///歌曲播放结束后执行的函数
      this.setIsPlay(false)
		console.log("endedTime")
	},
	chengTime(time) {//修改时间格式 将200秒改为03:20
		var second = time % 60
		if (second<10) {
			second='0'+second
		}
		var minute = parseInt(time/60)
		if (minute<10) {
			minute='0'+minute
		}
		var NewTime = minute+":"+second
		// console.lcNewTime)
		return NewTime
	},
	play() {//控制播放和暂停按钮
      this.setIsPlay(!this.isPlay)
	},
	collect() {//收藏按钮的显示改变，收藏功能待开发中...
		this.isCollect=!this.isCollect
	},
	...mapMutations({
		setSong: 'SET_SONG',
		setIsPlay: 'SET_ISPLAY'
	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.playPage{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #efefef;
	z-index: 6;
	font-size: 0;
}
.playPage .play-bg{
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: -1;
	-webkit-filter: blur(158px);
	-moz-filter: blur(158px);
	-o-filter: blur(158px);
	-ms-filter: blur(158px);
	filter: blur(158px);
}
.playPage .play-bg img{
	display: inline-block;
	width: 100%;
	height: 100%;
}
.play-img{
	height: 48vh;
}
.play-img .play-img-box{
	display: inline-block;
	width: 38vh;
	height: 38vh;
	background-color: pink;
	border: 0.4rem solid #737D7C;
	border-radius: 50%;
	margin-top: 8vh;
}
.play-img .play-img-box img{
	display: inline-block;
	width: 100%;
	height: 100%;
	border-radius: 50%;
	border: 1.4rem solid #212121;
}

.play-header-item{
	display: inline-block;
	height: 8vh;
	vertical-align: top;
	color: #fff;
}
.play-header-left{
	text-align: left;
	width: 16%;
}
.play-header-left span.iconfont{
	display: inline-block;
	width: 60%;
	padding-top: 0.6rem;
	font-size: 1.4rem;
	color: #fff;
}
.play-header-con{
	width: 64%;
}
.play-header-con span.song-name{
	margin-top: 1.2vh;
	font-size: 0.8rem;
}
.play-header-con span.singer{
	font-size: 0.718rem;
	color: #fff;
}
.play-header-right{
	width: 20%;
	margin-top: 1.2vh;
}
.play-header-right span{
	display: inline-block;
	width: 5.6vh;
	height: 5.6vh;
	font-size: 0.68rem;
	line-height: 5.6vh;
	border: 1px solid #fff;
	border-radius: 50%;
}
.play-control{
	height: 42.8vh;
}
.play-control-time{
	height: 18vh;
	font-size: 0.8rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.progress{
	display: inline-block;
	height: 0.2rem;
	width: 68%;
	background-color: yellow;
}
.play-control-time span{
	display: inline-block;
	width: 16%;
	font-size: 0.6rem;
}
.play-control-c{
	display: flex;
	height: 16vh;
	justify-content: space-around;
	align-items: center;
	font-size: 1rem;
}
.play-control-other{
	display: flex;
	justify-content: space-around;
	font-size: 1rem;
}
.other-item{
	height: 8vh;
	width: 20%;
	line-height: 8vh;
}


/*动画效果*/
.playPage.fold-enter-active,
.playPage.fold-leave-active {
  transition: all 0.5s;
}
.playPage.fold-enter,
.playPage.fold-leave-active {
  transform: translate3d(0, 100%, 0);
}


/*.rotImg1{
    z-index:1;
    animation: rotate 10s linear infinite ;
    -webkit-animation: rotate 10s linear infinite;
    transform-origin: center center;
}
@keyframes rotate {
    from{
      transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }
  }
@keyframes rotate {
    from{
      -webkit-transform: rotate(0deg);
    }
    to{
      -webkit-transform: rotate(360deg);
    }
  }*/
</style>

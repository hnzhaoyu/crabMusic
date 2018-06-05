<template>
  <div id="app">
  	<div class="navTab clearfix">
  		<div class="tab-item tab-left">
  			<span class="iconfont icon-moreclass" @click="searchcon"></span>
  		</div>
		<router-link tag="div" class="tab-item tab-con" to="/mine">
			<span class="tab-link">我的</span>
		</router-link>
		<router-link tag="div" class="tab-item tab-con" to="/find">
			<span class="tab-link">发现</span>
		</router-link>
  		<div class="tab-item tab-right" @click="searchcon">
  			<span class="iconfont icon-ICONbiaozhun_fuzhi-"></span>
  		</div>
  	</div>
	  	<keep-alive>
	    	<router-view/>
	    </keep-alive>
    <div class="play"><!-- v-show="song.id" 可根据是否存在song.id来判断是否显示play控件 -->
      <!-- <router-link tag="div" class="play-con" to="/play"> -->
      <div class="play-con" @click="playcon">
        <div class="song song-img">
          <img v-show="!isPlay" v-lazy="song.al.picUrl">
          <img v-show="isPlay" class="rotImg1" v-lazy="song.al.picUrl">
        </div>
        <div class="song song-con">
          <span class="song-name">{{song.name}}</span>
          <span class="singer">{{song.al.name}}</span>
        </div>
      </div>
      <!-- </router-link> -->
      <div class="play-item play-open">
        <span class="iconfont icon-bofang5" v-show="!isPlay" @click="playSong"></span>
        <span class="iconfont icon-weibiaoti519" v-show="isPlay"  @click="playSong"></span>
      </div>
      <div class="play-item play-nex">
        <span class="iconfont icon-speedkuaijin"></span>
      </div>
    	<div class="play-item play-more">
        <span class="iconfont icon-liebiao"></span> 
      </div>
    </div>
    <transition name="fold">
      <search  class="sidebar" v-show="searchshow" @searchclose="searchcon"></search>
	  </transition>
    <play v-show="playShow" @playClose="playcon"></play>

  </div>
</template>

<script>
import search from '@/components/search/search.vue'
import play from '@/components/play/play'
import {mapMutations,mapGetters} from 'vuex'

export default {
  name: 'App',
  data(){
  	return {
  		searchshow: false,
      playShow: false
  	}
  },
  components: {
  	search,
    play
  },
  computed: {
    ...mapGetters([
      'isPlay',
      'song'
      ])
  },
  methods: {
  	searchcon: function(){//搜索页面显示隐藏
  		this.searchshow=!this.searchshow
      console.log(666)
  	},
    playcon: function() {//播放页面显示隐藏
      this.playShow=!this.playShow
    },
    playSong: function() {
      this.setIsPlay(!this.isPlay)//控制播放暂停按钮
    },
    ...mapMutations({
      setSong: 'SET_SONG',
      setIsPlay: 'SET_ISPLAY'
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
.navTab{
	height: 4.5vh;
	line-height: 4.5vh;
	background-color: #f9f9f9;
	border-bottom: 1px solid #e0e0e0;
}
.router-link-active .tab-link{
  color: #F11540;
}
.navTab .tab-con{
	font-size: 0.738rem;
	padding: 0 0.8rem;
	vertical-align: top;
}
.tab-item{
	display: inline-block;
}
.tab-left{
	float: left;
	padding-left: 0.5rem;
}
.tab-right{
	float: right;
	padding-right: 0.5rem;
}
.tab-right .iconfont,.tab-left .iconfont{
	font-size: 1.02rem;
}

/*flex布局*/
.play{
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 6vh;
	width: 100%;
	border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  background-color: #fefefe;
}
.play-item{
  line-height: 5.6vh;
}
.play-item span.iconfont{
  font-size: 1.02rem;
}
.play-con{
  width: 46%;
  text-align: left;
  font-size: 0;
}
.play-open{
  width: 30%;
}
.play-next,.play-more{
  width: 12%; 
}
.song{
  display: inline-block;
  vertical-align: top;
  font-size: 0;
}
.song-img{
  width: 30%;
}
.song-con{
  width: 70%;
}
.song-img img{
  display: inline-block;
  width: 4.8vh;
  height: 4.8vh;
  border-radius: 50%;
  margin-top: 0.4vh;
  margin-left: 0.5rem;
  background-color: #fefefe;  
}
.song-name{
  display: inline-block;
  width: 100%;
  line-height: 3vh;
  font-size: 0.618rem;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.singer{
  display: inline-block;
  width: 100%;
  font-size: 0.5rem;
  color: #8a8a8a;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}


/*动画效果*/
.sidebar.fold-enter-active,
.sidebar.fold-leave-active {
  transition: all 0.5s;
}
.sidebar.fold-enter,
.sidebar.fold-leave-active {
  transform: translate3d(100%, 0, 0);
}


/**/
.rotImg1{
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
@-moz-keyframes rotate {
    from{
      transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }
  }
@-webkit-keyframes rotate {
    from{
      transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }
  }
@-o-keyframes rotate {
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
  }









</style>

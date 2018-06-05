<template>
<div class="select1">
	<slide :loop = 'loop' :autoPlay='autoPlay'>
	    <div class="slider-item">
	    	<img src="static/images/news.jpg">
	    </div>
	    <div class="slider-item">
	    	<img src="static/images/shoufa.jpg">
	    </div>
	    <div class="slider-item">
	    	<img src="static/images/select.jpg">
	    </div>
	</slide>
	<div class="box box-icon">
		<div class="box-item">
			<span class="iconfont">22</span>
			<span class="name">今日推荐</span>
		</div>
		<div class="box-item" @click="goRadio()">
			<span class="iconfont icon-pindao"></span>
			<span class="name">私人电台</span>
		</div>
		<div class="box-item">
			<span class="iconfont icon-icon3"></span>
			<span class="name">新歌首发</span>
		</div>
		<div class="box-item" @click="goSinger()">
			<span class="iconfont icon-liebiao"></span>
			<span class="name">全部歌手</span>
		</div>
	</div>
	<div class="newest">
		<div class="newest-header">
		  <span class="title">最新</span>
		  <span class="more iconfont icon-knomore"></span>
		</div>
		<div class="box">
			<div class="box-newest" v-for="item in songList" @click="openSong(item)">
				<img v-lazy="item.al.picUrl">
				<span class="name">{{item.name}} </span>
				<span class="name">{{item.al.name}} </span>
			</div>
		</div>
	</div>
  

</div>
</template>

<script>
import slide from '@/components/common/slide/slide.vue'
import {getSonglist} from '@/api/api'
import {mapMutations} from 'vuex'

export default {
  name: 'select1',
  data () {
    return {
      loop: true,
      autoPlay: true,
      songList: []
    }
  },
  components: {
  	slide
  },
  created() {
  	this._getSongList()
  },
  methods: {
  	_getSongList() {
  		getSonglist("热门",6).then((res) => {
			this.songList=res.result.songs
			console.log(res,this.songList)
  		})
  	},
  	openSong(item) {
  		this.setSong(item)
  	},
  	goRadio() {
  		this.$router.push({path: 'radio'})
  	},
  	goSinger() {
  		 this.$router.push({path: 'classify'})
  	},
  	...mapMutations({
  		setSong: 'SET_SONG'
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.select1{
  height: 84.7vh;
  font-size: 0;
  overflow-y: scroll;
}
.slider-item img{
	width: 100%;
	height: 100%;
}
.box{
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
}
.box-icon{
	padding: 0.6rem;
}
.box-item{
	width: 20%;
}
.box span.iconfont{
	display: inline-block;
	height: 2rem;
	width: 2rem;
	line-height: 2rem;
	color: #F11540;
	border: 1px solid #F11540;
	border-radius: 50%;
}
.box span.name{
	display: inline-block;
	font-size: 0.6rem;
	width: 3rem;
	color: #3e3e3e;
}

.box-newest{
	width: 33%;
	padding: 0.4rem;
	height: 8rem;
}
.box-newest img{
	width: 100%;
	height: 75%;
}
.box-newest span.name{
	font-size: 0.6rem;
	display:inline-block;
	width:100%;
	text-align: left;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}


/*最新-名称及更多*/
.newest-header{
  height: 6.3vh;
  width: 100%;
  line-height: 3.8vh;
  padding: 0.4rem 0.2rem;
  font-size: 0;
  text-align: left;
}
.newest-header .title{
  display: inline-block;
  text-align: left;
  margin-left: 0.4rem;
  padding-left: 0.4rem;
  font-size: 0.816rem;
  border-left: 0.1rem solid #F11540;
}
.newest-header .more{
  display: inline-block;
  text-align: right;
  float: right;
  margin-right: 0.4rem;
  font-size: 0.816rem;
}














</style>

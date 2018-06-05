<template>
<div class="search">
  <div class="header">
    <span class="header-font" @click="goBack">取消</span>
    <input type="text" ref="searchsong" class="sear" placeholder="搜索音乐曲库..." @keyup.13="searchCon()">
    <span class="header-search iconfont icon-ICONbiaozhun_fuzhi-"></span>
    <span class="header-font" @click="searchCon">搜索</span>
  </div>
  <div class="navBar" v-if="searchDate.length">
    <span class="nav-item" style="color: #F11540;border-bottom: 1px solid #F11540;">歌曲</span>
    <span class="nav-item">MV</span>
  </div>
  <div v-if="searchDate.length" class="searchList">
    <ul class="cont">
      <li class="cont-item" v-for="item in searchDate">
        <div class="cont-con" @click="_getMusic(item)">
          <p class="name">{{item.name}}</p>
          <p class="dec">{{item.al.name}}</p>
        </div>
        <span class="cont-more iconfont icon-more"></span>
      </li>
    </ul>
  </div>
  <div v-if="!searchDate.length" class="hotSearch">
    <p style="height: 1.6rem;line-height:1.6rem;font-size: 0.8rem;text-align: left;">热门搜索</p>
    <div class="hotSearch-box" @click="openSearch($event)">
      <div class="hotSearch-item">我们的纪念</div>
      <div class="hotSearch-item">笨小孩</div>
      <div class="hotSearch-item">后来的我们 </div>
      <div class="hotSearch-item">再见只是陌生人</div>
      <div class="hotSearch-item">庸人自扰</div>
      <div class="hotSearch-item">超级英雄</div>
      <div class="hotSearch-item">陈奕迅</div>
      <div class="hotSearch-item">抖音神曲2018</div>
    </div>
  </div>
</div>
</template>

<script>
import {getSearchlist} from '@/api/search'
import {mapMutations} from 'vuex'

export default {
  name: 'search',
  data () {
    return {
      searchDate:[]
    }
  },
  methods: {
  	goBack: function(){
  		this.$emit('searchclose')
  	},
    searchCon: function (argument) {
      var that = this
      console.log("search.vue", this.$refs.searchsong.value)
      var scon = this.$refs.searchsong.value
      getSearchlist(scon).then((res) => {
        console.log(res)
        if (res.code==200) {
          that.searchDate = res.result.songs
        }else{
          that.searchDate = []
        }
      })
    },
    openSearch(e){
      console.log(e.target.innerText)
      this.$refs.searchsong.value = e.target.innerText
      this.searchCon()
    },
    _getMusic: function(e){
      this.setSong(e)
    },
    ...mapMutations({
      setSong: 'SET_SONG'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 94vh;
	background-color: #fafafa;
}

.header{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4.5vh;
  line-height: 4.5vh;
  background-color: #ececec;
  font-size: 0;
}
.sear{
  display: inline-block;
  width: 72%;
  height: 3.2vh;
  padding-left: 1.2rem;
  border-radius: 0.1rem;
  background-color: #fefefe;
}
.header-font{
  display: inline-block;
  width: 14%;
  height: 4.5vh;
  font-size: 0.786rem;
  color: #F11540;
}
.header-search{
  position: absolute;
  top: 0;
  left: 15%;
}

.navBar{
  position: fixed;
  top: 4.5vh;
  left: 0;
  right: 0;
  height: 4.8vh;
  font-size: 0;
  border-bottom: 1px solid #ececec;
}
.navBar .nav-item{
  display: inline-block;
  width: 50%;
  height: 4.8vh;
  line-height: 4.8vh;
  font-size: 0.8rem;
}

.searchList{
  position: fixed;
  top: 9.3vh;
  left: 0;
  right: 0;
  height: 84.7vh;
  font-size: 0;
}

.cont{
  height: 100%;
  width: 100%;
  overflow-y: auto;
}
.cont .cont-item{
  height: 1.8rem;
  width: 96%;
  margin-left: 4%;
  border-bottom: 1px solid #ececec;
  text-align: left;
}
.cont-item .cont-con{
  display: inline-block;
  width: 80%;
  vertical-align: top;
}
.cont-more{
  display: inline-block;
  text-align: center;
  width: 20%;
  height: 1.8rem;
  line-height: 1.8rem;
  font-size: 1.2rem;
  color: #898989;
}
.cont-item .name{
  display: inline-block;
  width: 100%;
  height: 0.9rem;
  font-size: 0.718rem;
  text-align: left;
  /*color: #F11540;*/
  color: #333;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.cont-item .dec{
  display: inline-block;
  width: 100%;
  height: 0.9rem;
  font-size: 0.618rem;
  text-align: left;
  color: #888;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}





.hotSearch{
  position: fixed;
  top: 4.5vh;
  left: 0;
  right: 0;
  padding: 0.6rem;
}
.hotSearch-box{
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.hotSearch-item{
  padding: 0.2rem 0.4rem;
  margin: 0.2rem 0.2rem;
  font-size: 0.7268rem;
  border: 1px solid #eee;
  border-radius: 1.3rem;
}





</style>

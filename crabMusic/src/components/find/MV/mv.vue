<template>
<div class="mv">
<div style="width: 100%">
  <div class="newest" v-if="mvMsg.length">
    <div class="newest-header">
      <span class="title">最新</span>
      <span class="more iconfont icon-knomore"></span>
    </div>
    <div class="newest-img" @click="openMv(mvMsg[0])">
      <img v-lazy="mvMsg[0].cover">
      <span class="iconfont icon-shipin"></span>
      <span class="num">{{mvMsg[0].playCount}}</span>
    </div>
    <div class="newest-con">
      <p class="name">{{mvMsg[0].artistName}}</p>
      <p class="dec">{{mvMsg[0].name}}</p>
    </div>
  </div>
  <div class="bangdan">
    <div class="bangdan-item">
      <span class="iconfont icon-PCbofangye_paihangbang" style="font-size: 1.2rem;color: #F11540"></span>
      <span>榜单</span>
    </div>
    <div class="bangdan-item">
      <span class="iconfont icon-pindao" style="font-size: 1.2rem;color: #F11540;"></span>
      <span>频道</span>
    </div>
  </div>  
  <ul class="newestBox">
    <li class="newestBox-item" v-for="(item,index) in mvMsg" v-if="index" @click="openMv(item)">
      <div class="newest-img">
        <img v-lazy="item.cover">
        <span class="iconfont icon-shipin"></span>
        <span class="num">{{item.playCount}}</span>
      </div>
      <div class="newest-con">
        <p class="name">{{item.artistName}}</p>
        <p class="dec">{{item.name}}</p>
      </div>
    </li>
  </ul>
</div>

 
 <div style="width: 100%;">
  <div class="newest" v-if="zuireMsg.length">
    <div class="newest-header">
      <span class="title">最热</span>
      <span class="more iconfont icon-knomore"></span>
    </div>
    <div class="newest-img" style="padding-top: 0.4rem" @click="openMv(zuireMsg[0])">
      <img v-lazy="zuireMsg[0].cover">
      <span class="iconfont icon-shipin"></span>
      <span class="num">{{zuireMsg[0].playCount}}</span>
    </div>
    <div class="newest-con tool">
      <p class="name">{{zuireMsg[0].artistName}}</p>
      <p class="dec">{{zuireMsg[0].name}}</p>
    </div>
  </div>

  <ul class="newestBox" style="padding-top: 0.6rem;">
    <li class="newestBox-item" v-for="(item,index) in zuireMsg" v-if="index" @click="openMv(item)">
      <div class="newest-img">
        <img v-lazy="item.cover">
        <span class="iconfont icon-shipin"></span>
        <span class="num">{{item.playCount}}</span>
      </div>
      <div class="newest-con">
        <p class="name">{{item.artistName}}</p>
        <p class="dec">{{item.name}}</p>
      </div>
    </li>
  </ul>

</div>


  <playmv v-if="isPlayMv" @playClose="playcon" :videomv='videomv'></playmv>

</div>
</template>

<script>
import {getMVlist, getMVmsg} from '@/api/api'
import Playmv from '@/components/common/playmv/playmv'

export default {
  name: 'mv',
  data () {
    return {
      mvMsg: [],//存放最新数据
      zuireMsg: [],//存放最热数据
      isPlayMv: false,
      videomv: ''
    }
  },
  components: {
    Playmv
  },
  created(){
  	this._getMVlist()
  },
  methods: {
  	_getMVlist(){
      var that = this
  		getMVlist("最新",5).then((res) => {
  			console.log("这是MV的数据",res)
        that.mvMsg = res.result.mvs
  		})

      getMVlist("最热",5).then((res) => {
        console.log("这是MV的数据",res)
        that.zuireMsg = res.result.mvs
      })

  	},
    openMv(item) {
      console.log("点击了MV",item)
      this.isPlayMv=!this.isPlayMv
      getMVmsg(item.id).then((res) => {
        console.log(res)
        this.videomv = res.data.brs[720]

        
      })

    },
    playcon: function() {//播放页面显示隐藏
      this.isPlayMv=!this.isPlayMv
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.mv{
  height: 84.7vh;
  font-size: 0;
  overflow-y: scroll;
}
.newest{
  width: 100%;
  font-size: 0;
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
/*最新-图片*/
.newest-img{
  position: relative;
  height: 10rem;
  width: 100%;
  padding: 0 0.4rem;
  overflow: hidden;
}
.newest-img img{
  display: inline-block;
  height: 100%;
  width: 100%;
}
.newest-img span.iconfont{
  display: inline-block;
  position: absolute;
  bottom: 0.2rem;
  left: 0.8rem;
  font-size: 1rem;
  color: #fff;
  z-index: 2;
}
.newest-img span.num{
  display: inline-block;
  position: absolute;
  bottom: 0.4rem;
  left: 2.1rem;
  font-size: 0.6rem;
  color: #fff;
  z-index: 2;
}
/*最新-名称*/
.newest-con{
  padding-left: 0.4rem;
}
.newest-con p.dec{
  display: inline-block;
  width: 100%;
  text-align: left;
  font-size: 0.512rem;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  color: #a3a3a3;
}
.newest-con p.name{
  display: inline-block;
  width: 100%;
  text-align: left;
  font-size: 0.618rem;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.bangdan{
  display: flex;
  justify-content: space-around;
  height: 2.6rem;
  font-size: 0.8rem;
  align-items: center;
}

.newestBox{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.newestBox-item{
  width: 50%;
  padding-bottom: 0.6rem;
  font-size: 0;
}
.newestBox-item .newest-img{
  height: 5rem;
}
</style>

<template>
<div class="detailss">
  <div class="details-header">
  	<div class="details-bg">
  		<img v-lazy="classifySonger.imageUrl">
  	</div>
  	<div class="title">
  		<span class="item-back iconfont icon-fanhui" @click="goBack()"></span>
  		<span class="title-name">{{classifySonger.name}}</span>
  		<span class="item-back"></span>
  	</div>
  	<div class="title-img">
  		<img v-lazy="classifySonger.imageUrl">
  	</div>
  </div>
  <div v-if="searchDate.length" class="searchList">
    <ul class="cont">
      <li class="cont-item" v-for="(item, index) in searchDate">
      	<div class="list">
      		{{index+1}}
      	</div>
        <div class="cont-con" @click="_getMusic(item)">
          <p class="name">{{item.name}}</p>
          <p class="dec">{{item.al.name}}</p>
        </div>
        <span class="cont-more iconfont icon-more"></span>
      </li>
    </ul>
  </div>


</div>
</template>

<script>
import {getSonglist} from '@/api/api'
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'detailss',
  data () {
    return {
      searchDate:[]
    }
  },
  computed: {
  	...mapGetters([
  		'classifySonger'
  		])
  },
  created() {

  	this._getSonglist(this.classifySonger.name,30)
  },
  methods: {
  	_getSonglist(con,num) {
  		var that = this
  		getSonglist(con,num).then((res) => {
  			console.log(that,this,res)
  			that.searchDate=res.result.songs
  		})
  	},
  	goBack() {
  		this.$router.go(-1)
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
.detailss{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 94vh;
	background-color: #fafafa;
}
.details-header{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 32vh;
  font-size: 0;
  text-align: left;
}

.details-bg{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 32vh;
	z-index: -1;
	-webkit-filter: blur(18px);
	-moz-filter: blur(18px);
	-o-filter: blur(18px);
	-ms-filter: blur(18px);
	filter: blur(18px);
}
.details-bg img{
	display: inline-block;
	width: 100%;
	height: 100%;
}

.title-img{
	position: fixed;
	display: inline-block;
	margin-top: 3vh;
	margin-left: 32%;
	width: 18vh;
	height: 18vh;
}
.title-img img{
	display: inline-block;
	width: 100%;
	height: 100%;
	border-radius: 50%;
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








.searchList{
  position: fixed;
  top: 32vh;
  left: 0;
  right: 0;
  height: 62vh;
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
.list{
  display: inline-block;
  width: 8%;
  font-size: 0.618rem;
  line-height: 1.8rem;
  vertical-align: top;	
}
.cont-item .cont-con{
  display: inline-block;
  width: 72%;
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
</style>

<template>
<div class="classify">
<div class="classify-left">
	<ul>
		<li v-for="(tab,index) in tabsName">
			<div class="classify-link" @click="tabsSwitch(index)" :class="{active:tab.isActive}">{{tab.name}}</div>
		</li>
	</ul>
</div>
<div class="classify-right">
	<div class="classify-card" style="height: 84.7vh;background-color: #efefef;" v-if="singerList" v-for="(classify, index) in singerList">
   <ul class="box">
     <li class="box-item" v-for="item in singerList[index].singer" @click="openClassify(item)">
       <img v-lazy="item.imageUrl">
       <span>歌手：{{item.name}}</span>
     </li>
   </ul>
  </div>
</div>

 <transition name="fold">
  <router-view/>
 </transition>
</div>
</template>

<script>
import classifyDate from '@/api/classify'
import {mapMutations,mapGetters} from 'vuex'

export default {
  name: 'classify',
  data () {
    return {
      tabsName:[{
      	name: "华语男",
      	isActive: true
      },{
      	name: "华语女",
      	isActive: false
      },{
      	name: "其他",
      	isActive: false
      }],
      singerList:[]
    }
  },
  created(){
  	console.log(classifyDate)
    this.singerList=classifyDate
  },
  methods: {
    tabsSwitch: function(tabIndex) {  
		console.log(tabIndex)
        var tabCardCollection = document.querySelectorAll(".classify-card"),  
            len = tabCardCollection.length;  
        for(var i = 0; i < len; i++) {  
            tabCardCollection[i].style.display = "none";  
            this.tabsName[i].isActive = false;  
        }  
        this.tabsName[tabIndex].isActive = true;  
        tabCardCollection[tabIndex].style.display = "block";  
    },
    openClassify(e) {
      console.log(e)
      this.setClassifySonger(e)
      this.$router.push({path: 'classify/details'})
    },
    ...mapMutations({
      setClassifySonger: 'SET_CLASSIFYSONGER'
    })
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.classify{
	height: 84.7vh;
	font-size: 0;
}
.classify-left{
	display: inline-block;
	width: 20%;
	height: 100%;
	vertical-align: top;
	font-size: 1rem;
}
.classify-right{
	display: inline-block;
	width: 80%;
	height: 100%;
	background-color: #fff;
	overflow: hidden;
}
.classify-link{
	line-height: 2rem;
	font-size: 0.718rem;
}
.classify-link.active{
	background-color: #F11540;
	color: #fff;
}

.classify-card{
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.box{
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-size: 1rem;
}
.box .box-item{
  position: relative;
  width: 47%;
  height: 20vh;
  background-color: #efefef;
  margin-bottom: 0.3rem;
  margin-left: 2%;
}
.box-item img{
  display: inline-block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.box-item span{
  display: inline-block;
  position: absolute;
  bottom: 0.4rem;
  left: 0.4rem;
  font-size: 0.6rem;
  color: #ffffff;
}

/*动画效果*/
.fold-enter-active,
.fold-leave-active {
  transition: all 0.5s;
}
.fold-enter,
.fold-leave-active {
  transform: translate3d(100%, 0, 0);
}
</style>

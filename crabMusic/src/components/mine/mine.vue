<template>
<div class="mine">
  <div class="mine-head">
  	<div class="mine-head-item mine-head-img" @click="forJobcon">
  		<img src="static/images/fendou.png">
  	</div>
  	<div class="mine-head-item mine-head-con">
  		<p class="name">魔都小白</p>
  		<p class="Emily">205156304@qq.com</p>
  	</div>
  	<div class="mine-head-item mine-head-join">
  		<!-- <img src="static/images/stupid.jpg"> -->
  		<div v-show="contact" class="wxChat">
  			<div class="mask" @click="openContact()"></div>
  			<span class="close" @click="openContact()">X</span>
  			<div class="wxChat-img">
  				<img style="width: 100%;height: 80%;" src="static/images/wxChat.jpg">
  				<span class="open">打开微信扫一扫</span>
  			</div>
  			
  		</div>
  		<button class="contact" @click="openContact()">联系</button>
  	</div>
  </div>
    <forJob v-show="isForJob" @forjobclose="forJobcon"></forJob>
</div>
</template>

<script>
import forJob from '@/components/common/forJob/forJob'

export default {
  name: 'mine',
  data () {
    return {
      contact:false,
      isForJob: true
    }
  },
  components: {
  	forJob
  },
  methods: {
    forJobcon: function() {
      this.isForJob = !this.isForJob
    },
  	openContact() {
  		this.contact = !this.contact;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mine{
	margin: 0;
	padding: 0;
	height: 84.7vh;
	width: 100%;
	font-size: 0;
}
.mine-head {
	width: 100%;
	padding: 0.4rem;	
	display: flex;
	justify-content: space-around;
	border-bottom: 1px solid #e3e3e3;
}
.mine-head-item{
	height: 10.7vh;
}
.mine-head-img{
	width: 20%;
}
.mine-head-img img{
	width: 100%;
	height: 100%;
	border-radius: 50%;
}
.mine-head-con{
	width: 60%;
	text-align: left;
}
.mine-head-con .name{
	padding-left: 0.6rem;
	height: 5.4vh;
	line-height: 5.4vh;
	font-size: 0.813rem;
}
.mine-head-con .Emily{
	padding-left: 0.6rem;
	font-size: 0.618rem;
	color: #a3a3a3;
}
.mine-head-join{
	width: 20%;
	line-height: 10.7vh
}
.mine-head-join .contact{
	display: inline-block;
	width: 3rem;
	height: 1.5rem;
	background-color: #e3e3e3;
}
















/*联系*/
.wxChat{
	position: absolute;
	text-align: center;
	/*margin: 0 auto;*/
}
.mask{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 2;
	background-color: #3e3e3e;
	opacity: 0.9;
}
.wxChat span.close{
	position: fixed;
	top: -0.2rem;
	right: 1rem;
	color: red;
	z-index: 2;
	font-size: 1rem
}
.wxChat .wxChat-img{
	position: absolute;
	top: 6rem;
	bottom: 0;
	height: 10.75rem;
	width: 8.6rem;
	right: 1rem;
	z-index: 2;
}
.wxChat .wxChat-img .open{
	position: relative;
	top: -2rem;
	height: 2rem;
	font-size: 0.618rem;
	color: #e3e3e3;
}
</style>

<template>
<div class="forJob">
  <div>
  	<h4>魔都小白</h4>
  	<div class="msg">
  		<p style="text-align: left;padding-left: 0.6rem;padding-top: 0.6rem;">基本信息:</p>
  		<div class="forJob-box">
  			<div class="forJob-item0">毕业学校:</div>
  			<div class="forJob-item1">XXXX</div>
  			<div class="forJob-item0">学位:</div>
  			<div class="forJob-item1">本科</div>
  			<div class="forJob-item0">毕业时间:</div>
  			<div class="forJob-item1">20XX年6月</div>
  			<div class="forJob-item0">职业:</div>
  			<div class="forJob-item1">前端开发工程师</div>
  			<div class="forJob-item0">工作年限:</div>
  			<div class="forJob-item1">20XX年7月——至今</div>
  		</div>
  		
  	</div>
  	<p style="text-align: left;padding-left: 0.6rem;padding-top: 0.6rem;">技术栈:</p>
  	<ul class="forJob-box">
      <li class="forJob-item">HTML</li>
  		<li class="forJob-item">JavaScript</li>
      <li class="forJob-item">css3</li>
  		<li class="forJob-item">jQuery</li>
  		<li class="forJob-item">vue</li>
  		<li class="forJob-item">微信小程序</li>
  		<li class="forJob-item">mui</li>
  	</ul>
  	<div>
  		<p style="text-align: left;padding-left: 0.6rem;padding-top: 0.6rem;">个人CSDN:</p>
  		<p style="text-align: left;padding-left: 0.6rem;padding-top: 0.6rem;">https://blog.csdn.net/qq_39789497</p>
  	</div>
  </div>
  <div class="mengban" @click="closeforJob"></div>
</div>
</template>

<script>
import {} from '@/api/api'

export default {
  name: 'forJob',
  data () {
    return {
      
    }
  },
  methods: {
  	closeforJob: function() {
  		this.$emit("forjobclose")
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.forJob{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 10;
	background-color: #e3e3e3;
	opacity: 0.92;
	font-size: 1rem;
}
.mengban{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 66;
	opacity: 0.92;
	font-size: 1rem;
}
.forJob-box{
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
}
.forJob-item{
	width: 25%;
	height: 1.4rem;
	font-size: 0.68rem;
	line-height: 1.4rem;
	border: 1px solid #3e3e3e;
	border-radius: 0.4rem;
	margin: 0.4rem;
}
.forJob-item0{
	width: 40%;
  font-size: 0.78rem;
	text-align: right;
}
.forJob-item1{
	width: 40%;
  padding-left: 0.3rem;
  text-align: left;
  font-size: 0.78rem;
}
</style>

<template>
<div class="radio">
  <ul class="box">
  	<li class="box-item" v-if="radioList.length" v-for="(item,index) in radioList">
  		<p class="item-title">
  			{{item.category}} -- {{item.name}}
  		</p>
  		<img v-lazy="item.picUrl">
  		<p class="desc">{{item.desc}}</p>
  	</li>
  </ul>
  
</div>
</template>

<script>
import {getRadiolist} from '@/api/radio'

export default {
  name: 'radio',
  data () {
    return {
      radioList: []
    }
  },
  created() {
  	this._getRadiolist()
  },
  methods: {
  	_getRadiolist(){
  		var that = this
		getRadiolist('情感').then((res) => {
			console.log(res)
			that.radioList = res.result.djRadios
		});
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.radio{
  height: 84.7vh;
  font-size: 0;
  overflow-y: scroll;
}
.box{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
}
.box-item{
	margin: 0.2rem 0.6rem;
	padding: 0.2rem;
	text-align: left;
	font-size: 0;
	border: 1px solid #3a3a3a;
	border-radius: 0.2rem;
}
.box-item img{
	display: inline-block;
	width: 100%;
	height: 12rem;
}
.box-item p.item-title{
	font-size: 0.8rem;
	line-height: 2rem;
	color: #000;
}
.box-item p.desc{
	font-size: 0.816rem;
	line-height: 1.2rem;
	color: #3a3a3a;
}
</style>

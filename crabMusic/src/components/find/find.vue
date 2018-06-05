<template>
<div class="find">
  <div class="navBar">
    <router-link tag="div" class="tab-item" to="select">
      <span class="tab-link">精选</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="classify">
      <span class="tab-link">分类</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="ranking">
      <span class="tab-link">排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="radio">
      <span class="tab-link">电台</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="mv">
      <span class="tab-link">MV</span>
    </router-link>
  </div>

  <keep-alive>
    <router-view/>
  </keep-alive>
  
</div>
</template>

<script>
export default {
  name: 'find',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navBar{
  display: flex;
  font-size: 0;
  justify-content: space-around;
  align-items: center;
  height: 4.8vh;
}
.tab-item{
	display: inline-block;
	width: 20%;
  height: 4.8vh;
  font-size: 0.8rem;
  line-height: 4.8vh;
}
.router-link-active{
  border-bottom: 2px solid red;
}
</style>

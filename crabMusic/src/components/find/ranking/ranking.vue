<template>
<div class="ranking">
  <div class="waiting">待开发...</div>

  
</div>
</template>

<script>
import {} from '@/api/api'

export default {
  name: 'ranking',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ranking{
  height: 84.7vh;
  font-size: 0;
  overflow-y: scroll;
}
.waiting{
	height: 20vh;
	width: 100%;
	line-height: 20vh;
	font-size: 0.816rem;
	color: #888;
}
</style>

import Vue from 'vue'
import Router from 'vue-router'
import Mine from '@/components/mine/mine'
import Find from '@/components/find/find'
import Mv from '@/components/find/MV/mv'
import Classify from '@/components/find/classify/classify'
import Select from '@/components/find/select/select'
import Ranking from '@/components/find/ranking/ranking'
import Radio from '@/components/find/radio/radio'
import Play from '@/components/play/play'
import Details from '@/components/common/details/details'

Vue.use(Router)

export default new Router({
  routes: [{
	  path: '/mine',
	  component:Mine
    },{
	  path: '/',
	  redirect:'/find'
    },{
      path: '/find',
      redirect:"find/select",
      name: 'find',
      component: Find,
      children:[{
	      	path: 'mv',
	      	component: Mv
	      },{
	      	path: 'classify',
	      	component: Classify,
	      	children: [{
	      		path: 'details',
	      		component: Details
	      	}]
	      },{
	      	path: 'select',
	      	component: Select
	      },{
	      	path: 'radio',
	      	component: Radio
	      },{
	      	path: 'ranking',
	      	component: Ranking
	      }]
    },{
    	path: '/play',
    	component:Play
    }
  ]
})

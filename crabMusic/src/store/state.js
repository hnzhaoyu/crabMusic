// 用来定义变量,相当于数据库。用来存储数据
const state = {
	song:{
		al: {
			name:'刘德华',
			picUrl:'static/images/stupid.jpg'
		},
		name: '笨小孩'
	},//初始化首歌曲的名字
	isPlay: false,
	classifySonger: {}
}

export default state
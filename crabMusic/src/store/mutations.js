// 用来修改state状态里的数据（对state的数据进行修改操作）
import * as types from './mutation-types'

const mutations = {
	[types.SET_SONG](state,song) {
		state.song = song
	},
	[types.SET_ISPLAY](state,isPlay) {
		state.isPlay = isPlay
	},
	[types.SET_CLASSIFYSONGER](state,classifySonger) {
		state.classifySonger = classifySonger
	}
}

export default mutations
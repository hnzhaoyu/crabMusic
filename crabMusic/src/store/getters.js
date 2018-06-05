/*使用getter方法，只能单方向获取state状态的数据，不能修改*/
export const song = state => state.song;
export const isPlay = state => state.isPlay;
export const classifySonger = state => state.classifySonger
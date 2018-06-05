import axios from 'axios'

// 获取热门MV列表
export function getMVlist(search_name,num) {
  const url = "https://api.imjad.cn/cloudmusic/";
  const params = {
  	type: "search",
  	search_type: 1004,
  	s: search_name,
    limit: num
  }
  return axios.get(url,{params:params}).then((res) => {
  	return Promise.resolve(res.data)
  })
}
// 获取MV的视频信息
export function getMVmsg(mv_id) {
  const url = "https://api.imjad.cn/cloudmusic/";
  const params = {
  	type:"mv",
  	id: mv_id
  }
  return axios.get(url,{params:params}).then((res) => {
  	return Promise.resolve(res.data)
  })
}


// 获取歌曲列表
export function getSonglist(search_con,num) {
  const url = "https://api.imjad.cn/cloudmusic/";
  const params = {
    type:"search",
    limit:num,
    s:search_con
  }
  return axios.get(url,{params:params}).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取歌曲信息
export function getSongmsg(song_id) {
  const url = "https://api.imjad.cn/cloudmusic/";
  const params = {
    type:"song",
    id: song_id,
    br: 128000
  }
  return axios.get(url,{params:params}).then((res) => {
    return Promise.resolve(res.data)
  })
}

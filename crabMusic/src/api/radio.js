import axios from 'axios'

// 获取搜索出来的列表
export function getRadiolist(search_con) {
  const url = "https://api.imjad.cn/cloudmusic/";
  const params = {
  	type: "search",
  	search_type: 1009,
    limit: 20,
    offset: 0,
  	s: search_con
  }
  return axios.get(url,{params:params}).then((res) => {
  	return Promise.resolve(res.data)
  })
}


// export function getRadioMsg(radio_id) {
//   const url = "https://api.imjad.cn/cloudmusic/";
//   const params = {
//   	type: "djradio",
//   	id: radio_id
//   }
//   return axios.get(url,{params:params}).then((res) => {
//   	return Promise.resolve(res.data)
//   })
// }
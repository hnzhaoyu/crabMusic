import axios from 'axios'

// 获取搜索出来的列表
export function getSearchlist(search_con) {
  const url = "https://api.imjad.cn/cloudmusic/";
  const params = {
  	type:"search",
    limit:30,
  	s:search_con
  }
  return axios.get(url,{params:params}).then((res) => {
  	return Promise.resolve(res.data)
  })
}


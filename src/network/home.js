import {request} from './request'

export function getHomeMultidata() {
  return request({
    url:'/data/home/multidata/multidata.json'
  })
}
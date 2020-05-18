import {request} from "./request"

export function getCategory() {
  return request({
    url:'/data/category/category.json',
  })
}

export function getCategoryData(iid) {
  return request({
    url:'/data/category/subcategory/' + iid + '.json',
  })
}

export function getCategoryGoods(type,page) {
  return request({
    url:'/data/home/data/'+type+'/'+page+'.json'
  })
}
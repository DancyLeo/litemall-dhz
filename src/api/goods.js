import request from '@/utils/request'

export function listGoods(data) {
  return request({
    url: '/goods/queryPageByMap',
    method: 'post',
    data
  })
}

export function listGoodsNames(query) {
  return request({
    url: '/goods/findGoodsNames',
    method: 'get',
    params: query
  })
}

export function createGoods(data) {
  return request({
    url: '/goods/insert',
    method: 'post',
    data
  })
}

export function readGoods(data) {
  return request({
    url: '/goods/read',
    method: 'get',
    data
  })
}

export function updateGoods(data) {
  return request({
    url: '/goods/update',
    method: 'post',
    data
  })
}

export function deleteGoods(data) {
  return request({
    url: '/goods/update',
    method: 'post',
    data
  })
}

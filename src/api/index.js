import ajax from 'ajax'

// 获取地址信息(根据经纬度串)
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)

// 获取msite页面食品分类列表
export const reqFoodTypes = ({}) => ajax('/index_category')

// 获取msite商铺列表(根据经纬度)
export const reqShops = (longitude, latitude) => ajax('/shops', { longitude, latitude })

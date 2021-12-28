import api from '../index'
import config from '../../config'
// eslint-disable-next-line
export default {
    get: () => {
        return api.request('get',config.default.productsUrl, null, null, null,null)
    },
    getById: (id:string) => {
        return api.request('get',config.default.productsUrl+id, null, null, null,null)
    },
    post: (data:any) => {
        return api.request('post', config.default.productsUrl, null, null, data,null)
    }
}
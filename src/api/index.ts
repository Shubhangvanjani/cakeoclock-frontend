import axios, { AxiosRequestHeaders } from 'axios';
// import interceptor from './interceptor/interceptor'
// eslint-disable-next-line

export default {
  request: async (
    method : 'get' | 'post' | 'put',
    uri: string,
    headers: any | null,
    params : any | null,
    data : any | null,
    paramsSerializer : any | null,
  ) => {
    if (method === undefined) {
      return 'Please provide method to make api call';
    } else if (uri === undefined) {
      return 'Please provide url';
    } else {
      console.log("Headers.......????????", headers)
      return axios({
        method: method,
        url: uri,
        headers: headers,
        params: params,
        data: data,
        paramsSerializer: paramsSerializer,
      });
    }
  },
};

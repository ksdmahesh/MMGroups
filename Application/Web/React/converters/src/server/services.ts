import axios, { AxiosRequestConfig } from 'axios';
export const httpServices = <TModel>(
    request: {
        url: string, method?: AxiosRequestConfig['method'], config?: {}
    },
    payload: object):
    Promise<{ data?: TModel, error?: object | string, headers?: object }> => {
    return new Promise(resolve => {
        axios(request.url, {
            method: request.method || 'get',
            data: request.method === 'post' ? payload : null,
            params: request.method !== 'post' ? payload : null,
            ...request.config   
        })
            .then(response => {
                resolve({ data: response.data, headers: response.headers });
            })
            .catch(reason => {
                resolve({ error: reason });
            });
    });
};
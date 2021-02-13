import axios, { AxiosRequestConfig } from 'axios';
export const post = <TModel>(
    request: {
        url: string, method?: AxiosRequestConfig['method'], config?: {}
    },
    payload: object):
    Promise<{ data?: TModel, error?: object | string, headers?: object }> => {
    if (!request.method) {
        request.method = 'get';
    }
    return new Promise(resolve => {
        axios(request.url, {
            method: request.method,
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

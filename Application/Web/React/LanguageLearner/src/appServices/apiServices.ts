import axios from 'axios';
import { post } from './api-post';
import { baseURL } from '../constants/defaultConstants';

export const createProvisionalWorkOrder =
    (payload: FormData) => post<{ pwoId: number, error: object | string }>
        (
            {
                url: `${baseURL}/Create`,
                method: 'post',
                config: { headers: { 'content-type': 'multipart/form-data' } }
            },
            payload
        );

export const updateProvisionalWorkOrder =
    (payload: FormData) => post<{ data: object, error: object | string }>
        (
            {
                url: `${baseURL}/Update`,
                method: 'post',
                config: { headers: { 'content-type': 'multipart/form-data' } }
            },
            payload
        );

export const deletePwo =
    (payload: { pwoId: number }) =>
        post<object>(
            {
                url: `${baseURL}/Delete`,
                method: 'post'
            },
            payload);

export const getDataFromDataSource =
    (payload: {}, loc: string) => post
        (
            {
                url: `${baseURL + '/' + loc}`
            },
            payload
        );

export const getState = function (loc: string) {
    return new Promise(resolve => {
        axios(
            `${baseURL + '/' + loc}`,
            {
                method: 'get',
                data: null,
                params: null
            }
        ).then(response =>
            resolve({ data: response.data }
            ))
            .catch(reason =>
                resolve({ error: reason }
                ));
    });
};

export const saveDynamicData =
    (payload: object, loc: string) => post<{ success: boolean }>
        (
            {
                url: `${baseURL}/${loc}`,
                method: 'post',
                config: { headers: { 'content-type': 'application/json' } }
            },
            payload
        );
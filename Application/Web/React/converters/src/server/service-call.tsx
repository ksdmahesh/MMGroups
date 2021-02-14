import { httpServices } from "./services";
const baseURL = 'http://localhost:3005';

export const readStream = (payload: { path: string }) => httpServices<any>
    (
        {
            url: `${baseURL}/read`,
        },
        payload
    );

export const getDefaultPath = () => httpServices<any>
    (
        {
            url: `${baseURL}/getDefaultPath`,
        },
        {}
    );

export const writeStream = (payload: { path: string, data: string | ArrayBuffer | null }) => httpServices<any>
    (
        {
            url: `${baseURL}/write`,
            method: 'post',
            config: {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        },
        payload
    );

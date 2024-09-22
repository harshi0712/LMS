import axios, { AxiosResponse } from 'axios';
import { API } from '../api-endpoint/apiUrl';

// login api action
export const loginAPI = async (
    reqData: any,
    callback: (arg0: AxiosResponse<any, any> | unknown) => void
) => {
    try {
        const result = await axios.post(API.login, reqData);
        callback(result);
    } catch (err) {
        if (axios.isAxiosError(err)) {
            // If it's an Axios error, you can access err.response
            callback(err.response ? err.response : err);
        } else {
            // Handle unexpected errors
            callback(err);
        }
    }
};

// register api action
export const registerAPI = async (
    reqData: any,
    callback: (arg0: AxiosResponse<any, any> | unknown) => void
) => {
    try {
        const result = await axios.post(API.register, reqData);
        callback(result);
    } catch (err) {
        if (axios.isAxiosError(err)) {
            callback(err.response ? err.response : err);
        } else {
            callback(err);
        }
    }
};

import { API } from './constants';
import { getApiConfig } from './configs';
import { Method } from './method';

export const createApiAction = (method, data) => ({
    type: API.REQUEST,
    showLoader: data.showLoader ?? false,
    apiConfig: getApiConfig(method, data)
})

export const get = (data) => createApiAction(Method.GET, data);

export const post = (data) => createApiAction(Method.POST, data);

export const put = (data) => createApiAction(Method.PUT, data);

export const remove = (data) => createApiAction(Method.DELETE, data);
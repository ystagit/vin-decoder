import { API } from './constants';

export const getApiConfig = (method, data, onSuccess, onFailure) => {

    return {
        host: data.host,
        path: data.path,
        method,
        headers: { 'Content-Type': 'application/json' },
        body: data.body,
        onSuccess: (successResponse) => {
            onSuccess?.(successResponse.response);

            return {
                type: API.SUCCESS,
                response: successResponse.response,
                success: data.success
            }
        },
        onFailure: (failureResponse) => {
            onFailure?.(failureResponse.response);

            return {
                type: API.FAILURE,
                response: failureResponse.response,
                failure: data.failure
            }
        }
    }
}
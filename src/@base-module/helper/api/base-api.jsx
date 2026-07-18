import SuccessStatus from './success-status';
import FailureStatus from './failure-status';
import ResponseType from './response-type';

const DEFAULT_TIMEOUT_IN_MS = 30 * 1000;

const printRequest = ({ path, method, headers, body }) => {
    console.group(`🌐 ${method} ${path}`);
    console.log("Headers:", headers);
    if (body) {
        console.log("Body:", body);
    }
    console.groupEnd();
}

const printResponse = ({response}) => {
    console.log('Response: ', response);
}

const handleSuccess = (response, resolve, reject) => {

    if (Object.values(SuccessStatus).includes(response.status)) {
        resolve({
            status: response.status,
            data: response.data
        });
    } else {
        reject({
            status: FailureStatus.NO_STATUS,
            data: { responseType: response.type, responseStatus: response.status }
        });
    }
}

const handleFailure = (response, resolve, reject) => {

    if (Object.values(FailureStatus).includes(response.status)) {
        const responseData = {
            status: response.status,
            data: null
        };

        if (response.errors) {
            responseData.data = {
                errors: response.errors
            }
        }

        reject(responseData);
    } else {
        reject({
            status: FailureStatus.NO_STATUS,
            data: { responseStatus: response.status }
        });
    }
}

export const sendRequest = (config, timeoutInMs = DEFAULT_TIMEOUT_IN_MS) => {

    return new Promise((resolve, reject) => {

        // Creates timeout
        const timeoutId = setTimeout(() => {
            reject({
                status: FailureStatus.TIMEOUT,
                data: { responseType: ResponseType.ERROR }
            });
        }, timeoutInMs);

        // Prints request
        printRequest(config);

        const host = config.host || env.DEV_HOST;
        const appVersion = '1.0.0'
        fetch(host + config.path, {
            method: config.method || 'GET',
            headers: config.headers,
            body: JSON.stringify(config.body)
        }).then((response) => { // Parse to JSON

            if (response?.status === 403) {
                return new Promise((resolve) => resolve({
                    type: ResponseType.ERROR,
                    status: FailureStatus.FORBIDDEN
                }));
            } else {
                return response.json();
            }
        }).then((response) => { // Process data
            printResponse({ response });
            clearTimeout(timeoutId);

            if (response.type === ResponseType.SUCCESS) {
                handleSuccess(response, resolve, reject);
            } else if (response.type === ResponseType.ERROR) {
                handleFailure(response, resolve, reject);
            } else {
                reject({
                    status: FailureStatus.NO_TYPE,
                    data: { responseType: response.type }
                });
            }
        }).catch((e) => {
            clearTimeout(timeoutId);

            reject({
                status: FailureStatus.NO_CONNECTION,
                data: { responseType: ResponseType.ERROR }
            });
        });
    });
}
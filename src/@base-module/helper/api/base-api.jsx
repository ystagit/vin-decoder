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

const isOk = (response, config) =>
    response?.ok
    || response?.type === ResponseType.SUCCESS
    || config?.isOk(response);

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

            if (isOk(response, config)) {
                resolve(response);
            } else {
                reject(response);
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
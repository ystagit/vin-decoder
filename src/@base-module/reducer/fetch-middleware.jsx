import { sendRequest } from '@base/helper/api/base-api';

const fetchMiddleware = (store) => (next) => (action) => {

    if (!action || !action.apiConfig) {
        return next(action);
    }

    const { progress, apiConfig } = action;

    sendRequest(apiConfig, apiConfig.timeout)
        .then((response) => apiConfig.onSuccess({
            dispatch: store.dispatch,
            progress,
            response
        }))
        .catch((response) => apiConfig.onFailure({
            dispatch: store.dispatch,
            progress,
            response
        }));

    return next(action);
}

export default fetchMiddleware;
import { sendRequest } from '@base/helper/api/base-api';

const fetchMiddleware = (store) => (next) => (action) => {

    if (!action || !action.apiConfig) {
        return next(action);
    }

    const { progress, apiConfig } = action;

    const onSuccess = (response) => store.dispatch(apiConfig.onSuccess({ response }));
    const onFailure = (response) => store.dispatch(apiConfig.onFailure({ response }));

    sendRequest(apiConfig, apiConfig.timeout)
        .then(onSuccess)
        .catch(onFailure);

    return next(action);
}

export default fetchMiddleware;
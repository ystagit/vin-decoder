import { STORAGE } from './storage/constants';
import { save, remove, get } from '@base/helper/storage';

const storageMiddleware = (store) => (next) => (action) => {

    if (!action || !action.storageConfig) {
        return next(action);
    }

    const { storageConfig } = action;

    const onSuccess = (type, item) => {
        action.callback?.(item);
        store.dispatch({ type, item });
    }
    const onFailure = (type, errorType) => {
        action.callback?.(null);
        store.dispatch({ type, errorType });
    }

    switch (action.type) {
        case STORAGE.SAVE.REQUEST:
            save(storageConfig.type, storageConfig.model)
                .then((item) => onSuccess(STORAGE.SAVE.SUCCESS, item))
                .catch((errorType) => onFailure(STORAGE.SAVE.FAILURE, errorType));
            break;
        case STORAGE.REMOVE.REQUEST:
            remove(storageConfig.type)
                .then((item) => onSuccess(STORAGE.REMOVE.SUCCESS, item))
                .catch((errorType) => onFailure(STORAGE.REMOVE.FAILURE, errorType));
            break;
        case STORAGE.GET.REQUEST:
            get(storageConfig.type)
                .then((item) => onSuccess(STORAGE.GET.SUCCESS, item))
                .catch((errorType) => onFailure(STORAGE.GET.FAILURE, errorType));
    }

    return next(action);
}

export default storageMiddleware;
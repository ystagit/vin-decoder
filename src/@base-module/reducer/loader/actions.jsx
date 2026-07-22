import { LOADER } from './constants';
import { LoaderType } from './loader-type';

export const showLoader = (loaderType) => {
    return { type: LOADER.SHOW, loaderType };
}

export const hideLoader = (loaderType) => {
    return { type: LOADER.HIDE, loaderType };
}

export const hideLoaders = () => {
    return { type: LOADER.HIDE_ALL };
}

const createLoaderAction = (loaderType) => {
    return {
        showLoader: () => showLoader(loaderType),
        hideLoader: () => hideLoader(loaderType),
    }
}

export const main = createLoaderAction(LoaderType.MAIN);
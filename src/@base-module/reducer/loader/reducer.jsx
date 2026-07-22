import { LOADER } from './constants';
import { LoaderType } from './loader-type';
import { isEmpty } from '@base/helper/common';

const defaultLoader = {
    [LoaderType.MAIN]: { visible: false },
}

const show = (type, state) => {
    const loaders = { ...state }

    if (loaders[type]) {
        loaders[type].visible = true;
        console.log(`Loader :: ${type} is shown`);
    } else {
        console.warn(`Loader :: No found type: ${type}`);
    }

    return loaders;
}

const hide = (type, state) => {
    const loaders = { ...state }

    if (loaders[type]) {
        loaders[type].visible = false;
        console.log(`Loader :: ${type} is hidden`);
    }

    return loaders;
}

const hideAll = (state) => {
    const loaders = { ...state }

    if (isEmpty(loaders)) { return loaders; }

    for (let type of Object.keys(loaders)) {
        loaders[type].visible = false;
    }

    console.log(`Loader :: All loaders are hidden`);
    console.log(loaders);

    return loaders;
}

const loader = (state = defaultLoader, action) => {

    switch (action.type) {
        case LOADER.SHOW:
            return show(action.loaderType, state);
        case LOADER.HIDE:
            return hide(action.loaderType, state);
        case LOADER.HIDE_ALL:
            return hideAll(state);
    }

    return state;
}

export default loader;
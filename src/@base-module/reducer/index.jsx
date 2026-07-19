import { fork } from 'redux-saga/effects';

import storage from './storage/reducer';
import colors from './colors/reducer';

import watchApi from './api/saga';

export const baseReducers = {
    storage,
    colors,
}

export const baseSagas = [
    fork(watchApi)
]
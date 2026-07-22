import { fork } from 'redux-saga/effects';

import storage from './storage/reducer';
import colors from './colors/reducer';
import errors from './errors/reducer';

import watchApi from './api/saga';
import watchError from './errors/saga';

export const baseReducers = {
    storage,
    colors,
    errors,
}

export const baseSagas = [
    fork(watchApi),
    fork(watchError),
]
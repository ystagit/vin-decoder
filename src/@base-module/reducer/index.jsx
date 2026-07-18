import { fork } from 'redux-saga/effects';

import storage from './storage/reducer';

import watchApi from './api/saga';

export const baseReducers = {
    storage,
}

export const baseSagas = [
    fork(watchApi)
]
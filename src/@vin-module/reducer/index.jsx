import { fork } from 'redux-saga/effects';

import watchVin from './vin/saga';

export const vinReducers = {
}

export const vinSagas = [
    fork(watchVin)
]
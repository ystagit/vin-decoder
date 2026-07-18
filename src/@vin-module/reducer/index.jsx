import { fork } from 'redux-saga/effects';
import vin from './vin/reducer';

import watchVin from './vin/saga';

export const vinReducers = {
    vin,
}

export const vinSagas = [
    fork(watchVin)
]
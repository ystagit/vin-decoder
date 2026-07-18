import { all, fork } from 'redux-saga/effects';
import { baseSagas } from '@base/reducer';
import { vinSagas } from '@vin/reducer';

export default function* rootSaga() {
    yield all([
        ...baseSagas,
        ...vinSagas,
    ]);
}
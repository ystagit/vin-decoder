import { all, fork } from 'redux-saga/effects';
import { baseSagas } from '@base/reducer';

export default function* rootSaga() {
    yield all([
        ...baseSagas,
    ]);
}
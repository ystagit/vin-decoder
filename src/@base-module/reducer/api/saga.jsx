import { all, put, takeLatest } from 'redux-saga/effects';
import { API } from './constants';


function* onSuccess(apiSuccessAction) {
    const { response, success } = apiSuccessAction;

    if (response) {
        success.response = success.response
            ? { ...success.response, ...response }
            : response;
    }

    yield put(success);

    success.onSuccess?.(success.response);
}

function* onFailure(apiFailureAction) {
    const { response, failure } = apiFailureAction;

    failure.response = response;
    yield put(failure);

    failure.onFailure?.(failure.response);
}

export default function* watchApi() {
    yield all([
        yield takeLatest(API.SUCCESS, onSuccess),
        yield takeLatest(API.FAILURE, onFailure)
    ])
}

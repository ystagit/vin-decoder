import { all, put, takeLatest } from 'redux-saga/effects';
import { API } from './constants';
import { main } from '@base/reducer/loader/actions';


function* onSuccess(apiSuccessAction) {
    const { response, success } = apiSuccessAction;
    if (response) {
        success.response = success.response
            ? { ...success.response, ...response }
            : response;
    }

    yield put(success);

    success.onSuccess?.(success.response);
    yield put(main.hideLoader());
}

function* onFailure(apiFailureAction) {
    const { response, failure } = apiFailureAction;

    failure.response = response;
    yield put(failure);

    failure.onFailure?.(failure.response);
    yield put(main.hideLoader());
}

function* onRequest(action) {
    if (action.showLoader) {
        yield put(main.showLoader());
    }
}

export default function* watchApi() {
    yield all([
        yield takeLatest(API.REQUEST, onRequest),
        yield takeLatest(API.SUCCESS, onSuccess),
        yield takeLatest(API.FAILURE, onFailure)
    ])
}

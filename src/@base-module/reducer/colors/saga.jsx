import { all, put, call, takeLatest } from 'redux-saga/effects';
import { COLORS } from './constants';
import { setColor } from './actions';
import { get } from '@base/helper/storage';
import { saveItem } from '@base/reducer/storage/actions';
import StorageType from '@/storages';

function* onInitColor(action) {
    const data = yield call(get, StorageType.THEME);
    yield put(setColor(data?.[StorageType.THEME]));
}

function* onSetColor(action) {
    if (action.theme) {
        yield put(saveItem(StorageType.THEME, action.theme));
    }
}

export default function* watchColor() {
    yield all([
        yield takeLatest(COLORS.INIT, onInitColor),
        yield takeLatest(COLORS.SET, onSetColor),
    ])
}
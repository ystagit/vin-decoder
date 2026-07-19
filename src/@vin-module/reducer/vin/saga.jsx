import { all, put, takeLatest } from 'redux-saga/effects';
import { VIN } from './constants';
import { setItem } from '@base/reducer/storage/actions';
import StorageType from '@/storages';


function* onGetDecodeVin(action) {
    yield put(setItem(StorageType.DECODE_VIN, action.response.Results));
}

function* onGetVehicleVariables(action) {
    yield put(setItem(StorageType.VEHICLE_VARIABLES, action.response.Results));
}

export default function* watchVin() {
    yield all([
        yield takeLatest(VIN.GET_DECODE.SUCCESS, onGetDecodeVin),
        yield takeLatest(VIN.GET_VEHICLE_VARIABLES.SUCCESS, onGetVehicleVariables),
    ])
}
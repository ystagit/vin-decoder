import { all, put, takeLatest } from 'redux-saga/effects';
import { VIN } from './constants';
import { setItem, getItem, saveItem } from '@base/reducer/storage/actions';
import { getLastThreeVinList } from '@base/helper/store';
import StorageType from '@/storages';


function* onGetDecodeVin(action) {
    yield put(setItem(StorageType.DECODE_VIN, action.response.Results));
    const response = action?.response;
    const searchCriteria = response?.SearchCriteria;

    if (response?.saveLastVin && searchCriteria) {
        const vin = searchCriteria.split(':')?.[1] ?? null;

        if (vin) {
            let lastVinList = getLastThreeVinList();
            lastVinList.unshift(vin);

            if (lastVinList.length > 3) {
                lastVinList = lastVinList.splice(0, 3);
            }

            yield put(saveItem(StorageType.LAST_THREE_VIN, lastVinList));
        }
    }
}

function* onLoadThreeVinList() {
    yield put(getItem(StorageType.LAST_THREE_VIN));
}

function* onGetVehicleVariables(action) {
    yield put(setItem(StorageType.VEHICLE_VARIABLES, action.response.Results));
}

export default function* watchVin() {
    yield all([
        yield takeLatest(VIN.GET_DECODE.SUCCESS, onGetDecodeVin),
        yield takeLatest(VIN.GET_VEHICLE_VARIABLES.SUCCESS, onGetVehicleVariables),
        yield takeLatest(VIN.LOAD.LAST_THREE_VIN, onLoadThreeVinList),
    ])
}
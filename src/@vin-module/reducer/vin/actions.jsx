import { VIN } from './constants';
import { get } from '@base/reducer/api/actions';

const isOk = (response) =>
    response?.Message?.includes("Results returned successfully");

export const getDecodeVIN = (vinId, saveLastVin = true) => get({
    host: 'https://vpic.nhtsa.dot.gov/api/',
    path: 'vehicles/decodevin/' + vinId + '?format=json',
    isOk,
    showLoader: true,
    success: { type: VIN.GET_DECODE.SUCCESS, response: { saveLastVin } },
    failure: { type: VIN.GET_DECODE.FAILURE }
})

export const getVehicleVariableList = () => get({
    host: 'https://vpic.nhtsa.dot.gov/api/',
    path: `vehicles/GetVehicleVariableList?format=json`,
    isOk,
    showLoader: true,
    success: { type: VIN.GET_VEHICLE_VARIABLES.SUCCESS },
    failure: { type: VIN.GET_VEHICLE_VARIABLES.FAILURE }
})

export const getVariableDetails = (id) => get({
    host: 'https://vpic.nhtsa.dot.gov/api/',
    path: `vehicles/GetVehicleVariableValuesList/${id}?format=json`,
    isOk,
    showLoader: true,
    success: { type: VIN.GET_VARIABLE_DETAILS.SUCCESS },
    failure: { type: VIN.GET_VARIABLE_DETAILS.FAILURE }
})

export const loadLastThreeVinList = () => ({
    type: VIN.LOAD.LAST_THREE_VIN
})

export const clean = (storageType) => ({
    type: VIN.CLEAN.STORAGE_TYPE, storageType
})
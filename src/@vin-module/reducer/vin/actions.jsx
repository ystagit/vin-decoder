import { VIN } from './constants';
import { post, get, put, remove } from '@base/reducer/api/actions';

export const getDecodeVIN = (vinId) => get({
    host: 'https://vpic.nhtsa.dot.gov/api/',
    path: `vehicles/decodevin/{vinId}?format=json&modelyear=2011`,
    success: { type: VIN.GET_DECODE.SUCCESS },
    failure: { type: VIN.GET_DECODE.FAILURE }
})
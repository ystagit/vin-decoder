import { combineReducers } from 'redux';
import { baseReducers } from '@base/reducer';
import { vinReducers } from '@vin/reducer';

export default combineReducers({
    ...baseReducers,
    ...vinReducers,
});
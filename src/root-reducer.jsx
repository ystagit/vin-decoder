import { combineReducers } from 'redux';
import { baseReducers } from '@base/reducer';

export default combineReducers({
    ...baseReducers,
});
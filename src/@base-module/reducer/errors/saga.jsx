import { all, put, takeLatest } from 'redux-saga/effects';
import { VALIDATOR } from './constants';
import { returnErrors } from './actions';
import { validateOne } from './validator';

let errors = {}

function* onValidateField(action) {
    const { name, props } = action;
    if (errors[name])  { delete errors[name]; }

    validateOne(name, props, errors);
    yield put (returnErrors(errors));
}

function* onRemoveErrors(action) {
    errors = {}; // Clears errors
    console.info('Removed all errors');
    yield put (returnErrors(errors));
}

export default function* watchErrors() {
    yield all([
        yield takeLatest(VALIDATOR.VALIDATE.FIELD, onValidateField),
        yield takeLatest(VALIDATOR.ERRORS.REMOVE, onRemoveErrors)
    ])
}

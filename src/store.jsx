import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';
import fetchMiddleware from '@base/reducer/fetch-middleware';

const sagaMiddleware = createSagaMiddleware();
const initialState = {};
const middleware = [ sagaMiddleware, fetchMiddleware ];

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);

export default store;
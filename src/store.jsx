import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';
import fetchMiddleware from '@base/reducer/fetch-middleware';
import storageMiddleware from '@base/reducer/storage-middleware';

const sagaMiddleware = createSagaMiddleware();
const initialState = {};
const middleware = [ sagaMiddleware, fetchMiddleware, storageMiddleware ];

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);

export default store;
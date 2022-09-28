//import { configureStore } from '@reduxjs/toolkit';
import { createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './redusers/index'
import rootSaga from '../app/sagas/saga';
const sagaMiddleware = createSagaMiddleware()
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)
export default store

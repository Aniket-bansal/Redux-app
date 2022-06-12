// import {legacy_createStore , combineReducers} from 'redux'
import {counterReducer} from './counter.reducer'
import {todoReducer}  from './todo.reducer'
import { legacy_createStore,combineReducers, applyMiddleware, compose } from "redux";
const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = legacy_createStore(reducers, );

export const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware()))




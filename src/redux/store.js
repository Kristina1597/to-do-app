import todoReducer from "./reducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";

let reducers = combineReducers({
    todo: todoReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));

window.__store__ = store;

export default store;

import {applyMiddleware, combineReducers, createStore} from "redux";
import todoReducer from "./reducer/reducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas/tasksSaga";

const reducers = combineReducers({
    todo: todoReducer
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

window.__store__ = store;

export default store;

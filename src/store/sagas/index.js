import {all} from 'redux-saga/effects';
import watchTasksLoad, {handleTasksLoad} from "./tasksSaga";

export default function*  rootSaga() {
    yield all([handleTasksLoad(), watchTasksLoad()]);
}

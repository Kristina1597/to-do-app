import {call, put, takeEvery} from "redux-saga/effects";
import {tasksAPI} from "../../services/api";
import {getTasksFailed, getTasksSucceed} from "../reducer/reducer";

export function* handleTasksLoad() {
    try {
        const tasks = yield call(tasksAPI.getTasks);
        yield put(getTasksSucceed(tasks));
    } catch (error) {
        yield put(getTasksFailed(error, null));
    }
}

export function* addTasks(payload) {
    try {
        const newTasks = yield call(tasksAPI.postTasks(payload.name));
        yield put(getTasksSucceed(newTasks));
    } catch (error) {
        yield put(getTasksFailed(error, null));
    }
}

export default function* rootSaga() {
    yield takeEvery("ADD_TASK", addTasks);
    yield takeEvery("TASKS_LOAD_PENDING", handleTasksLoad);
}

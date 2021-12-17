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

export default function* watchTasksLoad() {
    yield takeEvery("TASKS_LOAD_PENDING", handleTasksLoad);
}

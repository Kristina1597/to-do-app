import {call, put, takeEvery} from "redux-saga/effects";
import {TasksAPI} from "../../services/api";
import {
    deleteAllCompletedTasksFailed,
    deleteAllCompletedTasksSucceed,
    deleteTaskFailed,
    deleteTaskSucceed,
    getTasksFailed,
    getTasksSucceed,
    postTasksFailed,
    postTasksSucceed,
    toggleAllTasksFailed,
    toggleAllTasksSucceed,
    toggleTaskSucceed
} from "../reducer/reducer";

export function* loadTasks() {
    try {
        const tasks = yield call(TasksAPI.getTasks);
        yield put(getTasksSucceed(tasks));
    } catch (error) {
        yield put(getTasksFailed(error, null));
    }
}

export function* addTask(payload) {
    try {
        const newTask = yield call(TasksAPI.postTask, payload.name);
        yield put(postTasksSucceed(newTask));
    } catch (error) {
        yield put(postTasksFailed(error, null));
    }
}

export function* editTask(payload) {
    try {
        const tasks = yield call(TasksAPI.editTask, payload.id, payload.newName);
        yield put(deleteTaskSucceed(tasks));
    } catch (error) {
        yield put(deleteTaskFailed(error, null));
    }
}


export function* toggleTask(payload) {
    try {
        const tasks = yield call(TasksAPI.toggleTask, payload.id);
        yield put(toggleTaskSucceed(tasks));
    } catch (error) {
        yield put(toggleTaskSucceed(error, null));
    }
}

export function* toggleAllTasks(payload) {
    try {
        const tasks = yield call(TasksAPI.toggleAllTasks, payload.value);
        yield put(toggleAllTasksSucceed(tasks));
    } catch (error) {
        yield put(toggleAllTasksFailed(error, null));
    }
}

export function* deleteTask(payload) {
    try {
        const tasks = yield call(TasksAPI.deleteTask, payload.id);
        yield put(deleteTaskSucceed(tasks));
    } catch (error) {
        yield put(deleteTaskFailed(error, null));
    }
}

export function* deleteAllCompletedTasks() {
    try {
        const tasks = yield call(TasksAPI.deleteAllCompletedTasks);
        yield put(deleteAllCompletedTasksSucceed(tasks));
    } catch (error) {
        yield put(deleteAllCompletedTasksFailed(error, null));
    }
}

export default function* rootSaga() {
    yield takeEvery("TASKS_LOAD_PENDING", loadTasks);
    yield takeEvery("ADD_TASK", addTask);
    yield takeEvery("EDIT_TASK", editTask);
    yield takeEvery("TOGGLE_TASK", toggleTask);
    yield takeEvery("TOGGLE_ALL_TASKS", toggleAllTasks);
    yield takeEvery("DELETE_TASK", deleteTask);
    yield takeEvery("DELETE_ALL_COMPLETED_TASKS", deleteAllCompletedTasks);

}

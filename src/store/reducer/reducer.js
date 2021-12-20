const TASKS_LOAD_PENDING = "TASKS_LOAD_PENDING";
const GET_TASKS_SUCCEED = "GET_TASKS_SUCCEED";
const GET_TASKS_FAILED = "GET_TASKS_FAILED";

const ADD_TASK = "ADD_TASK";
const POST_TASKS_SUCCEED = "POST_TASKS_SUCCEED";
const POST_TASKS_FAILED = "POST_TASKS_FAILED";

const EDIT_TASK = "EDIT_TASK";
const EDIT_TASK_SUCCEED = "EDIT_TASK_SUCCEED";
const EDIT_TASK_FAILED = "EDIT_TASK_FAILED";

const TOGGLE_TASK = "TOGGLE_TASK";
const TOGGLE_TASK_SUCCEED = "TOGGLE_TASK_SUCCEED";
const TOGGLE_TASK_FAILED = "TOGGLE_TASK_FAILED";

const TOGGLE_ALL_TASKS = "TOGGLE_ALL_TASKS";
const TOGGLE_ALL_TASKS_SUCCEED = "TOGGLE_ALL_TASKS_SUCCEED";
const TOGGLE_ALL_TASKS_FAILED = "TOGGLE_ALL_TASKS_FAILED";

const DELETE_TASK = "DELETE_TASK";
const DELETE_TASK_SUCCEED = "DELETE_TASK_SUCCEED";
const DELETE_TASK_FAILED = "DELETE_TASK_FAILED";

const DELETE_ALL_COMPLETED_TASKS = "DELETE_ALL_COMPLETED_TASKS";
const DELETE_ALL_COMPLETED_TASKS_SUCCEED = "DELETE_TASKS_SUCCEED";
const DELETE_ALL_COMPLETED_TASKS_FAILED = "DELETE_TASKS_FAILED";

const SET_FILTER = "SET_FILTER";

const initialState = {
    tasks: [],
    filters: {
        All: () => true,
        Active: (task) => !task.completed,
        Completed: (task) => task.completed
    },
    currentFilter: "All",
    isAllChosen: false,
    error: null
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TASKS_SUCCEED: {
            return {
                ...state,
                tasks: [...action.tasks]
            }
        }

        case GET_TASKS_FAILED: {
            return {
                ...state,
                error: {
                    message: action.error.message,
                    status: action.error.status
                },
                tasks: state.tasks
            }
        }

        case POST_TASKS_SUCCEED: {
            return {
                ...state,
                tasks: [...state.tasks, action.newTask],
                isAllChosen: false
            }
        }

        case POST_TASKS_FAILED: {
            return {
                ...state,
                error: {
                    message: action.error.message,
                    status: action.error.status
                },
                tasks: state.tasks
            }
        }

        case EDIT_TASK_SUCCEED: {
            return {
                ...state,
                tasks: [...action.tasks]
            }
        }

        case EDIT_TASK_FAILED: {
            return {
                ...state,
                error: {
                    message: action.error.message,
                    status: action.error.status
                },
                tasks: state.tasks
            }
        }

        case TOGGLE_TASK_SUCCEED: {
            const checkedTasks = action.tasks.filter(task => {
                return task.completed
            })
            return {
                ...state,
                tasks: [...action.tasks],
                isAllChosen: checkedTasks.length === action.tasks.length
            }
        }

        case TOGGLE_TASK_FAILED: {
            return {
                ...state,
                error: {
                    message: action.error.message,
                    status: action.error.status
                },
                tasks: state.tasks
            }
        }

        case TOGGLE_ALL_TASKS_SUCCEED: {
            const updatedTasks = state.tasks.map(task => {
                return {
                    ...task,
                    completed: action.value
                }
            });
            return {
                ...state,
                isAllChosen: action.value,
                tasks: [...updatedTasks]
            }
        }

        case TOGGLE_ALL_TASKS_FAILED: {
            const updatedTasks = state.tasks.map(task => {
                return {
                    ...task,
                    completed: action.value
                }
            });
            return {
                ...state,
                isAllChosen: action.value,
                tasks: [...updatedTasks]
            }
        }

        case DELETE_TASK_SUCCEED: {
            return {
                ...state,
                tasks: [...action.tasks]
            }
        }

        case DELETE_TASK_FAILED: {
            return {
                ...state,
                error: {
                    message: action.error.message,
                    status: action.error.status
                },
                tasks: state.tasks
            }
        }

        case DELETE_ALL_COMPLETED_TASKS_SUCCEED: {
            return {
                ...state,
                tasks: [...action.tasks]
            }
        }

        case DELETE_ALL_COMPLETED_TASKS_FAILED: {
            return {
                ...state,
                error: {
                    message: action.error.message,
                    status: action.error.status
                },
                tasks: state.tasks
            }
        }

        case SET_FILTER: {
            return {
                ...state,
                currentFilter: action.currentFilter
            }
        }

        default:
            return state
    }
}

export const loadTasks = () => ({type: TASKS_LOAD_PENDING});
export const getTasksSucceed = (tasks) => ({type: GET_TASKS_SUCCEED, tasks});
export const getTasksFailed = (error) => ({type: GET_TASKS_FAILED, error});

export const addTask = (name) => ({type: ADD_TASK, name});
export const postTasksSucceed = (newTask) => ({type: POST_TASKS_SUCCEED, newTask});
export const postTasksFailed = (error) => ({type: POST_TASKS_FAILED, error});

export const editTask = (id, newName) => ({type: EDIT_TASK, id, newName});
export const editTaskSuccess = (id, newName) => ({type: EDIT_TASK_SUCCEED, id, newName});
export const editTaskFailed = (error) => ({type: EDIT_TASK_FAILED, error});

export const toggleTask = (id) => ({type: TOGGLE_TASK, id});
export const toggleTaskSucceed = (tasks) => ({type: TOGGLE_TASK_SUCCEED, tasks});
export const toggleTaskFailed = (id) => ({type: TOGGLE_TASK_FAILED, id});

export const toggleAllTasks = (value) => ({type: TOGGLE_ALL_TASKS, value});
export const toggleAllTasksSucceed = (value) => ({type: TOGGLE_ALL_TASKS_SUCCEED, value});
export const toggleAllTasksFailed = (error) => ({type: TOGGLE_ALL_TASKS_FAILED, error});

export const deleteTask = (id) => ({type: DELETE_TASK, id});
export const deleteTaskSucceed = (tasks) => ({type: DELETE_TASK_SUCCEED, tasks});
export const deleteTaskFailed = (error) => ({type: DELETE_TASK_FAILED, error});

export const deleteAllCompletedTasks = (tasks) => ({type: DELETE_ALL_COMPLETED_TASKS, tasks});
export const deleteAllCompletedTasksSucceed = (tasks) => ({type: DELETE_ALL_COMPLETED_TASKS_SUCCEED, tasks});
export const deleteAllCompletedTasksFailed = (error) => ({type: DELETE_ALL_COMPLETED_TASKS_FAILED, error});

export const setFilter = (currentFilter) => ({type: SET_FILTER, currentFilter});

export default todoReducer;


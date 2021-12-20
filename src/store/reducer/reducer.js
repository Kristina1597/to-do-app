const ADD_TASK = "ADD_TASK";
const EDIT_TASK = "EDIT_TASK";
const DELETE_TASK = "DELETE_TASK";
const DELETE_ALL_COMPLETED_TASKS = "DELETE_ALL_COMPLETED_TASKS";
const TOGGLE_TASKS = "TOGGLE_TASKS";
const TOGGLE_ALL_TASKS = "TOGGLE_ALL_TASKS";
const SET_FILTER = "SET_FILTER";
const GET_TASKS_SUCCEED = "GET_TASKS_SUCCEED";
const GET_TASKS_FAILED = "GET_TASKS_FAILED";
const TASKS_LOAD_PENDING = "TASKS_LOAD_PENDING";

const initialState = {
    tasks: [

    ],
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

        // case ADD_TASK: {
        //     const newTask = {id: Date.now(), name: action.name, completed: false};
        //     return {
        //         ...state,
        //         tasks: [...state.tasks, newTask],
        //         isAllChosen: false
        //     }
        // }

        case EDIT_TASK: {
            const taskList = [...state.tasks];
            const editedTaskIndex = taskList.findIndex(task => task.id === action.id);
            if (editedTaskIndex !== -1) {
                taskList[editedTaskIndex].name = action.newName;
            }
            return {
                ...state,
                tasks: [...taskList]
            }
        }

        case DELETE_TASK: {
            const remainingTasks = state.tasks.filter(task => action.id !== task.id);
            return {
                ...state,
                tasks: [...remainingTasks]
            }
        }
        case DELETE_ALL_COMPLETED_TASKS: {
            const remainingTasks = state.tasks.filter(task => !task.completed);
            return {
                ...state,
                tasks: [...remainingTasks]
            }
        }

        case TOGGLE_TASKS: {
            const updatedTasks = state.tasks.map(task => {
                return action.id === task.id ? {...task, completed: !task.completed} : task;
            });
            const checkedTasks = updatedTasks.filter(task => {
                return task.completed
            })
            return {
                ...state,
                tasks: [...updatedTasks],
                isAllChosen: checkedTasks.length === updatedTasks.length
            }
        }

        case TOGGLE_ALL_TASKS: {
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

export const addTask = (name) => ({type: ADD_TASK, name});
export const loadTasks = () => ({type: TASKS_LOAD_PENDING});
export const getTasksSucceed = (tasks) => ({type: GET_TASKS_SUCCEED, tasks});
export const getTasksFailed = (error) => ({type: GET_TASKS_FAILED, error});
export const editTask = (id, newName) => ({type: EDIT_TASK, id, newName});
export const deleteTask = (id) => ({type: DELETE_TASK, id});
export const deleteAllCompletedTasks = () => ({type: DELETE_ALL_COMPLETED_TASKS});
export const toggleTasks = (id) => ({type: TOGGLE_TASKS, id});
export const toggleAllTasks = (value) => ({type: TOGGLE_ALL_TASKS, value});
export const setFilter = (currentFilter) => ({type: SET_FILTER, currentFilter});

export default todoReducer;


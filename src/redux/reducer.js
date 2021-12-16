const ADD_TASK = "ADD_TASK";
const EDIT_TASK = "EDIT_TASK";
const DELETE_TASK = "DELETE_TASK";
const DELETE_ALL_COMPLETED_TASKS = "DELETE_ALL_COMPLETED_TASKS";
const TOGGLE_TASKS = "TOGGLE_TASKS";
const TOGGLE_ALL_TASKS = "TOGGLE_ALL_TASKS";

let initialState = {
    tasks: [
        {id: "todo-1", name: "Eat", completed: false},
{id: "todo-2", name: "Sleep", completed: false},
{id: "todo-3", name: "Repeat", completed: false}
],
    isAllChosen: false
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            const newTask = {id: Date.now(), name: action.name, completed: false};
            return {
                ...state,
               newTask
            }
        }
        case EDIT_TASK: {
            const taskList = [...state];
            const editedTaskIndex = taskList.findIndex(task => task.id === action.id);
            if (editedTaskIndex !== -1) {
                taskList[editedTaskIndex].name = action.newName;
            }
            return {
                ...state
            }
        }
        case DELETE_TASK: {
            const remainingTasks = state.filter(task => action.id !== task.id);
            return {
                ...state
            }
        }
        case DELETE_ALL_COMPLETED_TASKS: {
            const remainingTasks = state.filter(task => !task.completed);
            return {
                ...remainingTasks
            }
        }
        case TOGGLE_TASKS: {
            const updatedTasks = state.map(task => {
                if (action.id === task.id) {
                    return {...task, completed: !task.completed}
                }
                return task;
            });
            return {
                ...updatedTasks
            }
        }
        case TOGGLE_ALL_TASKS: {
            const updatedTasks = state.map(task => {
                return {
                    ...task,
                    completed: action.value
                }
            });
            return {
                ...updatedTasks
            }
        }
        default:
            return state
    }
}

export const addTask = (name) => ({type: ADD_TASK, name});
export const editTask = (id, newName) => ({type: EDIT_TASK, id, newName});
export const deleteTask = (id) => ({type: DELETE_TASK, id});
export const deleteAllCompletedTasks = () => ({type: DELETE_ALL_COMPLETED_TASKS});
export const toggleTasks = (id) => ({type: TOGGLE_TASKS});
export const toggleAllTasks = (value) => ({type: TOGGLE_ALL_TASKS, value});

export default todoReducer;


let tasksList = [
    {id: "todo-1", name: "Eat", completed: false},
    {id: "todo-2", name: "Sleep", completed: false},
    {id: "todo-3", name: "Repeat", completed: false}
];

export class TasksAPI {
    static getTasks() {
        return new Promise((resolve, reject) => {
            if (tasksList.length === 0) {
                reject('No items');
            } else {
                resolve(tasksList);
            }
        });
    }

    static postTask(name) {
        const newTask = {id: Date.now(), name, completed: false};
        tasksList = [...tasksList, newTask];
        return new Promise((resolve, reject) => {
            if (!name) {
                reject('Some error');
            } else {
                resolve(newTask);
            }
        });
    }

    static editTask(id, newName) {
        const editedTaskIndex = tasksList.findIndex(task => task.id === id);
        if (editedTaskIndex !== -1) {
            tasksList[editedTaskIndex].name = newName;
        }
        return new Promise((resolve, reject) => {
            if (!id && !newName) {
                reject('Some error');
            } else {
                resolve(tasksList);
            }
        });
    }

    static toggleTask(id) {
        const updatedTasks = tasksList.map(task => {
            return id === task.id ? {...task, completed: !task.completed} : task;
        });
        tasksList = [...updatedTasks];
        return new Promise((resolve, reject) => {
            if (!id) {
                reject('Some error');
            } else {
                resolve(updatedTasks);
            }
        });
    }


    static toggleAllTasks(value) {
        const updatedTasks = tasksList.map(task => {
            return {
                ...task,
                completed: value
            }
        });
        tasksList = [...updatedTasks];
        return new Promise((resolve, reject) => {
            if (!value) {
                reject('Some error');
            } else {
                resolve(updatedTasks);
            }
        });
    }


    static deleteTask(id) {
        const remainingTasks = tasksList.filter(task => id !== task.id);
        return new Promise((resolve, reject) => {
            if (!id) {
                reject('Some error');
            } else {
                resolve(remainingTasks);
            }
        });
    }

    static deleteAllCompletedTasks() {
        const remainingTasks = tasksList.filter(task => !task.completed);
        return new Promise((resolve, reject) => {
            if (!remainingTasks) {
                reject('Some error');
            } else {
                resolve(remainingTasks);
            }
        });
    }
}

export default TasksAPI;

import  _ from 'lodash';

let tasks = [
        {id: "todo-1", name: "Eat", completed: false},
        {id: "todo-2", name: "Sleep", completed: false},
        {id: "todo-3", name: "Repeat", completed: false}
    ];

export class tasksAPI {
    static getTasks() {
        return new Promise((resolve, reject) => {
            if (_.random(0, 10) > 7) {
                reject('No items');
            } else {
                resolve(tasks);
            }
        });
    }
    // static getExampleById(id) {
    //     return new Promise((resolve, reject) => {
    //         console.log(id);
    //         if (_.random(0, 10) > 7) {
    //             reject('Some error');
    //         }
    //         setTimeout(() => {
    //             resolve(tasks[0]);
    //         }, 3000);
    //     });
    // }

    static postTasks(name) {
        const newTask = {id: Date.now(), name, completed: false};
        const tasks = [...tasks, newTask];
        return new Promise((resolve, reject) => {
            console.log(tasks);
            if (!name) {
                reject('Some error');
            } else {
                resolve(tasks);
            }
        });

    }
}

import './App.css';
import React, {useState} from "react";
import Todo from "./components/Todo/Todo";
import FilterButton from "./components/FilterButton/FilterButton";
import App from "./App";

const tasksState = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false }
];

const filters = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed
}

const filteredTasks = Object.keys(filters);

const AppContainer = () => {
    const [tasks, setTasks] = useState(tasksState);
    const [filter, setFilter] = useState('All');

    const toggleTaskCompleted = (id) => {
        const updatedTasks = tasks.map(task => {
            if (id === task.id) {
                return {...task, completed: !task.completed}
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    function deleteTask(id) {
        const remainingTasks = tasks.filter(task => id !== task.id);
        setTasks(remainingTasks);
    }

    function editTask(id, newName) {
        const editedTaskList = tasks.map(task => {
            if (id === task.id) {
                return {...task, name: newName}
            }
            return task;
        });
        setTasks(editedTaskList);
    }

    const taskList = tasks
        .filter(filters[filter])
        .map(task => <Todo toggleTaskCompleted={toggleTaskCompleted}
                           deleteTask={deleteTask}
                           editTask={editTask}
                           key={task.id}
                           name={task.name}
                           id={task.id}
                           completed={task.completed}
        />)

    const filterList = filteredTasks.map(name => (
        <FilterButton key={name}
                      name={name}
                      setFilter={setFilter}
                      isPressed={name === filter}/>
    ));

    const addTask = name => {
        const newTask = {id: "todo-" + (tasks.length + 1), name: name, completed: false};
        setTasks([...tasks, newTask]);
    };

    const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
    const headingText = `${taskList.length} ${tasksNoun} left`;

    return (
        <div className="App">
            <div className="App-container">
                <App addTask={addTask}
                     taskList={taskList}
                     filterList={filterList}
                     headingText={headingText}/>
            </div>
        </div>
    );
};

export default AppContainer;



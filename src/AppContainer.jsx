import React, {useState} from "react";
import Todo from "./components/Todo/Todo";
import FilterButton from "./components/FilterButton/FilterButton";
import App from "./App";
import './App.css';

const tasksState = [
    {id: "todo-1", name: "Eat", completed: false},
    {id: "todo-2", name: "Sleep", completed: false},
    {id: "todo-3", name: "Repeat", completed: false}
];

const AppContainer = () => {
    const [tasks, setTasks] = useState(tasksState);
    const [filter, setFilter] = useState('All');
    const [isAllChosen, setIsAllChosen] = useState(false);

    const addTask = name => {
        const newTask = {id: Date.now(), name, completed: false};
        setIsAllChosen(false)
        setTasks([...tasks, newTask]);
    };

    const editTask = (id, newName) => {
        const taskList = [...tasks];
        const editedTaskIndex = tasks.findIndex(task => task.id === id);

        if (editedTaskIndex !== -1) {
            taskList[editedTaskIndex].name = newName;
        }

        setTasks(taskList);
    };

    const deleteTask = id => {
        const remainingTasks = tasks.filter(task => id !== task.id);
        setTasks(remainingTasks);
    };

    const deleteAllCompletedTasks = () => {
        const remainingTasks = tasks.filter(task => !task.completed);
        setTasks(remainingTasks);
    };

    const toggleAllTasksCompleted = (value) => {
        const updatedTasks = tasks.map(task => {
            return {
                ...task,
                completed: value
            }
            });
        const checkedTasks = updatedTasks.filter(task => {
            return task.completed
        })
        checkedTasks.length === updatedTasks.length ? setIsAllChosen(true) : setIsAllChosen(false);
        setTasks(updatedTasks);
    }

    const toggleTasksCompleted = (id) => {
        const updatedTasks = tasks.map(task => {
            if (id === task.id) {
                return {...task, completed: !task.completed}
            }
            return task;
        });
        const checkedTasks = updatedTasks.filter(task => {
            return task.completed
        })
        checkedTasks.length === updatedTasks.length ? setIsAllChosen(true) : setIsAllChosen(false);
        setTasks(updatedTasks);
    };

    const filters = {
        All: () => true,
        Active: (task) => !task.completed,
        Completed: (task) => task.completed
    }

    const filteredTasks = Object.keys(filters);

    const filterList = filteredTasks.map(name => (
        <FilterButton
            key={name}
            name={name}
            filter={filter}
            setFilter={setFilter}
            isPressed={name === filter}
        />
    ));

    const taskList = tasks
        .filter(filters[filter])
        .map(task => (
            <Todo
                toggleTasksCompleted={toggleTasksCompleted}
                deleteTask={deleteTask}
                editTask={editTask}
                key={task.id}
                taskName={task.name}
                id={task.id}
                completed={task.completed}
            />)
        )

    const tasksNoun = tasks.length !== 1 ? 'tasks' : 'task';
    const headingText = `${tasks.length} ${tasksNoun} left`;

    return (
        <div className="App">
            <div className="App-container">
                <App
                    addTask={addTask}
                    toggleTasksCompleted={toggleTasksCompleted}
                    isAllChosen={isAllChosen}
                    isAnyTasksChosen={tasks.some(task => task.completed)}
                    deleteTask={deleteTask}
                    deleteAllCompletedTasks={deleteAllCompletedTasks}
                    toggleAllTasksCompleted={toggleAllTasksCompleted}
                    tasks={tasks}
                    taskList={taskList}
                    filterList={filterList}
                    headingText={headingText}
                />
            </div>
        </div>
    );
};

export default AppContainer;



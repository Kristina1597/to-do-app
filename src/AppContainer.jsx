import './App.css';
import React, {useState} from "react";
import Todo from "./components/Todo/Todo";
import FilterButton from "./components/FilterButton/FilterButton";
import App from "./App";

const tasksState = [
    {id: "todo-1", name: "Eat", completed: false},
    {id: "todo-2", name: "Sleep", completed: false},
    {id: "todo-3", name: "Repeat", completed: false}
];

const AppContainer = () => {
    const [tasks, setTasks] = useState(tasksState);
    const [filter, setFilter] = useState('All');
    const [isAllChosen, setIsAllChosen] = useState(false);
    const [isSmthChosen, setIsSmthChosen] = useState(false);

    const addTask = name => {
        const newTask = {id: "todo-" + (tasks.length + 1), name: name, completed: false};
        setIsAllChosen(false)
        setTasks([...tasks, newTask]);
    };

    const editTask = (id, newName) => {
        const editedTaskList = tasks.map(task => {
            if (id === task.id) {
                return {...task, name: newName}
            }
            return task;
        });
        setTasks(editedTaskList);
    };

    const deleteTask = id => {
        const remainingTasks = tasks.filter(task => {
                !id && setIsSmthChosen(false);
                return id ? id !== task.id : !task.completed
            }
        );
        setTasks(remainingTasks);
    };

    const toggleTasksCompleted = (value) => {
        const updatedTasks = tasks.map(task => {
            return typeof value === "boolean" ? {
                ...task,
                completed: value
            } : value === task.id ? {
                ...task,
                completed: !task.completed
            } : task;
        });
        const checkedTasks = updatedTasks.filter(task => {
            return task.completed
        })
        checkedTasks.length === updatedTasks.length ? setIsAllChosen(true) : setIsAllChosen(false);
        checkedTasks.length > 0 ? setIsSmthChosen(true) : setIsSmthChosen(false);
        setTasks(updatedTasks);
    };

    const filters = {
        All: () => true,
        Active: (task) => !task.completed,
        Completed: (task) => task.completed
    }

    const filteredTasks = Object.keys(filters);

    const filterList = filteredTasks.map(name => (
        <FilterButton key={name}
                      name={name}
                      filter={filter}
                      setFilter={setFilter}
                      isPressed={name === filter}/>
    ));

    const taskList = tasks
        .filter(filters[filter])
        .map(task => <Todo toggleTasksCompleted={toggleTasksCompleted}
                           deleteTask={deleteTask}
                           editTask={editTask}
                           key={task.id}
                           taskName={task.name}
                           id={task.id}
                           completed={task.completed}
        />)

    const tasksNoun = tasks.length !== 1 ? 'tasks' : 'task';
    const headingText = `${tasks.length} ${tasksNoun} left`;

    return (
        <div className="App">
            <div className="App-container">
                <App addTask={addTask}
                     toggleTasksCompleted={toggleTasksCompleted}
                     isAllChosen={isAllChosen}
                     isSmthChosen={isSmthChosen}
                     deleteTask={deleteTask}
                     tasks={tasks}
                     taskList={taskList}
                     filterList={filterList}
                     headingText={headingText}/>
            </div>
        </div>
    );
};

export default AppContainer;



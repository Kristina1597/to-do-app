import React from "react";
import {connect} from "react-redux";
import Todo from "./Todo";
import {addTask, deleteAllCompletedTasks, deleteTask, editTask, toggleAllTasks, toggleTasks} from "../redux/reducer";

class TodoContainer extends React.Component {
    render() {
        debugger
        // const [tasks, setTasks] = useState('');
        // const [filter, setFilter] = useState('All');
        // const [isAllChosen, setIsAllChosen] = useState(false);
        //
        // const addTask = name => {
        //     const newTask = {id: Date.now(), name, completed: false};
        //     setIsAllChosen(false)
        //     setTasks([...tasks, newTask]);
        // };
        //
        // const editTask = (id, newName) => {
        //     const taskList = [...tasks];
        //     const editedTaskIndex = taskList.findIndex(task => task.id === id);
        //
        //     if (editedTaskIndex !== -1) {
        //         taskList[editedTaskIndex].name = newName;
        //     }
        //
        //     setTasks(taskList);
        // };
        //
        // const deleteTask = id => {
        //     const remainingTasks = tasks.filter(task => id !== task.id);
        //     setTasks(remainingTasks);
        // };
        //
        // const deleteAllCompletedTasks = () => {
        //     const remainingTasks = tasks.filter(task => !task.completed);
        //     setTasks(remainingTasks);
        // };
        //
        // const toggleAllTasksCompleted = (value) => {
        //     const updatedTasks = tasks.map(task => {
        //         return {
        //             ...task,
        //             completed: value
        //         }
        //         });
        //     const checkedTasks = updatedTasks.filter(task => {
        //         return task.completed
        //     })
        //     checkedTasks.length === updatedTasks.length ? setIsAllChosen(true) : setIsAllChosen(false);
        //     setTasks(updatedTasks);
        // }
        //
        // const toggleTasksCompleted = (id) => {
        //     const updatedTasks = tasks.map(task => {
        //         if (id === task.id) {
        //             return {...task, completed: !task.completed}
        //         }
        //         return task;
        //     });
        //     const checkedTasks = updatedTasks.filter(task => {
        //         return task.completed
        //     })
        //     checkedTasks.length === updatedTasks.length ? setIsAllChosen(true) : setIsAllChosen(false);
        //     setTasks(updatedTasks);
        // };
        //
        // const filters = {
        //     All: () => true,
        //     Active: (task) => !task.completed,
        //     Completed: (task) => task.completed
        // }
        //
        // const filteredTasks = Object.keys(filters);
        //
        // const filterList = filteredTasks.map(name => (
        //     <FilterButton
        //         key={name}
        //         name={name}
        //         filter={filter}
        //         setFilter={setFilter}
        //         isPressed={name === filter}
        //     />
        // ));
        //
        // const taskList = tasks
        //     .filter(filters[filter])
        //     .map(task => (
        //         <Item
        //             toggleTasksCompleted={toggleTasksCompleted}
        //             deleteTask={deleteTask}
        //             editTask={editTask}
        //             key={task.id}
        //             taskName={task.name}
        //             id={task.id}
        //             completed={task.completed}
        //         />)
        //     )
        //
        // const tasksNoun = tasks.length !== 1 ? 'tasks' : 'task';
        // const headingText = `${tasks.length} ${tasksNoun} left`;

        return (
            <div className="App">
                <div className="App-container">
                    <Todo
                        isAllChosen={this.props.isAllChosen}
                        addTask={this.props.addTask}
                        editTask={this.props.editTask}
                        deleteTask={this.props.deleteTask}
                        deleteAllCompletedTasks={this.props.deleteAllCompletedTasks()}
                        toggleTasks={this.props.toggleTasks}
                        toggleAllTasks={this.props.toggleAllTasks}
                        // isAnyTasksChosen={tasks.some(task => task.completed)}
                        // tasks={tasks}
                        // taskList={taskList}
                        // filterList={filterList}
                        // headingText={headingText}
                    />
                </div>
            </div>
        );
    }
}

let mapStateToProps = (store) => (
    {
        isAllChosen: store.isAllChosen,
        tasks: store.tasks
    });

let mapDispatchToProps = (dispatch) => {
    return {
        addTask: (name) => {
            dispatch(addTask(name));
        },
        editTask: (id, newName) => {
            dispatch(editTask(id, newName));
        },
        deleteTask: (id) => {
            dispatch(deleteTask(id))
        },
        deleteAllCompletedTasks: () => {
            dispatch(deleteAllCompletedTasks)
        },
        toggleTasks: (id) => {
            dispatch(toggleTasks(id))
        },
        toggleAllTasks: (value) => {
            dispatch(toggleAllTasks(value))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);


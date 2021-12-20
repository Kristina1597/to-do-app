import React from "react";
import {connect} from "react-redux";
import Todo from "./Todo";
import FilterButton from "./FilterButton/FilterButton";
import Item from "./Item/Item";
import {
    addTask,
    deleteAllCompletedTasks,
    deleteTask,
    editTask, loadTasks,
    setFilter,
    toggleAllTasks,
    toggleTask
} from "../store/reducer/reducer";

class TodoContainer extends React.Component {

    componentDidMount() {
        this.props.loadTasks();
    }

    render() {
        const filteredTasks = Object.keys(this.props.filters);
        const filterList = filteredTasks.map(name => (
            <FilterButton
                key={name}
                name={name}
                filter={this.props.currentFilter}
                setFilter={this.props.setFilter}
                isPressed={name === this.props.currentFilter}
            />
        ));

        const taskList = this.props.tasks
            .filter(this.props.filters[this.props.currentFilter])
            .map(task => (
                <Item
                    toggleTask={this.props.toggleTask}
                    deleteTask={this.props.deleteTask}
                    editTask={this.props.editTask}
                    key={task.id}
                    taskName={task.name}
                    id={task.id}
                    completed={task.completed}
                />)
            )

        const tasksNoun = this.props.tasks.length !== 1 ? 'tasks' : 'task';
        const headingText = `${this.props.tasks.length} ${tasksNoun} left`;

        return (
            <div className="App">
                <div className="App-container">
                    <Todo
                        isAllChosen={this.props.isAllChosen}
                        addTask={this.props.addTask}
                        deleteAllCompletedTasks={this.props.deleteAllCompletedTasks}
                        toggleAllTasks={this.props.toggleAllTasks}
                        isAnyTasksChosen={this.props.tasks.some(task => task.completed)}
                        tasks={this.props.tasks}
                        taskList={taskList}
                        filterList={filterList}
                        headingText={headingText}
                    />
                </div>
            </div>
        );
    }
}

let mapStateToProps = (store) => (
    {
        isAllChosen: store.todo.isAllChosen,
        tasks: store.todo.tasks,
        filters: store.todo.filters,
        currentFilter: store.todo.currentFilter
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
            dispatch(deleteAllCompletedTasks())
        },
        toggleTask: (id) => {
            dispatch(toggleTask(id))
        },
        toggleAllTasks: (value) => {
            dispatch(toggleAllTasks(value))
        },
        setFilter: (currentFilter) => {
            dispatch(setFilter(currentFilter))
        },
        loadTasks: () => {
            dispatch(loadTasks())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);


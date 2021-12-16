import React from "react";
import Form from "../Form/Form";
import cn from "classnames";

const Main = ({ addTask, tasks, taskList, toggleTasksCompleted, isAllChosen }) => {
    return (<div className="main-container">
        <Form addTask={addTask}/>
            <div className={cn("input__checkbox", {["hidden"]: tasks.length === 0})}>
                <input
                    type="checkbox"
                    checked={isAllChosen}
                    onChange={() => toggleTasksCompleted(!isAllChosen)}
                />
                <label className="todo-label" >
                    Choose all
                </label>
            </div>
        <ul
            role="list"
            className="todo-list stack-large stack-exception"
            aria-labelledby="list-heading"
        >
            {taskList}
        </ul>
    </div>
    );
};

export default Main;

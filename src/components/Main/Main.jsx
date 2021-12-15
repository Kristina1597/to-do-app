import React from "react";
import Form from "../Form/Form";

const Main = ({ addTask, taskList }) => {
    return (<div className="main-container">
        <Form addTask={addTask}/>
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

import React from "react";

import './../App.css';
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const Todo = ({
                  addTask,
                  tasks,
                  taskList,
                  filterList,
                  headingText,
                  isAllChosen,
                  toggleAllTasks,
                  isAnyTasksChosen,
                  deleteAllCompletedTasks
              }) => {
    return (<>
            <div className="App-header todoapp stack-large">
                <h1>todos</h1>
            </div>
            <Main
                addTask={addTask}
                tasks={tasks}
                taskList={taskList}
                toggleAllTasks={toggleAllTasks}
                isAllChosen={isAllChosen}
            />
            {tasks.length > 0 &&
            <Footer
                filterList={filterList}
                headingText={headingText}
                isAnyTasksChosen={isAnyTasksChosen}
                deleteAllCompletedTasks={deleteAllCompletedTasks}
            />
            }
        </>
    )
};

export default Todo;


import React from "react";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import './App.css';

const App = ({
                 addTask,
                 tasks,
                 taskList,
                 filterList,
                 headingText,
                 isAllChosen,
                 toggleAllTasksCompleted,
                 isAnyTasksChosen,
                 deleteAllCompletedTasks
             }) => (<>
        <div className="App-header todoapp stack-large">
            <h1>todos</h1>
        </div>
        <Main
            addTask={addTask}
            tasks={tasks}
            taskList={taskList}
            toggleAllTasksCompleted={toggleAllTasksCompleted}
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
);

export default App;



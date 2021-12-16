import './App.css';
import React from "react";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = ({ addTask, tasks, taskList, filterList, headingText, isAllChosen, toggleTasksCompleted, isSmthChosen, deleteTask }) => (<>
        <div className="App-header todoapp stack-large">
            <h1>todos</h1>
        </div>
        <Main addTask={addTask}
              tasks={tasks}
              taskList={taskList}
              toggleTasksCompleted={toggleTasksCompleted}
              isAllChosen={isAllChosen}
        />
        {tasks.length > 0 &&
        <Footer filterList={filterList}
                headingText={headingText}
                isSmthChosen={isSmthChosen}
                deleteTask={deleteTask}
        />
        }
    </>
);

export default App;



import './App.css';
import React from "react";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App({ addTask, taskList, filterList, headingText }) {
    return (<>
        <div className="App-header todoapp stack-large">
            <h1>todos</h1>
        </div>
        <Main addTask={addTask} taskList={taskList}
        />
        <Footer filterList={filterList}
                headingText={headingText}
        />
    </>
    )
}

export default App;



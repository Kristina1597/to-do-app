import React from "react";
import {connect} from "react-redux";
import './App.css';
import TodoContainer from "./components/TodoContainer";


const App = (props) => (
        <div >
            <TodoContainer />
        </div>
);

export default connect(state => ({store: state.todo}))(App);



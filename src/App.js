import React from "react";
import {connect} from "react-redux";
import TodoContainer from "./components/TodoContainer";
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <TodoContainer store={this.props.store}/>
            </div>
        );
    }
}

export default connect(state => ({store: state.todo}))(App);



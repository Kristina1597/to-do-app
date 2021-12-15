import React, {useState} from "react";

const Todo = (props) => {
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');

    const onChange = (e) => {
        props.toggleTaskCompleted(props.id);
    }

    const toggleEditingMode = (value) => {
        setEditing(!isEditing)
    };

    function handleChange(e) {
        setNewName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.editTask(props.id, newName);
        setNewName("");
        setEditing(false);
    }

    const editingModeContent = (
        <form className="stack-small" onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="todo-label" htmlFor={props.id}>
                    New name for {props.name}
                </label>
                <input id={props.id} className="todo-text" type="text" onChange={handleChange}/>
            </div>
            <div className="btn-group">
                <button type="button" className="btn todo-cancel" onClick={toggleEditingMode}>
                    Cancel
                </button>
                <button type="submit" className="btn btn__primary todo-edit">
                    Save
                </button>
            </div>
        </form>
    );

    const viewModeContent = (
        <div className="stack-small">
            <div className="input__checkbox">
                <input
                    id={props.id}
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={() => props.toggleTaskCompleted(props.id)}
                />
                <label className="todo-label" htmlFor={props.id}>
                    {props.name}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn" onClick={toggleEditingMode}>
                    Edit
                </button>
                <button
                    type="button"
                    className="btn"
                    onClick={() => props.deleteTask(props.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );

    return(
        <li className="todo">
        {isEditing ? editingModeContent : viewModeContent}
        </li>
    )}

export default Todo;

import React, {useState} from "react";

const Todo = ({ taskName, id, completed, deleteTask, editTask, toggleTasksCompleted }) => {
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState(taskName);
    const editFormPlaceholder = "New name for " +  taskName;

    const toggleEditingMode = (value) => {
        setEditing(!isEditing)
    };

    const handleChange = e => {
        setNewName(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        editTask(id, newName);
        setEditing(false);
    };

    const editingModeContent = (
        <form className="stack-small" onSubmit={handleSubmit}>
            <div className="form-group">
                <input placeholder={editFormPlaceholder}
                       id={id} className="todo-text"
                       type="text"
                       value={newName}
                       onChange={handleChange}/>
            </div>
            <div className="btn-group">
                <button type="button"
                        className="btn todo-cancel"
                        onClick={toggleEditingMode}>
                    Cancel
                </button>
                <button type="submit"
                        className="btn btn__primary todo-edit">
                    Save
                </button>
            </div>
        </form>
    );

    const viewModeContent = (
        <div className="stack-small">
            <div className="input__checkbox">
                <input
                    id={id}
                    type="checkbox"
                    checked={completed}
                    onChange={() => toggleTasksCompleted(id)}
                />
                <label className="todo-label" htmlFor={id}>
                    {taskName}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn" onClick={toggleEditingMode}>
                    Edit
                </button>
                <button
                    type="button"
                    className="btn"
                    onClick={() => deleteTask(id)}
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

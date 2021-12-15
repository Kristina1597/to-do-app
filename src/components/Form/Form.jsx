import React, { useState } from "react";

function Form({addTask}) {
    const [name, setName] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addTask(name);
        setName("");
    };

    const handleChange = e => {
        setName(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
            </h2>
            <input
                placeholder={"What needs to be done?"}
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />

        </form>
    );
}

export default Form;

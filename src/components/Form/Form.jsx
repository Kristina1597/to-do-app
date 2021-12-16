import React, { useState } from "react";

const Form = ({ addTask }) => {
    const [name, setName] = useState('');

    const handleChange = e => {
        setName(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        addTask(name);
        setName("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder={"What needs to be done?"}
                type="text"
                id="new-todo-input"
                className="input input__lg"
                value={name}
                onChange={handleChange}
            />
        </form>
    );
};

export default Form;

import React from "react";

function FilterButton({ name, setFilter }) {
    return (
        <button type="button" className="btn toggle-btn" aria-pressed="true" onClick={() => setFilter(name)}>
            <span>{name}</span>
        </button>
    );
}

export default FilterButton;

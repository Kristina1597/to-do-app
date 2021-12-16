import React from "react";
import cn from "classnames"

const FilterButton = ({ name, setFilter, filter }) => (
    <button type="button"
            className={cn("btn", "toggle-btn", {["btn-pressed"]: filter === name})}
            onClick={() => setFilter(name)}>
        <span>{name}</span>
    </button>
);

export default FilterButton;

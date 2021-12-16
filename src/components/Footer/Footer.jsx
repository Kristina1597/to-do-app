import React from "react";
import cn from "classnames";

const Footer = ({ headingText, filterList, isSmthChosen, deleteTask }) => (
    <div className="footer-container">
        <h2 id="list-heading">{headingText}</h2>
        <div className="filters btn-group stack-exception">
            {filterList}
        </div>
        <div className={cn({["hidden"]: !isSmthChosen})}>
            <button onClick={() => deleteTask()} type="button"
                    className={"btn stack-exception"}
            >
                <span>Clear completed</span>
            </button>
        </div>
    </div>
);

export default Footer;

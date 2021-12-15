import React from "react";

function Footer({ headingText, filterList }) {
    return (
        <div className="footer-container">
            <h2 id="list-heading">{headingText}</h2>
            <div className="filters btn-group stack-exception">
                {filterList}
            </div>
        </div>
    );
}

export default Footer;

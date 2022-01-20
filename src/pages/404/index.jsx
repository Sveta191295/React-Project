import React from "react";
import "./styles.css";

import notFound from "./images/error.png";
const NotFound = () => {
    return (
        <div className="not-found">
            <div className="not-found-text">
                <h1>Oops!</h1>
                <p>Page Not Found</p>
            </div>
            <div className="not-found-img">
                <img src={notFound} alt="not-found" />
            </div>


        </div>
    )
}

export default NotFound;
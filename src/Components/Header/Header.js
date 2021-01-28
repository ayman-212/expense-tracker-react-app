import React from 'react';
import classes from "./Header.module.css";

const header = () => {
    return (
        <div className={classes.Header}>
            <h2>
                Expense Tracker
            </h2>
        </div>
    )
}

export default header
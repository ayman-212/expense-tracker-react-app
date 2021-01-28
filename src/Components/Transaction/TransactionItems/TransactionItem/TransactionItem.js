import React from 'react';

import classes from "./TransactionItem.module.css"

const transactionItem = (props) => {
    const plusOrMinus = props.amount > 0 ? "Plus" : "Minus";
    return (
        <li className={[classes.TransactionItem, classes[plusOrMinus]].join(" ")}>
            {props.text}<span>{props.amount > 0 ? "+" : "-"}${Math.abs(props.amount)}</span>
            <button onClick={props.clicked}>x</button>
        </li>
    )
}

export default transactionItem;
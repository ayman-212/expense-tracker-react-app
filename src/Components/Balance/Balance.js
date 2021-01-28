import React from 'react';
import classes from "./Balance.module.css";

const balance = (props) => {
    const amounts = props.transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((a, b) =>
        (a += b), 0).toFixed(2);
    return (
        <div className={classes.Balance}>
            <h4>
                your balance
            </h4>
            <h1>
                ${total}
            </h1>
        </div>
    )
}

export default balance
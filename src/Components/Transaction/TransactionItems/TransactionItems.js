import React from 'react';

import classes from "./TransactionItems.module.css";
import TransactionItem from "./TransactionItem/TransactionItem"

const transactionItems = (props) => {
    return (
        <div className={classes.TransactionItems}>
            <h3>
                History
            </h3>
            <ul>
                {props.transactions.map(transaction => (
                    <TransactionItem
                        key={transaction.id}
                        text={transaction.text}
                        amount={transaction.amount}
                        clicked={() => props.removeTransaction(transaction.id)} />
                ))}

            </ul>
        </div>
    )
}

export default transactionItems;
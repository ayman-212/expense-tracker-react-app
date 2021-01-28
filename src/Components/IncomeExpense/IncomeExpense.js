import React from 'react';
import classes from "./IncomeExpense.module.css";

const incomeExpense = (props) => {
    const amounts = props.transactions.map(transaction => (transaction.amount));
    const income = amounts
        .filter(amount => (amount > 0))
        .reduce((a, b) => (a += b), 0)
        .toFixed(2);

    const expense = (amounts
        .filter(amount => amount < 0)
        .reduce((a, b) => (a += b), 0) * -1).toFixed(2)
    return (
        <div className={classes.IncomeExpense}>
            <div>
                <h4>
                    Income
                </h4>
                <p className={classes.Plus}>
                    +${income}
                </p>
            </div>
            <div>
                <h4>
                    Expense
                </h4>
                <p className={classes.Minus}>
                    -${expense}
                </p>
            </div>
        </div >
    )
}

export default incomeExpense;
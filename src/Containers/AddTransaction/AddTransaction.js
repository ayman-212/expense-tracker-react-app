import React, { useState } from 'react';
import { connect } from "react-redux"

import classes from "./AddTransaction.module.css";
import * as actions from "../../store/actions/actions";

const AddTransaction = (props) => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const newTrans = {
        id: Math.floor(Math.random() * 1000000),
        text,
        amount: +amount
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.onAddTransaction(newTrans);
    }
    return (
        <div className={classes.AddTransaction}>
            <h3>
                Add new transaction
            </h3>
            <form
                className={classes.TransactionForm}
                onSubmit={onSubmitHandler}>
                <div>
                    <label>
                        Text
                    </label>
                    <input
                        placeholder="Enter text..."
                        type="text"
                        value={text}
                        onChange={(event) => setText(event.target.value)} />
                </div>
                <div>
                    <label>
                        Amount<br />
                        (negative - expense, positive - income)
                    </label>
                    <input
                        type="number"
                        placeholder="Enter amount..."
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)} />
                </div>
                <button>Add transaction</button>
            </form>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        onAddTransaction: (transactionData) => dispatch(actions.addTransactions(transactionData))
    }
}
export default connect(null, mapDispatchToProps)(AddTransaction);
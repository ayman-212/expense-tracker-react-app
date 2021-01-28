import * as actionTypes from "./actionTypes";

export const removeTransaction = (id) => {
    return {
        type: actionTypes.REMOVE_TRANSACTION,
        id: id
    }
}

export const addTransactions = (transactionItem) => {
    return {
        type: actionTypes.ADD_TRANSACTIONS,
        transactionItem: transactionItem
    }
}
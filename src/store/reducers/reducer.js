import * as actionTypes from "../actions/actionTypes";

const initialState = {
    transaction: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REMOVE_TRANSACTION:
            return {
                ...state,
                transaction: state.transaction.filter(el => el.id !== action.id)
            }
        case actionTypes.ADD_TRANSACTIONS:
            return {
                ...state,
                transaction: state.transaction.concat({ ...action.transactionItem })
            }
        default: return state
    }
}

export default reducer;
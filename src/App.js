import { connect } from "react-redux";

import './App.css';
import Header from "./Components/Header/Header";
import Balance from "./Components/Balance/Balance";
import IncomeExpense from "./Components/IncomeExpense/IncomeExpense";
import TransactionItems from "./Components/Transaction/TransactionItems/TransactionItems";
import AddTransaction from "./Containers/AddTransaction/AddTransaction";
import * as actions from "./store/actions/actions";

function App(props) {
    return (
        <div className="App">
            <Header />
            <Balance transactions={props.transaction} />
            <IncomeExpense transactions={props.transaction} />
            <TransactionItems
                transactions={props.transaction}
                removeTransaction={props.onRemoveTransaction} />
            <AddTransaction />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        transaction: state.transaction
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveTransaction: (id) => dispatch(actions.removeTransaction(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

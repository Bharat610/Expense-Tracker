import React from "react";
import Header from "./components/Header"
import Balance from "./components/Balance"
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import "./index.css"

export default function App() {

    const [transaction, setTransaction] = React.useState([]); 
    
    // [
    //     { id: 1, text: 'Flower', amount: -20 },
    //     { id: 2, text: 'Salary', amount: 300 },
    //     { id: 3, text: 'Book', amount: -10 },
    //     { id: 4, text: 'Camera', amount: 150 }
    // ]

    React.useEffect(() => {
        const storedValue = JSON.parse(localStorage.getItem('items'))
        storedValue !== null && setTransaction(storedValue)
        console.log(storedValue) 
    }, [])

    React.useEffect(() => {
        localStorage.setItem('items', JSON.stringify(transaction))
    }, [transaction])


    return (
        <div className = "app-container">
            <Header />
            <div className="container">
                <div className="col__1">
                    <Balance transactions={transaction} /> 
                    <IncomeExpenses transactions={transaction} />
                    <TransactionList transactions={transaction} updateList={setTransaction} />
                </div>
                <div className="col__2"> 
                    <AddTransaction updateTransaction={setTransaction} transactions={transaction} />
                </div>
            </div>  
        </div>  
    )
}
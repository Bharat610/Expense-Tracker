import React from "react";

export default function AddTransaction({updateTransaction, transactions}) {

    const [text, setText] = React.useState('')
    const [amount, setAmount] = React.useState(0)
    
    function handleText(e) {
        setText(e.target.value)
    }

    function handleAmount(e) {
        setAmount(Number(e.target.value))
    }

    // console.log(updateTransaction, transactions)
    function updateAmount(e) {
        e.preventDefault();
        updateTransaction(prev => {
            return [...prev, {id:transactions.length+1, text:text, amount:amount}]
        })
    }

    return(
        <>
            <h3>Add new Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Title</label>
                    <input type="text" value={text} onChange={handleText} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="amount">Amount<br /> (negative - expenses, positive - income)</label>
                <input type="number" value={amount} onChange={handleAmount} placeholder="Enter amount..." />
                </div>
                <button className="btn" onClick={updateAmount}>Add Trasaction</button>
            </form>
        </>
    )
}
import React from "react";

export default function TransactionList(props) {
    
    function updateListFn(e) {
        props.updateList(prevState => {
            const newArr = [];
            let count = 0;
         for(let i=0; i<prevState.length; i++){
            if(e.target.id != prevState[i].id){
                newArr.push({...prevState[i], id:count+=1});
            }
         }
         count = 0;
         return newArr;
        })
    }

   const lists = props.transactions.map(transaction => {
    return(
        <li key={transaction.id} className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text} <span>{transaction.amount < 0 ? "-" : "+"}${Math.abs(transaction.amount)}</span>
            <button id={transaction.id} className="delete-btn" onClick={updateListFn}>x</button>
        </li>
   )})

    return(
        <>
            <h3>History</h3>
            <div className="csae">
            <ul className="list">
                {lists}
            </ul>
            </div>
        </>
    )
}
import React from "react";

export default function IncomeExpenses({transactions}) {
    let income = 0, expense = 0;
    for(let i=0; i<transactions.length; i++){
        if(transactions[i].amount < 0){
            expense +=transactions[i].amount;
        }
        else{
            income += transactions[i].amount;
        }
    }
    return(
        <div className="inc-container">
            <div>
                <h4>INCOME</h4>
                <p className="money plus">+${income}</p>
            </div>
            <div>
                <h4>EXPENSES</h4>
                <p className="money minus">-${Math.abs(expense)}</p>
            </div>
        </div>
    )
}
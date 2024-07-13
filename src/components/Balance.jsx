import React from "react";

export default function Balance(props) {
    let totalSum = 0;
    let sign="";
    for(let i=0; i<props.transactions.length; i++){
        totalSum += props.transactions[i].amount;
    }
    sign = totalSum < 0 ? "-" : "+";

    return(
        <div className="balance">
        <h4>YOUR BALANCE</h4>
        <h2>{sign}${Math.abs(totalSum)}</h2>
        </div>
    )
}
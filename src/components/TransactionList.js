import React,{useContext} from 'react'
import { Alert } from 'reactstrap'
import {GlobalContext } from '../Context/GlobalState'
import Transaction from './Transaction'
export default function TransactionList() {

    const context = useContext(GlobalContext)
    const {transactions} = context 
    console.log(context);
    
    return (
        <div className="container-fluid pt-5">
            <h4>History</h4>
            <hr />
            {transactions.map(transaction=>{
                return(
                <Transaction transaction={transaction} />  
                ) 
                
            })}
        </div>
    )
}

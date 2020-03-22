import React,{useContext} from 'react'
import { Alert, Button } from 'reactstrap'
import {GlobalContext} from '../Context/GlobalState'




export default function Transaction({transaction}) {


    const {deletetransaction}=useContext(GlobalContext)
    
    
    return (
        <Alert key={transaction.id} color={transaction.amount>0 ? "success" : "danger" } className="d-flex justify-content-between">
            <h5>{transaction.text}</h5>
            <h5>{transaction.amount>0 ? "+" : "" }{transaction.amount}₹</h5>
            <Button onClick={()=>deletetransaction(transaction.id)}>X</Button> 
        </Alert>
    )
}

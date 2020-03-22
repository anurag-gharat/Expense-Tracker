import React,{useContext} from 'react'
import { Alert } from 'reactstrap'



export default function Transaction({transaction}) {
    return (
        <Alert key={transaction.id} className="d-flex justify-content-between">
            <h5>{transaction.text}</h5>
            <h5>{transaction.amount}</h5>
         </Alert>
    )
}

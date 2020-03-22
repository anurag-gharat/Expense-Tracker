import React,{useState} from 'react'
import { Button, Alert } from 'reactstrap';
import {Label} from 'reactstrap'

export default function AddTransaction() {
    
    const [text,setText] = useState('')
    const [amount,setAmount] = useState(0)
    return (
        <div className="container">
           <Alert color="primary">
               Add a new Transaction
           </Alert>
           
        </div>
    )
}

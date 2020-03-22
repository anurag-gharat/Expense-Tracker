import React,{useState} from 'react'
import { Button, Alert, Input,InputGroupAddon,InputGroup } from 'reactstrap';
import {Label} from 'reactstrap'

export default function AddTransaction() {
    
    const [text,setText] = useState('')
    const [amount,setAmount] = useState(0)
    return (
        <div className="container p-0">
           <Alert color="primary" className="mt-5">
               Add a new Transaction
           </Alert>
           <InputGroup className="mt-2"><Input placeholder="Add transaction name">
           </Input>
           </InputGroup>
           <InputGroup className="mt-2">
            <InputGroupAddon addonType="prepend">Rs:</InputGroupAddon>
            <Input placeholder="Amount" min={0} max={10000} type="number" step="1" />
            <InputGroupAddon addonType="append">.00</InputGroupAddon>
            </InputGroup>
            <Button  className="mt-2" outline color="primary">ADD TRANSACTION</Button>
        </div>
    )
}

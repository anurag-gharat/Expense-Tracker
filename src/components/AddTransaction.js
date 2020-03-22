import React,{useState, useContext} from 'react'
import { Button, Alert, Input,InputGroupAddon,InputGroup } from 'reactstrap';
import {Label} from 'reactstrap'
import {GlobalContext} from '../Context/GlobalState'
export default function AddTransaction() {
    
    const [text,setText] = useState('')
    const [amount,setAmount] = useState(0)
    const {addTransaction} = useContext(GlobalContext)
 
    const onSubmit=(e)=>{
        
        e.preventDefault();
        const newTransaction={
            id:Math.floor(Math.random()*10000000),
            text,
            amount:+amount
        }
        console.log(newTransaction);
        
        addTransaction(newTransaction)
}
    
    
    return (
        <div className="container p-0">
           <Alert color="primary" className="mt-5">
               Add a new Transaction
           </Alert>
           <form onSubmit={onSubmit}> 
           <InputGroup className="mt-2">
               <Input placeholder="Add transaction name" value={text} onChange={(e)=>setText(e.target.value)}>
           </Input>
           </InputGroup>
           <InputGroup className="mt-2">
            <InputGroupAddon addonType="prepend">Rs:</InputGroupAddon>
            <Input placeholder="Amount" type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} />
            <InputGroupAddon addonType="append">.00</InputGroupAddon>
            </InputGroup>
            <Button type="submit" className="mt-2" outline color="primary">ADD TRANSACTION</Button>
        
           </form>

           </div>
    )
}

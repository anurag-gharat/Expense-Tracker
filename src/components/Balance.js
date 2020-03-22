import React,{useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState'

export default function Balance() {

    const context = useContext( GlobalContext) 
    
    const{transactions} = context
    const amounts=transactions.map(transaction => transaction.amount);
    console.log(amounts);
    const total = amounts.reduce((acc,item)=>(acc +=parseInt(item)),0).toFixed(2);
    
    
    return (
        <div className=" text-dark container-fluid p-2">
            <h5 className="mb-0">Your Balance:</h5>
    <h3>{total}</h3>
        </div>
    )
}

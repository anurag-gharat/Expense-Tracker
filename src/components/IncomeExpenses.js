import React,{useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState'

export default function IncomeExpenses() {
    
    const context = useContext( GlobalContext) 
    const{transactions} = context

    const amounts = transactions.map(transaction=>transaction.amount)
    const income = amounts.filter(amount => amount>0).reduce((acc,item)=>(acc +=parseInt(item)),0).toFixed(2)
    const expense= amounts.filter(amount => amount<0).reduce((acc,item)=>(acc +=parseInt(item)),0).toFixed(2)
   
  
    

 
    return (
        <div className="container-fluid row bg-white ml-0 shadow py-2">
            <div className="col-6 border-right" >
               <h6>INCOME</h6>
               <h2 className="text-success">{income}₹</h2> 
            </div>
            <div className="col-6">
               <h6 className="text-red">EXPENSE</h6>
    <h2 className="text-danger">{expense}₹</h2> 
            </div>
        </div>
    )
}

import React from 'react'

export default function IncomeExpenses() {
    return (
        <div className="container-fluid row bg-white ml-0 shadow py-2">
            <div className="col-6 border-right" >
               <h6>INCOME</h6>
               <h2 className="text-success">1,200 ₹</h2> 
            </div>
            <div className="col-6">
               <h6 className="text-red">EXPENSE</h6>
               <h2 className="text-danger">1,200 ₹</h2> 
            </div>
        </div>
    )
}

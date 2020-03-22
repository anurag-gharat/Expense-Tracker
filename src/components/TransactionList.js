import React from 'react'
import { Alert } from 'reactstrap'

export default function TransactionList() {
    return (
        <div className="container-fluid pt-5">
            <h4>History</h4>
            <hr />
            <Alert color="success" className="d-flex justify-content-between">
                <h5>Cash</h5>
                <h5>+500</h5>
            </Alert>
            <Alert color="success" className="d-flex justify-content-between">
                <h5>Cash</h5>
                <h5>+500</h5>
            </Alert>
            <Alert color="danger" className="d-flex justify-content-between">
                <h5>Cash</h5>
                <h5>+500</h5>
            </Alert>
        </div>
    )
}

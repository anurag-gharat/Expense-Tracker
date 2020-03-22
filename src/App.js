import React from 'react';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import {GlobalProvider} from './Context/GlobalState'
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div className="App p-2 bg-light shadow-lg mt-2">
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </div>
    </GlobalProvider>
    
  );
}

export default App;

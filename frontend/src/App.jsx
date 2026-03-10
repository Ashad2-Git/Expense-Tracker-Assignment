import './App.css'
import { useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList';
import SummaryPanel from './components/SummaryPanel';
import CurrencyConverter from './components/CurrencyConverter';


function App() {

    const [expenses, setExpenses] = useState([]);

    const addExpense = (expense) => {
      setExpenses([...expenses, expense])
    };

    const deleteExpense = (id) => {
      setExpenses(expenses.filter((item) => item.id !== id))
    }

    const total = expenses.reduce(
      (sum, item) => sum + item.amount,
      0
    )

  return (
    <>
      <h1>Expense Tracker</h1>
      <ExpenseForm  addExpense={addExpense}/>
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      <SummaryPanel expenses={expenses} />
      <CurrencyConverter total={total} />
    </>
  )
}

export default App

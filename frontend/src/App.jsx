import './App.css'
import { useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList';

function App() {

    const [expenses, setExpenses] = useState([]);

    const addExpense = (expense) => {
      setExpenses([...expenses, expense])
    };

    const deleteExpense = (id) => {
      setExpenses(expenses.filter((item) => item.id !== id))
    }

  return (
    <>
      <h1>Expense Tracker</h1>
      <ExpenseForm  addExpense={addExpense}/>
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </>
  )
}

export default App

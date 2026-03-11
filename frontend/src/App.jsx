import './App.css'
import { useEffect, useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList';
import SummaryPanel from './components/SummaryPanel';
import CurrencyConverter from './components/CurrencyConverter';


function App() {

    const [expenses, setExpenses] = useState(() => {
      const savedExpenses = localStorage.getItem("expenses");
      return savedExpenses ? JSON.parse(savedExpenses) : [];
    });

    const [editingExpense, setEditingExpense] = useState(null)

    useEffect(() => {
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses])

    const addExpense = (expense) => {
      setExpenses([...expenses, expense])
    };

    const updateExpense = (updatedExpense) => {
        setExpenses(
          expenses.map((expense) => 
            expense.id === updatedExpense.id ? updatedExpense : expense
          )
        )
        setEditingExpense(null);
    }

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
      <ExpenseForm  addExpense={addExpense}
          editingExpense={editingExpense}
          updateExpense={updateExpense}/>
      <ExpenseList expenses={expenses} 
          deleteExpense={deleteExpense} 
          setEditingExpense={setEditingExpense}/>
      <SummaryPanel expenses={expenses} />
      <CurrencyConverter total={total} />
    </>
  )
}

export default App

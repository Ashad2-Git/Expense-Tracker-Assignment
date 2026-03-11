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
        <div className="max-w-7xl mx-auto p-6 min-h-screen bg-gray-50">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Expense Tracker
          </h1>

          {/* The 12-Column Grid Container */}
          <main className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* 1. LEFT SIDE: The Form (Takes 3/12 columns) */}
            <section className="md:col-span-3">
              <div className="sticky top-6">
                <h2 className="text-lg font-semibold mb-4 text-gray-600">Entry</h2>
                <ExpenseForm 
                  addExpense={addExpense}
                  editingExpense={editingExpense}
                  updateExpense={updateExpense}
                />
              </div>
            </section>

            {/* 2. MIDDLE: The History (Takes 6/12 columns) */}
            <section className="md:col-span-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold mb-4 text-gray-600">Expense List</h2>
              <ExpenseList 
                expenses={expenses} 
                deleteExpense={deleteExpense} 
                setEditingExpense={setEditingExpense}
              />
            </section>

            {/* 3. RIGHT SIDE: The Analytics (Takes 3/12 columns) */}
            <section className="md:col-span-3 flex flex-col gap-6">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-lg font-semibold mb-4 text-gray-600">Summary</h2>
                <SummaryPanel expenses={expenses} />
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-lg font-semibold mb-4 text-gray-600">Converter</h2>
                <CurrencyConverter total={total} />
              </div>
            </section>
          </main>
        </div>
    </>
  )
}

export default App

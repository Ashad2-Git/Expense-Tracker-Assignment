import { useState, useEffect } from "react"


export default function ExpenseForm({ addExpense, editingExpense, updateExpense }) {

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("Food");

    useEffect(() => {
        if (editingExpense) {
            setName(editingExpense.name)
            setAmount(editingExpense.amount)
            setCategory(editingExpense.category)
        }
    }, [editingExpense])

    const handleSubmit = (e) => {
        e.preventDefault();

        const newExpense = {
            id: editingExpense ? editingExpense.id : Date.now(),
            name,
            amount: Number(amount),
            category
        };

        if(editingExpense){
            updateExpense(newExpense)
        } else {
            addExpense(newExpense)
        }

        setName("");
        setAmount("");
    }



    return (
        <>
            <section>
                <form onSubmit={handleSubmit}>
                    <input 
                        placeholder="Expense Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="border border-black"></input>

                    <input 
                        placeholder="Amount"
                        value={amount}
                        type="number"
                        step={0.01}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                        className="border border-black"></input>

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option>Food</option>
                        <option>Travel</option>
                        <option>Marketing</option>
                        <option>Utilities</option>
                        <option>Others</option>
                    </select>

                    <button>Add Expense</button>

                </form>
            </section>
        </>
    )
}
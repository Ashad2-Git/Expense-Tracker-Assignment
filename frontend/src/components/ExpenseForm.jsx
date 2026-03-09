import { useState } from "react"


export default function ExpenseForm({ addExpense }) {

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("Food");

    const handleSubmit = (e) => {
        e.preventDefalut();

        const newExpense = {
            id: Date.now(),
            name,
            amount: Number(amount),
            category
        };

        addExpense(newExpense);

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
                        type="Number"
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
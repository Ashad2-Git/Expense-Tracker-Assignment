

export default function ExpenseItem({ expense, setEditingExpense, deleteExpense}) {
    return (
        <>
            <section>
                <div>
                    <h3>{expense.name}</h3>

                    <p>{expense.category}</p>

                    <p>${expense.amount}</p>

                    <button onClick={() => setEditingExpense(expense)}>
                        Edit
                    </button>

                    <button onClick={() => deleteExpense(expense.id)}>
                        Delete
                    </button>
                </div>
            </section>
        </>
    )
}


export default function ExpenseItem({ expense, deleteExpense}) {
    return (
        <>
            <section>
                <h3>{expense.name}</h3>

                <p>{expense.category}</p>

                <p>₹{expense.amount}</p>

                <button onClick={() => deleteExpense(expense.id)}>
                    Delete
                </button>
            </section>
        </>
    )
}


export default function ExpenseItem({ expense, deleteExpense}) {
    return (
        <>
            <section>
                <div>
                    <h3>{expense.name}</h3>

                    <p>{expense.category}</p>

                    <p>${expense.amount}</p>

                    <button onClick={() => deleteExpense(expense.id)}>
                        Delete
                    </button>
                </div>
            </section>
        </>
    )
}
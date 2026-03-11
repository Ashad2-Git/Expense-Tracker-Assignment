import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses, setEditingExpense, deleteExpense }) {
    return(
        <>
            <section>
                <div>
                {expenses.map((expense) => (
                    <ExpenseItem 
                        key={expense.id}
                        expense={expense}
                        deleteExpense={deleteExpense}
                        setEditingExpense={setEditingExpense}
                    />
                ))}
                </div>
            </section>
        </>
    )
}
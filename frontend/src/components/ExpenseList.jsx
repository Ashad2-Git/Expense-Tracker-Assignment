import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses, setEditingExpense, deleteExpense }) {
    return(
        <>
            <section className="max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
                <div className="flex flex-col gap-3">
                    {expenses.length > 0 ? (
                        expenses.map((expense) => (
                            <ExpenseItem 
                                key={expense.id}
                                expense={expense}
                                deleteExpense={deleteExpense}
                                setEditingExpense={setEditingExpense}
                            />
                        ))
                    ) : (
                        <p className="text-center text-(--fg-muted) py-10 italic">
                            No expenses recorded yet.
                        </p>
                    )}
                </div>
            </section>
        </>
    )
}
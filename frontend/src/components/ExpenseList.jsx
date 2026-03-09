import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses, deleteExpense }) {
    return(
        <>
            <section>
                {expenses.map((expense) => {
                    <ExpenseItem 
                        key={expense.id}
                        expense={expense}
                        deleteExpense={deleteExpense}
                    />
                })}
            </section>
        </>
    )
}
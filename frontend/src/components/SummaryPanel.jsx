

export default function SummaryPanel({ expenses }) {

    const total = expenses.reduce(
        (sum, item) => sum + item.amount,
        0
         )

         const categories = {};

         expenses.forEach((item) => {
            categories[item.category] = (categories[item.category] || 0) + item.amount;
         });

    return(
        <>
            <div>
                <h2>Total: ${total}</h2>

                <h3>Category Breakdown</h3>

                {Object.entries(categories).map(([cat, value]) => (
                    <p key={cat}>
                        {cat}: ${value}
                    </p>
                ))}
            </div>
        </>
    )
}
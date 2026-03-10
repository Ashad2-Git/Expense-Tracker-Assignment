import { useEffect, useState } from "react"


export default function CurrencyConverter({ total }) {

    const [currency, setCurrency] = useState("USD");
    const [rate, setRate] = useState(null);

    useEffect(() => {
        fetch(`https://api.frankfurter.app/latest?from=INR`)
        .then(res => res.json)
        .then(data => {
            setRate(data.rates[currency])
        })
        .catch((error) => console.error("Error fetching data:", error))
    }, [currency])

    return (
        <>
            <div>
                <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                >
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                </select>

                    {rate && (
                        <p>
                            converted Total : {(total * rate).toFixed(2)} {currency}
                        </p>
                    )}

            </div>
        </>
    )
}
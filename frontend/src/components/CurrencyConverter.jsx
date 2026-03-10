import { useEffect, useState } from "react"


export default function CurrencyConverter({ total }) {

    const [currency, setCurrency] = useState("USD");
    const [rate, setRate] = useState(null);

    const apiKey = import.meta.env.VITE_API_key;

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`)
        .then(res => res.json())
        .then(data => {
            if(data.conversion_rates) {
                setRate(data.conversion_rates[currency])
            }
        })
        .catch((error) => console.error("Error fetching data:", error))
    }, [currency, apiKey])

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
                    <option>INR</option>
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
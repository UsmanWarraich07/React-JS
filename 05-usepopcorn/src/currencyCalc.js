import { useEffect, useState } from "react";

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
export default function App() {
  const [value, setValue] = useState(1);
  const [currencyValue, setCurrencyValue] = useState("USD");
  const [currencyValue1, setCurrencyValue1] = useState("EUR");
  const [output, setOutput] = useState("");

  useEffect(
    function () {
      async function currencyCalc() {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${value}&from=${currencyValue}&to=${currencyValue1}`
        );
        const data = await res.json();
        setOutput(data.rates[currencyValue1]);
      }
      currencyCalc();
    },
    [value, currencyValue, currencyValue1]
  );

  // console.log(output.rates);
  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <select onChange={(e) => setCurrencyValue(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select onChange={(e) => setCurrencyValue1(e.target.value)}>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {output} {currencyValue1}
      </p>
    </div>
  );
}

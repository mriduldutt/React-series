import React,{useId} from "react";

export default function InputBox({
  label,
  amount,
  onAmtChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  CurrencyDisable = false,
  className = "",
}) {

    //useID Hooks
    const amountInputid = useId();
  
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputid} className="text-black/40 mb-2 inline-block">{label}</label>
        <input id={amountInputid}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount" disabled={amountDisable} value={amount} onChange={(e)=>{
            onAmtChange && onAmtChange(Number(e.target.value))
          }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" value={selectCurrency} 
        onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}} disabled={CurrencyDisable}>
        
          {currencyOptions.map((option) => (
              <option key={option} value={option}>
                {option}</option>
          ))}
        
        </select>
      </div>
    </div>
  );
}






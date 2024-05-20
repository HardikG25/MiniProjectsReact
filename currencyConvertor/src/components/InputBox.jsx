import React, { useId } from 'react'

function InputBox({
    label, 
    amount, 
    onAmountChange, 
    onCurrencyChange, 
    currencyOption = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "", }) {

    const amountInputId = useId()
    
  return (
    <div className={`bg-[#DDE8B3] text-sm flex rounded-lg p-3 ${className}`}>
        <div className='w-1/2'>
            <label htmlFor={amountInputId} className='text-black text-xl mb-2 inline-block'>
                {label}
            </label>
            <input
                id={amountInputId}
                className='outline-none w-full bg-transparent py-2'
                type="number"
                placeholder='Amount'
                value={amount}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                disabled = {amountDisable}
                />
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className='text-black text-xl mb-2 w-full'>Currency Type</p>
            <select className='rounded-lg px-2 py-2 bg-white cursor-pointer outline-none'
                value={selectCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled={currencyDisable}   
            >
                {currencyOption.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default InputBox
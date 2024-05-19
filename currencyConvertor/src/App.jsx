import { useState } from 'react'
import currencyInfo from './hooks/currencyInfo'
import InputBox from './components/InputBox'


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currInfo = currencyInfo(from)

  const options = Object.keys(currInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currInfo[to])
  }

  return (
    <div className='w-full h-screen justify-center bg-cover flex flex-wrap items-center bg-no-repeat' style={{backgroundImage: `url('https://images.pexels.com/photos/7708811/pexels-photo-7708811.jpeg?auto=compress&cs=tinysrgb&w=800')`}}>
      <div className='w-full'> 
        <div className='w-full max-w-md mx-auto backdrop-blur-sm rounded-xl p-5 border border-gray-60 bg-white/30'>
          <form onSubmit={(e) => {e.preventDefault();
          convert()

          }}>
            <div className='w-full mb-1'>
              <InputBox 
                  label="From"
                  amount = {amount}
                  currencyOption = {options}
                  onCurrencyChange = {(currency) => 
                    setAmount(currency)}
                  selectCurrency = {from}
                  onAmountChange = {(amount) => setAmount(amount)}
              />
            </div>
            <div className='relative w-full h-1'>
              <button
                type='button'
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-3 border-white rounded-md bg-blue-600 text-white px-2 py-0.5' onClick={swap}
              >
                  SWAP
              </button>
            </div>
            <div className='w-full mt-1 mb-4'>
              <InputBox 
                  label="To" 
                  amount={convertedAmount}
                  currencyOption = {options}
                  onCurrencyChange={(currency) => 
                    setTo(currency)}
                  selectCurrency = {to}
                  amountDisable
              />
            </div>
            <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App

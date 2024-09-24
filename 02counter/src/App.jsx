import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if (counter < 20) {
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  const resetValue = () => {
    counter = 0
    setCounter(counter)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button
        onClick={addValue}
      >Add Value: {counter}
      </button>

      <br />

      <button
        onClick={removeValue}
      >Remove Value: {counter}
      </button>

      <br />

      <button
        onClick={resetValue}
      >Reset Value to 0
      </button>

    </>
  )
}

export default App

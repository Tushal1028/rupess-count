import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div className='outer'>
        <h1>This is Your Count {count}</h1>
        <div className="bt">
          <button onClick={() => { setCount(count + 1) }}>1</button>
          <button onClick={() => { setCount(count + 2) }}>2</button>
          <button onClick={() => { setCount(count + 5) }}>5</button>
          <button onClick={() => { setCount(count + 10) }}>10</button>
          <button onClick={() => { setCount(count + 20) }}>20</button>
          <button onClick={() => { setCount(count + 50) }}>50</button>
          <button onClick={() => { setCount(count + 100) }}>100</button>
          <button onClick={() => { setCount(count + 200) }}>200</button>
          <button onClick={() => { setCount(count + 500) }}>500</button>
          <button onClick={() => { setCount(count + 2000) }}>2000</button>
        </div>
        <div className="br">
          <button onClick={() => { setCount(count - 1) }}>1</button>
          <button onClick={() => { setCount(count - 2) }}>2</button>
          <button onClick={() => { setCount(count - 5) }}>5</button>
          <button onClick={() => { setCount(count - 10) }}>10</button>
          <button onClick={() => { setCount(count - 20) }}>20</button>
          <button onClick={() => { setCount(count - 50) }}>50</button>
          <button onClick={() => { setCount(count - 100) }}>100</button>
          <button onClick={() => { setCount(count - 200) }}>200</button>
          <button onClick={() => { setCount(count - 500) }}>500</button>
          <button onClick={() => { setCount(count - 2000) }}>2000</button>
        </div>
      </div>
    </>
  )
}

export default App
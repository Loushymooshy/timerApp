import { useState } from 'react'
import Timer from './components/Timer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Timer />
    </>
  )
}



export default App

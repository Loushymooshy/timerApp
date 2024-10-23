import { useState } from 'react'
import Timer from './components/EasyTimer'
import StartButton from './components/StartButton'
import TimerButton from './components/TimerButton'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Timer />
     <StartButton />
     <TimerButton />
    </>
  )
}



export default App

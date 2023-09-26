import { useState } from 'react'
import './App.css'
import FlashCards from './FlashCards';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FlashCards />
    </>
  )
}

export default App

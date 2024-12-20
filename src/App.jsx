import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AgeCalculator from './components/Agecalculator'

function App() {


  return (
    <div className="h-screen w-full bg-stone-200 grid place-content-center overflow-hidden">
      <AgeCalculator />
    </div>
  )
}

export default App

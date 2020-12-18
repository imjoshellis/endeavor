import React, { useState } from 'react'
import './App.css'
import Controls from './components/Controls'
import Grid from './components/Grid'
import { latestMags } from './data'

function App () {
  const [width, setWidth] = useState(800)
  const [amount, setAmount] = useState(13)

  return (
    <div className='App'>
      <Controls
        amount={amount}
        setAmount={setAmount}
        width={width}
        setWidth={setWidth}
      />
      <Grid magazines={latestMags} width={width} amount={amount} />
    </div>
  )
}

export default App

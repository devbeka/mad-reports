import React, { useState } from 'react'
import ReportItems from './components/ReportItems'
import './styles/index.scss'

const App = () => {
  return (
    <div className='App'>
      <div className='container'>
        <ReportItems />
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import data from './data'

function App() {
  const entries = data.map(data => {
    return(
      <Entry
        {...data}
      />
    )
  })
  return (
    <>
      <Header />
      <main className='container'>
        {entries}
      </main>
    </>
  )
}

export default App

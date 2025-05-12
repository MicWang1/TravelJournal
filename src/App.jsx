import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import data from './data'

function App() {
  const entries = data.map(data => {
    return(
      <Entry
        img={
          data.img
        }
        title={data.title}
        country={data.country}
        googleMapsLink={data.googleMapsLink}
        dates={data.dates}
        text={data.text}
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

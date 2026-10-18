import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import data from "/data.js"


function App() { 
  const dataItems = data.map((item) => {
      
        return <Entry
                    key = {item.id}
                    {...item}  
                />
                
    })
    
  return (
    <>
      <Header />
        {dataItems}
        
    </>
  )
}

export default App

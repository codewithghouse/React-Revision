import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button  from './components/button'
import { Jsx } from './components/Jsx'
import { Sum } from './components/Sum'

function App() {
  return <>
  {/* here we are rendering the multiple elements from app.jsx */}
  <div>
    <h1>hi  this is ghouse a backend deveeloper and lead full stack engineer at neominds techhub</h1>
    <Button></Button>
    <Jsx></Jsx>
    {/* sum componenet rendering */}
    <Sum></Sum>
  </div>
  </>
}
export default App

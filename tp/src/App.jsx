import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header';
import Section1 from './components/section1';
import Section2 from './components/section2';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header texto='Hola maquina'/>
      <Section1 />
      <Section2 />
    </>
  )
}

export default App

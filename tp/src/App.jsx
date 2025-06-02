import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Footer from './components/footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <Header texto='Header'/>
        <Section1  />
        <Section2  />
        <Section3  />
        <Footer />
    </>
  )
}

export default App

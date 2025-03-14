import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import title from "./assets/title.png"
import creator from "./assets/creator.png"
import Mulai from "./assets/mulai.png"
import Intro from './components/intro'
import Menu from './components/menu'
import Materi from './components/materi'
import MakeAMatch from './components/makeamatch'
import Evaluasi from './components/evaluasi'
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Intro/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/materi' element={<Materi/>} />
        <Route path='/games' element={<MakeAMatch/>} />
        <Route path='/evaluasi' element={<Evaluasi/>} />
      </Routes>
      </BrowserRouter>
    {/* <Menu/> */}
    {/* <Intro/> */}
    {/* <Materi/> */}
    {/* <MakeAMatch/> */}
    {/* <Evaluasi/> */}
    </main>
    </>
  )
}

export default App

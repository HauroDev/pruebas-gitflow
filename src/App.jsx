import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Landing from './pages/Landing'
import About from './pages/About'
import Favs from './pages/Favs'
import Cart from './pages/Cart'

function App() {
  return (
    <>
      <header>
        <h1>Testing Site</h1>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/about' element={<About />} />
          <Route path='/favs' element={<Favs />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </main>
    </>
  )
}

export default App

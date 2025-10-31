import './App.css'
import Home from './components/pages/Home/Home'
import Landing from './components/pages/Landing/Landing'
import Practice from './components/pages/Practice/Practice'
import { Routes, Route } from 'react-router-dom'
import SignUp from './components/pages/SignUp/SignUp'
import Player from './components/pages/Player/Player'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/player/:id' element={<Player/>}/>
    </Routes>
      
    </>
  )
}

export default App

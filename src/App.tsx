import './App.css'
import Home from './components/pages/Home/Home'
import Landing from './components/pages/Landing/Landing'
import Login from './components/pages/Login/Login'
import Practice from './components/pages/Practice/Practice'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
   
      
    </>
  )
}

export default App

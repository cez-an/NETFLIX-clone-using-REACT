import './App.css'
import Home from './components/pages/Home/Home'
import Landing from './components/pages/Landing/Landing'
import Practice from './components/pages/Practice/Practice'
import { Routes, Route, useNavigate } from 'react-router-dom'
import SignUp from './components/pages/SignUp/SignUp'
import Player from './components/pages/Player/Player'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'


function App() {

  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth,async (user)=>{
      if(user){
        console.log('Logged in');
        navigate('/');
      }else{
        console.log('Logged Out');
        navigate('/login');
      }
    })
  },[])

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

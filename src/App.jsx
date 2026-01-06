import './App.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './Components/Landing'
import SignupPage from './Components/SignupPage'
import LoginPage from './Components/LoginPage'
import WelcomePage from './Components/WelcomePage'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/signup' element={<SignupPage />} /> 
      <Route path='/login' element={<LoginPage />} />
      <Route path='/welcome' element={<WelcomePage />} /> 
    </Routes>
    </>
  )
}

export default App

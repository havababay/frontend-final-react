import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Header.jsx'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  )
}

export default App

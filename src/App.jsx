import React from 'react'
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home/Home';
import Success from './pages/Success/Success';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
  return (
    <>
      
     <Router>
      <Routes>

     <Route path='/' element={<Home/>} />
     <Route path='/success' element={<Success/>} />
     <Route path='*' element={<NotFound/>} />

      </Routes>
     </Router>

     <Toaster/>

    </>
  )
}

export default App

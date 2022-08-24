import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUserData from './components/AddUserData';
import GetData from './components/GetData';
import LoginSuccesPage from './components/LoginSuccesPage';
import Navbar from './components/Navbar';




function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<AddUserData/>}/>
        <Route path='/loggedin' element={<> <Navbar mode='light'/><LoginSuccesPage/> </>}/>
        <Route path='/userdata' element={<><Navbar mode='dark'/><GetData/> </>}/>
      </Routes>
        
       
    </div>
    
  );
}

export default App;

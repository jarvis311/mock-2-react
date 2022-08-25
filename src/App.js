import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUserData from './components/AddUserData';
import GetData from './components/GetData';
import Login from './components/Login/Login';
import LoginSuccesPage from './components/LoginSuccesPage';
import Navbar from './components/Navbar';
import {UserContextProvider} from './context/userContext'

function App() {
  return (
    <div className='App'>
      <UserContextProvider>
      <Routes>
        <Route path='/' element={<AddUserData/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/loggedin' element={<> <Navbar mode='light'/><LoginSuccesPage/> </>}/>
        <Route path='/userdata' element={<><Navbar mode='dark'/><GetData/></>}/>
      </Routes>
      </UserContextProvider>     
    </div>
    
  );
}

export default App;



import React ,{ useState , Component, useEffect } from 'react'; 
import {BrowserRouter , Routes ,  Route , Link , useNavigate} from 'react-router-dom'
import {Formik} from "formik";

import axios from "axios"

import './App.css';
import UserAdd from './components/UserAdd';
import UserDelete from './components/UserDelete';
import UserEdit from './components/UserEdit';
import UserInfo from './components/UserInfo';
import UserSearch from './components/UserSearch';
import UserStop from './components/UserStop';
import DashBoard from './routes/DashBoard';
import ForgetPass from './routes/ForgetPass';
import Login from './routes/Login';
import NewPassword from './routes/NewPassword';
import ResetPass from './routes/ResetPass';


export default function App() {
 
  
    
  return ( 
    <BrowserRouter>
        <Routes>
          <Route path='/verify-code-reset' element={<ResetPass/>}/>
          <Route path='/new-password' element={<NewPassword/>} />
          <Route path='/forget-password' element={<ForgetPass/>}/>
          <Route path='/' element={<Login/>} />
          <Route path='/addUser' element={<UserAdd to='/'/>}/>
          <Route path='/dashboard' element={<DashBoard/>}/>
          <Route path='/edit' element={<UserEdit to='/dashboard'/>}/>
          <Route path='/addUser' element={<UserAdd to='/'/>}/>
          <Route path='/stopUser' element={<UserStop to ='/dashboard' toEdit='/edit'/>}/>
          <Route path='/delete' element={<UserDelete to='/dashboard'/>}/>
          <Route path='/userInfo' element={<UserInfo to='/dashboard'/>}/>
          <Route path='/userSearch' element={<UserSearch to='/dashboard'/>}/>
         
        </Routes>
    </BrowserRouter>    
    
  );
}

import *as React from 'react';
import {BrowserRouter , Routes ,  Route} from 'react-router-dom'
import './App.css';
import UserAdd from './components/UserAdd';
import UserDelete from './components/UserDelete';
import UserEdit from './components/UserEdit';
import UserInfo from './components/UserInfo';
import UserStop from './components/UserStop';
import DashBoard from './routes/DashBoard';

const App = ()=> {
  return (
    
    
    <BrowserRouter>
        <div class="navbar bg-primary text-primary-content bg-gray-300 text-center h-24 ">
        <a class="btn btn-ghost normal-case text-xl ">Gestion utilisateurs</a>
        </div>

        <Routes>
          <Route path='/' element={<DashBoard/>}/>
          <Route path='/edit' element={<UserEdit to='/'/>}/>
          <Route path='/addUser' element={<UserAdd to='/'/>}/>
          <Route path='/stopUser' element={<UserStop to ='/' toEdit='/edit'/>}/>
          <Route path='/delete' element={<UserDelete to='/'/>}/>
          <Route path='/userInfo' element={<UserInfo to='/'/>}/>
        </Routes>
    </BrowserRouter>    
    
  );
}

export default App;

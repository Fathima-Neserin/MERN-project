import logo from './logo.svg';
import './App.css';
import Login from './ui-components/Login';
import Signup from './ui-components/Signup';
import { Route, Routes } from 'react-router-dom';
import AddEmployee from './elements/AddEmployee';
import Main from './ui-components/Main';
import Employees from './elements/Employees';
import Profile from './elements/Profile';


function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/sign' element={<Signup/>}/>
      <Route path='/addemployee' element={<Main child={<AddEmployee/>}/>} />
      <Route path='/employees' element={<Main child={<Employees/>}/>} />
      <Route path='/profile' element={<Main child={<Profile/>}/>} />

      </Routes>
    </div>
  );
}

export default App;

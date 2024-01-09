import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import { Route,Routes } from 'react-router-dom';
import Registration from './pages/Registration';
import ApplicationNav from './components/ApplicationNav';
import LoginForm from './components/LoginForm';
import Home from './pages/Home';
import MyGrid from './components/MyGrid';
import {  useState} from 'react';
import LanguageCreateContext from './LanguageCreateContext';




function App() {
  
  const [lan,setlan]= useState('en')
 

  // alert(data);
  return (
    <LanguageCreateContext.Provider value={{lan,setlan}}>
      <>
        <ApplicationNav/>
        <Routes>
          <Route path='/' element={<Registration></Registration>}/>
          <Route path='/login' element={<LoginForm></LoginForm>}/>
          <Route path='/home' element={<Home></Home>}/>
          <Route path='/employee' element={<MyGrid></MyGrid>}/>


        </Routes>

      </>
      </LanguageCreateContext.Provider>
  );
}

export default App;

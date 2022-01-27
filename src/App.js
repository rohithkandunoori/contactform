import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contactform from './components/contactform';
import { useEffect } from 'react';
import database from './firebase';
import Display from './components/display';


function App() {
  useEffect(() => {
    
  })
  return (
    <div>
      <Header />
      <Contactform />
      <Display/>
    </div>
  )
}


export default App;

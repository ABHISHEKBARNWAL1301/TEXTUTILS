import './App.css';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import React, {useState} from 'react';


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
     if(mode === 'light'){
         setMode('dark');
         document.body.style.backgroundColor = '#262523';
       }
     else{
         setMode('light');
         document.body.style.backgroundColor = 'white';
       }  
  }
  return (
        <>
        <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
        <div className="container my-3" >  
          <Textarea mode = {mode} />
        </div> 
         </> 
  );
}

export default App;

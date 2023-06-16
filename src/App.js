import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  } 
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= '#072859';
      showAlert("Dark Mode enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor= 'White';
      showAlert("Light Mode enabled","success");
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
      {/* <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" onShowAlert={showAlert}/>} />
      </Routes> */}
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
    </div>
    {/* </Router> */}
   </>
  );
}

export default App;

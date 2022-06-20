import React,{ useState } from 'react';
import './App.css';
// import About from './Components/About';
// import Contact from './Components/Contact';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  // const [mode,setmode] = useState(false)
  const [mode,setmode] = useState({
    color : "white",
    backgroundColor:"black"
    })
  const [alert,setAlert] = useState("")

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })
  }

    const changeMode = () =>{
        if (document.body.style.backgroundColor === 'white'|mode.color==="white" ){
            setmode(document.body.style.backgroundColor = 'grey')  
            showAlert("Dark Mode has Been Enabled","success")
        }
        else{
          setmode(document.body.style.backgroundColor = 'white')
          showAlert("Light Mode has Been Enabled","success")
        }
        }



  return (
    <>
      {/* <BrowserRouter>
      <Navbar heading="Convert Text to UpperCase" Mode={changeMode}/>  
      <Alert alert={alert}/>
        <Routes>

          <Route exact path="/" element={<TextForm showAlert={showAlert}/>}/>
            
          <Route exact path="/about" element={<About/>}/>

          <Route exact path="/contact" element={<Contact/>}/>
              
        </Routes>
      </BrowserRouter> */}

      <Navbar heading="Convert Text to UpperCase" Mode={changeMode}/>  
      <Alert alert={alert}/>
      <TextForm showAlert={showAlert}/>
    
    
    </> 
  );
}

export default App;

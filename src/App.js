import './App.css';
import { useState } from "react"
import {Link, Routes, Route} from "react-router-dom"
// import Home from './Components/Home/Home';
import Signin from './Components/Signin/Signin';
import Login from './Components/Login/Login';

function App() {
  const initialvalues = {
    username: "",
    password: "",
    confirmpassword: "",
    phonenumber: "",
    mailid: "",
  }
  const [UserDetails, setUserDetails] = useState(initialvalues)
  const [allErrors, setallErrors] = useState({})

  return (
    <>
    <header className="page-header">
      <h1 className="link-logo">ERNAK</h1> {/* The logo can be added here*/}
      <nav className="link-container">
        {/* <Link to="/" className="link-button">Home</Link> */}
        <Link to="/" className="link-button"></Link>
        
      </nav>
    </header>
    <Routes>
      {/* <Route exact path="/" element={<Home/>}/> */}
      <Route exact path="/" element={<Signin details = {UserDetails} setdetails = {setUserDetails} errors = {allErrors} seterrors = {setallErrors}/>}/>
      <Route path="login" element={<Login details = {UserDetails}/>}/>
    </Routes>

    </>
  );
}

export default App;

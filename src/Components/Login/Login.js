import "./Login.css"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

function Login () {
    const [loginDetails, setloginDetails] = useState({
        loginuser: "",
        loginpassword: ""
    })
    const [Loginerrors, setLoginerrors] = useState({})
    // const [loginCompare, setlogincompare] = useState({})
    console.log(Loginerrors)
    const loginCompare = ({})

    let Homenavigate = useNavigate(); 

    const [loginstate, setloginstate] = useState(false)

    const loginChange = (e) => {
        // console.log(e.target)
        const {name, value} = e.target
        setloginDetails({...loginDetails, [name]: value})
        console.log(loginDetails,"login-details")
    }

    // console.log((localStorage.getItem("User")))

    const loginValdetails = JSON.parse((localStorage.getItem("User")));
    // console.log(typeof(loginValdetails))
    // console.log(loginValdetails)
    // console.log(Object.keys(loginValdetails))
    // console.log(loginValdetails[0])

    loginValdetails.filter((e) => {
        loginCompare.username = e.username
        loginCompare.password = e.password
    })
    console.log(loginCompare)
    console.log(loginCompare.username)

    const loginSubmit = (e) => {
        e.preventDefault();
        setloginstate(true)
        setLoginerrors(loginValidate(loginDetails))
        Homenavigate("/Home")
    }

    useEffect(() => {
        if(Object.keys(Loginerrors).length === 0 && loginstate){
            console.log(loginDetails)
        }
    },[Loginerrors])

    const loginValidate = (e) => {
        const errors = {}
        if (e.username !== loginCompare.username){
            errors.username = "No user is found in this name"
        }
        else if(!e.username){
            errors.username = "Please enter the username"
        }
        if (e.password !== loginCompare.password){
            errors.password = "The password is not correct, please try again"
        }
        else if(!e.password){
            errors.password = "Please enter your password"
        }
        return errors
    }
    return (
        <>
        <div className="login-form-container">
            <h2 className="form-header">LOG-IN</h2>
                <form className="login-form" onSubmit={loginSubmit}>
                    <input 
                        type="text"
                        placeholder="Username"
                        name="loginuser"
                        value={loginDetails.loginuser}
                        onChange={loginChange}
                        />
                         <p className="error-msg">{Loginerrors.username}</p>
                        
                    <input 
                        type="password"
                        placeholder="password"
                        name="loginpassword"
                        value={loginDetails.loginpassword}
                        onChange={loginChange}
                        />
                        <p className="error-msg">{Loginerrors.password}</p>
                    
                    <button className="signin-submit-button">submit</button>
                
                </form>
        </div>
        </>
    )
}

export default Login
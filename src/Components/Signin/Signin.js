import "./Signin.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"
// import Login from "../Login/Login";

function Signin () {
    const initialvalues = {
        username: "",
        password: "",
        confirmpassword: "",
        phonenumber: "",
        mailid: "",
      }
      const [UserDetails, setUserDetails] = useState(initialvalues)
      const [allErrors, setallErrors] = useState({})

    const [submit, setsubmit] = useState(false)

    let navigate = useNavigate(); 

    const handleChange = (e) => {
        // console.log(e.target.value)
        const {name, value} = e.target
        setUserDetails({...UserDetails, [name]: value})
        // console.log(setdetails)
        console.log(UserDetails,"UserDetails")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setallErrors(validate(UserDetails))
        // console.log(UserDetails)
        setsubmit(true)
        // let regname = document.querySelector(".signin-username").value
        let clientsArr = JSON.parse(localStorage.getItem('User')) || [];
        clientsArr.push(UserDetails);
        localStorage.setItem('User', JSON.stringify(clientsArr));
        // navigate("/login")
    }

    useEffect(() => {
        // console.log(errors)
        if(Object.keys(allErrors).length === 0 && submit){
            console.log(UserDetails)
        }
    },[allErrors])

    const validate = (val) => {
        const err = {}
        if (!val.username){
            err.username = "username is required"
        }

        if (!val.password){
            err.password = "password is required"
        }else if (val.password.length < 4){
            err.password = "password should be more than 4 letters"
        }else if (val.password.length > 12){
            err.password = "password should be less than 12 letters"
        }

        if (val.confirmpassword !== val.password){
            err.confirmpassword = "The password and confirm password should be same"
        }else if (!val.confirmpassword){
            err.confirmpassword = "confirm password is required"
        }

        if (!val.phonenumber){
            err.phonenumber = "phone number is required"
        }

        if (!val.mailid){
            err.mailid = "email is required"
        }

        return err
    }

    return (
        <>
            <div className="signin-form-container">
                <h2 className="form-header">SIGN-IN</h2>
                    <form className="signin-form" onSubmit={handleSubmit}>
                        <input 
                        type="text"
                        className="signin-username"
                        placeholder="Username"
                        value={UserDetails.username}
                        name="username"
                        onChange={handleChange}/>
                        <p className="error-msg">{allErrors.username}</p>

                        <input 
                        type="password"
                        className="signin-password"
                        placeholder="password"
                        value={UserDetails.password}
                        name="password"
                        onChange={handleChange}/>
                        <p className="error-msg">{allErrors.password}</p>

                        <input 
                        type="password"
                        className="signin-confirmpassword"
                        placeholder="confirm password"
                        value={UserDetails.confirmpassword}
                        name="confirmpassword"
                        onChange={handleChange}/>
                        <p className="error-msg">{allErrors.confirmpassword}</p>

                        <input 
                        type="number"
                        className="signin-phonenumber"
                        placeholder="phone number"
                        value={UserDetails.phonenumber}
                        name="phonenumber"
                        onChange={handleChange}/>
                        <p className="error-msg">{allErrors.phonenumber}</p>

                        <input 
                        type="email"
                        className="signin-mailid"
                        placeholder="email"
                        value={UserDetails.mailid}
                        name="mailid"
                        onChange={handleChange}/>
                        <p className="error-msg">{allErrors.mailid}</p>
                        <button className="signin-submit-button">submit</button>
                    </form>
            </div>

            <footer className="home-footer">
                <p className="footer-text">Already a user</p>
                    <Link to="/login" className="link-button-bottom">Login</Link>
            </footer>
        </>
    )
}

export default Signin
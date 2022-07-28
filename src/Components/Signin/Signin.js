import "./Signin.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"
// import Login from "../Login/Login";

function Signin ({details, setdetails, errors, seterrors}) {

    const [submit, setsubmit] = useState(false)

    let navigate = useNavigate(); 

    const handleChange = (e) => {
        // console.log(event.target.value)
        const {name, value} = e.target
        setdetails({...details, [name]: value})
        // console.log(setdetails)
        // console.log(details,"details")
        console.log(details,"details")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        seterrors(validate(details))
        // console.log(details)
        setsubmit(true)
        // let regname = document.querySelector(".signin-username").value
        let clientsArr = [];
      if(!localStorage.getItem('User')) {
         clientsArr.push(details);
         localStorage.setItem('User', JSON.stringify(clientsArr));
      } else {
         clientsArr = JSON.parse(localStorage.getItem('User'));
         clientsArr.push(details);
         localStorage.setItem('User', JSON.stringify(clientsArr));
      }
    }

    useEffect(() => {
        // console.log(errors)
        if(Object.keys(errors).length === 0 && submit){
            console.log(details)
        }
    },[errors])

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
                        value={details.username}
                        name="username"
                        onChange={handleChange}/>
                        <p className="error-msg">{errors.username}</p>

                        <input 
                        type="password"
                        className="signin-password"
                        placeholder="password"
                        value={details.password}
                        name="password"
                        onChange={handleChange}/>
                        <p className="error-msg">{errors.password}</p>

                        <input 
                        type="password"
                        className="signin-confirmpassword"
                        placeholder="confirm password"
                        value={details.confirmpassword}
                        name="confirmpassword"
                        onChange={handleChange}/>
                        <p className="error-msg">{errors.confirmpassword}</p>

                        <input 
                        type="number"
                        className="signin-phonenumber"
                        placeholder="phone number"
                        value={details.phonenumber}
                        name="phonenumber"
                        onChange={handleChange}/>
                        <p className="error-msg">{errors.phonenumber}</p>

                        <input 
                        type="email"
                        className="signin-mailid"
                        placeholder="email"
                        value={details.mailid}
                        name="mailid"
                        onChange={handleChange}/>
                        <p className="error-msg">{errors.mailid}</p>
                        <button className="signin-submit-button" onSubmit={() => navigate("Login")}>submit</button>
                    </form>
            </div>

            <footer className="home-footer">
                <p className="footer-text">Already a user</p>
                    <Link to="login" className="link-button-bottom">Login</Link>
            </footer>
        </>
    )
}

export default Signin
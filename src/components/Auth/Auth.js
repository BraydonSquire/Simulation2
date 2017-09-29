import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Auth.css'
class Auth extends Component{
    render(){
        return(
        <div className="daddyDiv">
            <div className="display-box">
                <div className="houser-logo">
                    <img src="https://raw.githubusercontent.com/DevMountain/simulation-2/master/assets/auth_logo.png" />
                </div>
                </div>
                <div className="input-container">
                    <p> Username</p>
                    <input type="text" className="username"/>
                    <p> Password </p>
                    <input type="text" className="password"/>
                
            </div>
                <div className="button-container">
               <Link to="/dashboard"> <button className="login-button">Login</button> </Link>
                <button className="register-button">Register</button>
                </div>
        </div>
        )
    }
}

export default Auth;
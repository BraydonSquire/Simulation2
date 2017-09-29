import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Auth.css'
class Auth extends Component{
    render(){
        return(
        <div className="daddyDiv">
            <div className="display-box">
                <div className="houser-logo">

                </div>
                <div className="input-container">
                    <input type="text" className="username"/>
                    <input type="text" className="password"/>
                </div>
            </div>
        </div>
        )
    }
}

export default Auth;
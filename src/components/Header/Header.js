import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
class Header extends Component{
    render(){
        return(
        <div className="header">
            <div className="header-spacing">
            <img src="https://raw.githubusercontent.com/DevMountain/simulation-2/master/assets/header_logo.png" />
            <strong>  Houser </strong> Dashboard
            <span className="space"> <strong> Logout </strong> </span>
            </div>
        </div>
        )
    }
}

export default Header;
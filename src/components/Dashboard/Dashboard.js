import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Dashboard.css';
class Dashboard extends Component{
    render(){
        return(
        <div className="dashboard-parent">
            <button className="add-property">Add new property</button>
            <div className="property-list">
                <div className="home-listings">
                   <strong> Home Listings </strong>
                </div>
            </div>
        </div>
        )
    }
}
export default Dashboard;


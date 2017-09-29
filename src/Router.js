import React from 'react';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard'
import Step1 from './components/Step1/Step1'
import {HashRouter as Router, Route} from 'react-router-dom';

export default(
    
    <Router>
        <div>

            <Route exact path='/' component={Auth} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/step1' component={Step1} />

        </div>
    </Router>
)

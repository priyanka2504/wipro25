import React, { Component } from 'react';
import './App.css';
import Technologies from './technologies.JPG';

class Home extends Component {
    render() {
        return (
            <div>
                <h1 className="text-success"><b> Welcome to the e-Learning Portal </b></h1>
                <p className="text-secondary"> Starters Kit </p>
                <h4 className="text-dark"> Are you new to coding? This is a good place for you to start with to be at your best.
                Find useful links for each technology you are going to work on! </h4>
                <h5 className="text-success"> These are the various topics that are discussed: </h5>
                <div className="links">
                    <img src={Technologies} className="rounded float-left" alt="technologies" width="70%" />
                </div>
            </div>
        )
    }
}

export default Home;

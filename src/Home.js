import React, { Component } from 'react';
import './App.css';
import Technologies from './technologies.png';

class Home extends Component {
    render() {
        return (
            <div class="content">
                {/* <h1 className="text-dark"><b> E-Learning Portal </b></h1> */}
                {/* <p className="text-secondary"> Starters Kit </p> */}
                <h4 className="text-dark"> Are you new to coding? This is a good place for you to start with to be at your best.
                Find useful links for each technology you are going to work on! </h4>
                <h5 className="text-dark"> These are the various topics that are discussed: </h5>
              
                    <img src={Technologies} className="rounded float-left" alt="technologies" width="70%" />
                
                
            </div>
        )
    }
}

export default Home;

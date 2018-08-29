import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Gulp from './Gulp';
import Webpack from './Webpack';
import Babel from './Babel';

class BuildTools extends Component {
    render() {
        return (
            <div class="content">
                <h1 className="text-dark"><b> Build Tools </b></h1>
                <h5 className="text-dark"> These are the list of build tools discussed: </h5>
                <Router>
                    <div>
                        <ul type="none">
                            <li> <Link to="/gulp">Gulp</Link> </li>
                            <li> <Link to="/webpack">Webpack</Link> </li>
                            <li> <Link to="/babel">Babel</Link> </li>
                        </ul>
                        <hr />
                        <Route path="/gulp" component={Gulp} />
                        <Route path="/webpack" component={Webpack} />
                        <Route path="/babel" component={Babel} />
                    </div>
                </Router>
            </div>
        )
    }
}

export default BuildTools;
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Express from './Express';
import Node from './Node';
import ReactJS from './ReactJS';
import Redux from './Redux';
import Bootstrap from './Bootstrap';
import ReactBootstrap from './ReactBootstrap';
import Reactstrap from './Reactstrap';

class Frameworks extends Component {
    render() {
        return (
            <div class="content">
                <h1 className="text-dark"><b> JavaScript Frameworks </b></h1>
                <h5 className="text-dark"> These are the list of JavaScript frameworks discussed: </h5>
                <Router>
                    <div>
                        <ul type="none">
                            <li> <Link to="/node">NodeJS</Link> </li>
                            <li> <Link to="/express">Express</Link> </li>
                            <li> <Link to="/react">ReactJS</Link> </li>
                            <li> <Link to="/redux">Redux</Link> </li>
                            <li> <Link to="/bootsrap">Bootstrap</Link> </li>
                            <li> <Link to="/react-bootstrap">React Bootstrap</Link> </li>
                            <li> <Link to="/reactstrap">Reactstrap</Link> </li>
                        </ul>
                        <hr />
                        <Route path="/node" component={Node} />
                        <Route path="/express" component={Express} />
                        <Route path="/react" component={ReactJS} />
                        <Route path="/redux" component={Redux} />
                        <Route path="/bootsrap" component={Bootstrap} />
                        <Route path="/react-bootstrap" component={ReactBootstrap} />
                        <Route path="/reactstrap" component={Reactstrap} />
                    </div>
                </Router>
            </div>
        )
    }
}

export default Frameworks;
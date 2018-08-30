import React, { Component } from 'react';
import JsVideo from './jsVideoLinks.js'; 
import ReactVideo from './reactVideoLinks.js';   
import NodeVideo from './nodeVideoLinks.js';   
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class Videos extends Component{
    render() {
        return (
            <div class="content">
                <h1 className="text-dark"><b>Videos </b></h1>
                <h5 className="text-dark"> These are the list of tutorial videos for the following topics </h5>
                <Router>
                    <div>
                        <ul type="none">
                            <li> <Link to="/javascriptvideos">Javascript</Link> </li>
                            <li> <Link to="/reactjsvideos">React JS</Link> </li>
                            <li> <Link to="/nodejsvideos">Node JS</Link> </li>
                        </ul>
                        <hr />
                        <Route path="/javascriptvideos" component={JsVideo} />
                        <Route path="/reactjsvideos" component={ReactVideo} />
                        <Route path="/nodejsvideos" component={NodeVideo} />
                    </div>
                </Router>
            </div>
        )
    }
}
export default Videos;
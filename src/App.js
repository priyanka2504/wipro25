import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from './Home';
import HTML from './HTML';
import CSS from './CSS';
import JavaScript from './JavaScript';
import Frameworks from './Frameworks';
import BuildTools from './BuildTools';
import Exercises from './Exercises';
import PackageManager from './PackageManager';
import Database from './Database';
import DebuggingTools from './DebuggingTools';

const routes = [
  {
    path: "/",
    active: true,
    exact: true,
    main: () => <Home />
  },
  {
    path: "/html",
    main: () => <HTML />
  },
  {
    path: "/css",
    exact: true,
    main: () => <CSS />
  },
  {
    path: "/javascript",
    exact: true,
    main: () => <JavaScript />
  },
  {
    path: "/database",
    exact: true,
    main: () => <Database />
  },
  {
    path: "/frameworks",
    exact: true,
    main: () => <Frameworks />
  },
  {
    path: "/build-tools",
    exact: true,
    main: () => <BuildTools />
  },
  {
    path: "/package-manager",
    exact: true,
    main: () => <PackageManager />
  },

  {
    path: "/debugging-tools",
    exact: true,
    main: () => <DebuggingTools />
  },
  {
    path: "/exercises",
    exact: true,
    main: () => <Exercises />
  },
];

class App extends Component {
  constructor () {
    super(); 
    year:'';
  }

  closeNav() {
    document.getElementById("myTopnav").style.width = "0";
  }

  openNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }
  componentWillMount() {
    let date = new Date();
    this.setState ({
      year: date.getFullYear()
    })
  }


  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div clasName="screen">
              <div class="sidebar">
                <NavLink activeClassName='active' exact to="/">Home</NavLink>
                <NavLink activeClassName='active' to="/html">HTML</NavLink>
                <NavLink activeClassName='active' to="/css">CSS</NavLink>
                <NavLink activeClassName='active' to="/javascript">JavaScript</NavLink>
                <NavLink activeClassName='active' to="/database">MongoDB</NavLink>
                <NavLink activeClassName='active' to="/frameworks">Frameworks</NavLink>
                <NavLink activeClassName='active' to="/build-tools">Build Tools</NavLink>
                <NavLink activeClassName='active' to="/package-manager">Package Manager</NavLink>
                <NavLink activeClassName='active' to="/debugging-tools">Debugging Tools</NavLink>
                <NavLink activeClassName='active' to="/exercises">Exercises</NavLink>
              </div>
            </div>

<div className="topnav" id="myTopnav">
<span className="span" id="span" onClick={this.openNav.bind(this)}>&#9776; </span> 
<br/><br/>

<NavLink activeClassName='active' exact to="/">Home</NavLink>
                <NavLink activeClassName='active' to="/html">HTML</NavLink>
                <NavLink activeClassName='active' to="/css">CSS</NavLink>
                <NavLink activeClassName='active' to="/javascript">JavaScript</NavLink>
                <NavLink activeClassName='active' to="/database">MongoDB</NavLink>
                <NavLink activeClassName='active' to="/frameworks">Frameworks</NavLink>
                <NavLink activeClassName='active' to="/build-tools">Build Tools</NavLink>
                <NavLink activeClassName='active' to="/package-manager">Package Manager</NavLink>
                <NavLink activeClassName='active' to="/debugging-tools">Debugging Tools</NavLink>
                <NavLink activeClassName='active' to="/exercises">Exercises</NavLink>
              
</div>




            {/* </div> */}
            <div style={{ display: "flex" }}>
              <div
                style={{
                  padding: "0px",
                  width: "25%",
                  align: "center",
                }}>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.sidebar}
                  />
                ))}
              </div>
              <div style={{ flex: 1, padding: "10px" }}>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                  />
                ))}
              </div>
            </div>
          </div>
        </Router>
        <footer class="footer">
                <div class="containers">
                <span class="text-white"> Powered by Wipro Limited</span> <br/>
                <span class="text-white"> Developed by 
             <u> <a className="text-white" href="https://priyanka-portfolio.netlify.com" target="_blank" rel="noopener noreferrer"> Priyanka Suresh </a> </u>
                &copy; {this.state.year}
                
                 </span> 
              
                </div>
                </footer>
      </div>
    );
  }
}

export default App;
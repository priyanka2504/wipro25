import React, { Component } from 'react';
import './App.css';

class Redux extends Component {
    render() {
        return (
            <div className="redux">
                <h1 className="text-success"><b>Redux</b></h1>
                <p className="text-secondary">JavaScript library  </p>
                <h5 className="text-dark"> Redux is predictable state container for JavaScript apps for managing application state. </h5>
                <div className="links">
                    <h5 className="text-success"> Below links may help you learn Redux better </h5>
                    <div className="row">
                        <div className='col-md-10 order-md-5 mb-5'>
                            <table className="table table-bordered table-stripped" >
                                <thead align="center">
                                    <tr className="text-danger">
                                        <th> # </th>
                                        <th scope="col"> Links </th>
                                        <th scope="col"> Description </th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                        <th> 1 </th>
                                        <td> <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer"> Redux </a> </td>
                                        <td> A complete documentation with examples </td>
                                    </tr>
                                    <tr>
                                        <th> 2 </th>
                                        <td> <a href="http://devguides.io/redux/" target="_blank" rel="noopener noreferrer"> Dev Guides </a> </td>
                                        <td> Detailed explanation on Redux </td>
                                    </tr>
                                    <tr>
                                        <th> 3 </th>
                                        <td> <a href="https://medium.freecodecamp.org/understanding-redux-the-worlds-easiest-guide-to-beginning-redux-c695f45546f6" target="_blank" rel="noopener noreferrer"> Medium </a> </td>
                                        <td> Guide for beginners </td>
                                    </tr>
                                    <tr>
                                        <th> 4 </th>
                                        <td> <a href="https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/" target="_blank" rel="noopener noreferrer"> React-Redux-connect </a> </td>
                                        <td> A better understanding of connect() </td>
                                    </tr>
                                    <tr>

                                        <th> 5 </th>
                                        <td> <a href="https://dev.to/domitriusanthony/explain-reduxs-connect-and-mapstatetoprops-like-im-5--4f0a" target="_blank" rel="noopener noreferrer"> React-Redux-mapStateToProps </a> </td>
                                        <td> A better understanding of mapStateTorops </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Redux;
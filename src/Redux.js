import React, { Component } from 'react';
import './App.css';
import preview from './preview.png';

class Redux extends Component {
    render() {
        return (
            <div className="redux">
                <h1 className="text-dark"><b>Redux</b></h1>
                <p className="text-secondary">JavaScript library  </p>
                <h5 className="text-dark"> Redux is predictable state container for JavaScript apps for managing application state. </h5>
                <div className="links">
                    <h5 className="text-dark"> Below links may help you learn Redux better </h5>
                    <div className="row">
                        <div className='col-md-10 order-md-5 mb-5'>
                            <div className="links">
                                <table className="table table-borderles table-stripped" >
                                    <thead align="center">
                                        <tr className="text-white bg-dark">
                                            <th> # </th>
                                            <th scope="col"> Title </th>
                                            <th scope="col"> Description </th>
                                            <th> </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> 1 </td>
                                            <td> Redux </td>
                                            <td> A complete documentation with examples </td>
                                            <td align="center" > <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 2 </td>
                                            <td> Dev Guides </td>
                                            <td> Detailed explanation on Redux </td>
                                            <td align="center" > <a href="http://devguides.io/redux/" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 3 </td>
                                            <td> Medium </td>
                                            <td> Guide for beginners </td>
                                            <td align="center" > <a href="https://medium.freecodecamp.org/understanding-redux-the-worlds-easiest-guide-to-beginning-redux-c695f45546f6" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 4 </td>
                                            <td> React-Redux-connect </td>
                                            <td> A better understanding of connect() </td>
                                            <td align="center" > <a href="https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>

                                            <td> 5 </td>
                                            <td> React-Redux-mapStateToProps </td>
                                            <td> A better understanding of mapStateTorops </td>
                                            <td align="center" > <a href="https://dev.to/domitriusanthony/explain-reduxs-connect-and-mapstatetoprops-like-im-5--4f0a" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Redux;
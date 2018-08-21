import React, { Component } from 'react';
import './App.css';
import preview from './preview.png';

class Express extends Component {
    render() {
        return (
            <div className="express">
                <h1 className="text-dark"><b>Express</b></h1>
                <p className="text-secondary">Software </p>
                <h5 className="text-dark"> Express is a web application framework for Node.js,
designed for building single-page, multi-page, and hybrid web applications. </h5>
                <div className="links">
                    <h5 className="text-dark"> Below links may help you learn Express better </h5>
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
                                        <td> MDN | Mozilla  </td>
                                        <td> Express/Node explained </td>
                                        <td align="center" > <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                    </tr>
                                    <tr>
                                        <td> 2 </td>
                                        <td> Express Routing </td>
                                        <td> Express documentation </td>
                                        <td align="center" > <a href="https://expressjs.com/en/guide/routing.html" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                    </tr>
                                    <tr>
                                        <td> 3 </td>
                                        <td> Medium  </td>
                                        <td> THE BEGINNER GUIDE: Understanding Node.js & Express.js fundamentals </td>
                                        <td align="center" > <a href="https://medium.com/@LindaVivah/the-beginners-guide-understanding-node-js-express-js-fundamentals-e15493462be1" target="_blank" rel="noopener noreferrer">
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

export default Express;
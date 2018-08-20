import React, { Component } from 'react';
import './App.css';

class Express extends Component {
    render() {
        return (
            <div className="express">
                <h1 className="text-success"><b>Express</b></h1>
                <p className="text-secondary">Software </p>
                <h5 className="text-dark"> Express is a web application framework for Node.js,
designed for building single-page, multi-page, and hybrid web applications. </h5>
                <div className="links">
                    <h5 className="text-success"> Below links may help you learn Express better </h5>
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
                                    <tr className="text-primary">
                                        <th> 1 </th>
                                        <td> <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction" target="_blank" rel="noopener noreferrer"> MDN | Mozilla </a> </td>
                                        <td> Express/Node explained </td>
                                    </tr>
                                    <tr className="text-primary">
                                        <th> 2 </th>
                                        <td> <a href="https://expressjs.com/en/guide/routing.html" target="_blank" rel="noopener noreferrer"> Express Routing </a> </td>
                                        <td> Express documentation </td>
                                    </tr>
                                    <tr className="text-primary">
                                        <th> 3 </th>
                                        <td> <a href="https://medium.com/@LindaVivah/the-beginners-guide-understanding-node-js-express-js-fundamentals-e15493462be1" target="_blank" rel="noopener noreferrer">  Medium </a> </td>
                                        <td> THE BEGINNER GUIDE: Understanding Node.js & Express.js fundamentals </td>
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

export default Express;
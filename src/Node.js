import React, { Component } from 'react';
import './App.css';
import preview from './preview.png';

class Node extends Component {
    render() {
        return (
            <div className="node">
                <h1 className="text-dark"><b>NodeJS</b></h1>
                <p className="text-secondary">JavaScript run-time environment </p>
                <h5 className="text-dark"> NodeJS is used for handling requests and responds from client to server.
                It helps to store, retrieve and modify data in database & also to
                create, open, read, write, delete, and close files on the server. </h5>
                <div className="links">
                    <h5 className="text-dark"> Below links may help you learn NodeJS better </h5>
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
                                            <td> Node.js </td>
                                            <td> Complete documentation about nodeJS </td>
                                            <td align="center" > <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 2 </td>
                                            <td> NodeJS - MDN | Mozilla </td>
                                            <td> Provides a file server built with pure Node.js without the use of a framework </td>
                                            <td align="center" > <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework" target="_blank" rel="noopener noreferrer">
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

export default Node;

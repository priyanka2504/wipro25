import React, { Component } from 'react';
import './App.css';

class Node extends Component {
    render() {
        return (
            <div className="node">
                <h1 className="text-success"><b>NodeJS</b></h1>
                <p className="text-secondary">JavaScript run-time environment </p>
                <h5 className="text-dark"> NodeJS is used for handling requests and responds from client to server.
                It helps to store, retrieve and modify data in database & also to
                create, open, read, write, delete, and close files on the server. </h5>
                <div className="links">
                    <h5 className="text-success"> Below links may help you learn NodeJS better </h5>
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
                                        <td> <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer"> Node.js </a> </td>
                                        <td> Complete documentation about nodeJS </td>
                                    </tr>
                                    <tr className="text-primary">
                                        <th> 2 </th>
                                        <td> <a href=" https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework" target="_blank" rel="noopener noreferrer"> NodeJS - MDN | Mozilla </a> </td>
                                        <td> Provides a file server built with pure Node.js without the use of a framework </td>
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

export default Node;

import React, { Component } from 'react';
import './App.css';

class Database extends Component {
    render() {
        return (
            <div className="database">
                <h1 className="text-success"><b>MongoDB</b></h1>
                <p className="text-secondary">Open-source document database  </p>
                <h5 className="text-dark"> MongoDB is leading NoSQL database written in C++.
                It uses JSON-like documents with schemata. </h5>
                <div className="links">
                    <h5 className="text-success"> Below links may help you learn mongoDB better </h5>
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
                                        <td> <a href="https://www.guru99.com/mongodb-tutorials.html" target="_blank" rel="noopener noreferrer"> guru99 - mongoDB tutorial </a> </td>
                                        <td> MongoDB tutorial for beginners </td>
                                    </tr>
                                    <tr>
                                        <th> 2 </th>
                                        <td> <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer"> MongoDB | For giant ideas </a> </td>
                                        <td> To download & install mongoDB on the system and has detailed documentation </td>
                                    </tr>
                                    <tr>
                                        <th> 3 </th>
                                        <td> <a href="https://docs.mongodb.com/manual/" target="_blank" rel="noopener noreferrer"> MongoDB Manual </a> </td>
                                        <td> documentation </td>
                                    </tr>
                                    <tr>
                                        <th> 4 </th>
                                        <td> <a href="https://www.w3schools.com/nodejs/nodejs_mongodb.asp" target="_blank" rel="noopener noreferrer"> W3 Schools - Node.js MongoDB</a> </td>
                                        <td> Covers all topics with example code and online editor </td>
                                    </tr>
                                    <tr>
                                        <th> 5 </th>
                                        <td> <a href="https://www.tutorialspoint.com/mongodb/" target="_blank" rel="noopener noreferrer"> Tutorial Point </a> </td>
                                        <td> Section wise description in detail with example queries for better understanding of its usage </td>
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

export default Database;

import React, { Component } from 'react';
import './App.css';
import preview from './preview.png';

class Database extends Component {
    render() {
        return (
            <div class="content">
                <h1 className="text-dark"><b>MongoDB</b></h1>
                <p className="text-secondary">Open-source document database  </p>
                <h5 className="text-dark"> MongoDB is leading NoSQL database written in C++.
                It uses JSON-like documents with schemata. </h5>
                <div className="links">
                    <h5 className="text-dark"> Below links may help you learn mongoDB better </h5>
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
                                        <td> guru99 - mongoDB tutorial </td>
                                        <td> MongoDB tutorial for beginners </td>
                                        <td align="center" > <a href="https://www.guru99.com/mongodb-tutorials.html" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                    </tr>
                                    <tr>
                                        <td> 2 </td>
                                        <td> MongoDB | For giant ideas </td>
                                        <td> To download & install mongoDB on the system and has detailed documentation </td>
                                        <td align="center" > <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                    </tr>
                                    <tr>
                                        <td> 3 </td>
                                        <td> MongoDB Manual </td>
                                        <td> documentation </td>
                                        <td align="center" > <a href="https://docs.mongodb.com/manual/" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                    </tr>
                                    <tr>
                                        <td> 4 </td>
                                        <td> W3 Schools - Node.js MongoDB </td>
                                        <td> Covers all topics with example code and online editor </td>
                                        <td align="center" > <a href="https://www.w3schools.com/nodejs/nodejs_mongodb.asp" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                    </tr>
                                    <tr>
                                        <td> 5 </td>
                                        <td> Tutorial Point </td>
                                        <td> Section wise description in detail with example queries for better understanding of its usage </td>
                                        <td align="center" > <a href="https://www.tutorialspoint.com/mongodb/" target="_blank" rel="noopener noreferrer">
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

export default Database;

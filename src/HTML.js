import React, { Component } from 'react';
import './App.css';

class HTML extends Component {
    render() {
        return (
            <div className="html">
                <h1 className="text-success"><b>HTML</b></h1>
                <p className="text-secondary">Markup language for creating Web pages</p>
                <h5 className="text-dark"> HTML is the foundation behind all web pages.
It's used to add structure and form to text, images, and more. </h5>
                <div className="links">
                    <h5 className="text-success"> Below links may help you learn HTML better </h5>
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
                                        <td> <a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer"> W3 Schools </a> </td>
                                        <td> Covers all topics with example code and online editor & questions for self evaluation </td>
                                    </tr>
                                    <tr>
                                        <th> 2 </th>
                                        <td> <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank" rel="noopener noreferrer"> MDN | Mozilla </a> </td>
                                        <td> Section wise description in detail that covers in and out about the topic </td>
                                    </tr>
                                    <tr>
                                        <th> 3 </th>
                                        <td> <a href="https://www.codecademy.com/learn/learn-html" target="_blank" rel="noopener noreferrer"> Codecademy </a> </td>
                                        <td> Gives real time scenarios and online editor to practice </td>
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

export default HTML;

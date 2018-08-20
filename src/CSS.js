import React, { Component } from 'react';
import './App.css';

class CSS extends Component {
    render() {
        return (
            <div className="css">
                <h1 className="text-success"><b>CSS</b></h1>
                <p className="text-secondary">Style sheet language </p>
                <h5 className="text-dark"> CSS describes the presentation of a document written in a markup language. </h5>
                <div className="links">
                    <h5 className="text-success"> Below links may help you learn CSS better </h5>
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
                                        <td> <a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer"> W3 Schools </a> </td>
                                        <td> Covers all topics with example code and online editor & questions for self evaluation </td>
                                    </tr>
                                    <tr className="text-primary">
                                        <th> 2 </th>
                                        <td> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3" target="_blank" rel="noopener noreferrer"> MDN | Mozilla </a> </td>
                                        <td> Section wise description in detail that covers in and out about the topic </td>
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

export default CSS;

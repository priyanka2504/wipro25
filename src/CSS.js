import React, { Component } from 'react';
import './App.css';
import preview from './preview.png';

class CSS extends Component {
    render() {
        return (
            <div class="content">
                <h1 className="text-dark"><b>CSS</b></h1>
                <p className="text-secondary">Style sheet language </p>
                <h5 className="text-dark"> CSS describes the presentation of a document written in a markup language. </h5>
                <div className="links">
                    <h5 class="text-dark"> Below links may help you learn CSS better </h5>

                    <div className="row">
                        <div className='col-md-10 order-md-5 mb-5'>
                            <div className="links">
                                <table className="table table-borderles table-stripped" >
                                    <thead align="center">
                                        <tr className="text-light bg-dark">
                                            <th> # </th>
                                            <th scope="col"> Title </th>
                                            <th scope="col"> Description </th>
                                            <th> </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> 1 </td>
                                            <td>  W3 Schools </td>
                                            <td> Covers all topics with example code and online editor & questions for self evaluation </td>
                                            <td align="center" > <a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 2 </td>
                                            <td>  MDN | Mozilla </td>
                                            <td> Section wise description in detail that covers in and out about the topic </td>
                                            <td align="center" > <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a> </td>
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

export default CSS;

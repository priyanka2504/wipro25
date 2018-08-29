import React, { Component } from 'react';
import './App.css';
import preview from './preview.png';

class HTML extends Component {
    render() {
        return (
            <div class="content">
                <h1 className="text-dark"><b>HTML</b></h1>
                <p className="text-secondary">Markup language for creating Web pages</p>
                <h5 className="text-dark"> HTML is the foundation behind all web pages.
It's used to add structure and form to text, images, and more. </h5>
                <div className="links">
                    <h5 className="text-dark"> Below links may help you learn HTML better </h5>
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
                                            <td align="center" className="table-borderless"> <a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 2 </td>
                                            <td>  MDN | Mozilla  </td>
                                            <td> Section wise description in detail that covers in and out about the topic </td>
                                            <td align="center" className="table-borderless"> <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 3 </td>
                                            <td>  Codecademy  </td>
                                            <td> Gives real time scenarios and online editor to practice </td>
                                            <td align="center" className="table-borderless"> <a href="https://www.codecademy.com/learn/learn-html" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <p>Footer</p>
                </div>

            </div>
        )
    }
}

export default HTML;

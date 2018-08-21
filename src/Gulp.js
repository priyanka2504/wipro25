import React, { Component } from 'react';
import './App.css';
import preview from './preview.png';

class Gulp extends Component {
    render() {
        return (
            <div className="gulp">
                <h1 className="text-dark"><b>Gulp</b></h1>
                <p className="text-secondary">JavaScript toolkit - Task Runner </p>
                <h5 className="text-dark"> Gulp is a task runner built on Node.js and npm, used for automation of time-consuming and repetitive tasks involved in web development. </h5>
                <div className="links">
                    <h5 className="text-dark"> Below links may help you learn Gulp better </h5>
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
                                            <td> GitHub documentation </td>
                                            <td> A complete documentation </td>
                                            <td align="center"> <a href="https://github.com/gulpjs/gulp/blob/v3.9.1/docs/API.md" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 2 </td>
                                            <td> Introduction to Gulp </td>
                                            <td> Detailed description </td>
                                            <td align="center" > <a href="https://www.sitepoint.com/introduction-gulp-js/" target="_blank" rel="noopener noreferrer">
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

export default Gulp;

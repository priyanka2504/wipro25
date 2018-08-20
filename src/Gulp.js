import React, { Component } from 'react';
import './App.css';

class Gulp extends Component {
    render() {
        return (
            <div className="gulp">
                <h1 className="text-success"><b>Gulp</b></h1>
                <p className="text-secondary">JavaScript toolkit - Task Runner </p>
                <h5 className="text-dark"> Gulp is a task runner built on Node.js and npm, used for automation of time-consuming and repetitive tasks involved in web development. </h5>
                <div className="links">
                    <h5 className="text-success"> Below links may help you learn Gulp better </h5>
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
                                        <td> <a href="https://github.com/gulpjs/gulp/blob/v3.9.1/docs/API.md" target="_blank" rel="noopener noreferrer"> GitHub documentation </a> </td>
                                        <td> A complete documentation </td>
                                    </tr>
                                    <tr className="text-primary">
                                        <th> 2 </th>
                                        <td> <a href="https://www.sitepoint.com/introduction-gulp-js/" target="_blank" rel="noopener noreferrer"> Introduction to Gulp </a> </td>
                                        <td> Detailed description </td>
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

export default Gulp;

import React, { Component } from 'react';
import './App.css';

class DebuggingTools extends Component {
    render() {
        return (
            <div className="devtools">
                <h1 className="text-success"><b> Chrome developer Tools </b></h1>
                <p className="text-secondary">Web development tool to test and debug code </p>
                <h5 className="text-dark"> Chrome DevTools is a set of web developer tools built directly into the Google Chrome browser. </h5>
                <div className="links">
                    <h5 className="text-success"> Below links may help you learn Chrome DevTools better </h5>
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
                                        <td> <a href="https://developers.google.com/web/tools/chrome-devtools/" target="_blank" rel="noopener noreferrer"> Chrome DevTools  </a> </td>
                                        <td> Detailed documentation </td>
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

export default DebuggingTools;

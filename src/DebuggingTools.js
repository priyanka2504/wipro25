import React, { Component } from 'react';
import './App.css';
import preview from './preview.png';

class DebuggingTools extends Component {
    render() {
        return (
            <div class="content">
                <h1 className="text-dark"><b> Chrome developer Tools </b></h1>
                <p className="text-secondary">Web development tool to test and debug code </p>
                <h5 className="text-dark"> Chrome DevTools is a set of web developer tools built directly into the Google Chrome browser. </h5>
                <div className="links">
                    <h5 className="text-dark"> Below links may help you learn Chrome DevTools better </h5>
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
                                            <td> Chrome DevTools </td>
                                            <td> Detailed documentation </td>
                                            <td align="center" > <a href="https://developers.google.com/web/tools/chrome-devtools/" target="_blank" rel="noopener noreferrer">
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

export default DebuggingTools;

import React, { Component } from 'react';
import './App.css';
import preview from './preview.png';

class CSS extends Component {
    render() {
        return (
            <div class="content">
                <h1 className="text-dark"><b>Coding Guidelines</b></h1>
                <p className="text-secondary">Set of Recommended Guidelines </p>
                {/* <h5 className="text-dark"> CSS describes the presentation of a document written in a markup language. </h5> */}
                <div className="links">
                    <h5 class="text-dark"> Below links may help you code better </h5>

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
                                            <td>  Code Guidelines for HTML & CSS </td>
                                            <td> HTML/CSS Style Guide </td>
                                            <td align="center" > <a href="https://google.github.io/styleguide/htmlcssguide.html" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 2 </td>
                                            <td>  Code Guidelines for JavaScript </td>
                                            <td> JavaScript Style Guide </td>
                                            <td align="center" > <a href="https://google.github.io/styleguide/jsguide.html" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a> </td>
                                        </tr>
                                        <tr>
                                            <td> 3 </td>
                                            <td>  Code Guidelines for CSS & SASS  </td>
                                            <td> Airbnb CSS / Sass Styleguide </td>
                                            <td align="center" > <a href="https://github.com/airbnb/css" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a> </td>
                                        </tr>
                                        <tr>
                                            <td> 4 </td>
                                            <td>  Code Guidelines for JavaScript  </td>
                                            <td> Airbnb JavaScript Style Guide </td>
                                            <td align="center" > <a href="https://github.com/airbnb/javascript" target="_blank" rel="noopener noreferrer">
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

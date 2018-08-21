import React, { Component } from 'react';
import './App.css';
import preview from './preview.png';

class Babel extends Component {
    render() {
        return (
            <div className="babel">
                <h1 className="text-dark"><b>Babel</b></h1>
                <p className="text-secondary"> Software </p>
                <h5 className="text-dark"> JavaScript compiler and configurable transpiler used in web development. </h5>
                <div className="links">
                    <h5 className="text-dark"> Below links may help you learn Babel better </h5>
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
                                            <td> Babel </td>
                                            <td> A complete documentation </td>
                                            <td align="center"> <a href="https://babeljs.io/docs/en" target="_blank" rel="noopener noreferrer">
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

export default Babel;

import React, { Component } from 'react';
import './App.css';

class Babel extends Component {
    render() {
        return (
            <div className="babel">
                <h1 className="text-success"><b>Babel</b></h1>
                <p className="text-secondary"> Software </p>
                <h5 className="text-dark"> JavaScript compiler and configurable transpiler used in web development. </h5>
                <div className="links">
                    <h5 className="text-success"> Below links may help you learn Babel better </h5>
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
                                        <td> <a href="https://babeljs.io/docs/en" target="_blank" rel="noopener noreferrer"> Babel </a> </td>
                                        <td> A complete documentation </td>
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

export default Babel;

import React, { Component } from 'react';
import './App.css';

class Reactstrap extends Component {
    render() {
        return (
            <div className="Reactstrap">
                <h1 className="text-success"><b>Reactstrap</b></h1>
                <p className="text-secondary">Front-end Framework  </p>
                <h5 className="text-dark"> Reactstrap - easy to use React Bootstrap 4 components compatible with React 0.14.x and 15. </h5>
                <div className="links">
                    <h5 className="text-success"> Below links may help you learn Reactstrap better </h5>
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
                                        <td> <a href="https://reactstrap.github.io/" target="_blank" rel="noopener noreferrer"> Reactstrap </a> </td>
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

export default Reactstrap;
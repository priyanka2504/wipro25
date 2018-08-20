import React, { Component } from 'react';
import './App.css';

class ReactBootstrap extends Component {
    render() {
        return (
            <div className="ReactBootstrap">
                <h1 className="text-success"><b>React Bootstrap</b></h1>
                <p className="text-secondary">Front-end Framework  </p>
                <h5 className="text-dark"> React-Bootstrap is a complete re-implementation of the Bootstrap components using React. </h5>
                <div className="links">
                    <h5 className="text-success"> Below links may help you learn React Bootstrap better </h5>
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
                                        <td> <a href="https://react-bootstrap.github.io/getting-started/introduction/" target="_blank" rel="noopener noreferrer"> React Bootstrap </a> </td>
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

export default ReactBootstrap;

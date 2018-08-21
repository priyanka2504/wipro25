import React, { Component } from 'react';
import './App.css';
import preview from './preview.png';

class ReactBootstrap extends Component {
    render() {
        return (
            <div className="ReactBootstrap">
                <h1 className="text-dark"><b>React Bootstrap</b></h1>
                <p className="text-secondary">Front-end Framework  </p>
                <h5 className="text-dark"> React-Bootstrap is a complete re-implementation of the Bootstrap components using React. </h5>
                <div className="links">
                    <h5 className="text-dark"> Below links may help you learn React Bootstrap better </h5>
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
                                        <td> React Bootstrap </td>
                                        <td> A complete documentation </td>
                                        <td align="center" className="table-borderless"> <a href="https://react-bootstrap.github.io/getting-started/introduction/" target="_blank" rel="noopener noreferrer"> 
                                        <img src={preview} alt="preview"  /> </a> 
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

export default ReactBootstrap;

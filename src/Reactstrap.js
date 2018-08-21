import React, { Component } from 'react';
import './App.css';
import preview from './preview.png';

class Reactstrap extends Component {
    render() {
        return (
            <div className="Reactstrap">
                <h1 className="text-dark"><b>Reactstrap</b></h1>
                <p className="text-secondary">Front-end Framework  </p>
                <h5 className="text-dark"> Reactstrap - easy to use React Bootstrap 4 components compatible with React 0.14.x and 15. </h5>
                <div className="links">
                    <h5 className="text-dark"> Below links may help you learn Reactstrap better </h5>
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
                                            <td> Reactstrap </td>
                                            <td> A complete documentation </td>
                                            <td align="center" className="table-borderless"> <a href="https://reactstrap.github.io/" target="_blank" rel="noopener noreferrer">
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

export default Reactstrap;
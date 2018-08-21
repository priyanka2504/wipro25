import React, { Component } from 'react';
import './App.css';
import preview from './preview.png';

class Bootstrap extends Component {
    render() {
        return (
            <div className="bootstrap">
                <h1 className="text-dark"><b>Bootstrap</b></h1>
                <p className="text-secondary">Front-end Framework  </p>
                <h5 className="text-dark"> Bootstrap is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites. </h5>
                <div className="links">
                    <h5 className="text-dark"> Below links may help you learn Bootstrap better </h5>
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
                                            <td> Bootstrap </td>
                                            <td> A complete documentation </td>
                                            <td align="center" > <a href="https://getbootstrap.com/docs/4.1/getting-started/introduction/" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 2 </td>
                                            <td> W3 Schools - B3 </td>
                                            <td> Tutorial for Bootstrap 3 </td>
                                            <td align="center" > <a href="https://www.w3schools.com/bootstrap/" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 3 </td>
                                            <td> W3 Schools - b4 </td>
                                            <td> Tutorial for Bootstrap 4 </td>
                                            <td align="center" > <a href="https://www.w3schools.com/bootstrap4/" target="_blank" rel="noopener noreferrer">
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

export default Bootstrap;
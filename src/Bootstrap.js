import React, { Component } from 'react';
import './App.css';

class Bootstrap extends Component {
    render() {
        return (
            <div className="bootstrap">
                <h1 className="text-success"><b>Bootstrap</b></h1>
                <p className="text-secondary">Front-end Framework  </p>
                <h5 className="text-dark"> Bootstrap is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites. </h5>
                <div className="links">
                    <h5 className="text-success"> Below links may help you learn Bootstrap better </h5>
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
                                        <td> <a href="https://getbootstrap.com/docs/4.1/getting-started/introduction/" target="_blank" rel="noopener noreferrer"> Bootstrap </a> </td>
                                        <td> A complete documentation </td>
                                    </tr>
                                    <tr>
                                        <th> 2 </th>
                                        <td> <a href="https://www.w3schools.com/bootstrap/" target="_blank" rel="noopener noreferrer"> W3 Schools - B3 </a> </td>
                                        <td> Tutorial for Bootstrap 3 </td>
                                    </tr>
                                    <tr>
                                        <th> 3 </th>
                                        <td> <a href="https://www.w3schools.com/bootstrap4/" target="_blank" rel="noopener noreferrer"> W3 Schools - b4 </a> </td>
                                        <td> Tutorial for Bootstrap 4 </td>
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

export default Bootstrap;
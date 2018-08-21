import React, { Component } from 'react';
import './App.css';
import preview from './preview.png';

class ReactJS extends Component {
    render() {
        return (
            <div className="reactjs">
                <h1 className="text-dark"><b>ReactJS</b></h1>
                <p className="text-secondary">JavaScript library for building user interfaces </p>
                <h5 className="text-dark"> React is a front-end library developed by Facebook.
It is used for handling the view layer for web and mobile apps and allows us to create reusable UI components. </h5>
                <div className="links">
                    <h5 className="text-dark"> Below links may help you learn ReactJS better </h5>
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
                                        <td> ReactJS </td>
                                        <td> A complete documentation and tutorial </td>
                                        <td align="center" > <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                    </tr>
                                    <tr>
                                        <td> 2 </td>
                                        <td> Tutorial Point </td>
                                        <td> Section wise description in detail that covers in and out about the topic </td>
                                        <td align="center" > <a href="https://www.tutorialspoint.com/reactjs/" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                    </tr>
                                    <tr>
                                        <td> 3 </td>
                                        <td> Medium </td>
                                        <td> Explaining states and props </td>
                                        <td align="center" > <a href="https://hackernoon.com/understanding-state-and-props-in-react-94bc09232b9c" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                    </tr>
                                    <tr>
                                        <td> 4 </td>
                                        <td> Programming with Mosh </td>
                                        <td> A very useful crash course </td>
                                        <td align="center" > <a href="https://www.youtube.com/watch?v=Ke90Tje7VS0" target="_blank" rel="noopener noreferrer">
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

export default ReactJS;
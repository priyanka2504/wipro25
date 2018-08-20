import React, { Component } from 'react';
import './App.css';

class ReactJS extends Component {
    render() {
        return (
            <div className="reactjs">
                <h1 className="text-success"><b>ReactJS</b></h1>
                <p className="text-secondary">JavaScript library for building user interfaces </p>
                <h5 className="text-dark"> React is a front-end library developed by Facebook.
It is used for handling the view layer for web and mobile apps and allows us to create reusable UI components. </h5>
                <div className="links">
                    <h5 className="text-success"> Below links may help you learn ReactJS better </h5>
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
                                        <td> <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"> ReactJS </a> </td>
                                        <td> A complete documentation and tutorial </td>
                                    </tr>
                                    <tr className="text-primary">
                                        <th> 2 </th>
                                        <td> <a href="https://www.tutorialspoint.com/reactjs/" target="_blank" rel="noopener noreferrer"> Tutorial Point </a> </td>
                                        <td> Section wise description in detail that covers in and out about the topic </td>
                                    </tr>
                                    <tr className="text-primary">
                                        <th> 3 </th>
                                        <td> <a href="https://hackernoon.com/understanding-state-and-props-in-react-94bc09232b9c" target="_blank" rel="noopener noreferrer"> Medium </a> </td>
                                        <td> Explaining states and props </td>
                                    </tr>
                                    <tr className="text-primary">
                                        <th> 4 </th>
                                        <td> <a href="https://www.youtube.com/watch?v=Ke90Tje7VS0" target="_blank" rel="noopener noreferrer"> Programming with Mosh </a> </td>
                                        <td> A very useful crash course </td>
                                    </tr>
                                    reactjs mosh
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReactJS;
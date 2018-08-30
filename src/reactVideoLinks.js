import React, { Component } from 'react';
import './App.css';
import preview from './preview.png';

class ReactVideo extends Component {
    render() {
        return (
            <div className="content">
                <h1 className="text-dark"><b>React JS</b></h1>
                <p className="text-secondary">React makes it painless to create interactive UIs.  </p>
                {/* <h5 className="text-dark"> Gulp is a task runner built on Node.js and npm, used for automation of time-consuming and repetitive tasks involved in web development. </h5> */}
                <div className="links">
                    <h5 className="text-dark">Following video tutorials will teach you React from basic to advanced. </h5>
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
                                            <td>  React JS </td>
                                            <td>covers basic concepts of React JS </td>
                                            <td align="center"> <a href="https://www.youtube.com/watch?v=Ke90Tje7VS0 " target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 2 </td>
                                            <td>Javascript for React developers </td>
                                            <td> Explains all the basic concepts</td>
                                            <td align="center" > <a href="https://www.youtube.com/watch?v=NCwa_xi0Uuc" target="_blank" rel="noopener noreferrer">
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

export default ReactVideo;

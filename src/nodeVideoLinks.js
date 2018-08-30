import React, { Component } from 'react';
import './App.css';
import preview from './preview.png';

class NodeVideo extends Component {
    render() {
        return (
            <div className="content">
                <h1 className="text-dark"><b>Node JS</b></h1>
                <p className="text-secondary">Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.  </p>
                {/* <h5 className="text-dark"> Gulp is a task runner built on Node.js and npm, used for automation of time-consuming and repetitive tasks involved in web development. </h5> */}
                <div className="links">
                    <h5 className="text-dark">Following video tutorials will teach you Node JS from basic to advanced. </h5>
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
                                            <td> Node JS tutorial for beginners </td>
                                            <td>Explains basic concepts of node js</td>
                                            <td align="center"> <a href="https://www.youtube.com/watch?v=TlB_eWDSMt4" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 2 </td>
                                            <td>Express.js Tutorial</td>
                                            <td> Building RESTful APIs with Node and Express</td>
                                            <td align="center" > <a href="https://www.youtube.com/watch?v=pKd0Rpw7O48" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 3</td>
                                            <td>What are RESTful Services (RESTful APIs)?</td>
                                            <td> concepts of RESTful Services</td>
                                            <td align="center" > <a href="https://www.youtube.com/watch?v=SLwpqD8n3d0" target="_blank" rel="noopener noreferrer">
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

export default NodeVideo;

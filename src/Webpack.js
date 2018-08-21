import React, { Component } from 'react';
import './App.css';
import preview from './preview.png';

class Webpack extends Component {
    render() {
        return (
            <div className="webpack">
                <h1 className="text-dark"><b>Webpack</b></h1>
                <p className="text-secondary">Module Bundler  </p>
                <h5 className="text-dark"> Webpack's main purpose is to bundle JavaScript files for usage in a browser,
yet it is also capable of transforming, bundling, or packaging just about any resource or asset. </h5>
                <div className="links">
                    <h5 className="text-dark"> Below links may help you learn Webpack better </h5>
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
                                            <td> Webpack </td>
                                            <td> A complete documentation </td>
                                            <td align="center"> <a href="https://webpack.js.org/concepts/" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 2 </td>
                                            <td> Medium </td>
                                            <td> Beginner's guide to Webpack </td>
                                            <td align="center"> <a href="https://medium.com/javascript-training/beginner-s-guide-to-webpack-b1f1a3638460" target="_blank" rel="noopener noreferrer">
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

export default Webpack;

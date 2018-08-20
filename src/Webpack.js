import React, { Component } from 'react';
import './App.css';

class Webpack extends Component {
    render() {
        return (
            <div className="webpack">
                <h1 className="text-success"><b>Webpack</b></h1>
                <p className="text-secondary">Module Bundler  </p>
                <h5 className="text-dark"> Webpack's main purpose is to bundle JavaScript files for usage in a browser,
yet it is also capable of transforming, bundling, or packaging just about any resource or asset. </h5>
                <div className="links">
                    <h5 className="text-success"> Below links may help you learn Webpack better </h5>
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
                                        <td> <a href="https://webpack.js.org/concepts/" target="_blank" rel="noopener noreferrer"> Webpack </a> </td>
                                        <td> A complete documentation </td>
                                    </tr>
                                    <tr className="text-primary">
                                        <th> 2 </th>
                                        <td> <a href="https://medium.com/javascript-training/beginner-s-guide-to-webpack-b1f1a3638460" target="_blank" rel="noopener noreferrer"> Medium </a> </td>
                                        <td> Beginner's guide to Webpack </td>
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

export default Webpack;

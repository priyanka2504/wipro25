import React, { Component } from 'react';
import './App.css';
import preview from './preview.png';

class PackageManager extends Component {
    render() {
        return (
            <div class="content">
                <h1 className="text-dark"><b>Node Package Manager (NPM)</b></h1>
                <p className="text-secondary">Package manager for the JavaScript programming language </p>
                <h5 className="text-dark"> NPM is a package manager for Node.js packages, or modules.
                A package in Node.js contains all the files you need for a module.
Modules are JavaScript libraries you can include in your project.</h5>
                <div className="links">
                    <h5 className="text-dark"> Below links may help you learn NPM better </h5>
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
                                            <td> NPM </td>
                                            <td> Detailed documentation </td>
                                            <td align="center" > <a href="https://docs.npmjs.com/getting-started/what-is-npm" target="_blank" rel="noopener noreferrer">
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

export default PackageManager;

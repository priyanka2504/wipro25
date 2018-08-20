import React, { Component } from 'react';
import './App.css';

class PackageManager extends Component {
    render() {
        return (
            <div className="pm">
                <h1 className="text-success"><b>Node Package Manager (NPM)</b></h1>
                <p className="text-secondary">Package manager for the JavaScript programming language </p>
                <h5 className="text-dark"> NPM is a package manager for Node.js packages, or modules.
                A package in Node.js contains all the files you need for a module.
Modules are JavaScript libraries you can include in your project.</h5>
                <div className="links">
                    <h5 className="text-success"> Below links may help you learn NPM better </h5>
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
                                        <td> <a href="https://docs.npmjs.com/getting-started/what-is-npm" target="_blank" rel="noopener noreferrer"> NPM </a> </td>
                                        <td> Detailed documentation </td>
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

export default PackageManager;

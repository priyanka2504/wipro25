import React, { Component } from 'react';
import './App.css';

class JavaScript extends Component {
    render() {
        return (
            <div className="javascript">
                <h1 className="text-success"><b>JavaScript</b></h1>
                <p className="text-secondary">To create interactive effects within web browsers</p>
                <h5 className="text-dark"> The new version of JavaScript is called as <b> ECMAScript 6 (ES6) </b> which has few enhanced
            features for better coding experience. </h5>
                <div className="links">
                    <h5 className="text-success"> Below links may help you learn JavaScript and ES6 better </h5>
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
                                        <td> <a href="https://www.w3schools.com/js/" target="_blank" rel="noopener noreferrer"> W3 Schools - JS</a> </td>
                                        <td> Covers all topics with example code and online editor & questions for self evaluation </td>
                                    </tr>
                                    <tr>
                                        <th> 2 </th>
                                        <td> <a href="https://developer.mozilla.org/bm/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"> MDN | Mozilla - JS</a> </td>
                                        <td> Detailed explanations for all concepts and mainly useful for understanding array methods </td>
                                    </tr>
                                    <tr>
                                        <th> 3 </th>
                                        <td> <a href="http://es6-features.org/#Constants" target="_blank" rel="noopener noreferrer"> ES6 Features </a> </td>
                                        <td> Explains features of ES6 </td>
                                    </tr>
                                    <tr>
                                        <th> 4 </th>
                                        <td> <a href="https://codeburst.io/es6-tutorial-for-beginners-5f3c4e7960be" target="_blank" rel="noopener noreferrer"> Codeburst ES6 </a> </td>
                                        <td> ES6 for beginners </td>
                                    </tr>
                                    <tr>
                                        <th> 5 </th>
                                        <td> <a href="https://github.com/jedrichards/es6" target="_blank" rel="noopener noreferrer"> GitHub documentation </a> </td>
                                        <td> Documentation with detailed examples </td>
                                    </tr>
                                    <tr>
                                        <th> 6 </th>
                                        <td> <a href="https://scotch.io/tutorials/javascript-promises-for-dummies" target="_blank" rel="noopener noreferrer"> JavaScript Promises for Dummies </a> </td>
                                        <td> Better understanding of Promises </td>
                                    </tr>
                                    <tr>
                                        <th> 7 </th>
                                        <td> <a href="https://codeburst.io/10-javascript-concepts-you-need-to-know-for-interviews-136df65ecce" target="_blank" rel="noopener noreferrer"> Codeburst </a> </td>
                                        <td> 10 Main Concepts of JS </td>
                                    </tr>
                                    <tr>
                                        <th> 8 </th>
                                        <td> <a href="http://javascriptissexy.com/16-javascript-concepts-you-must-know-well/" target="_blank" rel="noopener noreferrer"> JavaScript Is Sexy </a> </td>
                                        <td> 16 Main Concepts for JS professionals </td>
                                    </tr>
                                    <tr>
                                        <th> 9 </th>
                                        <td> <a href="https://github.com/typicode/jsonplaceholder" target="_blank" rel="noopener noreferrer"> JSON Placeholder </a> </td>
                                        <td> Usage of fetch methods </td>
                                    </tr>
                                    <tr>
                                        <th> 10 </th>
                                        <td> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import" target="_blank" rel="noopener noreferrer"> import MDN | Mozilla </a> </td>
                                        <td> A better understanding about importing </td>
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

export default JavaScript;

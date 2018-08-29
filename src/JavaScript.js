import React, { Component } from 'react';
import './App.css';
import preview from './preview.png';

class JavaScript extends Component {
    render() {
        return (
            <div class="content">
                <h1 className="text-dark"><b>JavaScript</b></h1>
                <p className="text-secondary">To create interactive effects within web browsers</p>
                <h5 className="text-dark"> The new version of JavaScript is called as <b> ECMAScript 6 (ES6) </b> which has few enhanced
            features for better coding experience. </h5>
                <div className="links">
                    <h5 className="text-dark"> Below links may help you learn JavaScript and ES6 better </h5>
                    <div className="row">
                        <div className='col-md-10 order-md-5 mb-5'>
                            <div className="links">
                                <table className="table table-borderles table-stripped" >
                                    <thead align="center">
                                        <tr className="text-light bg-dark">
                                            <th> # </th>
                                            <th scope="col"> Title </th>
                                            <th scope="col"> Description </th>
                                            <th> </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> 1 </td>
                                            <td> W3 Schools - JS </td>
                                            <td> Covers all topics with example code and online editor & questions for self evaluation </td>
                                            <td align="center" className="table-borderless"> <a href="https://www.w3schools.com/js/" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 2 </td>
                                            <td> MDN | Mozilla - JS </td>
                                            <td> Detailed explanations for all concepts and mainly useful for understanding array methods </td>
                                            <td align="center" className="table-borderless"> <a href="https://developer.mozilla.org/bm/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 3 </td>
                                            <td> ES6 Features </td>
                                            <td> Explains features of ES6 </td>
                                            <td align="center" > <a href="http://es6-features.org/#Constants" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td> </tr>
                                        <tr>
                                            <td> 4 </td>
                                            <td> Codeburst ES6 </td>
                                            <td> ES6 for beginners </td>
                                            <td align="center" > <a href="https://codeburst.io/es6-tutorial-for-beginners-5f3c4e7960be" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 5 </td>
                                            <td> GitHub documentation </td>
                                            <td> Documentation with detailed examples </td>
                                            <td align="center" > <a href="https://github.com/jedrichards/es6" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 6 </td>
                                            <td> JavaScript Promises for Dummies </td>
                                            <td> Better understanding of Promises </td>
                                            <td align="center" > <a href="https://scotch.io/tutorials/javascript-promises-for-dummies" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 7 </td>
                                            <td> Codeburst </td>
                                            <td> 10 Main Concepts of JS </td>
                                            <td align="center" > <a href="https://codeburst.io/10-javascript-concepts-you-need-to-know-for-interviews-136df65ecce" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 8 </td>
                                            <td> JavaScript Is Sexy </td>
                                            <td> 16 Main Concepts for JS professionals </td>
                                            <td align="center" > <a href="http://javascriptissexy.com/16-javascript-concepts-you-must-know-well/" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 9 </td>
                                            <td> JSON Placeholder </td>
                                            <td> Usage of fetch methods </td>
                                            <td align="center" > <a href="https://github.com/typicode/jsonplaceholder" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 10 </td>
                                            <td> import MDN | Mozilla </td>
                                            <td> A better understanding about importing </td>
                                            <td align="center" > <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import" target="_blank" rel="noopener noreferrer">
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

export default JavaScript;

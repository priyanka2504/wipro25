import React, { Component } from 'react';
import './App.css';
import preview from './preview.png';

class JsVideo extends Component {
    render() {
        return (
            <div className="gulp">
                <h1 className="text-dark"><b>Javascript</b></h1>
                <p className="text-secondary">Javascript is a most common scripting language  </p>
                {/* <h5 className="text-dark"> Gulp is a task runner built on Node.js and npm, used for automation of time-consuming and repetitive tasks involved in web development. </h5> */}
                <div className="links">
                    <h5 className="text-dark">Following video tutorials will teach you JavaScript from basic to advanced. </h5>
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
                                            <td>  Javascript for Beginners </td>
                                            <td>covers basic concepts of JavaScript </td>
                                            <td align="center"> <a href="https://www.youtube.com/watch?v=W6NZfCO5SIk " target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 2 </td>
                                            <td> Javascript Array Map </td>
                                            <td> Explains the features of map method</td>
                                            <td align="center" > <a href="https://www.youtube.com/watch?v=G3BS3sh3D8Q" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td> JavaScript Array Reduce</td>
                                            <td>Explains the features of Reduce method</td>
                                            <td align="center" > <a href="https://www.youtube.com/watch?v=g1C40tDP0Bk " target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 4 </td>
                                            <td> JavaScript this Keyword </td>
                                            <td> Gives a closer look at this keywork in Javascript</td>
                                            <td align="center" > <a href="https://www.youtube.com/watch?v=gvicrj31JOM" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 5 </td>
                                            <td> JavaScript Getters and Setters</td>
                                            <td> Detailed explaination about special methods called getters and setters</td>
                                            <td align="center" > <a href="https://www.youtube.com/watch?v=bl98dm7vJt0" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 6 </td>
                                            <td>JavaScript Let vs Var vs Constant</td>
                                            <td> Gives you the difference between let, var and const </td>
                                            <td align="center" > <a href="https://www.youtube.com/watch?v=XgSjoHgy3Rk" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 7</td>
                                            <td>JavaScript Loops</td>
                                            <td>Detailed explaination about looping concepts in JavaScript </td>
                                            <td align="center" > <a href="https://www.youtube.com/watch?v=s9wW2PpJsmQ " target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 8</td>
                                            <td>JavaScript Bitwise Operators</td>
                                            <td>Detailed explaination about bitwise operations in JavaScript</td>
                                            <td align="center" > <a href="https://www.youtube.com/watch?v=mesu75PTDC8 " target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 9</td>
                                            <td>JavaScript Factory Functions</td>
                                            <td>Clear explaination on how and where to use Factory functions</td>
                                            <td align="center" > <a href="https://www.youtube.com/watch?v=jpegXpQpb3o" target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 10</td>
                                            <td>JavaScript Constructor Functions</td>
                                            <td>Clear explaination on how and where to use Constructor functions</td>
                                            <td align="center" > <a href="https://www.youtube.com/watch?v=23AOrSN-wmI " target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 11</td>
                                            <td> Value Types and Reference Types in JavaScript</td>
                                            <td>Explaination on values and Reference types</td>
                                            <td align="center" > <a href="https://www.youtube.com/watch?v=e-_mDyqm2oU  " target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 12</td>
                                            <td>  Javascript Tutorial | Primitive Data Types | Ep6</td>
                                            <td>explains the concept of Primitive data type</td>
                                            <td align="center" > <a href="https://www.youtube.com/watch?v=qw3j0A3DIzQ   " target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 13</td>
                                            <td>Object-oriented Programming (short)</td>
                                            <td>explains the concept of object oriented Programming</td>
                                            <td align="center" > <a href="https://www.youtube.com/watch?v=pTB0EiLXUC8   " target="_blank" rel="noopener noreferrer">
                                                <img src={preview} alt="preview" /> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 14</td>
                                            <td> Object-oriented Programming in JavaScript: Made Super Simple</td>
                                            <td>Detailed explaination about object oriented Programming in JavaScript</td>
                                            <td align="center" > <a href="https://www.youtube.com/watch?v=PFmuCDHHpwk  " target="_blank" rel="noopener noreferrer">
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

export default JsVideo;

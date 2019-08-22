import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Spring } from 'react-spring/renderprops';

import { FaLinkedin, FaGithubSquare, FaEnvelope } from 'react-icons/fa';

export default class Header extends Component {
    render() {
        return (
             <section id="header">&nbsp;
                <Spring
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                    config={{delay: 300 }}
                >
                    {props => (
                        <div className="container" style={props}>
                            <div className="w-100">
                                <h1 className="heading">
                                    <div className="card p-3 d-inline-block">
                                        <span className="font-weight-bold">Hi, I'm Peter.</span>
                                    </div>
                                </h1>
                                <div className="card col-md-10 p-md-3 p-1 ml-md-3 d-inline-block header-szoveg">
                                    <p className="col-md-10 px-0 ">I am a Web developer with experience designing and building websites and web applications.</p>
                                </div>
                            </div>
                            
                            <div className="card header-linkek float-right mt-4 d-inline-block py-2 px-5 lead">
                                <div className="d-flex flex-row justify-content-between">
                                    <span><a href="#"><FaEnvelope /></a></span>
                                    <span>
                                        <a target="_blank" href="https://www.linkedin.com/in/kovacs-peter"><FaLinkedin /></a>
                                    </span>
                                    <span>
                                        <a target="_blank" href="https://github.com/Atr0p"><FaGithubSquare /></a>
                                    </span>
                                </div>
                                
                            </div>

                        
                        </div>
                        )}
                    </Spring>
                
                
            </section>
        )
    }
}
//Átírni staticQueryre
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
                            <h1 className="heading display-3">Hi, I'm Peter.</h1>
                            <p className="lead col-7 px-0">I am a Web developer with experience designing and building websites and web applications.</p>
                            <div className="lead pl-1">
                                <span className="my-2 mr-2"><a href="#"><FaEnvelope /></a></span>
                                <span className="m-2">
                                    <a target="_blank" href="https://www.linkedin.com/in/kovacs-peter"><FaLinkedin /></a>
                                    </span>
                                <span className="m-2">
                                    <a target="_blank" href="https://github.com/Atr0p"><FaGithubSquare /></a>
                                </span>
                            </div>
                        </div>
                        )}
                    </Spring>
                
                
            </section>
        )
    }
}
//Átírni staticQueryre